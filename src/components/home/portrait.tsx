'use client'

import { motion } from 'framer-motion'

import { animate, transitions, variants } from '@/utils/animations'
import Drawing from '@/components/home/drawing'
import Icons from '@/components/svgs/icons'
import portrait from '@/components/home/portrait.jpg'

// Portrait component
export default function Portrait() {
  return (
    <div className="order-1 col-span-12 flex border-x border-gray-30 px-4 pt-4 dark:border-gray-500 xs:px-8 xs:pt-8 md:order-2 md:col-span-6 md:border-l-0 md:border-r md:pb-8 min-[896px]:col-span-5 xl:order-2 xl:col-span-4">
      {/* Image */}
      <motion.div
        {...animate}
        transition={{ ...transitions.default }}
        variants={variants.fadeInDownRotate}
        className="relative flex h-80 w-64 rounded-2xl border-t border-gray-50/20 bg-gray-1000 bg-cover bg-center bg-no-repeat p-2 brightness-125 dark:brightness-100 md:h-auto md:w-full"
        style={{ backgroundImage: `url("${portrait.src}")` }}
      >
        {/* Drawing */}
        <Drawing className="absolute inset-0 z-10 hidden cursor-draw md:block" />

        {/* Border */}
        <div className="flex w-full items-end rounded-xl border border-white/20 p-3 dark:border-gray-50/20">
          {/* Label */}
          <div className="flex items-center space-x-3">
            <Icons.Photo className="h-4 text-white/50" />
            <div className="text-sm font-bold uppercase text-white">
              IMG_0526.jpg
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
