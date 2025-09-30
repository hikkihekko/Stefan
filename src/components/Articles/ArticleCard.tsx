    import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types/Article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const cardClasses = "article-card group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-glass hover:shadow-glass-hover transition-all duration-300 hover:scale-[1.02] hover:bg-white/15 h-full flex flex-col";

  // Placeholder для изображения
  const PlaceholderIcon = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stefan-blue/20 to-stefan-blue/40">
      <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  );

  return (
    <Link to={`/articles/${article.slug}`} className="block">
      <article className={`${cardClasses} cursor-pointer`}>
      {/* Изображение */}
      <div className="relative h-56 sm:h-48 overflow-hidden" style={{ height: window.innerWidth < 640 ? '224px' : '192px' }}>
        {/* Placeholder пока изображение загружается */}
        {(!imageLoaded || imageError) && <PlaceholderIcon />}
        
        {/* Основное изображение */}
        {!imageError && (
          <img 
            src={article.image} 
            alt={article.title}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              maxWidth: 'none',
              maxHeight: 'none'
            }}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-t from-stefan-blue/80 via-stefan-blue/20 to-transparent"></div>
        
        {/* Категория */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-black border border-white/20">
            {article.category.name}
          </span>
        </div>


        {/* Время чтения */}
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white border border-white/10">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.readingTime} мин
          </span>
        </div>
      </div>

      {/* Контент */}
      <div className="p-5 flex flex-col flex-1">
        {/* Заголовок */}
        <h2 className="text-lg font-bold text-white mb-4 group-hover:text-stefan-blue transition-colors leading-tight">
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="text-white/85 text-sm leading-relaxed flex-grow">
          {article.excerpt}
        </p>
      </div>
    </article>
    </Link>
  );
};

export default ArticleCard;