'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
const MotionContext=createContext({reduced:false});
export const useMotion=()=>useContext(MotionContext);
export function MotionProvider({children}:{children:React.ReactNode}){
 const [system,setSystem]=useState(false);const reduced=system;
 useEffect(()=>{const query=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setSystem(query.matches);sync();query.addEventListener('change',sync);return()=>query.removeEventListener('change',sync);},[]);
 useEffect(()=>{document.documentElement.dataset.motion=reduced?'reduce':'full';return()=>{delete document.documentElement.dataset.motion;};},[reduced]);
 return <MotionContext.Provider value={{reduced}}>{children}</MotionContext.Provider>;
}
export function MotionRoot(){
 const path=usePathname();const {reduced}=useMotion();const progress=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  const context=gsap.context(()=>{
   if(reduced)return;
   gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:18,opacity:0,duration:.55,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 96%',once:true},clearProps:'all'}));
   gsap.utils.toArray<HTMLElement>('.showcase-frame').forEach(el=>gsap.from(el,{y:20,scale:.98,duration:.65,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 95%',once:true},clearProps:'all'}));
  });
  let frame=0;const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;if(progress.current)progress.current.style.transform=`scaleX(${max>0?scrollY/max:0})`;});};
  addEventListener('scroll',update,{passive:true});update();return()=>{context.revert();cancelAnimationFrame(frame);removeEventListener('scroll',update);};
 },[path,reduced]);
 return <div className="reading-progress" ref={progress} aria-hidden="true"/>;
}
