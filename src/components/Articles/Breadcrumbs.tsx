import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem } from '../../types/Article';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="fixed z-40" style={{left: '0', right: '0', top: 'calc(24px + 98px + 12px)'}}>
      <div className="container mx-auto px-6">
        <nav 
          aria-label="Breadcrumb" 
          className="glass transition-all duration-300 ease-in-out"
          style={{ 
            minWidth: 'fit-content',
            maxWidth: 'fit-content',
            borderRadius: 12, 
            padding: '10px 16px'
          }}
        >
        <ol className="flex items-center space-x-2 text-base font-manrope">
          {items.map((item, index) => (
            <li key={index} className="flex items-center whitespace-nowrap">
              {index > 0 && (
                <svg 
                  className="w-2.5 h-2.5 mx-2 text-[#3535B9]/90" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
              
              {item.href && index < items.length - 1 ? (
                <Link 
                  to={item.href}
                  className="text-[#3535B9]/90 hover:text-[#3535B9] transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span 
                  className="text-[#3535B9]/90 font-medium"
                  aria-current={index === items.length - 1 ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
