import Link from 'next/link'

import Footer from '@/components/shared/footer'
import Nav from '@/components/shared/nav'
import { getAllWorks } from '@/utils/fetch-works'
import { WorkGridItem } from '@/components/work/work-grid-item'
import { Calendar } from '@/components/work/calendar'

// List of works
export default async function WorkIndex() {
  let works = await getAllWorks()

  return (
    <div>
      <Nav />

      {/* Main content */}
      <div className="border-b border-gray-500">
        <div className="mx-auto max-w-8xl px-2 xs:px-6 sm:px-10">
          {/* Wide section */}
          <div className="border-l border-r border-gray-500 min-[1150px]:border-r-0">
            {/* Wide Header */}
            <div className="flex border-b border-gray-500">
              {/* Action Column */}
              <div className="hidden w-24 flex-col items-center space-y-4 border-r border-gray-500 py-6 min-[900px]:flex"></div>

              {/* Main */}
              <div className="flex flex-1">
                <div className="w-1/2 border-r border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 p-6 xs:p-10 min-[900px]:p-16">
                  <h1 className="text-4xl font-bold leading-[110%] tracking-snug xs:text-5xl">
                    Recent work
                  </h1>
                  <div className="mt-4 text-lg text-gray-100">
                    Some of the recent freelance projects and startups Ive
                    helped with branding, marketing, UI design and coding.
                  </div>
                </div>

                <div className="flex w-1/2 flex-col items-center justify-center gap-2 border-r border-gray-500">
                  <div className="text-sm font-bold uppercase leading-none tracking-wide">
                    Availability
                  </div>

                  <div className="text-lg text-gray-100">
                    Starting from mid-September.{' '}
                    <Link
                      href="mailto:email@kuldar.com"
                      className="text-gray-30 underline decoration-green-500"
                    >
                      Get in touch.
                    </Link>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <div className="-rotate-6 rounded-lg border-t border-gray-50/20 bg-gradient-to-br from-gray-950 via-gray-700 to-gray-800 p-2 opacity-80 transition-all hover:scale-110 hover:opacity-100">
                      <div className="mb-2 text-center text-xs font-bold uppercase tracking-wide text-gray-100">
                        Aug 2023
                      </div>
                      <Calendar availability={[false, false, false, false]} />
                    </div>

                    <div className="-translate-y-2 rounded-lg border-t border-gray-50/20 bg-gradient-to-br from-gray-950 via-gray-700 to-gray-800 p-2 opacity-80 transition-all hover:scale-110 hover:opacity-100">
                      <div className="mb-2 text-center text-xs font-bold uppercase tracking-wide text-gray-30">
                        Sept 2023
                      </div>
                      <Calendar availability={[false, true, true, true]} />
                    </div>

                    <div className="rotate-6 rounded-lg border-t border-gray-50/20 bg-gradient-to-br from-gray-950 via-gray-700 to-gray-800 p-2 opacity-80 transition-all hover:scale-110 hover:opacity-100">
                      <div className="mb-2 text-center text-xs font-bold uppercase tracking-wide text-gray-30">
                        Oct 2023
                      </div>
                      <Calendar availability={[true, true, true, true]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wide content */}
            <div className="flex">
              {/* Side column */}
              <div className="relative hidden w-24 border-r border-gray-500 bg-dotted bg-center before:absolute before:-top-[1px] before:right-0 before:-z-10 before:h-[1px] before:w-[100vw] before:bg-gray-500 before:content-[''] min-[900px]:block"></div>

              {/* Main content */}
              <div className="grid flex-1 grid-cols-6">
                {works.map((work, i) => (
                  <WorkGridItem key={work.slug} work={work} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
