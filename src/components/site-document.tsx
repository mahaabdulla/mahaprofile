import { preload } from 'react-dom';
import { HERO_BOOTSTRAP } from '@/lib/hero-session.mjs';
export function SiteDocument({children,lang}:{children:React.ReactNode;lang:'en'|'ar'}){
 if(lang==='ar')preload('/fonts/palestine-regular.ttf',{as:'font',type:'font/ttf',crossOrigin:'anonymous'});
 return <html suppressHydrationWarning lang={lang} dir={lang==='ar'?'rtl':'ltr'}><body><script dangerouslySetInnerHTML={{__html:HERO_BOOTSTRAP}}/><noscript><style>{'.loading{display:none!important}[id^="S:"][hidden]{display:block!important}.desktop-nav{display:flex!important;flex-wrap:wrap;gap:12px}.menu-toggle{display:none!important}.site-header{height:auto;min-height:96px;flex-wrap:wrap;padding-block:20px}.build-journey{height:auto}.build-sticky{position:relative;height:auto;min-height:0}.build-stage{height:auto;display:grid;gap:20px}.build-scene{position:relative;min-height:490px;visibility:visible!important}.build-demo-note{position:relative;bottom:auto}.build-tabs{display:none}.world-beat{opacity:1}'}</style></noscript>{children}</body></html>;
}
