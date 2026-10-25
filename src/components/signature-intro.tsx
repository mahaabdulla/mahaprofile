'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { Lang } from '@/lib/content';
import { claimIntroSession } from '@/lib/intro-session.mjs';

const orbit='M92 256 C92 219 165 189 256 189 C347 189 420 219 420 256 C420 293 347 323 256 323 C165 323 92 293 92 256';
const geometry=[
 'M132 176 C132 176 380 176 380 176 C380 176 380 336 380 336 C380 336 132 336 132 336 C132 336 132 176 132 176',
 'M157 202 C157 202 222 202 222 202 C222 202 222 310 222 310 C222 310 157 310 157 310 C157 310 157 202 157 202',
 'M244 202 C244 202 355 202 355 202 C355 202 355 262 355 262 C355 262 244 262 244 262 C244 262 244 202 244 202',
];

/** Decorative, fail-open introduction. The document is never locked or made inert. */
export function SignatureIntro({lang}:{lang:Lang}){
 const root=useRef<HTMLDivElement>(null);const dismiss=useRef<()=>void>(()=>{});
 useEffect(()=>{
  const element=root.current;if(!element)return;
  // Unavailable session storage means skip the optional animation entirely.
  const motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
  if(document.documentElement.dataset.intro==='pending'&&performance.now()-Number(document.documentElement.dataset.introStart)>300)return;
  const suppressed=['expired','cancelled','complete'].includes(document.documentElement.dataset.intro??'');
  try{if(!claimIntroSession(sessionStorage,suppressed||motionQuery.matches))return;}catch{return;}
  let finished=false;let timer:ReturnType<typeof setTimeout>|undefined;let timeline:gsap.core.Timeline|undefined;let context:gsap.Context|undefined;
  const finish=()=>{
   if(finished)return;finished=true;timeline?.kill();if(timer)clearTimeout(timer);
   const focused=element.contains(document.activeElement);element.hidden=true;
   document.documentElement.dataset.intro='done';
   window.removeEventListener('pointerdown',finish,true);window.removeEventListener('keydown',finish,true);window.removeEventListener('wheel',finish);motionQuery.removeEventListener('change',finish);window.removeEventListener('pagehide',finish);
   if(focused)document.querySelector<HTMLAnchorElement>('.skip-link')?.focus({preventScroll:true});
   window.dispatchEvent(new Event('maha:intro-end'));
  };
  dismiss.current=finish;
  try{
   context=gsap.context(()=>{
    gsap.set('.intro-spark',{scale:0,opacity:0,rotation:45,transformOrigin:'center'});
    gsap.set('.intro-orbit',{strokeDasharray:1,strokeDashoffset:1,transformOrigin:'256px 256px'});
    gsap.set('.intro-letter',{yPercent:110,opacity:0});gsap.set('.intro-caption',{opacity:0,y:7});gsap.set('.intro-period',{opacity:0,scale:0});
    timeline=gsap.timeline({paused:true,onComplete:finish});
    timeline.to('.intro-spark',{scale:1,opacity:1,duration:.28,ease:'back.out(1.5)'},0)
     .to('.intro-orbit',{strokeDashoffset:0,duration:.5,stagger:.07,ease:'power2.inOut'},.13)
     .to('.intro-spark',{scale:.55,duration:.35,ease:'power2.inOut'},.7);
    geometry.forEach((d,index)=>timeline?.to(`.intro-orbit-${index}`,{attr:{d},rotation:0,duration:.48,ease:'power3.inOut'},.72));
    timeline.to('.intro-geometry',{scale:.82,y:-20,opacity:0,duration:.4,transformOrigin:'center',ease:'power2.in'},1.05)
     .to('.intro-letter',{yPercent:0,opacity:1,duration:.52,stagger:.055,ease:'power3.out'},1.04)
     .to('.intro-period',{opacity:1,scale:1,duration:.3,ease:'power2.out'},1.36)
     .to('.intro-caption',{opacity:1,y:0,duration:.3,ease:'power2.out'},1.4)
     .call(()=>{document.documentElement.dataset.introReveal='ready';window.dispatchEvent(new Event('maha:intro-end'));},undefined,1.92)
     .to(element,{clipPath:'inset(0% 0% 100% 0%)',duration:.58,ease:'power3.inOut'},1.94);
   },element);
   document.documentElement.dataset.intro='playing';element.hidden=false;window.dispatchEvent(new Event('maha:intro-start'));
   // A hard deadline complements the independent CSS escape hatch.
   timer=setTimeout(finish,3000);
   window.addEventListener('pointerdown',finish,{capture:true,once:true});window.addEventListener('keydown',finish,{capture:true,once:true});window.addEventListener('wheel',finish,{passive:true,once:true});window.addEventListener('pagehide',finish,{once:true});motionQuery.addEventListener('change',finish,{once:true});
   timeline?.play();
  }catch{finish();}
  return()=>{finish();context?.revert();dismiss.current=()=>{};};
 },[]);
 return <div className="signature-intro" hidden ref={root} data-signature-intro>
  <div className="intro-art" aria-hidden="true">
   <div className="intro-topline mono"><span>MAHA / 01</span><span>FROM ZERO TO CREATION</span></div>
   <div className="intro-center">
    <svg className="intro-geometry" viewBox="0 0 512 512" fill="none"><g stroke="currentColor" strokeWidth="1"><path className="intro-orbit intro-orbit-0" pathLength="1" d={orbit} transform="rotate(-35 256 256)"/><path className="intro-orbit intro-orbit-1" pathLength="1" d={orbit} transform="rotate(35 256 256)"/><path className="intro-orbit intro-orbit-2" pathLength="1" d={orbit} transform="rotate(90 256 256)"/></g><rect className="intro-spark" x="251" y="251" width="10" height="10" fill="currentColor"/></svg>
    <div className="intro-wordmark" dir="ltr">{[...'MAHA'].map((letter,index)=><span className="intro-letter-mask" key={index}><span className="intro-letter">{letter}</span></span>)}<span className="intro-period">.</span></div>
    <p className="intro-caption">{lang==='ar'?'من فكرة، يبدأ كل شيء':'Everything begins with an idea'}</p>
   </div>
   <span className="intro-bottom mono">IDEA → STRUCTURE → CREATION</span>
  </div>
  <button className="intro-skip" onClick={()=>dismiss.current()}>{lang==='ar'?'تجاوز المقدمة':'Skip intro'}<span aria-hidden="true">↗</span></button>
 </div>;
}
