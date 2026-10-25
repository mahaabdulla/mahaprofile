'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Pause, Play } from 'lucide-react';
import { copy, type Lang } from '@/lib/content';
import { useMotion } from './motion';

/** Whole phrases share one grid cell, so even the longest phrase reserves its space. */
export function HeroHeadline({ lang }: { lang: Lang }) {
  const root = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [onScreen, setOnScreen] = useState(true);
  const { reduced } = useMotion();
  const phrases = copy.heroPhrases[lang];

  useEffect(() => {
    const begin = () => setReady(true);
    if (!['pending', 'playing'].includes(document.documentElement.dataset.intro ?? '') || document.documentElement.dataset.introReveal === 'ready') begin();
    window.addEventListener('maha:intro-end', begin);
    const visibility = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', visibility);
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: .15 });
    if (root.current) observer.observe(root.current);
    return () => { window.removeEventListener('maha:intro-end', begin); document.removeEventListener('visibilitychange', visibility); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (reduced || matchMedia('(prefers-reduced-motion: reduce)').matches) { setPhase(0); return; }
    if (!ready || paused || !visible || !onScreen) return;
    const elements = root.current?.querySelectorAll<HTMLElement>('.hero-phrase');
    if (!elements) return;
    const next = (phase + 1) % phrases.length;
    let transition: gsap.core.Timeline | undefined;
    let wait: gsap.core.Tween | undefined;
    const ctx = gsap.context(() => {
      gsap.set(elements, { yPercent: 0, autoAlpha: 0 });
      gsap.set(elements[phase], { autoAlpha: 1 });
      wait = gsap.delayedCall(3.8, () => {
        transition = gsap.timeline({ onComplete: () => setPhase(next) })
          .to(elements[phase], { yPercent: -112, autoAlpha: 0, duration: .55, ease: 'power3.inOut' }, 0)
          .fromTo(elements[next], { yPercent: 112, autoAlpha: 1 }, { yPercent: 0, autoAlpha: 1, duration: .65, ease: 'power3.inOut' }, .08);
      });
    }, root);
    return () => { wait?.kill(); transition?.kill(); ctx.revert(); };
  }, [lang, onScreen, paused, phase, phrases, ready, reduced, visible]);

  return <div className="hero-headline" ref={root} data-phrase={phase}>
    <h1 className="hero-signature-heading" aria-label={`${copy.hero[lang][0]} ${phrases[0]}`}><span className="hero-line hero-first"><span>{copy.hero[lang][0]}</span></span><span className="hero-line second-line"><span className="hero-rotator-inner" aria-hidden="true">{phrases.map((phrase, i) => <span className="hero-phrase" data-active={phase === i ? '' : undefined} key={phrase}>{phrase}</span>)}</span></span></h1>
    <div className="hero-cycle-toolbar">{!reduced && <button className="hero-cycle-control" onClick={() => setPaused(value => !value)} aria-pressed={paused} aria-label={paused ? (lang === 'ar' ? 'تشغيل تبديل العنوان' : 'Resume headline animation') : (lang === 'ar' ? 'إيقاف تبديل العنوان' : 'Pause headline animation')}>{paused ? <Play size={12}/> : <Pause size={12}/>}<span>{lang === 'ar' ? (paused ? 'تشغيل الحركة' : 'إيقاف الحركة') : (paused ? 'Resume' : 'Pause')}</span><span className="hero-cycle-index" aria-hidden="true" dir="ltr">0{phase + 1} / 03</span></button>}</div>
  </div>;
}
