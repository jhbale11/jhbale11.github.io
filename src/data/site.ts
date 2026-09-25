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

export const news: { date: string; text: string; href?: string }[] = [
  { date: '2026', text: 'Two papers accepted at <b>UIST 2026</b>: CaseSense (full paper) and ToneCanvas (poster).', href: '/publications/casesense' },
  { date: '2026', text: 'DEBSIM received the <b>Best Full Paper Award</b> at ACM ITS 2026.', href: '/publications/debsim' },
  { date: '2026', text: 'Co-Overcooked accepted at <b>CogSci 2026</b> as an oral presentation, with a Student Travel Award.', href: '/publications/co-overcooked' },
  { date: '2026', text: 'Awarded the <b>Yulchon AI Young Researcher Scholarship</b> (AI+X) from the Nongshim Yulchon Foundation and SNU AI Institute.' },
  { date: '2026', text: 'Poster on a constraint RAG chatbot for dialysis care accepted to the <b>CSCW 2026</b> Companion.', href: '/publications/clinic-and-kitchen' },
  { date: '2026', text: 'Two extended abstracts at <b>CHI 2026</b>: nurses meet vibe-coding, and rethinking deletion in learning-based systems.', href: '/publications/nurses-vibe-coding' },
  { date: '2026', text: 'RCT on a personalized RAG chatbot for chronic kidney disease patients accepted at the <b>Interactive Journal of Medical Research</b>.', href: '/publications/ckd-rag-chatbot-rct' },
  { date: '2025', text: 'LegisFlow published at <b>UIST 2025</b>.', href: '/publications/legisflow' },
];
