import { getCollection, type CollectionEntry } from 'astro:content';

export type Pub = CollectionEntry<'publications'>;

export const categoryLabel: Record<Pub['data']['category'], string> = {
  'first-author': 'First-author',
  'co-author': 'Co-author',
  preprint: 'Preprints',
  domestic: 'Domestic (HCI Korea)',
};

const categoryRank: Record<Pub['data']['category'], number> = {
  'first-author': 0,
  'co-author': 1,
  preprint: 2,
  domestic: 3,
};

export function sortPubs(pubs: Pub[]): Pub[] {
  return [...pubs].sort((a, b) => {
    if (b.data.year !== a.data.year) return b.data.year - a.data.year;
    if (categoryRank[a.data.category] !== categoryRank[b.data.category])
      return categoryRank[a.data.category] - categoryRank[b.data.category];
    return a.data.order - b.data.order;
  });
}

export async function getPubs(): Promise<Pub[]> {
  return sortPubs(await getCollection('publications'));
}

export type GroupKey = 'papers' | 'short' | 'preprints' | 'domestic';
export const groupLabel: Record<GroupKey, string> = {
  papers: 'Conference Papers & Journal Articles',
  short: 'Posters, Extended Abstracts & Workshop Papers',
  preprints: 'Preprints',
  domestic: 'Domestic Publications (HCI Korea)',
};
export function groupKey(p: Pub): GroupKey {
  const d = p.data;
  if (d.category === 'preprint') return 'preprints';
  if (d.category === 'domestic') return 'domestic';
  if (/poster|extended abstract|workshop|demo/i.test(d.format)) return 'short';
  return 'papers';
}
export function groupByType(pubs: Pub[]): { key: GroupKey; label: string; pubs: Pub[] }[] {
  const order: GroupKey[] = ['papers', 'short', 'preprints', 'domestic'];
  return order
    .map((key) => ({ key, label: groupLabel[key], pubs: pubs.filter((p) => groupKey(p) === key) }))
    .filter((g) => g.pubs.length > 0);
}

export function groupByYear(pubs: Pub[]): { year: number; pubs: Pub[] }[] {
  const map = new Map<number, Pub[]>();
  for (const p of pubs) {
    if (!map.has(p.data.year)) map.set(p.data.year, []);
    map.get(p.data.year)!.push(p);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]).map(([year, pubs]) => ({ year, pubs }));
}

function bibEscape(s: string): string {
  return s.replace(/[{}]/g, '');
}

export function bibtex(p: Pub): string {
  const d = p.data;
  const authors = d.authors.map((a) => bibEscape(a.name)).join(' and ');
  const lines: string[] = [];
  lines.push(`@${d.bibtype}{${d.bibkey},`);
  lines.push(`  title = {${bibEscape(d.title)}},`);
  lines.push(`  author = {${authors}},`);
  if (d.bibtype === 'article') lines.push(`  journal = {${bibEscape(d.venue)}},`);
  else if (d.bibtype === 'inproceedings') lines.push(`  booktitle = {${bibEscape(d.venue)}},`);
  else lines.push(`  howpublished = {${bibEscape(d.venue)}},`);
  lines.push(`  year = {${d.year}},`);
  if (d.pages) lines.push(`  pages = {${d.pages.replace(/[–—-]+/, '--')}},`);
  if (d.doi) lines.push(`  doi = {${d.doi.replace(/^https?:\/\/doi\.org\//, '')}},`);
  if (d.arxiv && !d.doi) lines.push(`  url = {${d.arxiv}},`);
  if (d.award) lines.push(`  note = {${bibEscape(d.award)}},`);
  const last = lines.length - 1;
  lines[last] = lines[last].replace(/,$/, '');
  lines.push('}');
  return lines.join('\n');
}
