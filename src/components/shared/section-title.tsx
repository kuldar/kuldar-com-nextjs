'use client'

import { motion } from 'framer-motion'

import { animate, transitions, variants, whileInView } from '@/utils/animations'

// Section title
export default function SectionTitle({
  title,
  icon: Icon,
  isFadedIn = true,
}: {
  title: string
  icon: any
  isFadedIn?: boolean
}) {
  const animation = isFadedIn !== undefined ? animate : whileInView

  return (
    <motion.div
      {...animation}
      transition={transitions.default}
      variants={variants.fadeInDown}
      whileInView={isFadedIn ? 'show' : 'hidden'}
      className="flex items-center space-x-3"
    >
      <Icon className="h-4 text-green-500 dark:text-white" />
      <div className="text-sm font-bold uppercase tracking-wide text-gray-1000 dark:text-green-400">
        {title}
      </div>
    </motion.div>
  )
}
