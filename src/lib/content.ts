export type Lang = 'en' | 'ar';
export type Localized = { en: string; ar: string };
export const t = (value: Localized, lang: Lang) => value[lang];
export const site = {
  name: 'MAHA',
  // Contact destinations supplied by the owner. Tracking query parameters are omitted.
  contact: {
    email: 'mahaabdulla87@gmail.com',
    github: 'https://github.com/mahaabdulla',
    linkedin: 'https://www.linkedin.com/in/maha-alattas-1478a92a3/',
    instagram: 'https://www.instagram.com/maha_devlop/',
  },
  description: { en: 'Software developer and creative programming content creator. Applications, systems, and unexpected ways to explain code.', ar: 'مطورة برمجيات وصانعة محتوى برمجي إبداعي. أبني التطبيقات والأنظمة، وأشرح أفكار البرمجة بطريقتي.' },
};
export const copy = {
  nav: { en: ['Work', 'About', 'Beyond the Line', 'Let’s talk'], ar: ['الأعمال', 'عن مها', 'خارج السطر', 'لنتحدث'] },
  role: { en: 'SOFTWARE DEVELOPER · CREATIVE PROGRAMMING CREATOR', ar: 'مطورة برمجيات · صانعة محتوى برمجي' },
  hero: { en: ['Ideas turn', 'Into experiences.'], ar: ['أفكار تتحوّل', 'إلى تجارب.'] },
  heroPhrases: { en: ['Into experiences.', 'Into applications.', 'Into reality.'], ar: ['إلى تجارب.', 'إلى تطبيقات.', 'إلى واقع.'] },
  intro: { en: 'I build applications, connect systems, and care about the details that make them work. I also create programming content that opens a different door into an idea.', ar: 'أطوّر التطبيقات، وأربط الأنظمة، وأعتني بالتفاصيل التي تجعلها تعمل كما ينبغي. وأصنع محتوى يفتح لأفكار البرمجة بابًا مختلفًا.' },
  explore: { en: 'Explore my work', ar: 'اكتشف أعمالي' },
  contact: { en: 'Get in touch', ar: 'تواصل معي' },
  selected: { en: 'Selected work', ar: 'أعمال مختارة' },
  workTitle: { en: 'More than an idea.', ar: 'أفكار ما وقفت عند الفكرة.' },
  workIntro: { en: 'Projects I helped build, from the first details to experiences people use.', ar: 'مشاريع ساهمت في بنائها، من أول التفاصيل إلى تجربة يستخدمها الناس.' },
  viewAll: { en: 'View all work', ar: 'كل الأعمال' },
  viewCase: { en: 'View project details', ar: 'تفاصيل المشروع' },
  draft: { en: 'CASE STUDY DRAFT', ar: 'مسودة دراسة حالة' },
  placeholder: { en: 'Illustrative concept · project evidence pending', ar: 'تصوّر توضيحي · بانتظار توثيق المشروع' },
  beyond: { en: 'BEYOND THE CODE', ar: 'ما وراء الشيفرة' },
  belief: { en: 'Good software starts before the first line of code', ar: 'البرمجيات الجيدة تبدأ قبل السطر الأول من الشيفرة' },
  beliefBody: { en: 'Ask better questions. Understand the people. Connect the details. Then build something that makes sense — and makes a difference.', ar: 'أطرح الأسئلة، وأفهم احتياجات الناس، وأربط التفاصيل. ثم أبني تجربة منطقية تحمل قيمة حقيقية.' },
  aboutLink: { en: 'A little about me', ar: 'المزيد عني' },
  expertise: { en: 'From the big picture\nto the small details', ar: 'من الصورة الكبيرة\nإلى أدق التفاصيل' },
  process: { en: 'A little structure\nRoom for possibility', ar: 'منهجية واضحة\nومساحة للاحتمال' },
  labEyebrow: { en: 'BEYOND THE LINE / TWO WORLDS', ar: 'خارج السطر / عالمان' },
  labTitle: { en: 'Beyond the Line.', ar: 'خارج السطر.' },
  labBody: { en: 'Beyond the Line: Aroob Al-Barmaja and Al-Oloom Al-Ghanima. Unexpected perspectives on programming, alongside my software development work.', ar: 'عُرُوب البرمجة والعلوم الغانمة؛ سلسلتان مستقلتان أشرح فيهما أفكار البرمجة من زوايا مختلفة، وأترك للفهم فرصة أن يفاجئنا.' },
  labLink: { en: 'Explore Beyond the Line', ar: 'اكتشف خارج السطر' },
  cta: { en: ['Have an idea?', "Let's see", 'where it could go.'], ar: ['عندك فكرة؟', 'خلّينا نشوف', 'إلى وين توصل.'] },
  ctaBody: { en: 'A project that needs building, a team looking for a developer, or an idea worth trying — I’d love to start with the first question.', ar: 'سواء عندك مشروع يحتاج من يبنيه، أو فريق تبحث له عن مطوّرة، أو فكرة تستحق التجربة... يسعدني نبدأ من أول سؤال.' },
  ctaAction: { en: 'Let’s begin', ar: 'خلّينا نبدأ' },
  footer: { en: 'Made with intention. Built with curiosity.', ar: 'صُنع بعناية. وبُني بفضول.' },
  menu: { en: 'Menu', ar: 'القائمة' },
  close: { en: 'Close menu', ar: 'إغلاق القائمة' },
  all: { en: 'All projects', ar: 'كل الأعمال' },
};
export const capabilities = [
  { title: {en:'Application development',ar:'تطوير التطبيقات'}, body:{en:'Interfaces that feel intuitive. Architecture that holds up behind them.',ar:'واجهات سهلة الاستخدام، ومعمارية تدعمها وتحافظ على قابليتها للتطوير.'}, tools:['Flutter','Dart','Responsive UI','API integration'], detail:{en:'From a user journey to a responsive interface, with clear boundaries between presentation, state, and data.',ar:'من رحلة المستخدم إلى الواجهة المتجاوبة، مع فصل واضح بين العرض والحالة والبيانات.'} },
  { title: {en:'Backend development',ar:'تطوير الأنظمة الخلفية'}, body:{en:'The invisible systems that make a good experience possible.',ar:'الأنظمة التي تعمل خلف الكواليس لتجعل التجربة الجيدة ممكنة.'},tools:['Node.js','Express','REST APIs','MongoDB'],detail:{en:'Thoughtful API contracts, access boundaries, input validation, and server-side logic.',ar:'عقود واضحة للواجهات البرمجية، وحدود للصلاحيات، والتحقق من المدخلات، ومنطق الخادم.'} },
  { title: {en:'Solution analysis & design',ar:'تحليل الحلول وتصميمها'}, body:{en:'Finding clarity in complexity, before making it into software.',ar:'إيجاد الوضوح وسط التعقيد، قبل تحويله إلى برمجيات.'}, tools:['Requirements','SRS','System workflows','UI/UX'],detail:{en:'Translate an ambiguous problem into user roles, workflows, constraints, and decisions a team can discuss.',ar:'تحويل المشكلة الغامضة إلى أدوار ومسارات وقيود وقرارات يمكن للفريق مناقشتها.'} },
];
export const processSteps = [
  { title:{en:'Discover',ar:'أستكشف'}, body:{en:'Listen first. Understand who we’re building for and what actually needs to change.',ar:'أستمع أولًا. أفهم لمن نبني، وما الذي يحتاج فعلًا إلى التغيير.'}, output:{en:'A focused problem statement',ar:'تحديد واضح للمشكلة'} },
  { title:{en:'Analyze',ar:'أحلّل'}, body:{en:'Map the moving parts. Turn assumptions into clear requirements and constraints.',ar:'أربط الأجزاء، وأحوّل الافتراضات إلى متطلبات وقيود واضحة.'},output:{en:'Requirements & user workflows',ar:'متطلبات ومسارات المستخدم'} },
  { title:{en:'Design',ar:'أصمّم'}, body:{en:'Make the important decisions visible. Shape the experience and the system together.',ar:'أجعل القرارات المهمة مرئية، وأصمّم التجربة والنظام معًا.'},output:{en:'Interface & architecture direction',ar:'تصوّر الواجهة والمعمارية'} },
  { title:{en:'Build',ar:'أبني'}, body:{en:'Bring the idea to life with readable code, clear boundaries, and deliberate details.',ar:'أحوّل الفكرة إلى تجربة بشيفرة مفهومة وحدود واضحة وتفاصيل مدروسة.'},output:{en:'A working, testable product',ar:'منتج يعمل ويمكن اختباره'} },
  { title:{en:'Refine',ar:'أحسّن'}, body:{en:'Test the real experience. Question the friction. Keep making it more useful.',ar:'أختبر التجربة، وأراجع نقاط التعثر، وأحسّن القيمة التي تقدمها.'},output:{en:'Validated flows & a clearer next step',ar:'مسارات مختبرة وخطوة تالية أوضح'} },
];
export type ProjectScreenshot = {
  src: string; alt: Localized; caption: Localized; width: number; height: number;
  trim?: { top: number; bottom: number };
};
export type Project = {
  slug: string; number: string; kind: 'application' | 'website';
  category: Localized; title: Localized; name: Localized; description: Localized;
  stack: string[]; role: Localized; contributionLabel?: Localized;
  url: string | null; linkLabel: Localized | null; status: Localized; overview: Localized;
  image: string; secondImage: string | null; imageAlt: Localized; imageCaption: Localized;
  gallery?: ProjectScreenshot[];
};
const diabetesScreens: {file:string;ar:string;en:string}[] = [
  {file:'splash',ar:'شاشة الانطلاق',en:'Launch screen'},
  {file:'welcome',ar:'بداية الاستخدام',en:'Welcome screen'},
  {file:'login',ar:'تسجيل الدخول',en:'Sign-in screen'},
  {file:'entry-choice',ar:'اختيار مسار الاستخدام',en:'Choose a user journey'},
  {file:'profile',ar:'الملف الصحي',en:'Health profile'},
  {file:'prediction',ar:'التنبؤ بإمكانية الإصابة بالسكري',en:'Diabetes prediction inputs'},
  {file:'dashboard',ar:'لوحة المتابعة اليومية',en:'Daily tracking dashboard'},
  {file:'glucose',ar:'متابعة الجلوكوز',en:'Glucose tracking'},
  {file:'insulin',ar:'متابعة الإنسولين',en:'Insulin tracking'},
  {file:'walking',ar:'متابعة المشي',en:'Walking activity'},
  {file:'water',ar:'متابعة شرب الماء',en:'Water intake'},
];
const nawelScreens = [
  {file:'cover.png',ar:'ناول · غيرك ليستفيد',en:'Nawel · Give so others can benefit',width:1080,height:1920,top:0,bottom:0},
  {file:'donate.jpg',ar:'إضافة تبرع بالأدوية أو المعدات الطبية',en:'Donate medicine or medical equipment'},
  {file:'catalog.jpg',ar:'استعراض الأدوية والمستلزمات',en:'Browse medicines and supplies'},
  {file:'basket.jpg',ar:'السلة وإدارة الكميات',en:'Basket and quantities',width:571,height:1280,top:48,bottom:62},
  {file:'my-medicines.jpg',ar:'قائمة أدويتي',en:'My medicines'},
  {file:'navigation.jpg',ar:'التنقل بين التبرعات والملف الشخصي',en:'Donation and profile navigation'},
  {file:'profile.jpg',ar:'عرض الملف الشخصي',en:'Profile overview'},
  {file:'edit-profile.jpg',ar:'تعديل بيانات الملف الشخصي',en:'Edit profile details'},
  {file:'catalog-light.jpg',ar:'قائمة الأدوية · عرض آخر',en:'Medicine catalog · another view'},
  {file:'basket-alternate.jpg',ar:'السلة · عرض آخر',en:'Basket · another view',width:571,height:1280,top:48,bottom:62},
  {file:'edit-profile-alternate.jpg',ar:'تعديل الملف الشخصي · عرض آخر',en:'Edit profile · another view'},
];
export const projects: Project[] = [
  {
    "slug": "azad",
    "number": "01",
    "kind": "application",
    "category": {
      "en": "APPLICATION DEVELOPMENT",
      "ar": "تطوير التطبيقات"
    },
    "title": {
      "en": "Azad\nLearning within reach",
      "ar": "أزاد\nالتعلّم في متناولك"
    },
    "name": {
      "en": "Azad",
      "ar": "تطبيق أزاد"
    },
    "description": {
      "en": "An educational application that helps students access learning content and supports continuity of education.",
      "ar": "تطبيق تعليمي يسهّل وصول الطلاب إلى المحتوى الدراسي، ويدعم استمرارية التعلّم."
    },
    "stack": [
      "Android",
      "Education"
    ],
    "role": {
      "en": "Software development as part of a team.",
      "ar": "ساهمت في التطوير البرمجي للتطبيق ضمن فريق عمل."
    },
    "url": "https://play.google.com/store/apps/details?id=azaddigitalschool.com",
    "linkLabel": {
      "en": "View on Google Play",
      "ar": "عرض على Google Play"
    },
    "status": {
      "en": "Available on Google Play",
      "ar": "متاح على Google Play"
    },
    "overview": {
      "en": "Azad is part of the Azad Education Project. It provides accessible educational content for students, including during interruptions to in-person schooling.",
      "ar": "أزاد تطبيق تابع لمشروع أزاد التعليمي، يقدّم محتوى تعليميًا متاحًا للطلاب، ويساعد على مواصلة الدراسة عند تعذّر التعليم الحضوري."
    },
    "image": "/projects/azad-screen.png",
    "secondImage": "/projects/azad-learning.png",
    "imageAlt": {
      "en": "Azad promotional screenshot published on Google Play",
      "ar": "صورة تعريفية لتطبيق أزاد منشورة على Google Play"
    },
    "imageCaption": {
      "en": "App images from the official Google Play listing",
      "ar": "صور التطبيق من صفحته الرسمية على Google Play"
    }
  },
  {
    "slug": "sigil-film",
    "number": "02",
    "kind": "website",
    "category": {
      "en": "WEB DEVELOPMENT",
      "ar": "تطوير المواقع"
    },
    "title": {
      "en": "Sigil Film\nMade for the frame",
      "ar": "Sigil Film\nشريك صناعة الصورة"
    },
    "name": {
      "en": "Sigil Film",
      "ar": "Sigil Film"
    },
    "description": {
      "en": "A website for cinema equipment, lighting, and camera movement rentals, introducing the services of Sigil Film Rental.",
      "ar": "موقع لتأجير معدات السينما والإضاءة وحلول الحركة، والتعريف بخدمات Sigil Film Rental."
    },
    "stack": [
      "Website",
      "Film rental"
    ],
    "role": {
      "en": "Software development as part of a team.",
      "ar": "ساهمت في التطوير البرمجي للموقع ضمن فريق عمل."
    },
    "url": "https://sigilfilm.com/",
    "linkLabel": {
      "en": "Visit website",
      "ar": "زيارة الموقع"
    },
    "status": {
      "en": "Live website",
      "ar": "موقع منشور"
    },
    "overview": {
      "en": "Sigil Film Rental presents film production equipment rental services. Its website introduces the company and helps visitors explore its offering and get in touch.",
      "ar": "يعرّف الموقع بخدمات Sigil Film Rental في تأجير تجهيزات الإنتاج والتصوير، ويتيح للزائر التعرّف على نشاط الشركة والتواصل معها."
    },
    "image": "/projects/sigil-film.jpg",
    "secondImage": null,
    "imageAlt": {
      "en": "Screenshot of the Sigil Film Rental website",
      "ar": "لقطة من موقع Sigil Film Rental"
    },
    "imageCaption": {
      "en": "Screenshot of the live website",
      "ar": "لقطة من الموقع المنشور"
    }
  },
  {
    slug:'diabetes-tracker', number:'03', kind:'application',
    category:{ar:'تطوير التطبيقات',en:'APPLICATION DEVELOPMENT'},
    title:{ar:'تتبع سكري\nمتابعة صحية في مكان واحد',en:'Diabetes Tracker\nDaily tracking in one place'},
    name:{ar:'تطبيق تتبع سكري',en:'Diabetes Tracker'},
    description:{ar:'تطبيق لمتابعة السكري والمؤشرات اليومية، مع مسار للتنبؤ بإمكانية الإصابة بالسكري اعتمادًا على البيانات المدخلة.',en:'An app for diabetes and daily health tracking, with a prediction flow based on entered data.'},
    stack:['Flutter','Health tracking','Prediction'],
    role:{ar:'مشروع تخرّج طوّرتُه مع زميلة باستخدام Flutter، ويجمع متابعة السكري وميزة التنبؤ بإمكانية الإصابة به.',en:'A Flutter graduation project developed with one teammate, combining diabetes tracking and a diabetes prediction feature.'},
    contributionLabel:{ar:'تطوير Flutter ضمن فريق من مطوّرتين',en:'Flutter development · two-person team'},
    url:null, linkLabel:null,
    status:{ar:'مشروع تخرّج غير منشور',en:'Unpublished graduation project'},
    overview:{ar:'يجمع «تتبع سكري» متابعة الجلوكوز والإنسولين والمشي وشرب الماء في واجهة عربية، مع ملف صحي وتذكيرات ومسار لإدخال البيانات والتنبؤ بإمكانية الإصابة بالسكري. نفّذتُ المشروع مع زميلة كمشروع تخرّج باستخدام Flutter. التطبيق غير منشور، وهذه لقطات أصلية من واجهاته.',en:'An Arabic mobile app bringing together glucose, insulin, walking and water tracking, with a health profile, reminder screens and a diabetes prediction input flow. Built with one teammate as a Flutter graduation project. The app is unpublished; the gallery shows original screenshots of its interfaces.'},
    image:'/projects/diabetes-tracker/splash.jpg',secondImage:null,
    imageAlt:{ar:'شاشة الانطلاق في تطبيق تتبع سكري',en:'Launch screen in the Arabic Diabetes Tracker app'},
    imageCaption:{ar:'لقطات أصلية من مشروع التخرّج · التطبيق غير منشور',en:'Original graduation-project screenshots · app not published'},
    gallery:diabetesScreens.map(screen=>({src:`/projects/diabetes-tracker/${screen.file}.jpg`,width:482,height:1080,trim:{top:40,bottom:52},alt:{ar:`${screen.ar} في تطبيق تتبع سكري`,en:`${screen.en} in the Arabic Diabetes Tracker app`},caption:{ar:screen.ar,en:screen.en}})),
  },
  {
    slug:'nawel',number:'04',kind:'application',
    category:{ar:'تطوير التطبيقات',en:'APPLICATION DEVELOPMENT'},
    title:{ar:'ناول\nغيرك ليستفيد',en:'Nawel\nGive so others can benefit'},
    name:{ar:'تطبيق ناول',en:'Nawel'},
    description:{ar:'تطبيق خيري للتبرع بالأدوية والأدوات الطبية للمحتاجين، طوّرتُه كمشروع في مخيم تدريب Flutter.',en:'A charitable app for donating medicine and medical equipment to people in need, developed as a Flutter bootcamp project.'},
    stack:['Flutter','Donations','Medical supplies'],
    role:{ar:'مشروع مخيم تدريب Flutter لمدة شهرين ونصف، بإشراف المهندس مختار غالب.',en:'A project from a two-and-a-half-month Flutter bootcamp, supervised by Engineer Mukhtar Ghaleb.'},
    contributionLabel:{ar:'تطوير Flutter · مشروع مخيم تدريبي',en:'Flutter development · bootcamp project'},
    url:null,linkLabel:null,
    status:{ar:'مشروع تدريبي غير منشور',en:'Unpublished bootcamp project'},
    overview:{ar:'«ناول» تطبيق خيري يهدف إلى تسهيل التبرع بالأدوية والأدوات الطبية للمحتاجين. تتضمن واجهاته إضافة التبرعات، واستعراض الأدوية والمستلزمات، وإدارة السلة والكميات والملف الشخصي. طوّرتُه كمشروع في مخيم تدريب Flutter استمر شهرين ونصف بإشراف المهندس مختار غالب. التطبيق غير منشور، والمعرض يعرض صوره الأصلية.',en:'Nawel is a charitable app designed to make it easier to donate medicine and medical equipment to people in need. Its interfaces cover adding donations, browsing medicines and supplies, managing basket quantities, and editing a profile. I developed it as a project during a two-and-a-half-month Flutter bootcamp supervised by Engineer Mukhtar Ghaleb. The app is unpublished; the gallery contains its original images.'},
    image:'/projects/nawel/cover.png',secondImage:null,
    imageAlt:{ar:'غلاف تطبيق ناول الخيري · غيرك ليستفيد',en:'Nawel charitable app cover · Give so others can benefit'},
    imageCaption:{ar:'صور أصلية من مشروع مخيم Flutter · التطبيق غير منشور',en:'Original Flutter bootcamp project images · app not published'},
    gallery:nawelScreens.map(screen=>({src:`/projects/nawel/${screen.file}`,width:screen.width??720,height:screen.height??1612,trim:{top:screen.top??60,bottom:screen.bottom??79},alt:{ar:`${screen.ar} في تطبيق ناول`,en:`${screen.en} in the Arabic Nawel app`},caption:{ar:screen.ar,en:screen.en}})),
  }
];

