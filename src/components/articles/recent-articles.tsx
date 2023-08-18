import Icons from '@/components/svgs/icons'

import { getRecentArticles } from '@/utils/fetch-articles'
import { formatDate } from '@/utils/helpers'

// Recent articles
const RecentArticles = async () => {
  const recentArticles = await getRecentArticles(3)

  return (
    <div className="grid grid-cols-6 gap-4 xs:gap-5">
      {recentArticles.map((recentArticle) => (
        <a
          key={recentArticle.slug}
          href={recentArticle.slug}
          className="group/card min-[1150px]:col-span-6 last:min-[1150px]:col-span-6 relative col-span-6 overflow-hidden rounded-2xl border border-gray-500 bg-gray-1000 bg-gradient-to-br from-gray-900 via-gray-1000 to-gray-800 transition-colors hover:border-gray-200/70 active:top-[1px] md:col-span-3 last:md:col-span-6 lg:col-span-2 last:lg:col-span-2"
        >
          <div className="flex h-full w-full flex-col items-start bg-gray-1000 p-8 transition-colors hover:bg-transparent">
            <h2 className="text-2xl font-bold tracking-snug">
              {recentArticle.title}
            </h2>

            <div className="mb-8 mt-4 space-y-6 pr-4 text-lg leading-normal text-gray-100">
              {formatDate(recentArticle.date)}
            </div>

            <div className="flex-1"></div>

            <span className="inline-flex items-center space-x-2 rounded-lg border border-gray-500 py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-200">
              <div className="text-sm font-bold leading-none text-white">
                Read the article
              </div>
              <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover/card:border-green-400 group-hover/card:bg-green-400">
                <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover/card:text-gray-1000" />
              </div>
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default RecentArticles
