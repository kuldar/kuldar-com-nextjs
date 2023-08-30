import type { MDXComponents } from 'mdx/types'

import { Video } from '@/components/shared/video'
import { Image } from '@/components/shared/image'

// Custom hook allowing to customize the built-in MDX components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-10 text-2xl font-bold text-white">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-bold text-white">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-bold text-white">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 text-xl font-bold text-white">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="mt-8 text-xl font-bold text-white">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="mt-8 text-xl font-bold text-white">{children}</h6>
    ),
    p: ({ children }) => (
      <p className="mt-4 text-lg leading-normal text-gray-40">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        className="text-gray-30 underline decoration-green-400"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="ml-8 mt-4 list-disc space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="ml-8 mt-4 list-decimal space-y-2">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="pl-2 text-lg text-gray-40 marker:text-gray-100">
        {children}
      </li>
    ),
    pre: ({ children }) => (
      <pre className="mt-4 overflow-x-scroll rounded-xl border border-gray-500 p-4 text-sm text-gray-30">
        {children}
      </pre>
    ),
    // Generated
    code: ({ children }) => (
      <code className="text-sm text-gray-30">{children}</code>
    ),
    // Generated
    blockquote: ({ children }) => (
      <blockquote className="mt-4 text-lg italic text-gray-40">
        {children}
      </blockquote>
    ),
    Video,
    Image,
    ...components,
  }
}