export function projectScreenshots(project:Project):ProjectScreenshot[]{
  if(project.gallery?.length)return project.gallery;
  const screenshot=(src:string):ProjectScreenshot=>({src,alt:project.imageAlt,caption:project.imageCaption,width:project.kind==='website'?1280:600,height:project.kind==='website'?720:1200});
  return [screenshot(project.image),...(project.secondImage?[screenshot(project.secondImage)]:[])];
}

export const beyondLine = {
  "title": {
    "ar": "خارج السطر.",
    "en": "Beyond the Line."
  },
  "lead": {
    "ar": "مو كل أفكاري تنتهي عند آخر سطر كود.",
    "en": "Not all my ideas end with the last line of code."
  },
  "description": {
    "ar": "بعضها يصير حكاية، وبعضها يبدأ بسؤال غريب، وبعضها يربط أشياء ما قد خطر ببالنا إنها تجتمع!",
    "en": "Some become stories. Others begin with unexpected questions. And some connect things you would never imagine belonging together."
  },
  "bridge": {
    "ar": "هنا أشارك البرمجة بطريقتي، من «عُرُوب البرمجة» إلى «العلوم الغانمة».",
    "en": "This is where I explore programming my way — through Aroob Al-Barmaja and Al-Oloom Al-Ghanima."
  },
  "cta": {
    "ar": "اكتشف المحتوى",
    "en": "Explore the Content"
  }
};

