import { getAllArticles } from '@/utils/get-all-articles'

// Article
function Article({ article }) {
  return (
    <article>
      <div>
        <a href={`/articles/${article.slug}`}>{article.title}</a>
        <div>{article.date}</div>
        <div>{article.description}</div>
      </div>
    </article>
  )
}

export const metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </div>
  )
}
