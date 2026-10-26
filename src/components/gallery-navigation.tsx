'use client';
import { useRef, type Dispatch, type SetStateAction, type PointerEvent, type MouseEvent, type KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Lang } from '@/lib/content';
import { keyStep, swipeStep, wrapSlide } from '@/lib/gallery-direction.mjs';

export function useGalleryNavigation(count:number,lang:Lang,setIndex:Dispatch<SetStateAction<number>>){
 const start=useRef<{x:number;y:number}|null>(null);const swiped=useRef(false);
 const move=(delta:number)=>{if(count>1)setIndex(i=>wrapSlide(i,delta,count));};
 return {
  previous:()=>move(-1),next:()=>move(1),
  onKeyDown:(event:KeyboardEvent)=>{if(count<2)return;const step=keyStep(event.key,lang);if(step){event.preventDefault();move(step);}else if(event.key==='Home'){event.preventDefault();setIndex(0);}else if(event.key==='End'){event.preventDefault();setIndex(count-1);}},
  surfaceProps:{
   onPointerDown:(event:PointerEvent)=>{swiped.current=false;if(!event.isPrimary||event.button!==0){start.current=null;return;}start.current={x:event.clientX,y:event.clientY};},
   onPointerUp:(event:PointerEvent)=>{const origin=start.current;start.current=null;if(!origin||count<2)return;const step=swipeStep(event.clientX-origin.x,event.clientY-origin.y,lang);if(step){swiped.current=true;move(step);}},
   onPointerCancel:()=>{start.current=null;swiped.current=false;},
   onClickCapture:(event:MouseEvent)=>{if(swiped.current&&event.detail!==0){event.preventDefault();event.stopPropagation();swiped.current=false;}},
  },
 };
}

export function GalleryNavigation({lang,count,previous,next,label}:{lang:Lang;count:number;previous:()=>void;next:()=>void;label:string}){
 if(count<2)return null;
 return <div className="gallery-navigation" role="group" aria-label={label}>
  <button className="gallery-nav gallery-previous" onClick={previous} aria-label={lang==='ar'?'الصورة السابقة':'Previous image'}>{lang==='ar'?<ArrowRight size={18}/>:<ArrowLeft size={18}/>}</button>
  <button className="gallery-nav gallery-next" onClick={next} aria-label={lang==='ar'?'الصورة التالية':'Next image'}>{lang==='ar'?<ArrowLeft size={18}/>:<ArrowRight size={18}/>}</button>
 </div>;
}
