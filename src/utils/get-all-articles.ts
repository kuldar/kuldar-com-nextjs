import glob from 'fast-glob'

// Import article
async function importArticle(articleFilename: string) {
  let { article } = await import(`../app/articles/${articleFilename}`)

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
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
export async function getRecentArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // @ts-ignore
  articles.sort((a, z) => new Date(z.date) - new Date(a.date))

  // Return 5 most recent articles
  return articles.slice(0, 5)
}
