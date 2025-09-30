import React, { useEffect, useState, useMemo } from 'react';
import { sampleArticles } from '../../data/articles';
import { updatePageMeta } from '../../utils/seo.ts';
import ArticleCard from '../../components/Articles/ArticleCard';

const ArticlesList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const articlesPerPage = 9;
  const maxPages = 10;

  // Прокрутка к верху при загрузке страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // SEO мета данные
  useEffect(() => {
    updatePageMeta({
      title: 'Статьи о спецтехнике | СТЕФАН',
      description: 'Полезные статьи о спецтехнике - полные знания о строительстве и аренде спецтехники в Москве. Советы экспертов, руководства по безопасности и выбору техники.',
      keywords: ['аренда спецтехники', 'статьи', 'Москва', 'экскаваторы', 'краны', 'бульдозеры', 'строительство'],
      canonicalUrl: 'https://stefan-rent.ru/articles',
      section: 'articles'
    });
  }, []);






  // Фильтрация и сортировка статей
  const filteredArticles = useMemo(() => {
    let filtered = [...sampleArticles];

    // Фильтрация по поисковому запросу
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Сортировка по дате
    return filtered.sort((a, b) => 
      b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }, [searchQuery]);

  // Пагинация
  const totalPages = Math.min(Math.ceil(filteredArticles.length / articlesPerPage), maxPages);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Сброс на первую страницу при поиске
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Навигация по страницам
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="articles articles-page min-h-screen">
      {/* Hero Section */}
      <div className="container-custom pt-[110px] pb-12 px-5 sm:px-8 lg:px-14">
        <div className="max-w-4xl mx-auto text-center mb-[4px]">
          {/* Заголовок */}
          <div className="mb-[27px]">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight font-manrope">
              Введите ваш вопрос
            </h1>
            <p className="text-xl lg:text-2xl text-white/85 font-medium font-manrope">
              А мы подберем актуальные статьи
            </p>
          </div>
          
          {/* Поисковая строка */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative glass rounded-2xl p-1 shadow-glass glow-pulse">
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20 hover:border-white/30 transition-all duration-300 relative z-10 shimmer-ring">
                <svg 
                  className="w-6 h-6 text-white/60 mr-4 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Поиск информации про строительство"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-white/85 text-xl font-medium focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-white/60 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Статистика поиска */}
          {searchQuery && (
            <div className="mt-6">
              <p className="text-white/70 text-lg">
                {filteredArticles.length > 0 
                  ? `Найдено ${filteredArticles.length} ${filteredArticles.length === 1 ? 'статья' : filteredArticles.length < 5 ? 'статьи' : 'статей'}`
                  : 'Статьи не найдены. Попробуйте изменить запрос.'
                }
              </p>
            </div>
          )}
          
        </div>
      </div>
      
      <div className="container-custom pb-12 px-5 sm:px-8 lg:px-14">
        {/* Статьи */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 items-stretch">
          {currentArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 space-x-2">
            {/* Кнопка "Предыдущая" */}
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`flex items-center justify-center w-12 h-12 rounded-2xl border transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed'
                  : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:border-white/30 hover:scale-105 shadow-glass hover:shadow-glass-hover backdrop-blur-md'
              }`}
              aria-label="Предыдущая страница"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Номера страниц */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                const isActive = page === currentPage;
                
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`flex items-center justify-center w-12 h-12 rounded-2xl border font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-white/20 border-white/40 text-white shadow-glass-active scale-105'
                        : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:border-white/30 hover:scale-105 shadow-glass hover:shadow-glass-hover backdrop-blur-md'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            {/* Кнопка "Следующая" */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center w-12 h-12 rounded-2xl border transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-white/5 border-white/10 text-white/30 cursor-not-allowed'
                  : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:border-white/30 hover:scale-105 shadow-glass hover:shadow-glass-hover backdrop-blur-md'
              }`}
              aria-label="Следующая страница"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default ArticlesList;
