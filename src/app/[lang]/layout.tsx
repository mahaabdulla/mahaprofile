import '@/app/globals.css';
import { SiteDocument } from '@/components/site-document';
export { metadata } from '@/lib/metadata';
export const viewport = { themeColor: '#111114' };
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){const {lang}=await params;return <SiteDocument lang={lang==='ar'?'ar':'en'}>{children}</SiteDocument>;}
