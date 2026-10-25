'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import type { Lang } from '@/lib/content';
const MotionContext=createContext({reduced:false,toggle:()=>{}});
export const useMotion=()=>useContext(MotionContext);
export function MotionProvider({children}:{children:React.ReactNode}){
 const [system,setSystem]=useState(false);const [override,setOverride]=useState<boolean|null>(null);const reduced=override??system;
 useEffect(()=>{const query=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setSystem(query.matches);sync();query.addEventListener('change',sync);return()=>query.removeEventListener('change',sync);},[]);
 useEffect(()=>{document.documentElement.dataset.motion=reduced?'reduce':'full';return()=>{delete document.documentElement.dataset.motion;};},[reduced]);
 return <MotionContext.Provider value={{reduced,toggle:()=>setOverride(value=>!(value??system))}}>{children}</MotionContext.Provider>;
}
export function MotionToggle({lang}:{lang:Lang}){const {reduced,toggle}=useMotion();return <button className="motion-toggle" onClick={toggle} aria-pressed={reduced}><span aria-hidden="true">{reduced?'◼':'◌'}</span>{lang==='ar'?'تقليل الحركة':'Reduce motion'}</button>;}
export function MotionRoot(){
 const path=usePathname();const {reduced}=useMotion();const progress=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  const context=gsap.context(()=>{
   if(reduced)return;
   const hero=document.querySelector('.hero');
   if(hero){
    const rtl=document.documentElement.dir==='rtl';
    gsap.timeline({scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:.65}})
     .to('.hero .second-line',{xPercent:rtl?4:-4,ease:'none'},0).to('.hero-star',{rotation:110,ease:'none'},0)
     .to('.hero-signature',{yPercent:-25,opacity:.15,ease:'none'},0).to('.hero-orbit',{rotation:30,y:65,ease:'none'},0);
   }
   gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:25,opacity:0,duration:.7,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 96%',once:true},clearProps:'all'}));
   gsap.utils.toArray<HTMLElement>('.showcase-frame').forEach(el=>gsap.from(el,{y:30,scale:.96,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 95%',once:true},clearProps:'all'}));
  });
  let entrance:gsap.Context|undefined;
  const revealHero=()=>{if(reduced||!document.querySelector('.hero'))return;entrance?.revert();entrance=gsap.context(()=>{gsap.from('.hero-line > span',{yPercent:105,opacity:0,duration:.9,stagger:.12,ease:'power3.out',clearProps:'all'});gsap.from('.hero-signature span',{yPercent:110,rotate:6,duration:.8,stagger:.06,ease:'power3.out',clearProps:'all'});});};
  if(['pending','playing'].includes(document.documentElement.dataset.intro??'')&&document.documentElement.dataset.introReveal!=='ready')window.addEventListener('maha:intro-end',revealHero,{once:true});else if(document.documentElement.dataset.introReveal!=='ready')revealHero();
  let frame=0;const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;if(progress.current)progress.current.style.transform=`scaleX(${max>0?scrollY/max:0})`;});};
  addEventListener('scroll',update,{passive:true});update();return()=>{window.removeEventListener('maha:intro-end',revealHero);entrance?.revert();context.revert();cancelAnimationFrame(frame);removeEventListener('scroll',update);};
 },[path,reduced]);
 return <div className="reading-progress" ref={progress} aria-hidden="true"/>;
}
