export const INTRO_SESSION_KEY='maha:intro:zero-creation-v2';
/** @param {{getItem:(key:string)=>string|null,setItem:(key:string,value:string)=>void}} storage @param {boolean} reduced */
export function claimIntroSession(storage,reduced){try{if(storage.getItem(INTRO_SESSION_KEY))return false;storage.setItem(INTRO_SESSION_KEY,'seen');return !reduced;}catch{return false;}}
// The CSS sequence starts before hydration. GSAP takes over only if ready early.
function bootstrap(key){
 try{
  const d=document.documentElement;
  if(sessionStorage.getItem(key)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  d.dataset.intro='pending';d.dataset.introStart=String(performance.now());
  const remember=()=>{try{sessionStorage.setItem(key,'seen');}catch{}};
  const reveal=()=>{d.dataset.introReveal='ready';window.dispatchEvent(new Event('maha:intro-end'));};
  const cancel=()=>{if(d.dataset.intro==='pending'){d.dataset.intro='cancelled';remember();reveal();}cleanup();};
  const revealTimer=setTimeout(reveal,1920);
  const timer=setTimeout(()=>{if(d.dataset.intro==='pending'){d.dataset.intro='complete';remember();if(d.dataset.introReveal!=='ready')reveal();}cleanup();},2700);
  const cleanup=()=>{clearTimeout(timer);clearTimeout(revealTimer);window.removeEventListener('pointerdown',cancel,true);window.removeEventListener('keydown',cancel,true);window.removeEventListener('wheel',cancel);window.removeEventListener('pagehide',cancel);window.removeEventListener('maha:intro-start',cleanup);};
  window.addEventListener('pointerdown',cancel,{once:true,capture:true});window.addEventListener('keydown',cancel,{once:true,capture:true});window.addEventListener('wheel',cancel,{once:true,passive:true});window.addEventListener('pagehide',cancel,{once:true});window.addEventListener('maha:intro-start',cleanup,{once:true});
 }catch{}
}
export const INTRO_BOOTSTRAP=`(${bootstrap.toString()})(${JSON.stringify(INTRO_SESSION_KEY)});`;
