import type { Lang } from '@/lib/content';

/** One continuous piece of geometry: drafting rays become an actual interface composition. */
export function HeroTransformation({lang}:{lang:Lang}){
 return <svg className="hero-transform-art" viewBox="0 0 640 340" fill="none" aria-hidden="true">
  <g className="hero-drafting" stroke="currentColor" strokeWidth="1" pathLength="1"><path pathLength="1" d="M320 170V52H194V280H320"/><path pathLength="1" d="M320 170H446V52H320"/><path pathLength="1" d="M320 170V288H446V170"/></g>
  <rect className="hero-product-shell" x="190" y="48" width="260" height="248" rx="5" fill="#111114" stroke="currentColor"/>
  <g className="hero-ui-wire" stroke="currentColor" strokeWidth=".8"><path d="M190 94H450M210 113H430M210 171H430M210 223H430"/><rect x="210" y="128" width="220" height="32" rx="3"/><rect x="210" y="180" width="220" height="32" rx="3"/><rect x="210" y="232" width="220" height="38" rx="3"/></g>
  <g className="hero-ui-top"><rect x="210" y="64" width="22" height="14" rx="3" fill="#a6a0df"/><text x={lang==='ar'?416:246} direction={lang==='ar'?'rtl':'ltr'} y="76" fill="#24212e" fontSize="11">{lang==='ar'?'مساحة الفكرة':'Idea workspace'}</text><rect x="210" y="109" width="220" height="3" rx="1.5" fill="#d7d2e5"/><rect x="210" y="109" width="147" height="3" rx="1.5" fill="#8d82c7"/></g>
  <g className="hero-ui-mid"><rect x="222" y="138" width="12" height="12" rx="2" fill="#a6a0df"/><path d="M225 144L228 147L232 141" stroke="#24212e" strokeWidth="1.2"/><text x={lang==='ar'?416:246} direction={lang==='ar'?'rtl':'ltr'} y="147" fill="#24212e" fontSize="10">{lang==='ar'?'فهم الاحتياج':'Understand the need'}</text><rect x="222" y="190" width="12" height="12" rx="2" fill="#a6a0df"/><text x={lang==='ar'?416:246} direction={lang==='ar'?'rtl':'ltr'} y="199" fill="#24212e" fontSize="10">{lang==='ar'?'بناء الواجهة':'Build the interface'}</text></g>
  <g className="hero-ui-low"><rect x="222" y="244" width="12" height="12" rx="2" fill="#ded9ed"/><text x={lang==='ar'?416:246} direction={lang==='ar'?'rtl':'ltr'} y="253" fill="#24212e" fontSize="10">{lang==='ar'?'تجربة تعمل':'Make it work'}</text><path d="M404 249H417M412 244L417 249L412 254" stroke="#6f638f"/></g>
  <circle className="hero-idea-spark" cx="320" cy="170" r="3" fill="#a6a0df"/>
 </svg>;
}
