export const HERO_SESSION_KEY='maha:hero:impossible-v1';
/** @param {{getItem:(key:string)=>string|null,setItem:(key:string,value:string)=>void}} storage @param {boolean} reduced */
export function claimHeroSession(storage,reduced){try{if(storage.getItem(HERO_SESSION_KEY))return false;storage.setItem(HERO_SESSION_KEY,'seen');return !reduced;}catch{return false;}}
function bootstrap(key){
 try{
  if(!/^\/(?:ar\/|en\/)?$/.test(location.pathname)||location.hash||sessionStorage.getItem(key)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  sessionStorage.setItem(key,'seen');
  const d=document.documentElement;d.dataset.heroEntry='pending';d.dataset.heroStarted=String(performance.now());
  let timer;const finish=()=>{d.dataset.heroEntry='complete';window.dispatchEvent(new Event('maha:hero-ready'));clearTimeout(timer);window.removeEventListener('wheel',finish);window.removeEventListener('pointerdown',finish,true);window.removeEventListener('keydown',finish,true);};
  timer=setTimeout(finish,2800);
  window.addEventListener('wheel',finish,{passive:true,once:true});window.addEventListener('pointerdown',finish,{once:true,capture:true});window.addEventListener('keydown',finish,{once:true,capture:true});
 }catch{}
}
export const HERO_BOOTSTRAP=`(${bootstrap.toString()})(${JSON.stringify(HERO_SESSION_KEY)});`;
