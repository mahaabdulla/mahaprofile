import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
const root=path.resolve('out');
const pages=['','en','ar',...['en','ar'].flatMap(lang=>['work','about','lab','contact','work/azad','work/sigil-film','work/diabetes-tracker','work/nawel'].map(p=>`${lang}/${p}`))];
const approvedContacts=new Set(['mailto:mahaabdulla87@gmail.com','https://github.com/mahaabdulla','https://www.linkedin.com/in/maha-alattas-1478a92a3/','https://www.instagram.com/maha_devlop/']);
const approvedProjects=new Set(['https://play.google.com/store/apps/details','https://sigilfilm.com/']);
const siteOrigin=new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://127.0.0.1:4173').origin;
let links=0;
for(const page of pages){
 const file=path.join(root,page,'index.html');assert.ok(fs.existsSync(file),`Missing page ${page}`);
 const html=fs.readFileSync(file,'utf8');const lang=page.startsWith('ar')?'ar':'en';
 assert.match(html,new RegExp(`<html lang="${lang}" dir="${lang==='ar'?'rtl':'ltr'}"`),`Document locale: ${page}`);
 assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,`One h1: ${page}`);
 assert.match(html,/<title>[^<]+<\/title>/,`Title: ${page}`);
 assert.match(html,/<meta name="description" content="[^"]+"/,`Description: ${page}`);
 assert.ok(!html.includes('class="signature-intro"'),'No blocking introductory overlay');
 assert.ok(!html.includes('aria-busy="true"'),'Intro must not mark the document busy');
 assert.ok(!/href="(?:|#|null|undefined)"/.test(html),'No empty or placeholder project destinations');
 assert.ok(html.includes('maha:hero:impossible-v1'),'Current Hero session key');
 assert.ok(html.includes('class="site-logo-image"')&&html.includes('/brand/maha-logo.png'),'Original navbar artwork');
 assert.ok(!/class="(?:hero-cycle-control|motion-toggle|scroll-hint|showcase-controls|bl-preview-controls|bl-dialog-controls)"/.test(html),'Redundant controls removed');
 assert.ok(html.includes('display:block!important}.desktop-nav'),'No-JavaScript streamed content fallback');
 const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for(const match of html.matchAll(/\b(?:href|src)="([^"?#]*)(?:\?[^"#]*)?(?:#([^"]*))?"/g)){
  const [,url,fragment]=match;if(/^https?:/.test(url)&&new URL(url).origin===siteOrigin){assert.ok(fs.existsSync(path.join(root,decodeURIComponent(new URL(url).pathname))),`Broken absolute internal link: ${url}`);links++;continue;}if(/^(https?:|mailto:)/.test(url)){assert.ok((approvedContacts.has(url)||approvedProjects.has(url)),`Unapproved external destination: ${url}`);continue;}if(url.startsWith('data:'))continue;
  if(url.startsWith('/')){const target=path.join(root,decodeURIComponent(url));assert.ok(fs.existsSync(target),`Broken asset/link ${url} from ${page}`);links++;}
  if(!url&&fragment)assert.ok(ids.has(fragment),`Broken anchor #${fragment} on ${page}`);
 }
 for(const match of html.matchAll(/\baria-controls="([^"]+)"/g))assert.ok(ids.has(match[1]),`Missing ARIA target ${match[1]} on ${page}`);
 if(page.endsWith('/work')||['','en','ar'].includes(page)){
  assert.ok(html.includes('تطبيق أزاد')||html.includes('Azad'),'Azad card');assert.ok(html.includes('Sigil Film'),'Sigil card');
  assert.ok(!/CASE STUDY DRAFT|مسودة دراسة حالة|shipment-management|course-management|system-analysis/.test(html),'Remove old sample projects');
  assert.equal((html.match(/class="project project-/g)||[]).length,4,'Four actual project cards');
  assert.ok(html.includes('id=azaddigitalschool.com'),'Exact Azad application ID');
  const graduationCard=html.match(/<article class="project project-03">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(graduationCard&&graduationCard.includes('Flutter'),'Flutter graduation project card');
  assert.ok(!graduationCard.includes('project-external'),'Unpublished project has no fake external action');
  assert.ok(graduationCard.includes(lang==='ar'?'مشروع تخرّج غير منشور':'Unpublished graduation project'),'Honest unpublished status');
  const nawelCard=html.match(/<article class="project project-04">([\s\S]*?)<\/article>/)?.[1];
  assert.ok(nawelCard&&nawelCard.includes('Flutter')&&nawelCard.includes('/work/nawel/'),'Nawel bootcamp project card');
  assert.ok(!nawelCard.includes('project-external'),'Unpublished Nawel has no external action');
  assert.ok(nawelCard.includes(lang==='ar'?'مشروع تدريبي غير منشور':'Unpublished bootcamp project'),'Nawel unpublished status');
 }
 if(page.endsWith('/work/diabetes-tracker')){
  assert.ok(html.includes('/projects/diabetes-tracker/splash.jpg'),'Owner-supplied launch screen first');
  assert.ok(html.includes(lang==='ar'?'ضمن فريق من مطوّرتين':'two-person team'),'Confirmed two-person contribution');
  assert.ok(html.includes('11'),'Full screenshot gallery count');
  assert.ok(html.includes('project-screen-crop'),'Clean phone screenshot framing');
 }
 if(page.endsWith('/work/nawel')){
  assert.ok(html.includes('/projects/nawel/cover.png'),'Original Nawel cover');
  assert.ok(html.includes(lang==='ar'?'المهندس مختار غالب':'Engineer Mukhtar Ghaleb'),'Confirmed bootcamp supervisor');
  assert.ok(html.includes(lang==='ar'?'شهرين ونصف':'two-and-a-half-month'),'Confirmed bootcamp duration');
  assert.ok(html.includes(lang==='ar'?'مشروع تدريبي غير منشور':'Unpublished bootcamp project'),'Nawel publication status');
  assert.ok(html.includes('11')&&html.includes('project-screen-crop'),'Complete original-image gallery');
  assert.ok(html.includes(lang==='ar'?'بيانات توضيحية':'illustrative data'),'Refinements are identified as presentation concepts');
 }
 if(page.endsWith('/lab')||['','en','ar'].includes(page)){
  assert.ok(html.includes('aria-labelledby="bl-title-uroob"')&&html.includes('aria-labelledby="bl-title-ghanima"'),'Two independent Beyond the Line showcases');
  assert.ok(html.includes('instagram-action'),'Prominent Creative Lab Instagram link');
  assert.ok(html.includes('id="creative-lab"')&&html.includes('id="beyond-line"'),'Old and new section anchors remain available');
  assert.ok(html.includes('aria-label="'+(lang==='ar'?'خارج السطر.':'Beyond the Line.')+'"'),'Localized signature title');
  assert.ok(html.includes('/content/uroob-cover.png')&&html.includes('/content/ghanima-engineer.png'),'Actual original series covers');
  assert.ok(!html.includes('غلاف المنشور غير متوفر'),'Supplied Ghanima covers replace the placeholder');
  assert.equal((html.match(/class="bl-content-dialog"/g)||[]).length,2,'Each series has an accessible preview');
 }
 if(['','en','ar','en/about','ar/about'].includes(page)){
  assert.ok(html.includes('build-scene-3')&&html.includes('demo-load'),'Four functional build stages');
 }
 if(page.endsWith('/contact')){
  for(const href of approvedContacts)assert.ok(html.includes('href="'+href+'"'),`Missing contact ${href} on ${page}`);
  assert.ok(!html.includes('السيرة الذاتية')&&!html.includes('Details forthcoming'),'Old contact placeholders must be removed');
 }
 assert.ok(!html.includes('class="orbit')&&!html.includes('class="hero-orbit"')&&!html.includes('class="contact-star"'),'Removed atom mark and oversized contact star');
 assert.ok(html.includes('contact-journey'),'Signature contact journey');
 assert.ok(html.includes('contact-cta'),'Usable contact action');
 const contactHeading=html.match(/<h[12][^>]*class="contact-signature-heading"[^>]*>([\s\S]*?)<\/h[12]>/)?.[1];
 assert.ok(contactHeading,'Editorial Contact heading');
 const contactLines=[...contactHeading.matchAll(/class="contact-line-inner">([^<]+)<\/span>/g)].map(match=>match[1].replaceAll('&#x27;',"'").replaceAll('&#39;',"'"));
 assert.deepEqual(contactLines,lang==='ar'?['عندك فكرة؟','خلّينا نشوف','إلى وين توصل.']:['Have an idea?',"Let's see",'where it could go.'],'Exact three-line Contact copy');
 if(['','en','ar'].includes(page)){
  for(const phrase of lang==='ar'?['إلى تجارب.','إلى تطبيقات.','إلى واقع.']:['Into experiences.','Into applications.','Into reality.'])assert.ok(html.includes(phrase),'Complete localized rotating phrase');
  assert.equal((html.match(/class="hero-phrase"/g)||[]).length,3,'Three intact rotating phrases');
  assert.ok(!html.includes('hero-phrase-edge'),'Former sweep replaced by actual typographic fragments');
  const fragments=[...html.matchAll(/class="hero-type-fragment"[^>]*>([^<]+)<\/span>/g)].map(match=>match[1]);
  assert.deepEqual(fragments,(lang==='ar'?['إلى تجارب.','إلى تطبيقات.','إلى واقع.']:['Into experiences.','Into applications.','Into reality.']).flatMap(phrase=>Array(8).fill(phrase)),'Each fragment renders a complete shaped phrase');
  assert.equal((html.match(/class="hero-phrase-ink"/g)||[]).length,3,'Uncut resting typography and no-JS fallback');
  if(lang==='en')assert.ok(html.includes('Ideas turn'),'Updated English Hero first line');
 }
 if(page.endsWith('/about'))assert.ok(html.includes('thinking-blueprint')&&html.includes('data-blueprint-scene="2"'),'Interactive Think Build Create blueprint');
 for(const heading of html.matchAll(/<h[1-3]\b[^>]*>([\s\S]*?)<\/h[1-3]>/g))if(!/id="beyond-title"|hero-signature-heading|work-signature-heading|contact-signature-heading/.test(heading[0]))assert.ok(!/\.(?:\s|$)/.test(heading[1].replace(/<[^>]*>/g,' ').trim()),`Heading punctuation: ${page}`);
 if(page==='ar')assert.ok(html.includes('أفكار تتحوّل')&&!html.includes('أبعد من الشيفرة'),'Updated Arabic hero copy');
}
assert.ok(fs.existsSync(path.join(root,'404.html')),'Missing 404 page');
for(const font of ['inter.woff2','arabic-regular.ttf','arabic-medium.ttf','arabic-semibold.ttf','mono.ttf','palestine-regular.ttf'])assert.ok(fs.statSync(path.join(root,'fonts',font)).size>1000,`Font ${font}`);
const css=fs.readdirSync(path.join(root,'_next/static/css')).map(file=>fs.readFileSync(path.join(root,'_next/static/css',file),'utf8')).join('');
assert.match(css,/\[hidden\][^{}]*\{[^}]*display:none!important/,'Hidden states must override display layouts');
assert.ok(css.includes('prefers-reduced-motion:reduce'),'Reduced motion CSS');
assert.ok(css.includes('.showcase-viewport')&&css.includes('.world-full')&&css.includes('.build-sticky'),'Signature interaction CSS is compiled');
assert.ok(css.includes('height:340svh')&&css.includes('.build-journey:not(.build-reduced) .build-sticky'),'Mobile native-scroll build story is compiled');
assert.ok(css.includes('.project-screen-crop')&&css.includes('.project-gallery-caption'),'Expanded screenshot gallery CSS is compiled');
for(const name of ['dashboard','welcome','login','entry-choice','profile','prediction','glucose','insulin','walking','water','splash']){
 const file=`projects/diabetes-tracker/${name}.jpg`;const exported=fs.readFileSync(path.join(root,file));
 assert.ok(exported.length>1000,`Original screenshot ${name}`);
 assert.ok(exported.equals(fs.readFileSync(path.join('public',file))),`Screenshot exported unchanged: ${name}`);
}
for(const name of fs.readdirSync('public/projects/nawel').filter(name=>/\.(png|jpg)$/.test(name))){
 const file=`projects/nawel/${name}`;
 assert.ok(fs.readFileSync(path.join(root,file)).equals(fs.readFileSync(path.join('public',file))),`Nawel image exported unchanged: ${name}`);
}
const nawelCover=fs.readFileSync('public/projects/nawel/cover.png');
assert.equal(createHash('sha256').update(nawelCover).digest('hex'),'6b9e37495dd191c293b7552e6c96ec31039120d241f673d6ee5050954476d17d','Approved Nawel splash stays byte-identical');
const refinedScreens=fs.readdirSync('public/projects/nawel/refined').filter(name=>name.endsWith('.webp'));
assert.equal(refinedScreens.length,10,'All ten non-splash Nawel screens refined');
const clientScripts=fs.readdirSync(path.join(root,'_next/static/chunks'),{recursive:true}).filter(name=>name.endsWith('.js')).map(name=>fs.readFileSync(path.join(root,'_next/static/chunks',name),'utf8')).join('');
for(const name of refinedScreens){
 const file=`projects/nawel/refined/${name}`;
 assert.ok(clientScripts.includes(`refined/${name}`),`Refined screen wired into client gallery: ${name}`);
 assert.ok(fs.readFileSync(path.join(root,file)).equals(fs.readFileSync(path.join('public',file))),`Refined Nawel screen exported unchanged: ${name}`);
}
assert.ok(css.includes('--project-screen-ratio'),'Original galleries accommodate different screenshot proportions');
assert.ok(css.includes('[data-motion=reduce]'),'Explicit reduced-motion alternative is compiled');
assert.ok(css.includes('.bl-expansion')&&css.includes('.bl-content-dialog')&&css.includes('.bl-gallery-ghanima'),'Beyond the Line narrative and previews are compiled');
for(const file of ['uroob-cover.png','uroob-story.png','ghanima-engineer.png','ghanima-curiosity.png'])assert.ok(fs.statSync(path.join(root,'content',file)).size>10000,`Original content asset ${file}`);
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'demo/workflow.json'),'utf8')).tasks.length,3,'Demonstration data contract');
assert.ok(css.includes('hero-type-first')&&css.includes('hero-shell')&&css.includes('hero-art'),'First-paint Hero sequence is compiled');
assert.ok(css.includes('.gallery-surface .gallery-navigation')&&css.includes('.gallery-surface:focus-within'),'Image-local, focus-accessible gallery navigation');
const logo=fs.readFileSync(path.join(root,'brand/maha-logo.png'));assert.equal(logo.readUInt32BE(16),500);assert.equal(logo.readUInt32BE(20),500);assert.equal(logo[25],6,'Original logo keeps its alpha channel');
assert.equal(createHash('sha256').update(logo).digest('hex'),createHash('sha256').update(fs.readFileSync('public/brand/maha-logo.png')).digest('hex'),'Original logo exported unchanged');
assert.ok(css.includes('--font-display-ar:Palestine'),'Actual Palestine display family');
assert.equal(createHash('sha256').update(fs.readFileSync(path.join(root,'fonts/palestine-regular.ttf'))).digest('hex'),'d87183a7f37b7873934b0800a6da1ccd0305738f5df7b46967f20de297db0db1','Verified Palestine file identity');
const og=fs.readFileSync(path.join(root,'og.png'));assert.equal(og.readUInt32BE(16),1200);assert.equal(og.readUInt32BE(20),630);
console.log(`PASS: ${pages.length} bilingual pages, ${links} internal links/assets, language metadata, headings, descriptions, anchors, ARIA controls, fonts, and 404 export.`);
