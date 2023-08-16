import Nav from '@/components/shared/nav'
import Icons from '@/components/svgs/icons'
import Footer from '@/components/shared/footer'

import { formatDate } from '@/utils/helpers'

// Article layout
export const ArticleLayout = ({ children, article }: any) => {
  return (
    <div>
      <Nav />

      {/* Main content */}
      <div className="border-b border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-4 xs:px-10">
          {/* Wide section */}
          <div className="col-span-12 border-l border-gray-500 lg:col-span-7 xl:col-span-8">
            {/* Wide Header */}
            <div className="flex border-b border-gray-500">
              {/* Action Column */}
              <div className="flex w-24 flex-col items-center space-y-4 border-r border-gray-500 py-6">
                <a
                  href="#"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 transition-colors hover:border-gray-200 active:top-[1px]"
                >
                  <Icons.ShareTwitter className="w-6 flex-shrink-0 text-gray-200 transition-all group-hover:text-green-400" />
                </a>

                <a
                  href="#"
                  className="group relative flex w-12 flex-col items-center justify-center space-y-2 rounded-full border border-gray-500 py-3 transition-colors hover:border-gray-200 active:top-[1px]"
                >
                  <Icons.Heart className="w-5 flex-shrink-0 text-gray-200 transition-all group-hover:text-green-400" />
                  <div className="text-lg font-bold leading-none">
                    {/* {article._count.likes} */}0
                  </div>
                </a>
              </div>

              {/* Main */}
              <div className="flex-1 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 p-16">
                <h1 className="text-5xl font-bold leading-[110%] tracking-snug">
                  {article.title}
                </h1>
                <div className="mt-4 text-lg text-gray-100">
                  {formatDate(article.date)}
                </div>
              </div>
            </div>

            {/* Wide content */}
            <div className="flex">
              {/* Side column */}
              <div className="relative w-24 border-r border-gray-500 bg-dotted bg-center before:absolute before:-top-[1px] before:right-0 before:-z-10 before:h-[1px] before:w-[100vw] before:bg-gray-500 before:content-['']"></div>

              {/* Main content */}
              <div className="flex-1 overflow-auto p-16">{children}</div>
            </div>
          </div>

          {/* Narrow section */}
          <div className="col-span-12 flex flex-col-reverse border-x border-gray-500 lg:col-span-5 lg:flex-col xl:col-span-4">
            <div className="flex flex-col space-y-5 border-b border-gray-500 bg-dotted bg-center p-8">
              {/* {relatedArticles.map((relatedArticle) => (
                <a
                  key={relatedArticle.url}
                  href={relatedArticle.url}
                  className="group/card relative rounded-2xl border border-gray-500 bg-gray-1000 p-8 active:top-[1px]"
                >
                  <h2 className="text-2xl font-bold tracking-snug">
                    {relatedArticle.title}
                  </h2>
                  <div className="mt-4 mb-8 space-y-6 pr-4 text-lg leading-normal text-gray-100">
                    {formatDate(relatedArticle.date)}
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
              ))} */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
