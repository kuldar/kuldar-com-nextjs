'use client'

import useSWR from 'swr'

import Icons from '@/components/svgs/icons'
import { likeWork } from '@/app/work/actions'

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())

// Like button
export function LikeButton({ slug }: { slug: string }) {
  const { data, isLoading } = useSWR(`/api/work/likes?slug=${slug}`, fetcher)

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <form action={likeWork}>
          <button
            disabled={data.isLiked}
            type="submit"
            className="group relative flex w-12 flex-col items-center justify-center space-y-2 rounded-full border border-gray-500 py-3 transition-colors hover:border-gray-200 active:top-[1px]"
          >
            <Icons.Heart
              className={`w-5 flex-shrink-0 transition-all ${
                data.isLiked
                  ? 'text-green-400'
                  : 'text-gray-50 group-hover:text-green-400'
              }`}
            />
            <div className="text-lg font-bold leading-none">{data.count}</div>
          </button>
          <input type="hidden" name="work" value={slug} />
        </form>
      )}
    </>
  )
}
