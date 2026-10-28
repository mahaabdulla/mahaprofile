import { useId } from 'react';
import { type ProjectScreenshot } from '@/lib/content';

/** Presentation text shares the screenshot's coordinate system at every size. */
export function NawelIdentity({screen}:{screen:ProjectScreenshot}){
 const gradient=useId();
 if(!screen.identity)return null;
 const drawer=screen.identity==='navigation';
 const edit=screen.identity==='edit-profile';
 return <svg className="project-identity-layer" viewBox={`0 0 ${screen.width} ${screen.height}`} aria-hidden="true" focusable="false" style={{position:'absolute',left:0,top:0,width:'100%',height:'auto',pointerEvents:'none'}}>
  {drawer?<>
   <defs><linearGradient id={gradient}><stop stopColor="#0a897a"/><stop offset="1" stopColor="#088778"/></linearGradient></defs>
   <rect x="600" y="285" width="411" height="140" fill={`url(#${gradient})`}/>
   <text x="995" y="348" direction="rtl" textAnchor="start" fontFamily="IBM Plex Sans Arabic, sans-serif" fontWeight="500" fontSize="50" fill="white">مها</text>
   <text x="995" y="405" direction="ltr" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="36" fill="white">maha@example.com</text>
  </>:<>
   <rect x={edit?620:590} y={edit?708:661} width={edit?240:232} height="70" fill="white"/>
   <text x={edit?839:790} y={edit?755:708} direction="rtl" textAnchor="start" fontFamily="IBM Plex Sans Arabic, sans-serif" fontWeight="600" fontSize={edit?46:44} fill="#151a25">مها</text>
  </>}
 </svg>;
}
