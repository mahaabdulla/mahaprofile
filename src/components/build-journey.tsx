'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowUpRight, Database, Braces, RefreshCw } from 'lucide-react';
import { Lang, Localized, t } from '@/lib/content';
import { useMotion } from './motion';

const stages:{title:Localized;body:Localized}[]=[
 {title:{ar:'فكرة تستحق الفهم',en:'An idea worth understanding'},body:{ar:'أبدأ بسؤال واضح: من سيستخدم هذا المنتج، وما الذي سيصبح أسهل بوجوده؟',en:'Start with a clear question: who is this for, and what should become easier?'}},
 {title:{ar:'الفكرة تأخذ شكلًا',en:'Give the idea a shape'},body:{ar:'أرتّب المحتوى والخطوات قبل التفاصيل البصرية. لكل عنصر وظيفة، ولكل خطوة سبب.',en:'Map the content and the journey before the visual detail. Every element has a job.'}},
 {title:{ar:'واجهة تستجيب لك',en:'An interface that responds'},body:{ar:'تتحوّل المسارات إلى واجهة تعمل. جرّب إكمال مهمة، وراقب كيف تتغيّر الحالة أمامك.',en:'The flow becomes a working interface. Complete a task and watch its state change.'}},
 {title:{ar:'والبيانات تصل',en:'Connect the data'},body:{ar:'خلف الواجهة طلب وبيانات وحالات انتظار ونتيجة. جرّب الطلب لتشاهد المسار كاملًا.',en:'Behind the interface: a request, data, a loading state, and a result. Try the request.'}},
];
type DemoData={project:string;tasks:{id:number;ar:string;en:string}[]};
export function BuildJourney({lang}:{lang:Lang}){
 const root=useRef<HTMLElement>(null);const activeRef=useRef(0);const trigger=useRef<ScrollTrigger|null>(null);
 const [compact,setCompact]=useState(false);const [active,setActive]=useState(0);const {reduced}=useMotion();const [done,setDone]=useState<number[]>([]);
 const [request,setRequest]=useState<'idle'|'loading'|'success'|'error'>('idle');const [data,setData]=useState<DemoData|null>(null);const abort=useRef<AbortController|null>(null);
 useEffect(()=>()=>abort.current?.abort(),[]);
 useEffect(()=>{const query=matchMedia('(max-width:760px)');const sync=()=>setCompact(query.matches);sync();query.addEventListener('change',sync);return()=>query.removeEventListener('change',sync);},[]);
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  const element=root.current;
  if(!element||reduced||matchMedia('(prefers-reduced-motion: reduce)').matches){trigger.current=null;return;}
  const ctx=gsap.context(()=>{
   const panels=gsap.utils.toArray<HTMLElement>('.build-scene');
   gsap.set(panels,{autoAlpha:0,y:compact?14:25,scale:compact?.985:.96});gsap.set(panels[0],{autoAlpha:1,y:0,scale:1});
   const syncStage=(self:ScrollTrigger)=>{const next=Math.min(3,Math.floor(self.progress*4));if(next!==activeRef.current){activeRef.current=next;setActive(next);}};
   const tl=gsap.timeline({scrollTrigger:{trigger:element,start:'top top',end:'bottom bottom',scrub:compact?.3:.45,invalidateOnRefresh:true,onUpdate:syncStage,onRefresh:syncStage}});
   panels.forEach((panel,i)=>{if(i)tl.to(panels[i-1],{autoAlpha:0,y:compact?-12:-20,scale:compact?1.01:1.025,duration:.18},i).to(panel,{autoAlpha:1,y:0,scale:1,duration:.28},i+.02);});
   tl.to('.build-line-fill',{scaleX:1,duration:4,ease:'none'},0);trigger.current=tl.scrollTrigger??null;
  },element);
  return()=>{ctx.revert();trigger.current=null;};
 },[reduced,compact,lang]);
 const choose=(index:number)=>{
  activeRef.current=index;setActive(index);
  if(trigger.current&&!reduced){const st=trigger.current;window.scrollTo({top:st.start+(st.end-st.start)*((index+.35)/4),behavior:'instant'});}
 };
 const load=async()=>{
  abort.current?.abort();const controller=new AbortController();abort.current=controller;setRequest('loading');
  try{const response=await fetch('/demo/workflow.json',{signal:controller.signal,cache:'no-store'});if(!response.ok)throw Error('Request failed');const value:DemoData=await response.json();if(!Array.isArray(value.tasks))throw Error('Invalid data');setData(value);setRequest('success');}catch{if(!controller.signal.aborted)setRequest('error');}
 };
 return <section className={`build-journey ${reduced?'build-reduced':''} ${compact?'build-mobile':''}`} ref={root} id="building">
  <div className="build-sticky section">
   <div className="build-editorial"><div className="eyebrow"><span className="index">04 /</span><span>{lang==='ar'?'كيف أبني':'HOW I BUILD'}</span></div><h2 aria-label={lang==='ar'?'من فكرة إلى شيء يعمل':'From a thought to a working thing'}>{lang==='ar'?<>من فكرة<br/><em>إلى شيء يعمل</em></>:<>From a thought<br/><em>to a working thing</em></>}</h2><p>{lang==='ar'?'مرّر لترى التحوّل، أو اختر مرحلة لتجربتها':'Scroll through the transformation, or choose a stage to try it'}</p>
    <div className="build-tabs" role="tablist" aria-label={lang==='ar'?'مراحل البناء':'Build stages'}>{stages.map((stage,i)=><button key={i} id={`build-tab-${i}`} role="tab" aria-selected={active===i} aria-controls={`build-scene-${i}`} tabIndex={active===i?0:-1} onClick={()=>choose(i)} onKeyDown={e=>{let n=i;if(e.key==='ArrowRight'||e.key==='ArrowDown')n=(i+1)%4;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')n=(i+3)%4;else if(e.key==='Home')n=0;else if(e.key==='End')n=3;else return;e.preventDefault();choose(n);root.current?.querySelector<HTMLButtonElement>(`#build-tab-${n}`)?.focus({preventScroll:true});}}><span>0{i+1}</span>{t(stage.title,lang)}</button>)}</div>
    <div className="build-line" aria-hidden="true"><i className="build-line-fill"/></div>
   </div>
   <div className="build-stage">
    {stages.map((stage,i)=><div key={i} className={`build-scene scene-${i} ${active===i?'is-active':''}`} id={`build-scene-${i}`} role="tabpanel" aria-labelledby={`build-tab-${i}`} aria-hidden={!reduced&&active!==i} inert={!reduced&&active!==i}>
     <div className="scene-top mono"><span>0{i+1} / {['IDEA','WIREFRAME','INTERFACE','DATA'][i]}</span></div>
     {i===0?<div className="idea-composition"><span className="idea-orbit" aria-hidden="true"/><b>{lang==='ar'?'ماذا لو؟':'What if?'}</b><span>{lang==='ar'?'احتياج واضح':'A clear need'}</span><i>{lang==='ar'?'خطوة أبسط':'A simpler step'}</i><span className="idea-braces" aria-hidden="true">{'{ }'}</span></div>:i===1?<div className="wireframe" aria-hidden="true"><div className="wire-header"><i/><i/></div><div className="wire-layout"><aside/><div><b/><span/><span/><span/><i className="wire-button">＋</i></div></div><small>structure → flow → clarity</small></div>:i===2?<div className="working-ui"><div className="ui-brand">m / <span>{lang==='ar'?'مساحة العمل':'Workspace'}</span></div><div className="ui-heading"><b>{lang==='ar'?'خطوة بخطوة':'One step at a time'}</b><span>{done.length}/3</span></div><div className="ui-progress"><i style={{width:`${done.length/3*100}%`}}/></div>{['Understand','Build','Review'].map((label,j)=><button className={`ui-task ${done.includes(j)?'completed':''}`} aria-pressed={done.includes(j)} key={label} onClick={()=>setDone(values=>values.includes(j)?values.filter(v=>v!==j):[...values,j])}><span className="task-check">{done.includes(j)&&<Check size={15}/>}</span>{lang==='ar'?['فهم المتطلبات','بناء الواجهة','مراجعة التجربة'][j]:label}<ArrowUpRight size={15}/></button>)}<p className="ui-feedback" role="status">{done.length===3?(lang==='ar'?'اكتملت الخطوات، والتجربة تستجيب':'All steps complete. The interface responds.'):(lang==='ar'?'اضغط مهمة لتغيير حالتها':'Select a task to update its state')}</p></div>:<div className={`data-flow request-${request}`}><div className="data-nodes"><span><Braces size={25}/>{lang==='ar'?'الواجهة':'Interface'}</span><i aria-hidden="true"><b/></i><span><Database size={25}/>JSON</span></div><div className="request-terminal" dir="ltr"><span>GET /demo/workflow.json</span><code>{request==='success'?`200 OK\n${JSON.stringify(data,null,2)}`:request==='loading'?'request → response …':request==='error'?'Request failed. Try again.':'Ready when you are.'}</code></div><button className="demo-load" onClick={load} disabled={request==='loading'}><RefreshCw size={14}/>{request==='loading'?(lang==='ar'?'جارٍ الجلب':'Loading'):request==='success'?(lang==='ar'?'إعادة الطلب':'Request again'):(lang==='ar'?'جلب البيانات':'Fetch data')}</button><span className="request-result" role="status">{request==='success'?(lang==='ar'?`وصلت ${data?.tasks.length} مهام من ملف البيانات`:`Received ${data?.tasks.length} tasks from the data file`):request==='error'?(lang==='ar'?'تعذّر الجلب، جرّب مرة أخرى':'Could not load. Please retry.'):''}</span></div>}
     <div className="scene-caption"><h3>{t(stage.title,lang)}</h3><p>{t(stage.body,lang)}</p></div>
    </div>)}
    <span className="build-demo-note">{lang==='ar'?'تجربة تفاعلية توضيحية · بيانات محلية':'Interactive demonstration · local sample data'}</span>
   </div>
  </div>
 </section>;
}