export const labSeries = [
  {
    "id": "uroob",
    "name": {
      "ar": "عُرُوب البرمجة",
      "en": "Aroob Al-Barmaja"
    },
    "tagline": {
      "ar": "للشيفرة من حكايات العرب نصيب.",
      "en": "Where Arabic stories meet code."
    },
    "body": {
      "ar": "بين حكايات العرب وأشعارهم، أبحث عن مفاهيم برمجية لم نتوقع أن نجدها هناك، وأعيد تقديمها بأسلوب يجمع أصالة الحكاية وحداثة التقنية.",
      "en": "Exploring programming concepts through Arabic literature, poetry, history, and storytelling."
    },
    "lens": {
      "ar": "أدب / شعر / تاريخ / شيفرة",
      "en": "LITERATURE / POETRY / HISTORY / CODE"
    }
  },
  {
    "id": "ghanima",
    "name": {
      "ar": "العلوم الغانمة",
      "en": "Al-Oloom Al-Ghanima"
    },
    "tagline": {
      "ar": "البرمجة... من حيث لا تتوقع!",
      "en": "Programming, from unexpected angles."
    },
    "body": {
      "ar": "مواضيع برمجية أقدّمها من زوايا غير مألوفة؛ مرة بمثل شعبي، ومرة بموقف نعرفه، ومرة بفكرة غريبة تربط أشياء ما نتوقع أنها تجتمع.",
      "en": "Reimagining programming topics through surprising connections, unconventional examples, and engaging storytelling."
    },
    "lens": {
      "ar": "سؤال / تجربة / صلة غير متوقّعة",
      "en": "QUESTIONS / EXPERIMENTS / UNEXPECTED CONNECTIONS"
    }
  }
];

