'use client'

import { motion } from 'framer-motion'

import Icons from '@/components/svgs/icons'
import { animate, transitions, variants, whileInView } from '@/utils/animations'

export const links = [
  {
    name: 'X',
    link: 'https://twitter.com/kkuldar',
    icon: Icons.X,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/kkkuldar',
    icon: Icons.Instagram,
  },
  {
    name: 'Github',
    link: 'https://github.com/kuldar',
    icon: Icons.Github,
  },
  {
    name: 'Email',
    link: 'mailto:email@kuldar.com',
    icon: Icons.Email,
  },
]

// Social component
export default function Social() {
  return (
    <motion.div
      {...animate}
      transition={transitions.default}
      variants={variants.staggerChildrenQuick}
      className="flex justify-end space-x-2"
    >
      {links.map((link) => (
        <motion.a
          transition={transitions.default}
          variants={variants.fadeInDown}
          key={link.name}
          title={link.name}
          href={link.link}
          target="_blank"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 transition-colors hover:border-gray-200 active:top-[1px]"
        >
          <link.icon className="w-5 flex-shrink-0 text-gray-50 transition-all group-hover:text-green-400" />
        </motion.a>
      ))}
    </motion.div>
  )
}
