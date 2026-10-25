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
  hero: { en: ['From ideas', 'to experiences'], ar: ['أفكار تتحوّل', 'إلى تجارب'] },
  intro: { en: 'I build applications, connect systems, and care about the details that make them work. I also create programming content that opens a different door into an idea.', ar: 'أطوّر التطبيقات، وأربط الأنظمة، وأعتني بالتفاصيل التي تجعلها تعمل كما ينبغي. وأصنع محتوى يفتح لأفكار البرمجة بابًا مختلفًا.' },
  explore: { en: 'Explore my work', ar: 'اكتشف أعمالي' },
  contact: { en: 'Get in touch', ar: 'تواصل معي' },
  selected: { en: 'Selected work', ar: 'أعمال مختارة' },
  workTitle: { en: 'Thought through\nBuilt with intent', ar: 'فكرٌ متأنٍ\nوبناءٌ هادف' },
  workIntro: { en: 'An educational application and a film equipment rental website. Two projects I contributed to through software development within a team.', ar: 'تطبيق تعليمي وموقع لتأجير معدات التصوير؛ مشروعان ساهمت في تطويرهما برمجيًا ضمن فريق.' },
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
  labBody: { en: 'Two independent programming content series: Uroob Al Barmajah and Al Uloom Al Ghanima. Different ways into ideas, with software development at the core.', ar: 'عُرُوب البرمجة والعلوم الغانمة؛ سلسلتان مستقلتان أشرح فيهما أفكار البرمجة من زوايا مختلفة، وأترك للفهم فرصة أن يفاجئنا.' },
  labLink: { en: 'Explore Beyond the Line', ar: 'اكتشف خارج السطر' },
  cta: { en: ['Have an idea', 'worth building?'], ar: ['لديك فكرة', 'تستحق البناء؟'] },
  ctaBody: { en: 'Building a team, developing a product, or exploring a creative collaboration? Let’s make something meaningful.', ar: 'تبني فريقًا، أو تطوّر منتجًا، أو تبحث عن تعاون إبداعي؟ لنصنع شيئًا ذا معنى.' },
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
export const projects = [
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
  }
];
export type Project = (typeof projects)[number];

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
  },
  "angles": [
    {
      "label": {
        "ar": "نسخة قريبة",
        "en": "Keep it close"
      },
      "question": {
        "ar": "ليش نعيد نفس المشوار؟",
        "en": "Why make the same trip twice?"
      },
      "concept": {
        "ar": "الذاكرة المؤقتة",
        "en": "Caching"
      },
      "body": {
        "ar": "نحتفظ بنتيجة قريبة لإعادة استخدامها، ونحدّثها حين تتغيّر المعلومة الأصلية.",
        "en": "Keep a result nearby to use again, and refresh it when the original information changes."
      }
    },
    {
      "label": {
        "ar": "مين أول؟",
        "en": "Who goes first?"
      },
      "question": {
        "ar": "اللي وصل أول، يطلع أول؟",
        "en": "First in. First out?"
      },
      "concept": {
        "ar": "الطوابير",
        "en": "Queues"
      },
      "body": {
        "ar": "في طابور FIFO، يُعالَج العنصر الأسبق وصولًا أولًا. طريقة بسيطة لتنظيم ما ينتظر دوره.",
        "en": "A FIFO queue processes the earliest arrival first: a simple way to organise work waiting its turn."
      }
    },
    {
      "label": {
        "ar": "إذا صار…",
        "en": "When it happens…"
      },
      "question": {
        "ar": "ضغطة صغيرة، وش يصير بعدها؟",
        "en": "One small click. What happens next?"
      },
      "concept": {
        "ar": "الأحداث",
        "en": "Events"
      },
      "body": {
        "ar": "تستمع الواجهة لحدث، مثل الضغط على زر، ثم تشغّل الاستجابة المرتبطة به. مثل تغيير هذه الزاوية.",
        "en": "An interface listens for an event, such as a button click, then runs its response. Just like changing this angle."
      }
    }
  ]
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
