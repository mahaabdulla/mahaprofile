import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
const root=path.resolve('out');
const pages=['','en','ar',...['en','ar'].flatMap(lang=>['work','about','lab','contact','work/azad','work/sigil-film'].map(p=>`${lang}/${p}`))];
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
 assert.match(html,/<div[^>]*class="signature-intro"[^>]*hidden=""/,`Intro fails open in server HTML: ${page}`);
 assert.ok(!html.includes('aria-busy="true"'),'Intro must not mark the document busy');
 assert.ok(html.includes('maha:intro:zero-creation-v2'),'Current introductory sequence session key');
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
  assert.equal((html.match(/class="project project-/g)||[]).length,2,'Two actual project cards');
  assert.ok(html.includes('id=azaddigitalschool.com'),'Exact Azad application ID');
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
 for(const heading of html.matchAll(/<h[1-3]\b[^>]*>([\s\S]*?)<\/h[1-3]>/g))if(!heading[0].includes('id="beyond-title"'))assert.ok(!/\.(?:\s|$)/.test(heading[1].replace(/<[^>]*>/g,' ').trim()),`Heading punctuation: ${page}`);
 if(page==='ar')assert.ok(html.includes('أفكار تتحوّل')&&!html.includes('أبعد من الشيفرة'),'Updated Arabic hero copy');
}
assert.ok(fs.existsSync(path.join(root,'404.html')),'Missing 404 page');
for(const font of ['inter.woff2','arabic-regular.ttf','arabic-medium.ttf','arabic-semibold.ttf','mono.ttf','palestine-regular.ttf'])assert.ok(fs.statSync(path.join(root,'fonts',font)).size>1000,`Font ${font}`);
const css=fs.readdirSync(path.join(root,'_next/static/css')).map(file=>fs.readFileSync(path.join(root,'_next/static/css',file),'utf8')).join('');
assert.match(css,/\[hidden\][^{}]*\{[^}]*display:none!important/,'Hidden states must override display layouts');
assert.ok(css.includes('prefers-reduced-motion:reduce'),'Reduced motion CSS');
assert.ok(css.includes('.showcase-viewport')&&css.includes('.world-full')&&css.includes('.build-sticky'),'Signature interaction CSS is compiled');
assert.ok(css.includes('[data-motion=reduce]'),'Explicit reduced-motion alternative is compiled');
assert.ok(css.includes('.bl-expansion')&&css.includes('.bl-content-dialog')&&css.includes('.bl-gallery-ghanima'),'Beyond the Line narrative and previews are compiled');
for(const file of ['uroob-cover.png','uroob-story.png','ghanima-engineer.png','ghanima-curiosity.png'])assert.ok(fs.statSync(path.join(root,'content',file)).size>10000,`Original content asset ${file}`);
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'demo/workflow.json'),'utf8')).tasks.length,3,'Demonstration data contract');
assert.ok(css.includes('.signature-intro')&&css.includes('intro-safety-hide'),'Intro CSS safety deadline');
assert.ok(css.includes('intro-type-in')&&css.includes('intro-shape-0')&&css.includes('intro-mask-exit'),'First-paint intro sequence is compiled');
assert.ok(css.includes('--font-display-ar:Palestine'),'Actual Palestine display family');
assert.equal(createHash('sha256').update(fs.readFileSync(path.join(root,'fonts/palestine-regular.ttf'))).digest('hex'),'d87183a7f37b7873934b0800a6da1ccd0305738f5df7b46967f20de297db0db1','Verified Palestine file identity');
const og=fs.readFileSync(path.join(root,'og.png'));assert.equal(og.readUInt32BE(16),1200);assert.equal(og.readUInt32BE(20),630);
console.log(`PASS: ${pages.length} bilingual pages, ${links} internal links/assets, language metadata, headings, descriptions, anchors, ARIA controls, fonts, and 404 export.`);
