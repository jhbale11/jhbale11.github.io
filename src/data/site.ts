export const site = {
  name: 'Junghwan Kim',
  koreanName: '김정환',
  role: 'Ph.D. Candidate',
  lab: 'Human-Centered Computing Lab',
  labShort: 'HCC Lab',
  labUrl: 'https://hcc.snu.ac.kr',
  program: 'Department of Intelligence and Information',
  programUrl: 'https://gscst.snu.ac.kr',
  university: 'Seoul National University',
  universityUrl: 'https://en.snu.ac.kr',
  advisor: 'Bongwon Suh',
  advisorUrl: 'https://hcc.snu.ac.kr',
  email: 'jhbale11@snu.ac.kr',
  linkedin: 'https://www.linkedin.com/in/junghwanhcclab',
  scholar: 'https://scholar.google.com/citations?user=j03Cb5MAAAAJ&hl=en',
  github: 'https://github.com/jhbale11',
  cvPdf: '/cv/Junghwan_Kim_CV.pdf',
  tagline: 'HAI & LLM researcher studying human-centered interactive systems: externalizing expert tacit knowledge into structures people can see and handle.',
  thesis: 'Interface design, not model capability, is the primary bottleneck for expert use of large language models.',
};

export type NewsItem = { date: string; emoji: string; title: string; text: string; href?: string; upcoming?: boolean };

export const news: NewsItem[] = [
  { date: 'Nov 2026', emoji: '🎤', upcoming: true, title: 'Presenting CaseSense and ToneCanvas at UIST 2026', text: 'CaseSense (full paper) and ToneCanvas (poster) will be presented at UIST 2026.', href: '/publications/casesense' },
  { date: 'Oct 2026', emoji: '🧑‍⚕️', upcoming: true, title: 'Poster at CSCW 2026', text: 'Our constraint RAG chatbot for dialysis care will be presented as a poster at the CSCW 2026 Companion.', href: '/publications/clinic-and-kitchen' },
  { date: 'Sep 2026', emoji: '🎓', title: 'Yulchon AI Young Researcher Scholarship', text: 'Selected for the Yulchon AI Young Researcher Scholarship (AI+X) by the Nongshim Yulchon Foundation and the SNU AI Institute.' },
  { date: 'Aug 2026', emoji: '📝', title: 'Journal article accepted at the Interactive Journal of Medical Research', text: 'Our mixed-methods RCT of a personalized RAG chatbot for chronic kidney disease patients was accepted at i-JMR.', href: '/publications/ckd-rag-chatbot-rct' },
  { date: 'Jul 2026', emoji: '🇧🇷', title: 'Co-Overcooked presented at CogSci 2026 in Rio de Janeiro', text: 'Oral presentation at CogSci 2026, supported by a Student Travel Award.', href: '/publications/co-overcooked' },
  { date: 'Jun 2026', emoji: '🏆', title: 'Best Full Paper Award at ITS 2026', text: 'DEBSIM received the Best Full Paper Award at the International Conference on Intelligent Tutoring Systems in Pafos, Cyprus.', href: '/publications/debsim' },
  { date: 'Apr 2026', emoji: '🇪🇸', title: 'Two extended abstracts presented at CHI 2026 in Barcelona', text: 'When Nurses Meet Vibe-Coding, and From Objects to Influences.', href: '/publications/nurses-vibe-coding' },
  { date: 'Feb 2026', emoji: '📄', title: 'Two extended abstracts accepted to CHI 2026', text: 'Papers on vibe-coding in participatory design and on deletion in learning-based systems were accepted to CHI EA 2026.', href: '/publications/nurses-vibe-coding' },
  { date: 'Oct 2025', emoji: '🎤', title: 'LegisFlow presented at UIST 2025 in Busan', text: 'Presented our temporal-aware LLM interface for Korean legal research.', href: '/publications/legisflow' },
  { date: 'Aug 2025', emoji: '📄', title: 'LegisFlow accepted to UIST 2025', text: 'Accepted as a full paper at the 38th ACM Symposium on User Interface Software and Technology.', href: '/publications/legisflow' },
];
