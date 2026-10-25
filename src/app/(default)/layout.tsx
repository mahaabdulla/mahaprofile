import '@/app/globals.css';
import { SiteDocument } from '@/components/site-document';
export { metadata } from '@/lib/metadata';
export const viewport = { themeColor: '#111114' };
export default function Layout({children}:{children:React.ReactNode}){return <SiteDocument lang="en">{children}</SiteDocument>;}
