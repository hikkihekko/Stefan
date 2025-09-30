import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import './styles/articles.css'

// Предотвращение overscroll для устранения белых полос
document.addEventListener('DOMContentLoaded', () => {
  // Определение DPI и применение соответствующих стилей
  const dpr = window.devicePixelRatio || 1;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  
  // Для MacBook 13" и других экранов с высоким DPI
  if (dpr >= 2 && screenWidth <= 1440 && screenHeight <= 900) {
    document.documentElement.style.fontSize = '13px';
    document.documentElement.classList.add('high-dpi-screen');
  }
  
  // Для очень маленьких экранов с высоким DPI
  if (dpr >= 2 && screenWidth <= 1280) {
    document.documentElement.style.fontSize = '12px';
    document.documentElement.classList.add('small-high-dpi-screen');
  }
  // Предотвращение overscroll на touch устройствах
  document.addEventListener('touchmove', (e) => {
    const target = e.target as HTMLElement;
    const scrollableParent = target.closest('[data-scrollable]') || document.body;
    
    if (scrollableParent === document.body) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Если вверху страницы и пытаемся прокрутить выше
      if (scrollTop <= 0 && e.touches[0].clientY > e.touches[0].targetTouches?.[0]?.clientY) {
        e.preventDefault();
      }
      
      // Если внизу страницы и пытаемся прокрутить ниже
      if (scrollTop + clientHeight >= scrollHeight && e.touches[0].clientY < e.touches[0].targetTouches?.[0]?.clientY) {
        e.preventDefault();
      }
    }
  }, { passive: false });
  
  // Предотвращение overscroll на wheel событиях
  document.addEventListener('wheel', (e) => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    // Если вверху страницы и пытаемся прокрутить выше
    if (scrollTop <= 0 && e.deltaY < 0) {
      e.preventDefault();
    }
    
    // Если внизу страницы и пытаемся прокрутить ниже
    if (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0) {
      e.preventDefault();
    }
  }, { passive: false });
});

import RootLayout from './shared/RootLayout'
import HomePage from './pages/HomePage'
import AutoCranesPage from './pages/AutoCranesPage'
import ExcavatorLoadersPage from './pages/ExcavatorLoadersPage'
import ExcavatorTrackedPage from './pages/ExcavatorTrackedPage'
import ManipulatorsPage from './pages/ManipulatorsPage'
import TrucksPage from './pages/TrucksPage'
import FrontLoadersPage from './pages/FrontLoadersPage'
import AutoTowersPage from './pages/AutoTowersPage'
import MiniLoadersPage from './pages/MiniLoadersPage'
import ExcavatorWheeledPage from './pages/ExcavatorWheeledPage'
import TrailersPage from './pages/TrailersPage'
import BulldozersPage from './pages/BulldozersPage'
import RollersPage from './pages/RollersPage'
import BoardTrucksPage from './pages/BoardTrucksPage'
import LongTrucksPage from './pages/LongTrucksPage'
import GradersPage from './pages/GradersPage'
import MiniExcavatorsPage from './pages/MiniExcavatorsPage'

// Статьи
import ArticlesList from './pages/Articles/ArticlesList'
import ArticleDetail from './pages/Articles/ArticleDetail'

// Sitemap
import SitemapPage from './pages/SitemapPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'articles', element: <ArticlesList /> },
      { path: 'articles/:slug', element: <ArticleDetail /> },
      { path: 'autocranes', element: <AutoCranesPage /> },
      { path: 'excavator-loaders', element: <ExcavatorLoadersPage /> },
      { path: 'excavator-tracked', element: <ExcavatorTrackedPage /> },
      { path: 'excavator-wheeled', element: <ExcavatorWheeledPage /> },
      { path: 'mini-excavators', element: <MiniExcavatorsPage /> },
      { path: 'manipulators', element: <ManipulatorsPage /> },
      { path: 'trucks', element: <TrucksPage /> },
      { path: 'front-loaders', element: <FrontLoadersPage /> },
      { path: 'auto-towers', element: <AutoTowersPage /> },
      { path: 'mini-loaders', element: <MiniLoadersPage /> },
      { path: 'trailers', element: <TrailersPage /> },
      { path: 'bulldozers', element: <BulldozersPage /> },
      { path: 'rollers', element: <RollersPage /> },
      { path: 'board-trucks', element: <BoardTrucksPage /> },
      { path: 'long-trucks', element: <LongTrucksPage /> },
      { path: 'graders', element: <GradersPage /> },
      { path: 'sitemap', element: <SitemapPage /> },
    ],
  },
], {
  basename: '/Stefan/',
  future: {
    v7_startTransition: true,
  },
})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
