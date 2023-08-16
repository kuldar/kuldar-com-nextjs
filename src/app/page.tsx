import { ButtonSmall } from '@/components/buttons'

import Header from '@/components/home/header'
import AboutMe from '@/components/home/about-me'
import Experiments from '@/components/home/experiments'
import Portrait from '@/components/home/portrait'

import Footer from '@/components/shared/footer'
import SectionTitle from '@/components/shared/section-title'

import { projects, work } from '@/utils/data'
// import { formatDate } from '@/utils/helpers'
import { getRecentArticles } from '@/utils/get-all-articles'

import Icons from '@/components/svgs/icons'
import Database from '@/components/svgs/database'

// Home page
export default async function Home() {
  let articles = await getRecentArticles()
  const latestArticle = articles[0]
  const moreArticles = articles.slice(1)

  return (
    <div>
      <Header />

      {/* Top section */}
      <div className="border-b border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-4 xs:px-10">
          <AboutMe />
          <Experiments />
          <Portrait />
        </div>
      </div>

      {/* Main content */}
      <div className="border-b border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-4 xs:px-10">
          {/* Narrow section */}
          <div className="col-span-12 flex flex-col-reverse border-x border-gray-500 lg:col-span-5 lg:flex-col xl:col-span-4">
            {/* Projects */}
            <div className="bg-dotted bg-center p-4 xs:p-8">
              {/* Title */}
              <SectionTitle title="Projects" icon={Icons.Fire} />

              {/* List of projects */}
              <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-8">
                {projects.map((project) => (
                  <a
                    key={project.name}
                    href={project.link}
                    target="_blank"
                    className="group/card relative col-span-6 overflow-hidden rounded-2xl border-t border-gray-50/20 bg-gradient-to-br from-gray-950 to-gray-800 p-8 active:top-[1px] md:col-span-3 lg:col-span-6"
                  >
                    <project.illustration
                      className={`absolute text-gray-600/80 duration-300 group-hover/card:text-gray-500`}
                    />

                    {/* Content */}
                    <div className="relative flex h-full flex-col items-start">
                      <h2 className="text-5xl font-bold tracking-snug">
                        {project.name}
                      </h2>

                      <div className="mb-10 mt-6 flex-1 space-y-6 pr-4 text-lg leading-normal text-gray-50">
                        {project.description}
                      </div>

                      <span className="inline-flex items-center space-x-2 rounded-lg border border-gray-500 bg-gray-900 py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-200">
                        <div className="text-sm font-bold leading-none text-white">
                          View project
                        </div>
                        <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover/card:border-green-400 group-hover/card:bg-green-400">
                          <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover/card:text-gray-1000" />
                        </div>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Callout */}
            <div className="relative flex h-64 flex-1 items-center justify-center border-b border-t-0 border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 px-8 py-12 text-center before:absolute before:-top-[1px] before:right-0 before:-z-10 before:h-[1px] before:w-[100vw] before:bg-gray-500 before:content-[''] lg:border-b-0 lg:border-t">
              <div className="max-w-sm space-y-4 text-lg leading-snug">
                <p>
                  Have an interesting, stupid or crazy idea you&#39;d like some
                  help building?
                </p>
                <a
                  href="mailto:email@kuldar.com"
                  className="inline-block font-bold underline decoration-green-400"
                >
                  Let&#39;s talk.
                </a>
              </div>
            </div>
          </div>

          {/* Wide section */}
          <div className="relative col-span-12 border-r border-gray-500 lg:col-span-7 xl:col-span-8">
            {/* Blog */}
            <div className="border-y border-l border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 p-6 pr-0 xs:p-10 lg:border-l-0 lg:border-t-0">
              {/* Posts */}
              <div className="flex flex-col sm:flex-row">
                {/* Latest post */}
                <div className="flex w-full flex-col items-start pr-6 xs:pr-8 sm:w-1/2 sm:pr-0">
                  {/* Title */}
                  <SectionTitle title="Articles" icon={Icons.Bookmark} />

                  <div className="flex-1">
                    <a
                      href={`/articles/${latestArticle.slug}`}
                      className="mt-6 inline-block text-3xl font-bold leading-tight"
                    >
                      {latestArticle.title}
                    </a>
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
                  </div>

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
                        className="group inline-block max-w-xs"
                      >
                        <span className="text-lg text-gray-50 transition-colors group-hover:text-white">
                          {article.title.substring(
                            0,
                            article.title.lastIndexOf(' ')
                          )}{' '}
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

            {/* Work */}
            <div className="relative border-l border-gray-500 p-4 before:absolute before:-top-[1px] before:left-0 before:-z-10 before:h-[1px] before:w-[100vw] before:bg-gray-500 before:content-[''] xs:p-8 lg:border-l-0">
              {/* Title */}
              <SectionTitle
                title="Companies I've worked with"
                icon={Icons.Suitcase}
              />

              {/* Prisma */}
              <span
                // href={work.big.link}
                className="group/card relative mb-4 mt-4 flex rounded-2xl border-t border-gray-50/20 bg-gradient-to-br from-gray-950 to-gray-800 active:top-[1px] xs:mb-8 xs:mt-6"
              >
                <div className="relative z-10 flex w-full flex-col items-start p-8 sm:w-2/3 sm:pr-0">
                  <h2 className="text-5xl font-bold tracking-snug">
                    {work.big.name}
                  </h2>

                  <div className="mt-6 flex-1 space-y-6 text-lg leading-normal text-gray-50">
                    {work.big.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Button */}
                  {/* <span className="inline-flex items-center space-x-2 rounded-lg border border-gray-500 py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-200">
                    <div className="text-sm font-bold leading-none text-white">
                      View work
                    </div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover/card:border-green-400 group-hover/card:bg-green-400">
                      <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover/card:text-gray-1000" />
                    </div>
                  </span> */}
                </div>

                {/* Illustration */}
                <div className="absolute right-0 top-0 hidden h-full w-1/2 items-center justify-end overflow-hidden sm:flex">
                  <Database className="translate-x-3" />
                </div>
              </span>

              {/* Medium */}
              <div className="flex flex-col space-x-0 space-y-4 xs:space-y-8 md:flex-row md:space-x-8 md:space-y-0 lg:flex-col lg:space-x-0 lg:space-y-8 xl:flex-row xl:space-x-8 xl:space-y-0">
                {work.medium.map((company) => (
                  <span
                    // href={company.link}
                    key={company.name}
                    className="group/card relative rounded-2xl border-t border-gray-50/20 bg-gradient-to-br from-gray-950 to-gray-800 p-8 active:top-[1px]"
                  >
                    <h2 className="text-5xl font-bold tracking-snug">
                      {company.name}
                    </h2>
                    <div className="mt-6 space-y-6 pr-4 text-lg leading-normal text-gray-50">
                      {company.description}
                    </div>

                    {/* Button */}
                    {/* <span className="inline-flex items-center space-x-2 rounded-lg border border-gray-500 py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-200">
                      <div className="text-sm font-bold leading-none text-white">
                        View work
                      </div>
                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover/card:border-green-400 group-hover/card:bg-green-400">
                        <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover/card:text-gray-1000" />
                      </div>
                    </span> */}
                  </span>
                ))}
              </div>

              {/* Small */}
              {/* <div className="mt-4 flex flex-col space-x-0 space-y-4 xs:mt-8 xs:space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
                {work.small.map((company) => (
                  <div
                    key={company.name}
                    className="flex items-center justify-between space-x-4 rounded-2xl border border-gray-500 bg-gray-1000 p-6 pr-8 sm:w-1/2"
                  >
                    <div>
                      <h3 className="text-3xl font-bold leading-none">
                        {company.name}
                      </h3>
                      <div className="mt-2 text-lg leading-snug text-gray-50">
                        {company.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
