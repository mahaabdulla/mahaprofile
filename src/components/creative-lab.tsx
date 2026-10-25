'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, ArrowUpRight, Instagram, MoveUpRight } from 'lucide-react';
import { type Lang, beyondLine, labSeries, site, t } from '@/lib/content';
import { useMotion } from './motion';

const readings = [
  { image: '/content/uroob-cover.png', alt: { ar: 'غلاف أصلي: الكرّ والفرّ في البرمجة — عُرُوب البرمجة', en: 'Original Arabic cover: Al-Karr wa Al-Farr in programming, Aroob Al-Barmaja' } },
  { image: '/content/uroob-story.png', alt: { ar: 'صفحة أصلية من السلسلة تشرح الكرّ والفرّ في حكايات العرب', en: 'Original series page introducing Al-Karr wa Al-Farr through Arabic history' } },
];

function UroobPreview({ lang }: { lang: Lang }) {
  const [page, setPage] = useState(0);
  const current = readings[page];
  return <figure className="bl-preview bl-manuscript">
    <div className="bl-preview-top mono"><span>{lang === 'ar' ? 'من ملفات السلسلة الأصلية' : 'FROM THE ORIGINAL SERIES FILES'}</span><span dir="ltr">01 / 02</span></div>
    <div className="bl-manuscript-stage">
      <div className="bl-sheet-outline" aria-hidden="true" />
      <div className="bl-original-page"><Image src={current.image} alt={t(current.alt, lang)} width={1080} height={1350} sizes="(max-width: 760px) 75vw, 32vw" loading="lazy" /></div>
    </div>
    <div className="bl-preview-controls">
      <button onClick={() => setPage(p => (p + readings.length - 1) % readings.length)} aria-label={lang === 'ar' ? 'الصفحة السابقة من عُرُوب البرمجة' : 'Previous Aroob page'}><ArrowLeft size={18} /></button>
      <figcaption aria-live="polite" aria-atomic="true"><span>{lang === 'ar' ? 'الكرّ والفرّ في البرمجة' : 'Al-Karr wa Al-Farr in programming'}</span><small dir="ltr">0{page + 1} / 0{readings.length}</small></figcaption>
      <button onClick={() => setPage(p => (p + 1) % readings.length)} aria-label={lang === 'ar' ? 'الصفحة التالية من عُرُوب البرمجة' : 'Next Aroob page'}><ArrowRight size={18} /></button>
    </div>
  </figure>;
}

