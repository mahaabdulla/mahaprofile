import { HERO_FRAGMENTS, fragmentClip, fragmentOrigin } from '@/lib/hero-fragments.mjs';

export function HeroPhrase({phrase,active}:{phrase:string;active:boolean}){
 return <span className="hero-phrase" data-active={active?'':undefined}>
  <span className="hero-phrase-source">
   <span className="hero-phrase-ink">{phrase}</span>
   <span className="hero-fragment-layer" aria-hidden="true">{HERO_FRAGMENTS.map((piece,index)=>{
    const origin=fragmentOrigin(piece.points);
    return <span key={index} className="hero-type-fragment" data-fragment={index} style={{clipPath:fragmentClip(piece.points),transformOrigin:`${origin[0]}% ${origin[1]}%`}}>{phrase}</span>;
   })}</span>
  </span>
 </span>;
}
