'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Instagram, Maximize2, X } from 'lucide-react';
import { type Lang, beyondLine, labSeries, site, t } from '@/lib/content';
import { useMotion } from './motion';
import { GalleryNavigation, useGalleryNavigation } from './gallery-navigation';

const readings = {
  uroob: [
    { image: '/content/uroob-cover.png', title: { ar: 'الكرّ والفرّ في البرمجة', en: 'Al-Karr wa Al-Farr in programming' }, alt: { ar: 'غلاف أصلي: الكرّ والفرّ في البرمجة — عُرُوب البرمجة', en: 'Original Arabic cover: Al-Karr wa Al-Farr in programming, Aroob Al-Barmaja' } },
    { image: '/content/uroob-story.png', title: { ar: 'في ميادين العرب', en: 'From Arabic history' }, alt: { ar: 'صفحة أصلية من السلسلة تشرح الكرّ والفرّ في حكايات العرب', en: 'Original series page introducing Al-Karr wa Al-Farr through Arabic history' } },
  ],
  ghanima: [
    { image: '/content/ghanima-engineer.png', title: { ar: 'المهندس ما يتكرر', en: 'The engineer does not repeat' }, alt: { ar: 'غلاف العلوم الغانمة المرفق من مها: المهندس ما يتكرر', en: 'MAHA’s supplied Al-Oloom Al-Ghanima cover, The engineer does not repeat, in Arabic' } },
    { image: '/content/ghanima-curiosity.png', title: { ar: 'خلّك ملقوف في البرمجة', en: 'Stay curious about programming' }, alt: { ar: 'غلاف العلوم الغانمة المرفق من مها: خلّك ملقوف في البرمجة', en: 'MAHA’s supplied Al-Oloom Al-Ghanima cover, Stay curious about programming, in Arabic' } },
  ],
};

function SeriesPreview({ lang, series }: { lang: Lang; series: keyof typeof readings }) {
  const [page, setPage] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const items = readings[series];
  const current = items[page];
  const navigation = useGalleryNavigation(items.length, lang, setPage);
  const galleryLabel = lang === 'ar' ? 'تصفّح محتوى السلسلة' : 'Browse the series';
  useEffect(() => {
    const node = dialog.current;
    return () => { if (node?.open) node.close(); };
  }, []);
  const close = () => { dialog.current?.close(); setOpen(false); };
  return <figure className={`bl-preview bl-manuscript bl-gallery-${series}`}>
    <figcaption className="bl-preview-top mono"><span>{lang === 'ar' ? 'من ملفات السلسلة الأصلية' : 'FROM THE ORIGINAL SERIES FILES'}</span></figcaption>
    <div className="bl-manuscript-stage gallery-surface" {...navigation.surfaceProps} onKeyDown={navigation.onKeyDown}>
      <div className="bl-sheet-outline" aria-hidden="true" />
      <button className="bl-original-page" aria-label={`${lang === 'ar' ? 'تكبير' : 'Enlarge'}: ${t(current.title, lang)}`} aria-haspopup="dialog" onClick={() => { dialog.current?.showModal(); setOpen(true); }}><Image src={current.image} alt={t(current.alt, lang)} width={1080} height={1350} sizes="(max-width: 760px) 75vw, 32vw" loading="lazy" draggable={false} /><span className="bl-enlarge"><Maximize2 size={15}/>{lang === 'ar' ? 'معاينة' : 'View'}</span></button>
      <GalleryNavigation lang={lang} count={items.length} previous={navigation.previous} next={navigation.next} label={galleryLabel}/>
    </div>
    <div className="bl-caption-row">
      <div className="bl-preview-caption" aria-live="polite" aria-atomic="true"><span>{t(current.title, lang)}</span><small className="sr-only">{lang === 'ar' ? `الصورة ${page + 1} من ${items.length}` : `Image ${page + 1} of ${items.length}`}</small></div>
    </div>
    <dialog ref={dialog} className="bl-content-dialog" aria-label={lang === 'ar' ? 'معاينة محتوى السلسلة' : 'Series content preview'} onClose={() => setOpen(false)} onClick={e => { if (e.target === e.currentTarget) close(); }} onKeyDown={navigation.onKeyDown}>
      <div className="bl-dialog-toolbar"><p>{t(current.title, lang)}</p><button onClick={close} aria-label={lang === 'ar' ? 'إغلاق المعاينة' : 'Close preview'} autoFocus><X size={20}/></button></div>
      <div className="bl-dialog-stage gallery-surface" {...navigation.surfaceProps}>{open && <Image src={current.image} alt={t(current.alt, lang)} width={1080} height={1350} className="bl-dialog-image" sizes="(max-width: 760px) 90vw, 600px" draggable={false} />}<GalleryNavigation lang={lang} count={items.length} previous={navigation.previous} next={navigation.next} label={galleryLabel}/></div>
      <a className="bl-dialog-profile" href={site.contact.instagram} target="_blank" rel="noopener noreferrer">{lang === 'ar' ? 'على إنستغرام' : 'On Instagram'}<ArrowUpRight size={16}/></a>
    </dialog>
  </figure>;
}

