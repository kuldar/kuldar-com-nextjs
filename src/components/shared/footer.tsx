'use client'
import { motion } from 'framer-motion'

import { transitions, variants, whileInView } from '@/utils/animations'

// Footer component
export default function Footer() {
  return (
    <>
      <footer className="border-b border-gray-500">
        <div className="mx-auto max-w-8xl px-2 xs:px-6 sm:px-10">
          <div className="border-x border-gray-500 p-8 xs:p-20">
            <motion.div
              {...whileInView}
              whileInView="show"
              transition={transitions.default}
              variants={variants.fadeInDown}
              className="text-center"
            >
              <div className="mb-2 text-gray-50">
                Have an interesting, stupid or crazy idea you&#39;d like some
                help building? {` `}
                <a
                  href="mailto:email@kuldar.com"
                  className="inline-block text-white underline decoration-green-400"
                >
                  Let&#39;s talk shop.
                </a>
              </div>
              <div className="mx-auto max-w-2xl text-gray-300">
                {new Date().getFullYear()} &copy; Kuldar Kalvik
              </div>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="mx-auto max-w-8xl px-2 xs:px-6 sm:px-10">
        <div className="h-2 border-x border-gray-500 xs:h-6 sm:h-16"></div>
      </div>
    </>
  )
}
