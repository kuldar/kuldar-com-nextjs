import Link from 'next/link'

import NewsletterForm from '@/components/articles/newsletter-form'
import RecentArticles from '@/components/articles/recent-articles'
import Footer from '@/components/shared/footer'
import Nav from '@/components/shared/nav'
import { getAllArticles } from '@/utils/fetch-articles'
import { Article as ArticleType } from '@/utils/fetch-articles'

// Article
function Article({ article }: { article: ArticleType }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="p-6 xs:p-10 min-[900px]:p-16"
    >
      <h1 className="mb-4 text-4xl font-bold leading-[110%] tracking-snug">
        {article.title}
      </h1>
      <div className="text-lg text-gray-50">{article.description}</div>
    </Link>
  )
}

// Articles index
export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <div>
      <Nav />

      {/* Main content */}
      <div className="border-b border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          {/* Wide section */}
          <div className="col-span-12 border-l border-r border-gray-500 min-[1150px]:col-span-8 min-[1150px]:border-r-0">
            {/* Wide Header */}
            <div className="flex border-b border-gray-500">
              {/* Action Column */}
              <div className="hidden w-24 flex-col items-center space-y-4 border-r border-gray-500 py-6 min-[900px]:flex"></div>

              {/* Main */}
              <div className="flex-1 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 p-6 xs:p-10 min-[900px]:p-16">
                <h1 className="text-4xl font-bold leading-[110%] tracking-snug xs:text-5xl">
                  Bla Bla
                </h1>
                <div className="mt-4 text-lg text-gray-100">bla</div>
              </div>
            </div>

            {/* Wide content */}
            <div className="flex">
              {/* Side column */}
              <div className="relative hidden w-24 border-r border-gray-500 bg-dotted bg-center before:absolute before:-top-[1px] before:right-0 before:-z-10 before:h-[1px] before:w-[100vw] before:bg-gray-500 before:content-[''] min-[900px]:block"></div>

              {/* Main content */}
              <div className="flex flex-1 flex-col divide-y divide-gray-500 overflow-auto">
                {articles.map((article) => (
                  <Article key={article.slug} article={article} />
                ))}
              </div>
            </div>
          </div>

          {/* Narrow section */}
          <div className="col-span-12 flex flex-col-reverse border-x border-gray-500 lg:flex-col min-[1150px]:col-span-4">
            <div className="border-b-0 border-t border-gray-500 bg-center p-6 xs:p-8 min-[1150px]:border-b min-[1150px]:border-t-0 min-[1150px]:bg-dotted min-[1150px]:py-8">
              <div>
                <NewsletterForm />
                <RecentArticles />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
