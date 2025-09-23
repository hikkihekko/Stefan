import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import './styles/articles.css'

import RootLayout from './shared/RootLayout'
import HomePage from './pages/HomePage'
import AutoCranesPage from './pages/AutoCranesPage'
import ExcavatorLoadersPage from './pages/ExcavatorLoadersPage'
import ExcavatorTrackedPage from './pages/ExcavatorTrackedPage'
import MiniExcavatorsPage from './pages/MiniExcavatorsPage'
import ManipulatorsPage from './pages/ManipulatorsPage'
import TrucksPage from './pages/TrucksPage'
import FrontLoadersPage from './pages/FrontLoadersPage'

// Статьи
import ArticlesList from './pages/Articles/ArticlesList'
import ArticleDetail from './pages/Articles/ArticleDetail'

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
      { path: 'mini-excavators', element: <MiniExcavatorsPage /> },
      { path: 'manipulators', element: <ManipulatorsPage /> },
      { path: 'trucks', element: <TrucksPage /> },
      { path: 'front-loaders', element: <FrontLoadersPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
