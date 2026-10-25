'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { blueprint, type Lang, t } from '@/lib/content';
import { useMotion } from './motion';

export function ThinkingBlueprint({ lang }: { lang: Lang }) {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const id = useId();
  const { reduced } = useMotion();
  useEffect(() => {
    if (reduced || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(`[data-blueprint-scene="${active}"]`, { opacity: .3, y: 8 }, { opacity: 1, y: 0, duration: .45, ease: 'power2.out' });
      gsap.fromTo('.blueprint-detail', { opacity: .6, y: 4 }, { opacity: 1, y: 0, duration: .35, ease: 'power2.out' });
    }, root);
    return () => ctx.revert();
  }, [active, reduced]);

  return <figure ref={root} className="thinking-blueprint" data-step={active} aria-labelledby={id}>
    <figcaption className="blueprint-caption mono" id={id}><span>{lang === 'ar' ? 'من الفهم إلى الأثر' : 'FROM UNDERSTANDING TO EXPRESSION'}</span><span dir="ltr">MAHA / METHOD</span></figcaption>
    <div className="blueprint-steps" role="group" aria-label={lang === 'ar' ? 'استكشف طريقتي في العمل' : 'Explore how I work'}>{blueprint.map((step, i) => <button key={step.label.en} aria-pressed={active === i} aria-controls={`${id}-detail`} onClick={() => setActive(i)} onFocus={() => setActive(i)} onPointerEnter={event => { if (event.pointerType === 'mouse') setActive(i); }}><span className="mono" dir="ltr">0{i + 1}</span><strong>{t(step.label, lang)}</strong><small>{step.verb}</small></button>)}</div>
    <div className="blueprint-drawing" aria-hidden="true">
      <svg viewBox="0 0 440 275" fill="none">
        <path className="blueprint-guide" d="M20 30H420M20 245H420M40 10V265M400 10V265"/>
        <g data-blueprint-scene="0" style={{ display: active === 0 ? undefined : 'none' }}><path className="blueprint-connector" d="M94 78H175Q208 78 208 116M94 195H175Q208 195 208 158M252 137H355"/><rect x="45" y="48" width="100" height="58" rx="2"/><rect x="45" y="166" width="100" height="58" rx="2"/><rect className="blueprint-core" x="175" y="110" width="115" height="56" rx="2"/><path d="M330 112H397V163H330Z"/><circle cx="355" cy="137" r="4" className="blueprint-point"/><text x="95" y="83">{lang === 'ar' ? 'الناس' : 'People'}</text><text x="95" y="201">{lang === 'ar' ? 'الاحتياج' : 'The need'}</text><text x="232" y="144">{lang === 'ar' ? 'سؤال واضح' : 'A clear question'}</text></g>
        <g data-blueprint-scene="1" style={{ display: active === 1 ? undefined : 'none' }}><rect className="blueprint-core" x="65" y="35" width="310" height="205" rx="4"/><path d="M65 72H375M145 72V240M84 95H123M84 114H114M84 133H120"/><rect x="169" y="96" width="180" height="42" rx="2"/><path d="M183 110H240M183 122H285M169 165H249V211H169ZM268 165H348V211H268Z"/><path className="blueprint-connector" d="M220 240V259H405V137H375"/><circle cx="405" cy="137" r="4" className="blueprint-point"/><circle cx="83" cy="54" r="2"/><circle cx="95" cy="54" r="2"/></g>
        <g data-blueprint-scene="2" style={{ display: active === 2 ? undefined : 'none' }}><path className="blueprint-connector" d="M52 145C118 145 104 66 184 66S260 202 338 202H407"/><path d="M70 182H136V222H70ZM304 34H370V74H304Z"/><rect className="blueprint-core" x="151" y="93" width="138" height="96" rx="3"/><text x="220" y="132">{lang === 'ar' ? 'فكرة' : 'An idea'}</text><text x="220" y="159">{lang === 'ar' ? 'تستحق أن تُحكى' : 'worth sharing'}</text><path d="M172 210H265M184 222H251"/><circle cx="52" cy="145" r="4" className="blueprint-point"/><circle cx="407" cy="202" r="4" className="blueprint-point"/></g>
      </svg>
    </div>
    <div className="blueprint-detail" id={`${id}-detail`} aria-live="polite" aria-atomic="true"><span className="mono">{t(blueprint[active].eyebrow, lang)}</span><p>{t(blueprint[active].example, lang)}</p></div>
    <span className="blueprint-hint">{lang === 'ar' ? 'اختر مرحلة، وخلّ الفكرة توضّح نفسها' : 'Choose a stage. Follow the thought.'}</span>
  </figure>;
}
