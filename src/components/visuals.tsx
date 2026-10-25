import Image from 'next/image';
import { Lang, Project } from '@/lib/content';

export function ProjectVisual({project,lang}:{project:Project;lang:Lang}) {
 return <div className={`project-art live-project-art ${project.kind}`} dir="ltr">
  {project.kind==='application'?<div className="azad-gallery"><Image src={project.image} alt={project.imageAlt[lang]} width={600} height={1200} unoptimized/>{project.secondImage&&<Image src={project.secondImage} alt={lang==='ar'?'صورة إضافية من صفحة أزاد على Google Play':'Additional image from Azad on Google Play'} width={600} height={1200} unoptimized/>}</div>:<div className="website-preview"><div className="preview-bar" aria-hidden="true"><span>● ● ●</span><span>sigilfilm.com</span><span>↗</span></div><Image src={project.image} alt={project.imageAlt[lang]} width={1280} height={720} unoptimized/></div>}
 </div>;
}
export function LabArt(){
 return <div className="lab-art" dir="rtl"><div className="lab-frame"><span className="lab-corner top">حكاية، فكرة، شيفرة.</span><span className="lab-book-mark">ع</span><div className="lab-orbits" aria-hidden="true"><i/><i/><i/></div><div className="lab-arabic"><span>عُرُوب</span><span>البرمجة</span></div><p>للشيفرة من حكايات العرب نصيب</p><span className="lab-corner bottom">بين منطق الآلة وبلاغة الحكاية</span></div></div>;
}
