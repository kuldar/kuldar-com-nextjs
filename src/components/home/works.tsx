'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { transitions, variants, whileInView } from '@/utils/animations'
import SectionTitle from '@/components/shared/section-title'
import Illustrations from '@/components/svgs/illustrations'
import Icons from '@/components/svgs/icons'

export const works = [
  {
    name: 'Awesome AI',
    description:
      'Had a stupid itch to build a Hacker News for AI in the style of Windows 95. So I did.',
    link: 'https://awesomeai.xyz/',
    illustration: Illustrations.Windows,
  },
  {
    name: 'A-Barber',
    description:
      'Some branding, marketing design and web development for my dear sister-in-law.',
    link: '/work/a-barber',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Õunaturg',
    description:
      'Designed, co-built and sold a marketplace for selling second-hand Apple products.',
    link: 'https://ounaturg.ee/',
    illustration: Illustrations.Ounaturg,
  },
]

// Works
export default function Works() {
  return (
    <div className="col-span-12 border-x border-t border-gray-500 bg-dotted bg-center p-4 xs:p-8">
      {/* Title */}
      <SectionTitle title="Work" icon={Icons.Code} />

      {/* List of work */}
      <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-8">
        {works.map((work) => (
          <motion.div
            {...whileInView}
            transition={transitions.default}
            variants={variants.fadeInDown}
            key={work.name}
            className="group/card relative col-span-6 overflow-hidden rounded-2xl border-t border-gray-50/20 bg-gradient-to-br from-gray-1000 via-gray-800 to-gray-950 active:top-[1px] md:col-span-3 last:md:col-span-6 lg:col-span-2 last:lg:col-span-2"
          >
            <Link href={work.link} className="h-full w-full">
              <work.illustration className="absolute text-gray-500/80" />

              {/* Content */}
              <div className="relative flex h-full flex-col items-start bg-gray-950/50 p-8 transition-colors group-hover/card:bg-transparent">
                <h2 className="text-5xl font-bold tracking-snug">
                  {work.name}
                </h2>

                <div className="mb-10 mt-6 flex-1 space-y-6 pr-4 text-lg leading-normal text-gray-50">
                  {work.description}
                </div>

                <span className="inline-flex items-center space-x-2 rounded-lg border border-gray-500 bg-gray-900 py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-200">
                  <div className="text-sm font-bold leading-none text-white">
                    View more
                  </div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover/card:border-green-400 group-hover/card:bg-green-400">
                    <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover/card:text-gray-1000" />
                  </div>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
