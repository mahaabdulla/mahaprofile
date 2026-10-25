'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

export function MotionRoot(){
 const path=usePathname(); const progress=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  const media=gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)',()=>{
   if(document.querySelector('.hero-line'))gsap.from('.hero-line > span',{yPercent:110,opacity:0,duration:1.05,stagger:.12,ease:'power3.out',clearProps:'all'});
   gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el=>gsap.from(el,{y:32,opacity:0,duration:.75,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 93%',once:true},clearProps:'all'}));
   if(document.querySelector('.hero-orbit'))gsap.to('.hero-orbit',{rotation:24, y:70,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
   if(document.querySelector('.lab-orbits'))gsap.to('.lab-orbits',{rotation:30,scale:1.13,ease:'none',scrollTrigger:{trigger:'.lab-art',start:'top bottom',end:'bottom top',scrub:1}});
  });
  let frame=0;
  const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-innerHeight;if(progress.current)progress.current.style.transform=`scaleX(${max>0?scrollY/max:0})`;});};
  window.addEventListener('scroll',update,{passive:true});update();
  return()=>{media.revert();cancelAnimationFrame(frame);window.removeEventListener('scroll',update);};
 },[path]);
 return <div className="reading-progress" ref={progress} aria-hidden="true"/>;
}
