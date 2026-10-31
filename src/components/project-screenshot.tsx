'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { type Lang, type ProjectScreenshot, t } from '@/lib/content';
import { NawelIdentity } from './nawel-identity';

/** Each URL mounts independently, so a pending request cannot retain the previous bitmap. */
export function ProjectScreenshotView({screen,lang}:{screen:ProjectScreenshot;lang:Lang}){
 const image=useRef<HTMLImageElement>(null);
 const [mounted,setMounted]=useState(false);
 const [state,setState]=useState<'loading'|'ready'|'error'>('loading');
 const [attempt,setAttempt]=useState(0);
 useEffect(()=>{
  setMounted(true);
  if(image.current?.complete)setState(image.current.naturalWidth>0?'ready':'error');
  const timeout=window.setTimeout(()=>setState(value=>value==='loading'?'error':value),15000);
  return()=>window.clearTimeout(timeout);
 },[attempt]);
 const src=attempt?`${screen.src}?retry=${attempt}`:screen.src;
 const picture=<Image key={`${screen.src}:${attempt}`} ref={image} src={src} alt={t(screen.alt,lang)} width={screen.width} height={screen.height} unoptimized loading="eager" decoding="async" draggable={false}
  onLoad={event=>{if(event.currentTarget===image.current)setState('ready');}}
  onError={event=>{if(event.currentTarget===image.current)setState('error');}}
  style={screen.trim?{transform:`translateY(${-screen.trim.top/screen.height*100}%)`}:undefined}/>;
 if(!screen.trim)return picture;
 return <div className="project-screen-crop" data-image-state={state} style={{aspectRatio:`${screen.width}/${screen.height-screen.trim.top-screen.trim.bottom}`}}>
  {picture}
  {state==='ready'&&<NawelIdentity screen={screen}/>}
  {mounted&&state!=='ready'&&<div className="project-image-status" role={state==='error'?'alert':'status'}>
   <span>{state==='loading'?(lang==='ar'?'جارٍ تحميل الصورة…':'Loading image…'):(lang==='ar'?'تعذّر تحميل الصورة':'Unable to load image')}</span>
   {state==='error'&&<button type="button" onClick={()=>{setState('loading');setAttempt(value=>value+1);}}>{lang==='ar'?'إعادة المحاولة':'Try again'}</button>}
  </div>}
 </div>;
}
