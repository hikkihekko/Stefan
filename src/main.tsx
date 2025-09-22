import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import './styles/articles.css'

import RootLayout from './shared/RootLayout'
import HomePage from './pages/HomePage'
import AutoCranesPage from './pages/AutoCranesPage'
import ManipulatorsPage from './pages/ManipulatorsPage'
import TrucksPage from './pages/TrucksPage'

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
      { path: 'manipulators', element: <ManipulatorsPage /> },
      { path: 'trucks', element: <TrucksPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
