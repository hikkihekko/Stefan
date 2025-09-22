export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  category: ArticleCategory;
  tags: string[];
  readingTime: number; // в минутах
  featured: boolean;
  image: string; // URL изображения для карточки
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: any;
}

export interface ArticleCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface ArticleMeta {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  image?: string;
  canonicalUrl?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
