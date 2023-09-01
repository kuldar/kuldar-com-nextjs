import Nav from '@/components/shared/nav'
import Icons from '@/components/svgs/icons'
import Footer from '@/components/shared/footer'
import NewsletterForm from '@/components/articles/newsletter-form'
import Illustrations from '@/components/svgs/illustrations'
import { formatDate } from '@/utils/helpers'

// Work layout
export const WorkLayout = async ({ children, work }: any) => {
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
              <div className="hidden w-24 flex-col items-center space-y-4 border-r border-gray-500 py-6 min-[900px]:flex">
                <a
                  href="#"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 transition-colors hover:border-gray-200 active:top-[1px]"
                >
                  <Icons.Share className="w-5 flex-shrink-0 -translate-x-0.5 text-gray-50 transition-all group-hover:text-green-400" />
                </a>

                <a
                  href="#"
                  className="group relative flex w-12 flex-col items-center justify-center space-y-2 rounded-full border border-gray-500 py-3 transition-colors hover:border-gray-200 active:top-[1px]"
                >
                  <Icons.Heart className="w-5 flex-shrink-0 text-gray-50 transition-all group-hover:text-green-400" />
                  <div className="text-lg font-bold leading-none">
                    {/* {work._count.likes} */}0
                  </div>
                </a>
              </div>

              {/* Main */}
              <div className="flex-1 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 p-6 xs:p-10 min-[900px]:p-16">
                {/* Action bar */}
                <div className="mb-4 flex items-center space-x-4 min-[900px]:hidden">
                  <a
                    href="#"
                    className="group relative flex h-10 items-center justify-center space-x-2 rounded-full border border-gray-500 p-3 transition-colors hover:border-gray-200 active:top-[1px]"
                  >
                    <Icons.Heart className="w-4 flex-shrink-0 text-gray-50 transition-all group-hover:text-green-400" />
                    <div className="text-lg font-bold leading-none">
                      {/* {work._count.likes} */}0
                    </div>
                  </a>

                  <a
                    href="#"
                    className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 transition-colors hover:border-gray-200 active:top-[1px]"
                  >
                    <Icons.Share className="w-4 flex-shrink-0 -translate-x-0.5 text-gray-50 transition-all group-hover:text-green-400" />
                  </a>
                </div>

                <h1 className="text-4xl font-bold leading-[110%] tracking-snug xs:text-5xl">
                  {work.title}
                </h1>
                <div className="mt-4 text-lg text-gray-100">
                  {work.updatedAt ? (
                    <span>Updated on {formatDate(work.createdAt)}</span>
                  ) : (
                    formatDate(work.createdAt)
                  )}
                </div>
              </div>
            </div>

            {/* Wide content */}
            <div className="flex">
              {/* Side column */}
              <div className="relative hidden w-24 border-r border-gray-500 bg-dotted bg-center before:absolute before:-top-[1px] before:right-0 before:-z-10 before:h-[1px] before:w-[100vw] before:bg-gray-500 before:content-[''] min-[900px]:block"></div>

              {/* Main content */}
              <div className="flex-1 overflow-auto p-6 xs:p-10 min-[900px]:p-16">
                {children}
              </div>
            </div>
          </div>

          {/* Narrow section */}
          <div className="col-span-12 flex flex-col-reverse border-x border-gray-500 lg:flex-col min-[1150px]:col-span-4">
            <div className="border-b-0 border-t border-gray-500 bg-center p-6 xs:p-8 min-[1150px]:border-b min-[1150px]:border-t-0 min-[1150px]:bg-dotted min-[1150px]:py-8">
              <div className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-gray-500 bg-gray-1000 p-6">
                <Illustrations.Barber
                  className="absolute text-gray-500/80"
                  position="-top-12 -right-44"
                />

                <div className="relative">
                  <div className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-100">
                    Client
                  </div>
                  <div className="text-lg font-bold leading-snug">
                    {work.client.name}
                  </div>
                  <a
                    href={work.client.website}
                    target="_blank"
                    className="text-gray-30 underline decoration-green-500 hover:text-white"
                  >
                    {work.client.website}
                  </a>
                </div>

                <div className="relative">
                  <div className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-100">
                    Year
                  </div>
                  <div className="text-gray-40">{work.year}</div>
                </div>

                <div className="relative">
                  <div className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-100">
                    Built with
                  </div>
                  <div>
                    {work.technologies.map((technology: any, i: number) => (
                      <span className="text-gray-40" key={technology.name}>
                        <a
                          href={technology.link}
                          className="text-gray-30 underline decoration-green-500 hover:text-white"
                        >
                          {technology.name}
                        </a>
                        {i == work.technologies.length - 1 ? '' : ', '}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-100">
                    Overview
                  </div>
                  <div className="text-gray-40">{work.details}</div>
                </div>
              </div>
            </div>

            <div className="p-6 xs:p-8 min-[1150px]:py-8">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