function GhanimaPreview({ lang }: { lang: Lang }) {
  const [angle, setAngle] = useState(0);
  const current = beyondLine.angles[angle];
  return <figure className="bl-preview bl-connections">
    <div className="bl-preview-top mono"><span>{lang === 'ar' ? 'كل زاوية تفتح فكرة' : 'A DIFFERENT WAY INTO AN IDEA'}</span><MoveUpRight size={17} aria-hidden="true" /></div>
    <div className="bl-connection-stage" data-angle={angle}>
      <div className="bl-angle-mark" aria-hidden="true">{angle === 0 ? '↗' : angle === 1 ? '↔' : '↳'}</div>
      <svg className="bl-connection-lines" viewBox="0 0 400 350" fill="none" aria-hidden="true"><path d="M40 85H130Q200 85 200 175T270 265H360"/><path d="M360 85H270Q200 85 200 175T130 265H40"/><circle cx="200" cy="175" r="70"/></svg>
      <div className="bl-angle-question">{t(current.question, lang)}</div>
      <div className="bl-angle-answer" aria-live="polite" aria-atomic="true"><span className="mono">{lang === 'ar' ? 'ومنها إلى' : 'A WAY INTO'}</span><strong>{t(current.concept, lang)}</strong></div>
      <span className="bl-node bl-node-a" aria-hidden="true"/><span className="bl-node bl-node-b" aria-hidden="true"/>
    </div>
    <div className="bl-angle-controls" role="group" aria-label={lang === 'ar' ? 'اختر زاوية للفكرة' : 'Choose an angle'}>{beyondLine.angles.map((item, i) => <button key={i} aria-pressed={angle === i} onClick={() => setAngle(i)}><span className="mono">0{i + 1}</span>{t(item.label, lang)}</button>)}</div>
    <p className="bl-angle-explanation">{t(current.body, lang)}</p>
    <figcaption className="bl-placeholder-note">{lang === 'ar' ? 'تجربة تفاعلية · غلاف المنشور غير متوفر' : 'Interactive study · published cover not supplied'}</figcaption>
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
        const timeline = gsap.timeline({ scrollTrigger: { trigger: '.bl-break-scene', start: 'top 78%', end: 'bottom 35%', scrub: .55, invalidateOnRefresh: true } });
        timeline.fromTo('.bl-code-line', { scaleX: .12 }, { scaleX: 1, duration: .38, ease: 'none' }, 0)
          .fromTo('.bl-break-word', { yPercent: 0, xPercent: 0, rotate: 0 }, { yPercent: mobile ? -30 : -43, xPercent: direction * (mobile ? 3 : 7), rotate: direction * -4, duration: .55, ease: 'power2.inOut' }, .18)
          .fromTo('.bl-line-word', { yPercent: 0 }, { yPercent: 7, duration: .4, ease: 'power2.inOut' }, .55)
          .fromTo('.bl-expansion-path', { attr: { d: 'M0 100 C250 100 250 100 500 100 S750 100 1000 100' } }, { attr: { d: 'M0 100 C250 100 250 15 500 100 S750 185 1000 100' }, duration: .6, ease: 'power2.inOut' }, .48)
          .fromTo('.bl-editor-cursor', { opacity: .8 }, { opacity: 0, duration: .15 }, .52)
          .fromTo('.bl-world-marker', { y: 12, opacity: .25 }, { y: 0, opacity: 1, stagger: .08, duration: .35 }, .76);
        gsap.utils.toArray<HTMLElement>('.bl-series').forEach(article => {
          gsap.fromTo(article.querySelector('.bl-preview'), { y: mobile ? 18 : 45, clipPath: 'inset(5% 0% 0% 0%)' }, { y: 0, clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: article, start: 'top 90%', end: mobile ? 'top 15%' : 'top 20%', scrub: .6 } });
          gsap.fromTo(article.querySelector('.bl-series-rule'), { scaleX: .12 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: article, start: 'top 90%', end: 'top 30%', scrub: .6 } });
        });
        gsap.fromTo('.bl-exit-thread', { scaleX: .25 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.bl-outro', start: 'top 95%', end: 'top 55%', scrub: .5 } });
      });
    }, root);
    return () => { mm.revert(); ctx.revert(); };
  }, [lang, reduced]);

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
      <div className="bl-story"><div className="bl-series-kicker mono"><span>0{i + 1} /</span><span>{lang === 'ar' ? 'سلسلة مستقلة' : 'AN INDEPENDENT SERIES'}</span></div><div className="bl-series-rule"/><SeriesHeading id={`bl-title-${series.id}`}>{t(series.name, lang)}</SeriesHeading><p className="bl-tagline">{t(series.tagline, lang)}</p><p className="bl-description">{t(series.body, lang)}</p><a href={site.contact.instagram} className="bl-series-link" target="_blank" rel="noopener noreferrer"><Instagram size={18}/><span>{lang === 'ar' ? `اكتشف ${series.name.ar}` : `Explore ${series.name.en}`}</span><ArrowUpRight size={20}/></a><span className="bl-world-footnote mono">{t(series.lens, lang)}</span></div>
      {i === 0 ? <UroobPreview lang={lang}/> : <GhanimaPreview lang={lang}/>}
    </article>)}</div>
    <div className="bl-outro"><div className="bl-exit-thread" aria-hidden="true"/><span className="mono">{lang === 'ar' ? 'زاويتان. وفضول ما يوقف عند سطر.' : 'TWO PERSPECTIVES. CURIOSITY WITHOUT AN ENDPOINT.'}</span><p>{lang === 'ar' ? 'والفكرة ترجع للسطر، بشيء جديد.' : 'Back to the code, with a different perspective.'}</p><div className="bl-outro-links"><a className="text-link" href={site.contact.instagram} target="_blank" rel="noopener noreferrer">{t(beyondLine.cta, lang)}<ArrowUpRight size={18}/></a>{!full && <Link className="text-link" href={`/${lang}/lab/`}>{lang === 'ar' ? 'المزيد من خارج السطر' : 'More from Beyond the Line'}<ArrowUpRight size={18}/></Link>}<Link className="text-link" href={`/${lang}/work/`}>{lang === 'ar' ? 'العودة إلى الأعمال البرمجية' : 'Explore my software work'}<ArrowUpRight size={18}/></Link></div></div>
  </section>;
}
