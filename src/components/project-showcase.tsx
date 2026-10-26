'use client';
import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { type Lang, type Project, t } from '@/lib/content';
import { useMotion } from './motion';
import { GalleryNavigation, useGalleryNavigation } from './gallery-navigation';

export function ProjectShowcase({project,lang}:{project:Project;lang:Lang}){
 const [index,setIndex]=useState(0);const [open,setOpen]=useState(false);const dialog=useRef<HTMLDialogElement>(null);const image=useRef<HTMLDivElement>(null);const opener=useRef<HTMLButtonElement|null>(null);const id=useId();const {reduced}=useMotion();
 const images=project.secondImage?[project.image,project.secondImage]:[project.image];const navigation=useGalleryNavigation(images.length,lang,setIndex);
 const galleryLabel=lang==='ar'?`صور ${t(project.name,lang)}`:`Images of ${t(project.name,lang)}`;
 useEffect(()=>{if(reduced||!image.current)return;const ctx=gsap.context(()=>gsap.fromTo(image.current,{opacity:.6,x:10},{opacity:1,x:0,duration:.3,ease:'power2.out'}));return()=>ctx.revert();},[index,reduced]);
 useEffect(()=>{if(!open)return;const el=dialog.current;if(!el)return;el.showModal();el.querySelector<HTMLButtonElement>('[data-dialog-close]')?.focus();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{el.close();document.body.style.overflow=old;opener.current?.focus({preventScroll:true});};},[open]);
 return <div className={`project-showcase showcase-${project.kind}`}>
  <div className="showcase-viewport gallery-surface" {...navigation.surfaceProps} onKeyDown={navigation.onKeyDown}>
   <div className="showcase-frame"><div className="showcase-browser" aria-hidden="true"><span>● ● ●</span><span>{project.kind==='website'?'sigilfilm.com':'AZAD / GOOGLE PLAY'}</span></div><div className="showcase-image" ref={image}><Image src={images[index]} alt={t(project.imageAlt,lang)} width={project.kind==='website'?1280:600} height={project.kind==='website'?720:1200} unoptimized draggable={false}/></div></div>
   <GalleryNavigation lang={lang} count={images.length} previous={navigation.previous} next={navigation.next} label={galleryLabel}/>
   <button className="showcase-zoom" aria-label={`${lang==='ar'?'تكبير صور':'Enlarge images of'} ${t(project.name,lang)}`} aria-haspopup="dialog" onClick={event=>{opener.current=event.currentTarget;setOpen(true);}}><Maximize2 size={17}/><span>{lang==='ar'?'معاينة':'Preview'}</span></button>
   <span className="sr-only" aria-live="polite" aria-atomic="true">{lang==='ar'?`الصورة ${index+1} من ${images.length}`:`Image ${index+1} of ${images.length}`}</span>
  </div>
  {open&&<dialog className="project-dialog" ref={dialog} aria-labelledby={id} onKeyDown={navigation.onKeyDown} onCancel={event=>{event.preventDefault();setOpen(false);}} onClick={event=>{if(event.target===event.currentTarget)setOpen(false);}}>
   <div className="dialog-toolbar"><h2 id={id}>{t(project.name,lang)}</h2><button data-dialog-close aria-label={lang==='ar'?'إغلاق المعاينة':'Close preview'} onClick={()=>setOpen(false)}><X size={22}/></button></div>
   <div className="dialog-image gallery-surface" {...navigation.surfaceProps}><Image src={images[index]} alt={t(project.imageAlt,lang)} width={project.kind==='website'?1280:600} height={project.kind==='website'?720:1200} unoptimized draggable={false}/><GalleryNavigation lang={lang} count={images.length} previous={navigation.previous} next={navigation.next} label={galleryLabel}/></div>
   <p>{t(project.imageCaption,lang)}</p><a href={project.url} target="_blank" rel="noopener noreferrer">{t(project.linkLabel,lang)}<ArrowUpRight size={17}/></a>
  </dialog>}
 </div>;
}
