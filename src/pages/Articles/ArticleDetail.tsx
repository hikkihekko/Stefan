import React, { useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { sampleArticles } from '../../data/articles';
import { updatePageMeta, generateArticleStructuredData } from '../../utils/seo.ts';
import Breadcrumbs from '../../components/Articles/Breadcrumbs';
import ArticleCard from '../../components/Articles/ArticleCard';
import MobileTableOfContents from '../../components/Articles/MobileTableOfContents';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const article = useMemo(() => {
    return sampleArticles.find(a => a.slug === slug);
  }, [slug]);

  // Связанные статьи
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    
    return sampleArticles
      .filter(a => a.id !== article.id && (
        a.category.id === article.category.id ||
        a.tags.some(tag => article.tags.includes(tag))
      ))
      .slice(0, 3);
  }, [article]);

  // Прокрутка к верху при загрузке статьи
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  // SEO и структурированные данные
  useEffect(() => {
    if (!article) return;

    updatePageMeta({
      title: article.metaTitle || `${article.title} | СТЕФАН`,
      description: article.metaDescription || article.excerpt,
      keywords: article.tags,
      author: article.author,
      publishedTime: article.publishedAt.toISOString(),
      modifiedTime: article.updatedAt?.toISOString() || article.publishedAt.toISOString(),
      section: article.category.name,
      tags: article.tags,
      image: article.ogImage,
      canonicalUrl: article.canonicalUrl || `https://stefan-rent.ru/articles/${article.slug}`
    });

    generateArticleStructuredData(article);

    return () => {
      // Cleanup при размонтировании компонента
      document.querySelectorAll('script[type="application/ld+json"]').forEach(script => script.remove());
    };
  }, [article]);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const breadcrumbItems = [
    { label: 'Статьи', href: '/articles' },
    { label: article.title }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />
      
      {/* Контент с отступом 88px от главного меню */}
      <div style={{ paddingTop: '88px' }}>
        <div className="container mx-auto px-6">
          {/* Основной контент */}
          <div className="max-w-none">
            {/* Оглавление сверху статьи для всех размеров экрана */}
            <div className="mb-8">
              <MobileTableOfContents content={article.content} />
            </div>
            
            {/* Заголовок статьи */}
            <header>
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-4 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Метаинформация */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 pb-6 border-b border-white/20">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(article.publishedAt)}
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readingTime} мин чтения
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {article.author}
              </div>
            </div>
          </header>

          {/* Содержимое статьи */}
          <article className="glass rounded-2xl overflow-hidden mb-12 shadow-glass hover:shadow-glass-hover transition-all duration-300 -mt-6">
            <div className="article-content px-10 lg:px-16 pt-10 lg:pt-16 pb-10 lg:pb-16">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            
            {/* Теги */}
            {article.tags.length > 0 && (
              <div className="px-10 lg:px-16 py-8 bg-gradient-to-r from-white/5 to-white/10 border-t border-white/20">
                <h3 className="text-sm font-medium text-white mb-4">Теги:</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-200 cursor-pointer backdrop-blur-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Навигация между статьями */}
          <div className="flex justify-between items-center mb-12 p-6 glass rounded-2xl shadow-glass">
            <Link
              to="/articles"
              className="inline-flex items-center text-white hover:text-white/80 font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Все статьи
            </Link>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Наверх
              </button>
            </div>
          </div>

          {/* Связанные статьи */}
          {relatedArticles.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Похожие статьи</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map(relatedArticle => (
                  <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
            </section>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
