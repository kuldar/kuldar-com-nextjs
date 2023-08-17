import { ButtonSmall } from '@/components/shared/buttons'

import Header from '@/components/home/header'
import AboutMe from '@/components/home/about-me'
import Experiments from '@/components/home/experiments'
import Portrait from '@/components/home/portrait'
import Companies from '@/components/home/companies'
import Articles from '@/components/home/articles'

import Footer from '@/components/shared/footer'
import SectionTitle from '@/components/shared/section-title'

import { projects, work } from '@/utils/data'
// import { formatDate } from '@/utils/helpers'
import { getRecentArticles } from '@/utils/get-all-articles'

import Icons from '@/components/svgs/icons'
// import Database from '@/components/svgs/database'

// Home page
export default async function Home() {
  let articles = await getRecentArticles()

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
          <Companies />
          <Articles
            latestArticle={articles[0]}
            moreArticles={articles.slice(1)}
          />
        </div>

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
      </div>

      <Footer />
    </div>
  )
}
