// Notion serves its own legal pages from two hosts and rewrites internal
// links to either one from fetch to fetch. Normalise them so the link host
// alone never produces a new version.
export function normalizeNotionLinks(document) {
  document.querySelectorAll('a[href]').forEach(link => {
    link.href = link.href
      .replace(/^https:\/\/(www\.notion\.so|notion\.notion\.site)\//, 'https://app.notion.com/')
      .replace(/[?&]pvs=\d+/, '');
  });
}
