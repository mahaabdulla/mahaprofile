import test from 'node:test';
import assert from 'node:assert/strict';
import {claimIntroSession,INTRO_SESSION_KEY} from '../src/lib/intro-session.mjs';
import { INTRO_BOOTSTRAP } from '../src/lib/intro-session.mjs';
import vm from 'node:vm';
const session=()=>{const values=new Map();return {getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value)};};
test('first visit plays once; reload and route changes in the same session skip',()=>{
 const storage=session();assert.equal(claimIntroSession(storage,false),true);assert.equal(storage.getItem(INTRO_SESSION_KEY),'seen');assert.equal(claimIntroSession(storage,false),false);assert.equal(claimIntroSession(storage,false),false);
});
test('a fresh browser tab session may play its first introduction',()=>{
 assert.equal(claimIntroSession(session(),false),true);assert.equal(claimIntroSession(session(),false),true);
});
test('reduced motion skips animation and records the visit without replaying later',()=>{
 const storage=session();assert.equal(claimIntroSession(storage,true),false);assert.equal(claimIntroSession(storage,false),false);
});
test('denied storage reads do not block the document or start the intro',()=>{
 assert.equal(claimIntroSession({getItem(){throw Error('denied');},setItem(){}},false),false);
});
test('denied storage writes fail open instead of replaying on every route',()=>{
 assert.equal(claimIntroSession({getItem(){return null;},setItem(){throw Error('quota');}},false),false);
});

function browser({reduced=false,denied=false}={}){
 const storage=session();const events=new Map();let deadline;
 const context={document:{documentElement:{dataset:{}}},sessionStorage:denied?{getItem(){throw Error('denied');}}:storage,matchMedia:()=>({matches:reduced}),setTimeout:fn=>{deadline=fn;return 1;},clearTimeout:()=>{},performance:{now:()=>0},Event:class{constructor(type){this.type=type;}},window:{dispatchEvent:()=>{},addEventListener:(name,fn)=>events.set(name,fn),removeEventListener:name=>events.delete(name)}};
 vm.runInNewContext(INTRO_BOOTSTRAP,context);
 return {state:context.document.documentElement.dataset,storage,expire:()=>deadline?.(),events};
}
test('CSS introduction completes even if the application never hydrates',()=>{
 const b=browser();assert.equal(b.state.intro,'pending');b.expire();assert.equal(b.state.intro,'complete');assert.equal(b.storage.getItem(INTRO_SESSION_KEY),'seen');
});
test('pre-paint enhancement can be cancelled immediately by keyboard input',()=>{
 const b=browser();b.events.get('keydown')();assert.equal(b.state.intro,'cancelled');assert.equal(b.storage.getItem(INTRO_SESSION_KEY),'seen');assert.equal(b.events.size,0);
});
test('reduced motion and inaccessible storage never activate the pre-paint cover',()=>{
 assert.equal(browser({reduced:true}).state.intro,undefined);assert.equal(browser({denied:true}).state.intro,undefined);
});
