import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { claimHeroSession, HERO_SESSION_KEY, HERO_BOOTSTRAP } from '../src/lib/hero-session.mjs';
import { keyStep, swipeStep, wrapSlide } from '../src/lib/gallery-direction.mjs';

const session=()=>{const values=new Map();return {getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value)};};
test('a first entry claims its session; reload and internal navigation skip',()=>{
 const storage=session();assert.equal(claimHeroSession(storage,false),true);assert.equal(storage.getItem(HERO_SESSION_KEY),'seen');assert.equal(claimHeroSession(storage,false),false);
 assert.equal(claimHeroSession(session(),false),true);
});
test('reduced motion records a static visit without replaying later',()=>{
 const storage=session();assert.equal(claimHeroSession(storage,true),false);assert.equal(claimHeroSession(storage,false),false);
});
test('storage failures leave the site readable and skip optional animation',()=>{
 assert.equal(claimHeroSession({getItem(){throw Error('denied');},setItem(){}},false),false);
 assert.equal(claimHeroSession({getItem(){return null;},setItem(){throw Error('quota');}},false),false);
});

function browser({path='/ar/',hash='',reduced=false,denied=false,seen=false}={}){
 const storage=session();if(seen)storage.setItem(HERO_SESSION_KEY,'seen');const events=new Map();const dispatched=[];let deadline;
 const context={location:{pathname:path,hash},document:{documentElement:{dataset:{}}},sessionStorage:denied?{getItem(){throw Error('denied');}}:storage,matchMedia:()=>({matches:reduced}),setTimeout:fn=>{deadline=fn;return 1;},clearTimeout:()=>{},performance:{now:()=>120},Event:class{constructor(type){this.type=type;}},window:{dispatchEvent:event=>dispatched.push(event.type),addEventListener:(name,fn)=>events.set(name,fn),removeEventListener:name=>events.delete(name)}};
 vm.runInNewContext(HERO_BOOTSTRAP,context);
 return {state:context.document.documentElement.dataset,storage,expire:()=>deadline?.(),events,dispatched};
}
test('pre-paint sequence fails open on its independent deadline without hydration',()=>{
 const b=browser();assert.equal(b.state.heroEntry,'pending');b.expire();assert.equal(b.state.heroEntry,'complete');assert.equal(b.storage.getItem(HERO_SESSION_KEY),'seen');assert.equal(b.events.size,0);assert.deepEqual(b.dispatched,['maha:hero-ready']);
});
test('wheel, pointer, and keyboard immediately cancel the optional sequence',()=>{
 for(const action of ['wheel','pointerdown','keydown']){const b=browser();b.events.get(action)();assert.equal(b.state.heroEntry,'complete');assert.equal(b.events.size,0);}
});
test('clean home pages play; deep links, routes, seen visits, and reduced motion skip',()=>{
 for(const path of ['/','/ar/','/en/'])assert.equal(browser({path}).state.heroEntry,'pending');
 for(const options of [{path:'/ar/work/'},{hash:'#selected'},{reduced:true},{denied:true},{seen:true}])assert.equal(browser(options).state.heroEntry,undefined);
});
test('keyboard navigation follows physical direction in RTL and LTR',()=>{
 assert.equal(keyStep('ArrowRight','en'),1);assert.equal(keyStep('ArrowLeft','en'),-1);
 assert.equal(keyStep('ArrowRight','ar'),-1);assert.equal(keyStep('ArrowLeft','ar'),1);assert.equal(keyStep('Escape','ar'),0);
});
test('horizontal swipes follow reading direction while vertical scrolling is preserved',()=>{
 assert.equal(swipeStep(-80,5,'en'),1);assert.equal(swipeStep(80,5,'en'),-1);
 assert.equal(swipeStep(-80,5,'ar'),-1);assert.equal(swipeStep(80,5,'ar'),1);
 for(const [x,y] of [[20,0],[50,70],[60,50],[0,90]])assert.equal(swipeStep(x,y,'ar'),0);
});
test('intentional loops wrap in both directions and tolerate one or no images',()=>{
 assert.equal(wrapSlide(1,1,2),0);assert.equal(wrapSlide(0,-1,2),1);assert.equal(wrapSlide(0,1,1),0);assert.equal(wrapSlide(0,-1,0),0);
});
