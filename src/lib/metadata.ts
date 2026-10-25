import type { Metadata } from 'next';
export const metadata: Metadata = {
 metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://127.0.0.1:4173'),
 title:{default:'MAHA — From ideas to experiences',template:'%s — MAHA'},
 description:'Software developer and creative programming content creator. Applications, systems, and unexpected ways to explain code.',
 icons:{icon:'/icon.svg'},
 openGraph:{type:'website',title:'MAHA — From ideas to experiences',description:'Software development and creative programming content: Beyond the Line — Aroob Al-Barmaja and Al-Oloom Al-Ghanima.',images:[{url:'/og.png',width:1200,height:630,alt:'MAHA. From ideas to experiences'}]},
 twitter:{card:'summary_large_image'},robots:{index:true,follow:true},
};
