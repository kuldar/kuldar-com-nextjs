import Logo from '@/components/svgs/logo'
import Icons from '@/components/svgs/icons'
import { generateGreeting } from '@/utils/helpers'
import Social from '@/components/shared/social'
import Link from 'next/link'

// Nav component
export default function Nav() {
  return (
    <>
      {/* Top Bar */}
      <div className="border-b border-gray-500">
        <div className="mx-auto flex h-2 max-w-8xl px-2 xs:h-8 xs:px-6 sm:px-10 xl:h-12">
          <div className="w-24 border-x border-gray-500"></div>
          <div className="flex-1 border-r border-gray-500"></div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-500">
        <div className="mx-auto flex max-w-8xl px-2 xs:px-6 sm:px-10">
          {/* H1 */}
          <div className="w-24 border-x border-gray-500 px-8 py-6">
            <div className="relative w-fit">
              {/* Logo */}
              <a href="/" className="block active:translate-y-[1px]">
                <Logo className="h-10" />
              </a>

              {/* Greeting */}
              <div className="absolute right-3 top-0 z-10 hidden -translate-y-7 translate-x-full rounded-full bg-green-500 px-3 py-2 font-bold leading-none text-gray-1000 xs:inline-block">
                <span className="inline-block">{generateGreeting()}</span>
                <Icons.ChatChin className="absolute -bottom-[9px] left-[7px] w-5 text-green-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end border-r border-gray-500 pr-6">
            <Link
              href="/articles"
              className="group relative flex items-center rounded-full border border-gray-500 px-4 py-2 transition-colors hover:border-gray-200 active:top-[1px]"
            >
              <>
                <Icons.ArrowLeft className="h-4 text-gray-200 transition-all group-hover:mr-4 group-hover:text-green-400 xs:mr-3" />
                <div className="hidden text-sm font-bold uppercase tracking-wide text-white xs:block">
                  All articles
                </div>
              </>
            </Link>

            {/* Divider */}
            <div className="ml-6 hidden h-full items-center border-l border-gray-500 pl-6 min-[900px]:flex">
              <Social />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
