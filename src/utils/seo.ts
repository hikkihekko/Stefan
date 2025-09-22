// Минимум, чтобы страницы статей не падали и мета обновлялась

export function updatePageMeta(opts: {
  title?: string
  description?: string
  image?: string
}) {
  const { title, description } = opts
  if (title) document.title = title

  if (description) {
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }
}

export function generateArticleStructuredData(a: {
  title: string
  image?: string
  publishedAt?: string
  url?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    image: a.image ? [a.image] : [],
    datePublished: a.publishedAt || undefined,
    mainEntityOfPage: a.url ? { '@type': 'WebPage', '@id': a.url } : undefined,
  }
}

export function injectJSONLD(id: string, data: object) {
  const existing = document.getElementById(id)
  if (existing) existing.remove()
  const s = document.createElement('script')
  s.id = id
  s.type = 'application/ld+json'
  s.textContent = JSON.stringify(data)
  document.head.appendChild(s)
}
