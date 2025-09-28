import { sampleArticles } from '../data/articles';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): SitemapUrl[] => {
  const baseUrl = 'https://spextehnikaru.ru';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages: SitemapUrl[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/articles`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/autocranes`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/excavator-loaders`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/excavator-tracked`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/manipulators`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/trucks`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    }
  ];

  // Добавляем все статьи
  const articlePages: SitemapUrl[] = sampleArticles.map(article => ({
    loc: `${baseUrl}/articles/${article.slug}`,
    lastmod: article.updatedAt ? 
      new Date(article.updatedAt).toISOString().split('T')[0] : 
      new Date(article.publishedAt).toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: article.featured ? 0.9 : 0.7
  }));

  return [...staticPages, ...articlePages];
};

export const generateSitemapXML = (): string => {
  const urls = generateSitemap();
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';
  
  const urlEntries = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');
  
  return `${xmlHeader}
${urlsetOpen}${urlEntries}
${urlsetClose}`;
};




