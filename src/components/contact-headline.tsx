'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { copy, type Lang } from '@/lib/content';
import { useMotion } from './motion';

export function ContactHeadline({lang,standalone=false}:{lang:Lang;standalone?:boolean}){
 const root=useRef<HTMLHeadingElement>(null);const {reduced}=useMotion();
 const Heading=standalone?'h1':'h2';const lines=copy.cta[lang];
 useEffect(()=>{
  const element=root.current;if(!element||reduced||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  gsap.registerPlugin(ScrollTrigger);
  const ctx=gsap.context(()=>{
   gsap.fromTo(element.querySelectorAll('.contact-line-inner'),{yPercent:108},{yPercent:0,duration:.62,stagger:.085,ease:'power3.out',scrollTrigger:{trigger:element,start:'top 88%',once:true},clearProps:'transform'});
  },element);
  return()=>ctx.revert();
 },[lang,reduced]);
 return <Heading ref={root} className="contact-signature-heading" aria-label={lines.join(' ')}>{lines.map(line=><span className="contact-line" key={line} aria-hidden="true"><span className="contact-line-inner">{line}</span></span>)}</Heading>;
}
