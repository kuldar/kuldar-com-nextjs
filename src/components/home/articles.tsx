'use client'

import SectionTitle from '@/components/shared/section-title'
import Icons from '@/components/svgs/icons'
import { ButtonSmall } from '@/components/shared/buttons'
import { Article } from '@/utils/fetch-articles'

// Articles
export default function Articles({ articles }: { articles: Article[] }) {
  let latestArticle = articles[0]
  let moreArticles = articles.slice(1)

  return (
    <div className="relative order-1 col-span-12 border-r border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 lg:order-2 lg:col-span-7 xl:col-span-8">
      <div className="border-l border-gray-500 bg-gray-1000/20 p-6 pr-0 transition-colors hover:bg-transparent xs:p-10 lg:border-l-0">
        {/* Posts */}
        <div className="flex flex-col sm:flex-row">
          {/* Latest post */}
          <div className="flex w-full flex-col items-start pr-6 xs:pr-8 sm:w-1/2 sm:pr-0">
            {/* Title */}
            <SectionTitle title="Articles" icon={Icons.Bookmark} />

            <a
              href={`/articles/${latestArticle.slug}`}
              className="flex-1 active:translate-y-[1px]"
            >
              <div className="mt-6 inline-block text-3xl font-bold leading-tight">
                {latestArticle.title}
              </div>
              {/* <div className="my-4 leading-snug text-gray-50">
                      {formatDate(
                        latestArticle.createdAt
                          ? latestArticle.createdAt
                          : new Date()
                      )}
                    </div> */}
              <div className="mb-8 mt-6 text-lg text-gray-50">
                {latestArticle.description}
              </div>
            </a>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <ButtonSmall
                label="Read"
                link={`/articles/${latestArticle.slug}`}
              />
              <ButtonSmall label="All articles" link={`/articles`} />
            </div>
          </div>

          {/* Other posts */}
          <div className="flex w-full flex-col justify-center divide-y divide-gray-500 pt-8 sm:w-1/2 sm:pl-10 sm:pt-0">
            {moreArticles.map((article, i) => (
              <div key={i} className="py-4 pr-10">
                <a
                  href={`/articles/${article.slug}`}
                  className="group inline-block max-w-xs active:translate-y-[1px]"
                >
                  <span className="text-lg text-gray-50 transition-colors group-hover:text-white">
                    {article.title.substring(0, article.title.lastIndexOf(' '))}{' '}
                  </span>
                  <span className="whitespace-nowrap text-lg text-gray-50 transition-colors group-hover:text-white">
                    <span className="mr-2">
                      {article.title.split(' ').pop()}
                    </span>
                    <div className="inline-flex h-[18px] w-[18px] -translate-y-[3px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover:border-green-400 group-hover:bg-green-400">
                      <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover:text-gray-1000" />
                    </div>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
