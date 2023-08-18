import glob from 'fast-glob'

import { MDXModule } from 'mdx/types'

type ArticleMeta = {
  slug: string
  date: string
  title: string
  description: string
}

export type Article = MDXModule & ArticleMeta

// Import article
export async function importArticle(articleFilename: string): Promise<Article> {
  let { article } = (await import(`../app/articles/${articleFilename}`)) as {
    article: Article
  }

  return {
    ...article,
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
  }
}

// Get all articles
export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // @ts-ignore
  articles.sort((a, z) => new Date(z.date) - new Date(a.date))

  return articles
}

// Get recent articles
export async function getRecentArticles(count = 5) {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // @ts-ignore
  articles.sort((a, z) => new Date(z.date) - new Date(a.date))

  // Return 5 most recent articles
  return articles.slice(0, count)
}
