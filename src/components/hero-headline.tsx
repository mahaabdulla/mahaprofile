'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { copy, type Lang } from '@/lib/content';
import { claimHeroSession } from '@/lib/hero-session.mjs';
import { HeroTransformation } from './hero-transformation';
import { useMotion } from './motion';

export function HeroHeadline({lang}:{lang:Lang}){
 const root=useRef<HTMLDivElement>(null);const escapePaused=useRef(false);const [phase,setPhase]=useState(0);const [ready,setReady]=useState(false);
 const [visible,setVisible]=useState(true);const [onScreen,setOnScreen]=useState(true);const [paused,setPaused]=useState(false);
 const {reduced}=useMotion();const phrases=copy.heroPhrases[lang];

 useEffect(()=>{
  const documentRoot=document.documentElement;const query=matchMedia('(prefers-reduced-motion: reduce)');
  let elapsed=0;let play=documentRoot.dataset.heroEntry==='pending';
  if(play)elapsed=performance.now()-Number(documentRoot.dataset.heroStarted);
  else if(!location.hash){try{play=claimHeroSession(sessionStorage,query.matches);}catch{play=false;}}
  if(query.matches||!play||elapsed>2600){documentRoot.dataset.heroEntry='complete';setReady(true);return;}
  let finished=false;let timeline:gsap.core.Timeline|undefined;let ctx:gsap.Context|undefined;let deadline:ReturnType<typeof setTimeout>|undefined;
  const finish=()=>{if(finished)return;finished=true;documentRoot.dataset.heroEntry='complete';timeline?.kill();ctx?.revert();if(deadline)clearTimeout(deadline);window.removeEventListener('wheel',finish);window.removeEventListener('pointerdown',finish,true);window.removeEventListener('keydown',finish,true);window.removeEventListener('maha:hero-ready',finish);query.removeEventListener('change',finish);setReady(true);};
  try{
   ctx=gsap.context(()=>{
    gsap.set('.hero-transform-art',{autoAlpha:1});gsap.set('.hero-first>span,.hero-rotator-inner',{yPercent:112,autoAlpha:0});
    gsap.set('.hero-idea-spark',{scale:0,opacity:0,transformOrigin:'center'});gsap.set('.hero-drafting path',{strokeDasharray:1,strokeDashoffset:1});
    gsap.set('.hero-product-shell',{attr:{x:319,y:169,width:2,height:2},opacity:0,fill:'#111114',scaleX:1,scaleY:1});
    gsap.set('.hero-ui-wire,.hero-ui-top,.hero-ui-mid,.hero-ui-low',{opacity:0});
    timeline=gsap.timeline({paused:true,onComplete:finish})
     .to('.hero-idea-spark',{scale:1,opacity:1,duration:.18,ease:'power2.out'},0)
     .to('.hero-drafting path',{strokeDashoffset:0,duration:.35,stagger:.035,ease:'power2.inOut'},.1)
     .to('.hero-product-shell',{attr:{x:190,y:48,width:260,height:248},opacity:1,duration:.55,ease:'power3.inOut'},.27)
     .to('.hero-idea-spark',{opacity:0,duration:.18},.46)
     .to('.hero-ui-wire',{opacity:1,duration:.3},.56)
     .to('.hero-drafting',{opacity:0,duration:.2},.72)
     .to('.hero-product-shell',{fill:'#f1f0eb',stroke:'#b6aecb',duration:.32},.92)
     .to('.hero-ui-wire',{stroke:'#c4becf',duration:.32},.92)
     .to('.hero-ui-top,.hero-ui-mid,.hero-ui-low',{opacity:1,duration:.28,stagger:.035},.98)
     .to('.hero-ui-top',{x:-90,y:-45,rotation:-5,opacity:0,duration:.42,ease:'power3.inOut'},1.45)
     .to('.hero-ui-mid',{x:120,y:10,opacity:0,duration:.42,ease:'power3.inOut'},1.5)
     .to('.hero-ui-low',{x:-80,y:50,opacity:0,duration:.42,ease:'power3.inOut'},1.55)
     .to('.hero-ui-wire',{opacity:0,scaleX:1.2,duration:.3},1.5)
     .to('.hero-product-shell',{scaleX:1.6,scaleY:.02,opacity:0,transformOrigin:'center',duration:.4,ease:'power3.inOut'},1.55)
     .to('.hero-first>span',{yPercent:0,autoAlpha:1,duration:.55,ease:'power3.out'},1.65)
     .to('.hero-rotator-inner',{yPercent:0,autoAlpha:1,duration:.55,ease:'power3.out'},1.85)
     .to('.hero-transform-art',{autoAlpha:0,duration:.15},2.3);
   },root);
   documentRoot.dataset.heroEntry='playing';timeline?.time(elapsed/1000).play();deadline=setTimeout(finish,Math.max(0,2800-elapsed));
   window.addEventListener('wheel',finish,{once:true,passive:true});window.addEventListener('pointerdown',finish,{once:true,capture:true});window.addEventListener('keydown',finish,{once:true,capture:true});window.addEventListener('maha:hero-ready',finish,{once:true});query.addEventListener('change',finish,{once:true});
  }catch{finish();}
  return finish;
 },[lang]);

 useEffect(()=>{
  const visibility=()=>setVisible(!document.hidden);visibility();document.addEventListener('visibilitychange',visibility);
  const observer=new IntersectionObserver(([entry])=>setOnScreen(entry.isIntersecting),{threshold:.15});if(root.current)observer.observe(root.current);
  const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){escapePaused.current=true;setPaused(true);}};window.addEventListener('keydown',escape);
  return()=>{document.removeEventListener('visibilitychange',visibility);window.removeEventListener('keydown',escape);observer.disconnect();};
 },[]);

 useEffect(()=>{
  if(reduced||matchMedia('(prefers-reduced-motion: reduce)').matches){setPhase(0);return;}
  if(!ready||paused||!visible||!onScreen)return;
  const elements=root.current?.querySelectorAll<HTMLElement>('.hero-phrase');if(!elements)return;
  const next=(phase+1)%phrases.length;let transition:gsap.core.Timeline|undefined;let wait:gsap.core.Tween|undefined;
  const ctx=gsap.context(()=>{gsap.set(elements,{yPercent:0,autoAlpha:0});gsap.set(elements[phase],{autoAlpha:1});wait=gsap.delayedCall(3.5,()=>{transition=gsap.timeline({onComplete:()=>setPhase(next)})
   .to(elements[phase],{yPercent:-112,autoAlpha:0,duration:.38,ease:'power3.inOut'},0)
   .fromTo(elements[next],{yPercent:112,autoAlpha:1},{yPercent:0,autoAlpha:1,duration:.46,ease:'power3.inOut'},.04);});},root);
  return()=>{wait?.kill();transition?.kill();ctx.revert();};
 },[lang,onScreen,paused,phase,phrases,ready,reduced,visible]);

 return <div className="hero-headline signature-hero" ref={root} data-phrase={phase} onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>{if(!escapePaused.current)setPaused(false);}} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>{if(!escapePaused.current)setPaused(false);}}>
  <HeroTransformation lang={lang}/>
  <h1 className="hero-signature-heading" aria-label={`${copy.hero[lang][0]} ${phrases[0]}`} aria-describedby="hero-motion-help"><span className="hero-line hero-first"><span>{copy.hero[lang][0]}</span></span><span className="hero-line second-line"><span className="hero-rotator-inner" aria-hidden="true">{phrases.map((phrase,i)=><span className="hero-phrase" data-active={phase===i?'':undefined} key={phrase}>{phrase}</span>)}</span></span></h1>
  <span id="hero-motion-help" className="sr-only">{lang==='ar'?'يمكنك إيقاف تبديل العنوان بمفتاح Escape، أو تقليل الحركة من إعدادات الجهاز.':'Press Escape to pause the changing headline, or use your system’s reduced-motion setting.'}</span>
 </div>;
}
