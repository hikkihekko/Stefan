import React, { useState } from 'react';
import { generateSitemapXML, generateSitemap } from '../utils/sitemap';
import { getSitemapStats, validateSitemap } from '../utils/sitemapGenerator';

const SitemapPage: React.FC = () => {
  const [sitemapXML] = useState(() => generateSitemapXML());
  const [sitemapData] = useState(() => generateSitemap());
  const [stats] = useState(() => getSitemapStats());
  const [validation] = useState(() => validateSitemap());

  const downloadSitemap = () => {
    const blob = new Blob([sitemapXML], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sitemapXML);
      alert('XML sitemap скопирован в буфер обмена!');
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        XML Sitemap для SEO
      </h1>
      
      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2>Статистика sitemap:</h2>
        <p><strong>Всего URL:</strong> {stats.totalUrls}</p>
        <p><strong>Статические страницы:</strong> {stats.staticPages}</p>
        <p><strong>Всего статей:</strong> {stats.totalArticles}</p>
        <p><strong>Рекомендуемые статьи:</strong> {stats.featuredArticles}</p>
        <p><strong>Обычные статьи:</strong> {stats.regularArticles}</p>
        
        <div style={{ 
          marginTop: '15px',
          padding: '10px',
          backgroundColor: validation.isValid ? '#d4edda' : '#f8d7da',
          borderRadius: '5px',
          border: `1px solid ${validation.isValid ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          <strong>Статус валидации:</strong> {validation.isValid ? '✅ Валидный' : '❌ Ошибки найдены'}
          {validation.errors.length > 0 && (
            <ul style={{ margin: '5px 0 0 20px' }}>
              {validation.errors.map((error, index) => (
                <li key={index} style={{ color: '#721c24' }}>{error}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={downloadSitemap}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
            fontSize: '16px'
          }}
        >
          📥 Скачать sitemap.xml
        </button>
        
        <button 
          onClick={copyToClipboard}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          📋 Скопировать XML
        </button>
      </div>

      <div style={{ 
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px'
      }}>
        <h3>Предварительный просмотр XML:</h3>
        <pre style={{ 
          backgroundColor: '#f8f9fa',
          padding: '15px',
          borderRadius: '5px',
          overflow: 'auto',
          fontSize: '12px',
          lineHeight: '1.4',
          maxHeight: '400px'
        }}>
          {sitemapXML}
        </pre>
      </div>

      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#e7f3ff',
        borderRadius: '8px',
        border: '1px solid #b3d9ff'
      }}>
        <h3>📋 Инструкции по размещению:</h3>
        <ol style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>Скачайте файл sitemap.xml</li>
          <li>Разместите его в корневой папке вашего сайта (рядом с index.html)</li>
          <li>Убедитесь, что файл доступен по адресу: <code>https://spextehnikaru.ru/sitemap.xml</code></li>
          <li>Добавьте sitemap в Google Search Console</li>
          <li>Обновляйте sitemap при добавлении новых статей</li>
        </ol>
      </div>
    </div>
  );
};

export default SitemapPage;