export function CreativeLab({ lang, full = false }: { lang: Lang; full?: boolean }) {
  const root = useRef<HTMLElement>(null);
  const { reduced } = useMotion();
  const Heading = full ? 'h1' : 'h2';
  const SeriesHeading = full ? 'h2' : 'h3';

  useEffect(() => {
    if (reduced || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add({ desktop: '(min-width: 761px)', mobile: '(max-width: 760px)', motion: '(prefers-reduced-motion: no-preference)' }, context => {
        if (!context.conditions?.motion) return;
        const mobile = context.conditions.mobile;
        const direction = lang === 'ar' ? 1 : -1;
        const timeline = gsap.timeline({ scrollTrigger: { trigger: '.bl-break-scene', start: full ? 'top 12%' : 'top 78%', end: full ? 'bottom 62%' : 'bottom 35%', scrub: .35, invalidateOnRefresh: true } });
        timeline.fromTo('.bl-code-line', { scaleX: .12 }, { scaleX: 1, duration: .38, ease: 'none' }, 0)
          .fromTo('.bl-break-word', { x: 0, y: 0, yPercent: 0, xPercent: 0, rotate: 0 }, { yPercent: mobile ? -30 : -43, xPercent: direction * (mobile ? 3 : 7), rotate: direction * -4, duration: .55, ease: 'power2.inOut' }, .18)
          .fromTo('.bl-line-word', { y: 0, yPercent: 0 }, { yPercent: 7, duration: .4, ease: 'power2.inOut' }, .55)
          .fromTo('.bl-expansion-path', { attr: { d: 'M0 100 C250 100 250 100 500 100 S750 100 1000 100' } }, { attr: { d: 'M0 100 C250 100 250 15 500 100 S750 185 1000 100' }, duration: .6, ease: 'power2.inOut' }, .48)
          .fromTo('.bl-editor-cursor', { scaleY: 1 }, { scaleY: 0, duration: .15 }, .52)
          .fromTo('.bl-world-marker', { y: 12, opacity: .25 }, { y: 0, opacity: 1, stagger: .08, duration: .35 }, .76);
        gsap.utils.toArray<HTMLElement>('.bl-series').forEach(article => {
          gsap.fromTo(article.querySelector('.bl-preview'), { y: mobile ? 18 : 45, clipPath: 'inset(5% 0% 0% 0%)' }, { y: 0, clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: article, start: 'top 90%', end: mobile ? 'top 15%' : 'top 20%', scrub: .4 } });
          gsap.fromTo(article.querySelector('.bl-series-rule'), { scaleX: .12 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: article, start: 'top 90%', end: 'top 30%', scrub: .6 } });
        });
        gsap.fromTo('.bl-exit-thread', { scaleX: .25 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.bl-outro', start: 'top 95%', end: 'top 55%', scrub: .35 } });
      }, root);
    }, root);
    return () => { mm.revert(); ctx.revert(); };
  }, [full, lang, reduced]);

  return <section ref={root} id="creative-lab" className={`creative-lab beyond-line ${full ? 'beyond-line-page' : ''}`} aria-labelledby="beyond-title">
    <div id="beyond-line" className="bl-anchor" />
    <div className="bl-break-scene">
      <div className="bl-section-top"><div className="eyebrow"><span className="index">{full ? '01' : '05'} /</span><span>{lang === 'ar' ? 'برمجة، بزاوية أخرى' : 'PROGRAMMING, SEEN DIFFERENTLY'}</span></div><span className="mono" dir="ltr">MAHA / OFF SCRIPT</span></div>
      <div className="bl-title-stage">
        <div className="bl-editor-note mono" aria-hidden="true"><span>01</span><span>{lang === 'ar' ? 'فكرة ← حكاية ← فهم' : 'idea → story → understanding'}</span></div>
        <div className="bl-code-line" aria-hidden="true"><i className="bl-editor-cursor" /></div>
        <svg className="bl-expansion" viewBox="0 0 1000 200" preserveAspectRatio="none" fill="none" aria-hidden="true"><path className="bl-expansion-path" d="M0 100 C250 100 250 15 500 100 S750 185 1000 100" /></svg>
        <Heading id="beyond-title" className="bl-heading" aria-label={t(beyondLine.title, lang)}><span className="bl-break-word">{lang === 'ar' ? 'خارج' : 'Beyond'}</span>{' '}<span className="bl-line-word">{lang === 'ar' ? 'السطر.' : 'the Line.'}</span></Heading>
        <div className="bl-world-markers" aria-hidden="true"><span className="bl-world-marker"><i />{lang === 'ar' ? 'حكاية / ٠١' : '01 / A STORY'}</span><span className="bl-world-marker"><i />{lang === 'ar' ? 'سؤال / ٠٢' : '02 / A QUESTION'}</span></div>
      </div>
      <div className="bl-scroll-note mono"><span>{lang === 'ar' ? 'السطر بداية، والباقي فضول' : 'THE LINE IS A BEGINNING. CURIOSITY TAKES IT FURTHER.'}</span><span aria-hidden="true">↓</span></div>
    </div>
    <div className="bl-introduction">
      <p className="bl-lead">{t(beyondLine.lead, lang)}</p>
      <div className="bl-intro-copy"><p>{t(beyondLine.description, lang)}</p><p>{t(beyondLine.bridge, lang)}</p><a className="instagram-action" href={site.contact.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20}/><span>{t(beyondLine.cta, lang)}<small dir="ltr">@maha_devlop</small></span><ArrowUpRight size={20}/></a></div>
    </div>
    <div className="bl-worlds">{labSeries.map((series, i) => <article id={series.id} key={series.id} className={`bl-series bl-${series.id}`} aria-labelledby={`bl-title-${series.id}`}>
      <div className="bl-story"><div className="bl-series-kicker mono"><span>0{i + 1} /</span><span>{lang === 'ar' ? 'سلسلة مستقلة' : 'AN INDEPENDENT SERIES'}</span></div><div className="bl-series-rule"/><SeriesHeading id={`bl-title-${series.id}`}>{t(series.name, lang)}</SeriesHeading><p className="bl-tagline">{t(series.tagline, lang)}</p><p className="bl-description">{t(series.body, lang)}</p><span className="bl-world-footnote mono">{t(series.lens, lang)}</span></div>
      <SeriesPreview lang={lang} series={i === 0 ? 'uroob' : 'ghanima'}/>
    </article>)}</div>
    <div className="bl-outro"><div className="bl-exit-thread" aria-hidden="true"/><span className="mono">{lang === 'ar' ? 'زاويتان. وفضول ما يوقف عند سطر.' : 'TWO PERSPECTIVES. CURIOSITY WITHOUT AN ENDPOINT.'}</span><p>{lang === 'ar' ? 'والفكرة ترجع للسطر، بشيء جديد.' : 'Back to the code, with a different perspective.'}</p><div className="bl-outro-links">{!full && <Link className="text-link" href={`/${lang}/lab/`}>{lang === 'ar' ? 'المزيد من خارج السطر' : 'More from Beyond the Line'}<ArrowUpRight size={18}/></Link>}<Link className="text-link" href={`/${lang}/work/`}>{lang === 'ar' ? 'العودة إلى الأعمال البرمجية' : 'Explore my software work'}<ArrowUpRight size={18}/></Link></div></div>
  </section>;
}