export const blueprint = [
{"verb":"THINK","label":{"ar":"أفهم","en":"Think"},"eyebrow":{"ar":"تحليل المتطلبات","en":"REQUIREMENTS ANALYSIS"},"example":{"ar":"من سيستخدم المنتج؟ ما الذي يحتاجه؟ وما السؤال الذي يستحق أن نبدأ منه؟","en":"Who will use it? What do they need? Find the question that gives the product a clear purpose."}},
{"verb":"BUILD","label":{"ar":"أبني","en":"Build"},"eyebrow":{"ar":"تطوير التطبيقات","en":"APPLICATION DEVELOPMENT"},"example":{"ar":"أحوّل المتطلبات إلى واجهة تستجيب، ومنطق يربطها بالبيانات، وتفاصيل تجعل التجربة متماسكة.","en":"Turn requirements into a responsive interface, connect it to data, and make the details work together."}},
{"verb":"CREATE","label":{"ar":"أحكي","en":"Create"},"eyebrow":{"ar":"محتوى برمجي إبداعي","en":"CREATIVE PROGRAMMING CONTENT"},"example":{"ar":"أبدأ بحكاية أو سؤال غير متوقّع، وأصل منه إلى شرح يجعل الفكرة البرمجية أقرب.","en":"Start with a story or an unexpected question, and follow it to a clearer way of understanding code."}}
];
