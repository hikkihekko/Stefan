import { sampleArticles } from '../data/articles';

/**
 * Автоматический генератор sitemap.xml
 * Используйте эту функцию для обновления sitemap при добавлении новых статей
 */
export const generateSitemapFile = (): string => {
  const baseUrl = 'https://spextehnikaru.ru';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Статические страницы
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/articles', priority: 0.9, changefreq: 'weekly' },
    { url: '/autocranes', priority: 0.8, changefreq: 'monthly' },
    { url: '/excavator-loaders', priority: 0.8, changefreq: 'monthly' },
    { url: '/excavator-tracked', priority: 0.8, changefreq: 'monthly' },
    { url: '/manipulators', priority: 0.8, changefreq: 'monthly' },
    { url: '/trucks', priority: 0.8, changefreq: 'monthly' }
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Добавляем статические страницы
  staticPages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Добавляем все статьи
  sampleArticles.forEach(article => {
    const lastmod = article.updatedAt ? 
      new Date(article.updatedAt).toISOString().split('T')[0] : 
      new Date(article.publishedAt).toISOString().split('T')[0];
    const priority = article.featured ? 0.9 : 0.7;
    
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/articles/${article.slug}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

/**
 * Статистика sitemap
 */
export const getSitemapStats = () => {
  const totalArticles = sampleArticles.length;
  const featuredArticles = sampleArticles.filter(article => article.featured).length;
  const staticPages = 7;
  
  return {
    totalUrls: totalArticles + staticPages,
    staticPages,
    totalArticles,
    featuredArticles,
    regularArticles: totalArticles - featuredArticles
  };
};

/**
 * Проверка валидности sitemap
 */
export const validateSitemap = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Проверяем, что все статьи имеют slug
  sampleArticles.forEach((article, index) => {
    if (!article.slug) {
      errors.push(`Статья ${index + 1} не имеет slug`);
    }
    if (!article.publishedAt) {
      errors.push(`Статья "${article.title}" не имеет даты публикации`);
    }
  });
  
  // Проверяем уникальность slug'ов
  const slugs = sampleArticles.map(article => article.slug);
  const uniqueSlugs = new Set(slugs);
  if (slugs.length !== uniqueSlugs.size) {
    errors.push('Найдены дублирующиеся slug\'ы статей');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};




