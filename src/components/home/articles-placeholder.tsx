'use client'

import { motion } from 'framer-motion'

import { ArticlesPlaceholderNewsletterForm } from '@/components/home/articles-placeholder-newsletter-form'
import { transitions, variants, whileInView } from '@/utils/animations'

// Articles placeholder
export function ArticlesPlaceholder() {
  return (
    <div className="relative order-1 col-span-12 border-r border-gray-30 bg-gradient-to-br from-gray-30/50 via-white to-white dark:border-gray-500 dark:from-gray-700 dark:via-gray-1000 dark:to-gray-1000 lg:order-2 lg:col-span-7 xl:col-span-8">
      <div className="h-full border-l border-gray-30 bg-white/50 p-6 pr-0 transition-colors hover:bg-transparent dark:border-gray-500 dark:bg-gray-1000/20 xs:p-10 lg:border-l-0">
        <motion.div
          {...whileInView}
          transition={transitions.default}
          variants={variants.fadeInDown}
          className="mx-auto flex h-full max-w-md flex-1 flex-col items-center justify-center gap-y-4"
        >
          <div className="inline-block text-center text-3xl font-bold leading-tight">
            Articles coming soon.
          </div>
          <ArticlesPlaceholderNewsletterForm />
        </motion.div>
      </div>
    </div>
  )
}
