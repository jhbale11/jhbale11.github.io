export const site = {
  name: 'Junghwan Kim',
  koreanName: '김정환',
  role: 'Ph.D. Candidate',
  lab: 'Human-Centered Computing Lab',
  labUrl: 'https://hcc.snu.ac.kr',
  program: 'Interdisciplinary Program in Artificial Intelligence',
  university: 'Seoul National University',
  email: 'jhbale11@snu.ac.kr',
  linkedin: 'https://www.linkedin.com/in/junghwanhcclab',
  scholar: 'https://scholar.google.com/citations?user=j03Cb5MAAAAJ&hl=en',
  github: 'https://github.com/jhbale11',
  cvPdf: '/cv/Junghwan_Kim_CV.pdf',
  tagline:
    'I design LLM-augmented interfaces for domain experts, and study how people and AI collaborate.',
  thesis:
    'Interface design, not model capability, is the primary bottleneck for expert use of large language models.',
  interests: [
    {
      title: 'LLM-augmented interfaces for experts',
      body: 'Legal research, clinical care, education and translation: building systems where expert workflows, not chat boxes, shape how models are used.',
    },
    {
      title: 'Human-AI collaboration',
      body: 'How people model AI partners, when friction helps learning, and what team composition does to coordination.',
    },
    {
      title: 'HCI theory as design grounding',
      body: 'Reification, distributed cognition, articulation work and boundary infrastructure as lenses for interface design.',
    },
  ],
};

export const news: { date: string; text: string; href?: string; upcoming?: boolean }[] = [
  { date: 'Nov 2026', upcoming: true, text: 'CaseSense (full paper) and ToneCanvas (poster) will be presented at <b>UIST 2026</b>.', href: '/publications/casesense' },
  { date: 'Oct 2026', upcoming: true, text: 'Poster on a constraint RAG chatbot for dialysis care will be presented at <b>CSCW 2026</b> (Companion).', href: '/publications/clinic-and-kitchen' },
  { date: 'Sep 2026', text: 'Awarded the <b>Yulchon AI Young Researcher Scholarship</b> (AI+X) from the Nongshim Yulchon Foundation and SNU AI Institute.' },
  { date: 'Aug 2026', text: 'RCT on a personalized RAG chatbot for chronic kidney disease patients accepted at the <b>Interactive Journal of Medical Research</b>.', href: '/publications/ckd-rag-chatbot-rct' },
  { date: 'Jul 2026', text: 'Presented Co-Overcooked (oral) at <b>CogSci 2026</b> in Rio de Janeiro, with a <b>Student Travel Award</b>.', href: '/publications/co-overcooked' },
  { date: 'Jun 2026', text: 'Presented DEBSIM at <b>ITS 2026</b> in Pafos, Cyprus. It received the <b>Best Full Paper Award</b>.', href: '/publications/debsim' },
  { date: 'Apr 2026', text: 'Presented two extended abstracts at <b>CHI 2026</b> in Barcelona: nurses meet vibe-coding, and rethinking deletion in learning-based systems.', href: '/publications/nurses-vibe-coding' },
  { date: 'Feb 2026', text: 'Two extended abstracts accepted to <b>CHI 2026</b>.', href: '/publications/nurses-vibe-coding' },
  { date: 'Oct 2025', text: 'Presented LegisFlow at <b>UIST 2025</b> in Busan.', href: '/publications/legisflow' },
  { date: 'Aug 2025', text: 'LegisFlow accepted to <b>UIST 2025</b> as a full paper.', href: '/publications/legisflow' },
];
