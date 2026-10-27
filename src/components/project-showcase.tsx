'use client';
import Image from 'next/image';
import { type CSSProperties, useEffect, useId, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { type Lang, type Project, type ProjectScreenshot, projectScreenshots, t } from '@/lib/content';
import { useMotion } from './motion';
import { GalleryNavigation, useGalleryNavigation } from './gallery-navigation';

function Screenshot({screen,lang}:{screen:ProjectScreenshot;lang:Lang}){
 const picture=<Image src={screen.src} alt={t(screen.alt,lang)} width={screen.width} height={screen.height} unoptimized draggable={false} style={screen.trim?{transform:`translateY(${-screen.trim.top/screen.height*100}%)`}:undefined}/>;
 if(!screen.trim)return picture;
 return <div className="project-screen-crop" style={{aspectRatio:`${screen.width}/${screen.height-screen.trim.top-screen.trim.bottom}`}}>{picture}</div>;
}

export function ProjectShowcase({project,lang}:{project:Project;lang:Lang}){
 const [index,setIndex]=useState(0);const [open,setOpen]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);const image=useRef<HTMLDivElement>(null);const opener=useRef<HTMLButtonElement|null>(null);const id=useId();const {reduced}=useMotion();
 const images=projectScreenshots(project);const current=images[index];const navigation=useGalleryNavigation(images.length,lang,setIndex);
 const screenStyle=project.gallery?{'--project-screen-ratio':current.width/(current.height-(current.trim?.top??0)-(current.trim?.bottom??0))} as CSSProperties:undefined;
 const galleryLabel=lang==='ar'?`صور ${t(project.name,lang)}`:`Images of ${t(project.name,lang)}`;
 useEffect(()=>{if(reduced||!image.current)return;const ctx=gsap.context(()=>gsap.fromTo(image.current,{opacity:.6,x:10},{opacity:1,x:0,duration:.3,ease:'power2.out'}));return()=>ctx.revert();},[index,reduced]);
 useEffect(()=>{if(!open)return;const el=dialog.current;if(!el)return;el.showModal();el.querySelector<HTMLButtonElement>('[data-dialog-close]')?.focus();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{el.close();document.body.style.overflow=old;opener.current?.focus({preventScroll:true});};},[open]);
 return <div className={`project-showcase showcase-${project.kind} showcase-${project.slug}${project.gallery?' showcase-screens':''}`} style={screenStyle}>
  <div className="showcase-viewport gallery-surface" {...navigation.surfaceProps} onKeyDown={navigation.onKeyDown}>
   <div className="showcase-frame"><div className="showcase-browser" aria-hidden="true"><span>● ● ●</span><span>{project.kind==='website'&&project.url?new URL(project.url).hostname:t(project.name,lang)}</span></div><div className="showcase-image" ref={image}><Screenshot screen={current} lang={lang}/></div></div>
   <GalleryNavigation lang={lang} count={images.length} previous={navigation.previous} next={navigation.next} label={galleryLabel}/>
   <button className="showcase-zoom" aria-label={`${lang==='ar'?'تكبير صور':'Enlarge images of'} ${t(project.name,lang)}`} aria-haspopup="dialog" onClick={event=>{opener.current=event.currentTarget;setOpen(true);}}><Maximize2 size={17}/><span>{lang==='ar'?'معاينة':'Preview'}</span></button>
   <span className="sr-only" aria-live="polite" aria-atomic="true">{lang==='ar'?`الصورة ${index+1} من ${images.length}`:`Image ${index+1} of ${images.length}`}</span>
  </div>
  {images.length>2&&<p className="project-gallery-caption"><span>{t(current.caption,lang)}</span><span className="mono" dir="ltr">{String(index+1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}</span></p>}
  {open&&<dialog className={`project-dialog dialog-${project.slug}${project.gallery?' dialog-screens':''}`} ref={dialog} aria-labelledby={id} onKeyDown={navigation.onKeyDown} onCancel={event=>{event.preventDefault();setOpen(false);}} onClick={event=>{if(event.target===event.currentTarget)setOpen(false);}}>
   <div className="dialog-toolbar"><h2 id={id}>{t(project.name,lang)}</h2><button data-dialog-close aria-label={lang==='ar'?'إغلاق المعاينة':'Close preview'} onClick={()=>setOpen(false)}><X size={22}/></button></div>
   <div className="dialog-image gallery-surface" {...navigation.surfaceProps}><Screenshot screen={current} lang={lang}/><GalleryNavigation lang={lang} count={images.length} previous={navigation.previous} next={navigation.next} label={galleryLabel}/></div>
   <p className="dialog-caption"><span>{t(current.caption,lang)}</span><span dir="ltr">{index+1} / {images.length}</span></p>
   {project.url&&project.linkLabel?<a href={project.url} target="_blank" rel="noopener noreferrer">{t(project.linkLabel,lang)}<ArrowUpRight size={17}/></a>:<p className="unpublished-note">{t(project.status,lang)}</p>}
  </dialog>}
 </div>;
}
