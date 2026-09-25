export function publisherLabel(url?: string): string | undefined {
  if (!url) return undefined;
  if (/dl\.acm\.org|doi\.org\/10\.1145/.test(url)) return 'ACM DL';
  if (/doi\.org\/10\.2196|jmir\.org/.test(url)) return 'JMIR';
  if (/escholarship\.org/.test(url)) return 'eScholarship';
  if (/dbpia\.co\.kr/.test(url)) return 'DBpia';
  if (/arxiv\.org/.test(url)) return 'arXiv';
  if (/springer/.test(url)) return 'Springer';
  return 'Publisher';
}
