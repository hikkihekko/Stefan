import React, { useEffect, useState, useCallback } from 'react';

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface MobileTableOfContentsProps {
  content: string;
}

const MobileTableOfContents: React.FC<MobileTableOfContentsProps> = ({ content }) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  // Извлечение заголовков из HTML контента
  const extractHeadings = useCallback((htmlContent: string): TOCItem[] => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    const headings = tempDiv.querySelectorAll('h2');
    const items: TOCItem[] = [];
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent || '';
      
      // Создаем уникальный ID для заголовка
      let id = text
        .toLowerCase()
        .replace(/[^а-яёa-z0-9\s]/gi, '')
        .replace(/\s+/g, '-')
        .substring(0, 50);
      
      // Добавляем индекс для уникальности
      id = `heading-${index}-${id}`;
      
      items.push({
        id,
        text,
        level
      });
    });
    
    return items;
  }, []);

  // Установка ID для заголовков в DOM
  const setupHeadingIds = useCallback(() => {
    const headings = document.querySelectorAll('.article-content h2');
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent || '';
      
      let id = text
        .toLowerCase()
        .replace(/[^а-яёa-z0-9\s]/gi, '')
        .replace(/\s+/g, '-')
        .substring(0, 50);
      
      id = `heading-${index}-${id}`;
      heading.id = id;
    });
  }, []);

  // Инициализация TOC
  useEffect(() => {
    const timer = setTimeout(() => {
      setupHeadingIds();
      const items = extractHeadings(content);
      setTocItems(items);
    }, 100);

    return () => clearTimeout(timer);
  }, [content, extractHeadings, setupHeadingIds]);

  // Отслеживание активного заголовка при скролле
  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(item => item.element);

      if (headings.length === 0) return;

      const scrollPosition = window.scrollY + 50;

      // Находим текущий активный заголовок
      let currentActive = headings[0]?.id || '';
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const element = heading.element!;
        const offsetTop = element.offsetTop;
        
        if (scrollPosition >= offsetTop - 100) {
          currentActive = heading.id;
          break;
        }
      }

      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  // Плавная прокрутка к заголовку
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -200;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // Закрываем меню после клика
      setIsOpen(false);
    }
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <div className="glass rounded-3xl shadow-glass hover:shadow-glass-hover transition-all duration-500 overflow-hidden border border-white/20">
      {/* Заголовок с кнопкой сворачивания */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-t-3xl"></div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full flex items-center px-5 py-4 border-b border-white/15 transition-colors group hover:bg-white/5 cursor-pointer"
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-white/10 mr-2 group-hover:bg-white/15 transition-colors">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-white">Содержание</h3>
          <div className="ml-auto flex items-center space-x-2">
            <div className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded-lg">
              {tocItems.length}
            </div>
            {isOpen && (
              <svg 
                className="w-4 h-4 text-white/70 transform transition-transform duration-300 rotate-180"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        </button>
      </div>
      
      {/* Скроллируемая область навигации с анимацией */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-[50vh] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div 
          className="toc-scroll-container toc-container overflow-y-scroll px-3 py-3"
          style={{ maxHeight: '50vh', minHeight: '200px' }}
        >
          <nav className="space-y-1 relative">
            {tocItems.map((item, index) => (
              <button
                key={item.id}
                data-heading-id={item.id}
                onClick={() => scrollToHeading(item.id)}
                className={`
                  block w-full text-left py-2 px-3 rounded-xl text-xs transition-all duration-300 group relative overflow-hidden cursor-pointer
                  ${activeId === item.id 
                    ? 'bg-gradient-to-r from-white/25 to-white/15 text-white font-medium shadow-glass-active transform scale-[1.02] border border-white/40' 
                    : 'text-white/75 hover:text-white hover:bg-white/10 hover:transform hover:scale-[1.01] border border-transparent hover:border-white/20'
                  }
                `}
                style={{ 
                  paddingLeft: `${(item.level - 1) * 15 + 14}px`
                }}
              >
                {/* Активный индикатор */}
                {activeId === item.id && (
                  <>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-white via-white/90 to-white/70 rounded-r-full shadow-lg"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"></div>
                  </>
                )}
                
                <div className="flex items-start">
                  <span className={`
                    inline-flex items-center justify-center w-4 h-4 rounded-full text-xs font-medium mr-2 mt-0.5 flex-shrink-0
                    ${activeId === item.id 
                      ? 'bg-white/30 text-white' 
                      : 'bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white/80'
                    }
                  `}>
                    {index + 1}
                  </span>
                  <span className="line-clamp-3 group-hover:text-white transition-colors leading-relaxed">
                    {item.text}
                  </span>
                </div>
              </button>
            ))}
          </nav>
        </div>
        
        {/* Нижние кнопки */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10"></div>
          <div className="relative px-4 py-3 border-t border-white/15 space-y-2">
            {/* Кнопка "Наверх" */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center w-full py-2 px-3 text-xs text-white/80 hover:text-white hover:bg-white/15 rounded-xl transition-all duration-300 group hover:shadow-glass hover:transform hover:scale-[1.02] border border-white/10 hover:border-white/25"
            >
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-white/10 mr-2 group-hover:bg-white/20 transition-colors">
                <svg className="w-3 h-3 group-hover:transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <span className="font-medium">Наверх</span>
            </button>
            
            {/* Кнопка "Свернуть" */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-2 px-3 text-xs text-white/80 hover:text-white hover:bg-white/15 rounded-xl transition-all duration-300 group hover:shadow-glass hover:transform hover:scale-[1.02] border border-white/10 hover:border-white/25"
            >
              <span className="font-medium mr-2">Свернуть</span>
              <svg 
                className="w-4 h-4 group-hover:transform group-hover:-translate-y-0.5 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Свернутое состояние - кнопка для ручного раскрытия */}
      {!isOpen && (
        <div className="px-5 py-3">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full flex items-center justify-center py-2 px-3 text-xs text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group border border-white/10 hover:border-white/25"
          >
            <span className="font-medium mr-2">Развернуть содержание</span>
            <svg 
              className="w-4 h-4 group-hover:transform group-hover:translate-y-0.5 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileTableOfContents;
