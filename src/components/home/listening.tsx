'use client'

import { motion } from 'framer-motion'
import useSWR from 'swr'

import { animate, transitions, variants } from '@/utils/animations'
import { type CurrentlyPlaying } from '@/utils/spotify'

const favorite: CurrentlyPlaying = {
  artist: 'Colyn',
  title: 'Wait For You',
  albumImageUrl:
    'https://i.scdn.co/image/ab67616d0000b273bb23e602555255e45c376f6b',
  songUrl: 'https://open.spotify.com/track/0nQdTcykkSL4f8MP8qE1Fl',
  isPlaying: false,
}

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function Listening() {
  const { data: playing, error, isLoading } = useSWR('/api/listening', fetcher)

  return (
    <motion.div
      {...animate}
      transition={transitions.default}
      variants={variants.staggerChildrenQuick}
      className="col-span-10 hidden flex-col items-end justify-end border-x border-t border-gray-30 bg-gradient-to-br from-gray-30/30 via-white to-white p-8 text-right dark:border-gray-500 dark:from-gray-700 dark:via-gray-1000 dark:to-gray-1000 md:col-span-6 md:flex md:border-l-0 md:border-t-0 min-[896px]:col-span-5 lg:col-span-4"
    >
      {isLoading ? (
        <div></div>
      ) : error ? (
        <div>There was a problem</div>
      ) : (
        <>
          <motion.div
            transition={transitions.default}
            variants={variants.fadeInDown}
            className="mb-4 w-full border-b border-gray-30 pb-4 text-sm font-bold uppercase text-gray-1000 dark:border-gray-500 dark:text-gray-200"
          >
            {playing ? 'Currently playing' : 'Recent favorite'}
          </motion.div>

          {playing ? (
            <motion.a
              transition={transitions.default}
              variants={variants.fadeInDown}
              target="_blank"
              href={playing.songUrl}
              className="group flex max-w-full items-center justify-end space-x-4 leading-snug active:translate-y-[1px]"
            >
              <div>
                <div className="overflow-hidden whitespace-nowrap text-lg font-medium text-gray-1000 dark:text-white">
                  {playing.artist}
                </div>

                <div className="text-gray-40 dark:text-gray-50">
                  {playing.title}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 z-10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),inset_0_-1px_1px_0px_rgba(0,0,0,0.4)]"></div>
                <div className="absolute inset-1 z-10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]"></div>
                <div className="absolute inset-4 z-10 rounded-full bg-black/30 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.3),inset_0_1px_1px_0px_rgba(0,0,0,0.4)]"></div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-cover active:top-[1px] ${
                    playing && playing.isPlaying && 'animate-spin-slower'
                  }`}
                  style={{
                    backgroundImage: `url("${playing.albumImageUrl}")`,
                  }}
                ></div>
              </div>
            </motion.a>
          ) : (
            <motion.a
              transition={transitions.default}
              variants={variants.fadeInDown}
              target="_blank"
              href={favorite.songUrl}
              className="group flex max-w-full items-center justify-end space-x-4 leading-snug active:translate-y-[1px]"
            >
              <div>
                <div className="overflow-hidden whitespace-nowrap text-lg font-medium text-gray-1000 dark:text-white">
                  {favorite.artist}
                </div>

                <div className="text-gray-40 dark:text-gray-50">
                  {favorite.title}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 z-10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),inset_0_-1px_1px_0px_rgba(0,0,0,0.4)]"></div>
                <div className="absolute inset-1 z-10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]"></div>
                <div className="absolute inset-4 z-10 rounded-full bg-black/30 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.3),inset_0_1px_1px_0px_rgba(0,0,0,0.4)]"></div>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-cover active:top-[1px]"
                  style={{
                    backgroundImage: `url("${favorite.albumImageUrl}")`,
                  }}
                ></div>
              </div>
            </motion.a>
          )}
        </>
      )}
    </motion.div>
  )
}
