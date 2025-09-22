import React from 'react'

const ArticlesPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="font-baron text-4xl mb-8">Статьи</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {Array.from({length:6}).map((_,i)=> (
          <article key={i} className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-xl">Заголовок статьи {i+1}</h3>
            <p className="text-white/80 mt-2">SEO-текст статьи. Здесь будет полезный контент о спецтехнике, подборе и эксплуатации.</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default ArticlesPage


