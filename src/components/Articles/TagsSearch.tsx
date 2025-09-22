import React, { useState, useRef, useEffect } from 'react';

interface TagsSearchProps {
  allTags: string[];
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

const TagsSearch: React.FC<TagsSearchProps> = ({ allTags, selectedTags, onTagsChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Фильтрация тегов по поисковому запросу
  const filteredTags = allTags.filter(tag =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Закрытие дропдауна при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const clearAllTags = () => {
    onTagsChange([]);
  };

  return (
    <div className="fixed z-40" style={{left: '50%', transform: 'translateX(-50%)', top: 'calc(24px + 98px + 18px)'}}>
      <div className="container mx-auto px-6 flex justify-center">
        <div 
          ref={dropdownRef}
          className="relative"
          style={{ minWidth: '300px' }}
        >
          {/* Search Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass transition-all duration-300 ease-in-out flex items-center justify-between w-full text-left"
            style={{ 
              borderRadius: 16, 
              padding: '16px 24px',
              minWidth: 'fit-content'
            }}
          >
            <div className="flex items-center space-x-2">
              <svg 
                className="w-4 h-4 text-white/70" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-white/80 font-medium text-sm font-manrope whitespace-nowrap">
                {selectedTags.length === 0 
                  ? 'Поиск по ключевым словам' 
                  : `Выбрано: ${selectedTags.length}`
                }
              </span>
            </div>
            <svg 
              className={`w-4 h-4 text-white/70 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div 
              className="absolute top-full left-0 right-0 mt-2 glass border border-white/20"
              style={{ 
                borderRadius: 16,
                minWidth: '400px',
                maxHeight: '300px',
                overflowY: 'auto'
              }}
            >
              {/* Search Input */}
              <div className="p-4 border-b border-white/20">
                <input
                  type="text"
                  placeholder="Найти ключевое слово..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              {/* Tags List */}
              <div className="p-2 max-h-48 overflow-y-auto">
                {selectedTags.length > 0 && (
                  <div className="mb-2 p-2">
                    <button
                      onClick={clearAllTags}
                      className="text-xs text-white/60 hover:text-white transition-colors duration-200"
                    >
                      Очистить все
                    </button>
                  </div>
                )}
                
                {filteredTags.length > 0 ? (
                  filteredTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        selectedTags.includes(tag)
                          ? 'bg-white/20 text-white font-medium'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{tag}</span>
                        {selectedTags.includes(tag) && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-2 text-white/60 text-sm">
                    Ключевые слова не найдены
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagsSearch;
