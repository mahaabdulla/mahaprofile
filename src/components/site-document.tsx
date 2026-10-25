export function SiteDocument({children,lang}:{children:React.ReactNode;lang:'en'|'ar'}){
 return <html lang={lang} dir={lang==='ar'?'rtl':'ltr'}><body>{children}</body></html>;
}
