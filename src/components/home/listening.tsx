'use client'

// import { useEffect, useState } from 'react'
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
  // const [playing, setPlaying] = useState<CurrentlyPlaying | false>(false)
  const { data, error } = useSWR('/api/listening', fetcher)

  return (
    <motion.div
      {...animate}
      transition={transitions.default}
      variants={variants.staggerChildrenQuick}
      className="col-span-10 hidden flex-col items-end justify-end border-x border-t border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 p-8 text-right md:col-span-6 md:flex md:border-l-0 md:border-t-0 min-[896px]:col-span-5 lg:col-span-4"
    >
      {error ? (
        <div>There was a problem</div>
      ) : !data ? (
        <div></div>
      ) : (
        <>
          <motion.div
            transition={transitions.default}
            variants={variants.fadeInDown}
            className="mb-4 w-full border-b border-gray-500 pb-4 text-sm font-bold uppercase text-gray-200"
          >
            {data.playing ? 'Currently playing' : 'Recent favorite'}
          </motion.div>

          {data.playing ? (
            <motion.a
              transition={transitions.default}
              variants={variants.fadeInDown}
              target="_blank"
              href={data.playing.songUrl}
              className="group flex max-w-full items-center justify-end space-x-4 leading-snug active:translate-y-[1px]"
            >
              <div>
                <div className="overflow-hidden whitespace-nowrap text-lg font-medium text-white">
                  {data.playing.artist}
                </div>

                <div className="text-gray-50">{data.playing.title}</div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 z-10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),inset_0_-1px_1px_0px_rgba(0,0,0,0.4)]"></div>
                <div className="absolute inset-1 z-10 rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]"></div>
                <div className="absolute inset-4 z-10 rounded-full bg-black/30 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.3),inset_0_1px_1px_0px_rgba(0,0,0,0.4)]"></div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-cover active:top-[1px] ${
                    data.playing &&
                    data.playing.isPlaying &&
                    'animate-spin-slower'
                  }`}
                  style={{
                    backgroundImage: `url("${data.playing.albumImageUrl}")`,
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
                <div className="overflow-hidden whitespace-nowrap text-lg font-medium text-white">
                  {favorite.artist}
                </div>

                <div className="text-gray-50">{favorite.title}</div>
              </div>

              <div
                className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 bg-cover transition-colors active:top-[1px] group-hover:border-gray-200"
                style={{
                  backgroundImage: `url("${favorite.albumImageUrl}")`,
                }}
              ></div>
            </motion.a>
          )}
        </>
      )}
    </motion.div>
  )
}
