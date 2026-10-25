import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Portfolio } from '@/components/portfolio';
import { projects, site } from '@/lib/content';
export const dynamicParams = false;
export function generateStaticParams(){return ['en','ar'].flatMap(lang=>[[],['work'],['about'],['lab'],['contact'],...projects.map(p=>['work',p.slug])].map(slug=>({lang,slug})));}
export async function generateMetadata({params}:{params:Promise<{lang:string;slug?:string[]}>}):Promise<Metadata>{
 const {lang,slug=[]}=await params;const page=slug.join('/');const project=projects.find(p=>page===`work/${p.slug}`);
 const ar=lang==='ar';const titles:Record<string,string> = ar?{home:'أفكار تتحوّل إلى تجارب',work:'الأعمال',about:'عن مها',lab:'المختبر الإبداعي',contact:'لنتحدث'}:{home:'From ideas to experiences',work:'Work',about:'About',lab:'Creative Lab',contact:'Contact'};
 return {title:project?project.name[ar?'ar':'en']:titles[page||'home'],description:project?project.description[ar?'ar':'en']:site.description[ar?'ar':'en'],openGraph:{locale:ar?'ar_AR':'en_US',images:[{url:'/og.png',width:1200,height:630,alt:'MAHA. From ideas to experiences'}]},alternates:{languages:{en:`/en/${page}${page?'/':''}`,ar:`/ar/${page}${page?'/':''}`}}};
}
export default async function Page({params}:{params:Promise<{lang:string;slug?:string[]}>}){
 const {lang,slug=[]}=await params;if(lang!=='en'&&lang!=='ar')notFound();const page=slug.join('/')||'home';
 if(!['home','work','about','lab','contact',...projects.map(p=>`work/${p.slug}`)].includes(page))notFound();
 return <Portfolio lang={lang} page={page}/>;
}
