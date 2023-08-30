/** @type {import('next').NextConfig} */

// import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    serverActions: true,
  },
}

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    // remarkPlugins: [remarkGfm],
    // rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
