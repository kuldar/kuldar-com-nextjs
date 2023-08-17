import Icons from '@/components/svgs/icons'

import { getRecentArticles } from '@/utils/fetch-articles'
import { formatDate } from '@/utils/helpers'

// Recent articles
const RecentArticles = async () => {
  const recentArticles = await getRecentArticles(3)

  return (
    <>
      {recentArticles.map((recentArticle) => (
        <a
          key={recentArticle.slug}
          href={recentArticle.slug}
          className="group/card relative rounded-2xl border border-gray-500 bg-gray-1000 p-8 active:top-[1px]"
        >
          <h2 className="text-2xl font-bold tracking-snug">
            {recentArticle.title}
          </h2>
          <div className="mb-8 mt-4 space-y-6 pr-4 text-lg leading-normal text-gray-100">
            {formatDate(recentArticle.date)}
          </div>

          <span className="inline-flex items-center space-x-2 rounded-lg border border-gray-500 py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-200">
            <div className="text-sm font-bold leading-none text-white">
              Read the article
            </div>
            <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover/card:border-green-400 group-hover/card:bg-green-400">
              <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover/card:text-gray-1000" />
            </div>
          </span>
        </a>
      ))}
    </>
  )
}

export default RecentArticles
