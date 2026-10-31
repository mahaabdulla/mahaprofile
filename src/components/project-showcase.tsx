'use client';
import { type CSSProperties, useEffect, useId, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { type Lang, type Project, projectScreenshots, t } from '@/lib/content';
import { GalleryNavigation, useGalleryNavigation } from './gallery-navigation';
import { ProjectScreenshotView } from './project-screenshot';

export function ProjectShowcase({project,lang}:{project:Project;lang:Lang}){
 if(project.galleryPaused){
  const cover=projectScreenshots(project)[0];
  const ratio=project.slug==='nawel'?482/988:cover.width/(cover.height-(cover.trim?.top??0)-(cover.trim?.bottom??0));
  return <div className={`project-showcase showcase-${project.kind} showcase-${project.slug} showcase-screens`} data-gallery-paused="true" style={{'--project-screen-ratio':ratio} as CSSProperties}>
   <div className="showcase-viewport"><div className="showcase-frame"><div className="showcase-image"><ProjectScreenshotView screen={cover} lang={lang}/></div></div></div>
  </div>;
 }
 return <InteractiveProjectShowcase project={project} lang={lang}/>;
}

function InteractiveProjectShowcase({project,lang}:{project:Project;lang:Lang}){
 const [index,setIndex]=useState(0);const [open,setOpen]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);const root=useRef<HTMLDivElement>(null);const opener=useRef<HTMLButtonElement|null>(null);const id=useId();
 const [near,setNear]=useState(false);
 const images=useMemo(()=>projectScreenshots(project),[project]);const current=images[index];const navigation=useGalleryNavigation(images.length,lang,setIndex);
 const nawel=project.slug==='nawel';
 const screenStyle=project.gallery?{
  '--project-screen-ratio':nawel?482/988:current.width/(current.height-(current.trim?.top??0)-(current.trim?.bottom??0)),
 } as CSSProperties:undefined;
 const galleryLabel=lang==='ar'?`صور ${t(project.name,lang)}`:`Images of ${t(project.name,lang)}`;
 useEffect(()=>{
  const node=root.current;if(!node)return;
  if(!('IntersectionObserver'in window)){setNear(true);return;}
  const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){setNear(true);observer.disconnect();}},{rootMargin:'200px'});
  observer.observe(node);return()=>observer.disconnect();
 },[]);
 useEffect(()=>{
  if(!near||images.length<2)return;
  const neighbors=new Set([(index+1)%images.length,(index+images.length-1)%images.length]);
  const requests=[...neighbors].map(next=>{const image=new window.Image();image.decoding='async';image.fetchPriority='low';image.src=images[next].src;return image;});
  return()=>{for(const request of requests){request.onload=null;request.onerror=null;}};
 },[near,index,images]);
 useEffect(()=>{if(!open)return;const el=dialog.current;if(!el)return;el.showModal();el.querySelector<HTMLButtonElement>('[data-dialog-close]')?.focus();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{el.close();document.body.style.overflow=old;opener.current?.focus({preventScroll:true});};},[open]);
 return <div ref={root} className={`project-showcase showcase-${project.kind} showcase-${project.slug}${project.gallery?' showcase-screens':''}`} style={screenStyle}>
  <div className="showcase-viewport gallery-surface" {...navigation.surfaceProps} onKeyDown={navigation.onKeyDown}>
   <div className="showcase-frame"><div className="showcase-browser" aria-hidden="true"><span>● ● ●</span><span>{project.kind==='website'&&project.url?new URL(project.url).hostname:t(project.name,lang)}</span></div><div className="showcase-image"><ProjectScreenshotView key={current.src} screen={current} lang={lang}/></div></div>
   <GalleryNavigation lang={lang} count={images.length} previous={navigation.previous} next={navigation.next} label={galleryLabel}/>
   <button className="showcase-zoom" aria-label={`${lang==='ar'?'تكبير صور':'Enlarge images of'} ${t(project.name,lang)}`} aria-haspopup="dialog" onClick={event=>{opener.current=event.currentTarget;setOpen(true);}}><Maximize2 size={17}/><span>{lang==='ar'?'معاينة':'Preview'}</span></button>
   <span className="sr-only" aria-live="polite" aria-atomic="true">{lang==='ar'?`الصورة ${index+1} من ${images.length}`:`Image ${index+1} of ${images.length}`}</span>
  </div>
  {images.length>2&&<p className="project-gallery-caption"><span>{t(current.caption,lang)}</span><span className="mono" dir="ltr">{String(index+1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}</span></p>}
  {open&&<dialog className={`project-dialog dialog-${project.slug}${project.gallery?' dialog-screens':''}`} ref={dialog} aria-labelledby={id} onKeyDown={navigation.onKeyDown} onCancel={event=>{event.preventDefault();setOpen(false);}} onClick={event=>{if(event.target===event.currentTarget)setOpen(false);}}>
   <div className="dialog-toolbar"><h2 id={id}>{t(project.name,lang)}</h2><button data-dialog-close aria-label={lang==='ar'?'إغلاق المعاينة':'Close preview'} onClick={()=>setOpen(false)}><X size={22}/></button></div>
   <div className="dialog-image gallery-surface" {...navigation.surfaceProps}>{nawel?<div className="project-phone-screen"><ProjectScreenshotView key={current.src} screen={current} lang={lang}/></div>:<ProjectScreenshotView key={current.src} screen={current} lang={lang}/>}<GalleryNavigation lang={lang} count={images.length} previous={navigation.previous} next={navigation.next} label={galleryLabel}/></div>
   <p className="dialog-caption"><span>{t(current.caption,lang)}</span><span dir="ltr">{index+1} / {images.length}</span></p>
   {project.url&&project.linkLabel?<a href={project.url} target="_blank" rel="noopener noreferrer">{t(project.linkLabel,lang)}<ArrowUpRight size={17}/></a>:<p className="unpublished-note">{t(project.status,lang)}</p>}
  </dialog>}
 </div>;
}
