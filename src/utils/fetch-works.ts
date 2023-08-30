import glob from 'fast-glob'

import { MDXModule } from 'mdx/types'

type WorkMeta = {
  title: string
  slug: string
  description: string
  createdAt: string
  updatedAt: string
  year: number
  technologies: { name: string; link: string }[]
  details: string
  client: {
    name: string
    website: string
  }
}

export type Work = MDXModule & WorkMeta

// Import work
export async function importWork(workFilename: string): Promise<Work> {
  let { work } = (await import(`../app/work/${workFilename}`)) as {
    work: Work
  }

  return {
    ...work,
    slug: workFilename.replace(/(\/page)?\.mdx$/, ''),
  }
}

// Get all works
export async function getAllWorks() {
  let workFilenames = await glob('*/page.mdx', {
    cwd: './src/app/work',
  })

  let works = await Promise.all(workFilenames.map(importWork))

  // @ts-ignore
  works.sort((a, z) => new Date(z.date) - new Date(a.date))

  return works
}

// Get recent works
export async function getRecentWorks(count = 5) {
  let workFilenames = await glob('*/page.mdx', {
    cwd: './src/app/work',
  })

  let works = await Promise.all(workFilenames.map(importWork))

  // @ts-ignore
  works.sort((a, z) => new Date(z.date) - new Date(a.date))

  // Return 5 most recent articles
  return works.slice(0, count)
}
