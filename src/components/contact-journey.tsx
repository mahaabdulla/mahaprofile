'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMotion } from './motion';

/** The travelling point follows the actual SVG path; no additional motion plugin. */
export function ContactJourney() {
  const root = useRef<SVGSVGElement>(null);
  const { reduced } = useMotion();
  useEffect(() => {
    if (reduced || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const element = root.current;
    const path = element?.querySelector<SVGPathElement>('.contact-idea-path');
    const point = element?.querySelector<SVGCircleElement>('.contact-idea-point');
    if (!element || !path || !point) return;
    gsap.registerPlugin(ScrollTrigger);
    const length = path.getTotalLength();
    const position = { progress: 0 };
    const ctx = gsap.context(() => {
      gsap.set(point, { attr: { cx: 24, cy: 34 } });
      gsap.timeline({ scrollTrigger: { trigger: element.closest('.contact')?.querySelector('.contact-signature-heading'), start: 'top 88%', once: true } })
        .fromTo(path, { attr: { 'stroke-dashoffset': 1 } }, { attr: { 'stroke-dashoffset': 0 }, duration: .9, ease: 'power2.inOut' }, .18)
        .to(position, { progress: 1, duration: .9, ease: 'power2.inOut', onUpdate: () => { const p = path.getPointAtLength(length * position.progress); point.setAttribute('cx', String(p.x)); point.setAttribute('cy', String(p.y)); } }, .18);
    }, element);
    return () => { ctx.revert(); point.setAttribute('cx', '245'); point.setAttribute('cy', '240'); };
  }, [reduced]);
  return <svg ref={root} className="contact-journey" viewBox="0 0 280 280" fill="none" aria-hidden="true"><path className="contact-idea-guide" d="M24 34C238 -20 276 134 137 132C25 131 32 240 245 240"/><path className="contact-idea-path" pathLength="1" strokeDasharray="1" strokeDashoffset="0" d="M24 34C238 -20 276 134 137 132C25 131 32 240 245 240"/><circle className="contact-idea-start" cx="24" cy="34" r="4"/><circle className="contact-idea-point" cx="245" cy="240" r="5"/><path className="contact-idea-arrow" d="M234 229L245 240L234 251"/></svg>;
}
