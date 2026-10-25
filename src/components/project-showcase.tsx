'use client';
import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from 'lucide-react';
import { Lang, Project, t } from '@/lib/content';
import { useMotion } from './motion';

export function ProjectShowcase({project,lang}:{project:Project;lang:Lang}){
 const [index,setIndex]=useState(0);const [open,setOpen]=useState(false);const dialog=useRef<HTMLDialogElement>(null);const frame=useRef<HTMLDivElement>(null);const image=useRef<HTMLDivElement>(null);const opener=useRef<HTMLButtonElement|null>(null);const id=useId();const {reduced}=useMotion();
 const images=project.secondImage?[project.image,project.secondImage]:[project.image];
 useEffect(()=>{const element=frame.current;if(reduced&&element)gsap.set(element,{rotateX:0,rotateY:0});return()=>{if(element)gsap.killTweensOf(element);};},[reduced]);
 useEffect(()=>{if(reduced||!image.current)return;const ctx=gsap.context(()=>gsap.fromTo(image.current,{opacity:.25,x:18},{opacity:1,x:0,duration:.45,ease:'power2.out'}));return()=>ctx.revert();},[index,reduced]);
 useEffect(()=>{if(!open)return;const el=dialog.current;if(!el)return;el.showModal();el.querySelector<HTMLButtonElement>('[data-dialog-close]')?.focus();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{el.close();document.body.style.overflow=old;opener.current?.focus({preventScroll:true});};},[open]);
 const move=(event:React.PointerEvent<HTMLDivElement>)=>{if(reduced||event.pointerType!=='mouse'||!frame.current)return;const rect=frame.current.getBoundingClientRect();gsap.to(frame.current,{rotateY:(event.clientX-rect.left-rect.width/2)/rect.width*4,rotateX:-(event.clientY-rect.top-rect.height/2)/rect.height*4,duration:.5,ease:'power2.out',overwrite:'auto'});};
 return <div className={`project-showcase showcase-${project.kind}`}>
  <div className="showcase-viewport" onPointerMove={move} onPointerLeave={()=>{if(!frame.current)return;if(reduced)gsap.set(frame.current,{rotateX:0,rotateY:0});else gsap.to(frame.current,{rotateX:0,rotateY:0,duration:.6,overwrite:'auto'});}}>
   <div ref={frame} className="showcase-frame"><div className="showcase-browser" aria-hidden="true"><span>● ● ●</span><span>{project.kind==='website'?'sigilfilm.com':'AZAD / GOOGLE PLAY'}</span><span>↗</span></div><div className="showcase-image" ref={image}><Image src={images[index]} alt={t(project.imageAlt,lang)} width={project.kind==='website'?1280:600} height={project.kind==='website'?720:1200} unoptimized/></div></div>
   <button className="showcase-zoom" aria-label={`${lang==='ar'?'تكبير صور':'Enlarge images of'} ${t(project.name,lang)}`} onClick={e=>{opener.current=e.currentTarget;setOpen(true);}}><Maximize2 size={17}/><span>{lang==='ar'?'معاينة':'Preview'}</span></button>
  </div>
  <div className="showcase-controls"><span className="mono">{lang==='ar'?'صور المشروع':'PROJECT IMAGES'} / {String(index+1).padStart(2,'0')}</span>{images.length>1&&<div><button aria-label={lang==='ar'?'الصورة السابقة':'Previous image'} onClick={()=>setIndex(i=>(i+images.length-1)%images.length)}><ArrowLeft size={17}/></button><button aria-label={lang==='ar'?'الصورة التالية':'Next image'} onClick={()=>setIndex(i=>(i+1)%images.length)}><ArrowRight size={17}/></button></div>}<a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={t(project.linkLabel,lang)}><ArrowUpRight size={18}/></a></div>
  {open&&<dialog className="project-dialog" ref={dialog} aria-labelledby={id} onCancel={e=>{e.preventDefault();setOpen(false);}} onClick={e=>{if(e.target===e.currentTarget)setOpen(false);}}><div className="dialog-toolbar"><h2 id={id}>{t(project.name,lang)}</h2><div>{images.length>1&&<button onClick={()=>setIndex(i=>(i+1)%images.length)}>{lang==='ar'?'الصورة التالية':'Next image'}<ArrowRight size={17}/></button>}<button data-dialog-close aria-label={lang==='ar'?'إغلاق المعاينة':'Close preview'} onClick={()=>setOpen(false)}><X size={22}/></button></div></div><div className="dialog-image"><Image src={images[index]} alt={t(project.imageAlt,lang)} width={project.kind==='website'?1280:600} height={project.kind==='website'?720:1200} unoptimized/></div><p>{t(project.imageCaption,lang)}</p><a href={project.url} target="_blank" rel="noopener noreferrer">{t(project.linkLabel,lang)}<ArrowUpRight size={17}/></a></dialog>}
 </div>;
}
