'use client'

import { usePathname } from 'next/navigation'

import NavLink from '@/components/shared/nav-link'
import Logo from '@/components/svgs/logo'
import Icons from '@/components/svgs/icons'
import { generateGreeting } from '@/utils/helpers'

// Nav component
export default function Nav() {
  const pathname = usePathname()

  return (
    <>
      {/* Top Bar */}
      <div className="border-b border-gray-500">
        <div className="mx-auto flex h-4 max-w-8xl px-4 xs:h-16 xs:px-10">
          <div className="w-24 border-x border-gray-500"></div>
          <div className="flex-1 border-r border-gray-500"></div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-500">
        <div className="mx-auto flex max-w-8xl px-4 xs:px-10">
          {/* H1 */}
          <div className="w-24 border-x border-gray-500 px-8 py-6">
            <div className="relative w-fit">
              {/* Logo */}
              <a href="/" className="block active:translate-y-[1px]">
                <Logo className="h-10" />
              </a>

              {/* Greeting */}
              <div className="absolute right-3 top-0 hidden -translate-y-7 translate-x-full rounded-full bg-green-500 px-3 py-2 font-bold leading-none text-gray-1000 xs:inline-block">
                <span className="inline-block">{generateGreeting()}</span>
                <Icons.ChatChin className="absolute -bottom-[9px] left-[7px] w-5 text-green-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-3 border-r border-gray-500 pr-10">
            <NavLink
              title="Articles"
              link="/articles"
              icon={Icons.Bookmark}
              isActive={pathname.startsWith('/articles')}
            />
            <NavLink
              title="Experiments"
              link="/experiments"
              icon={Icons.Labs}
            />
            <NavLink title="Projects" link="/projects" icon={Icons.Fire} />
            {/* <NavLink title="Work" link="/work" icon={Icons.Suitcase} /> */}
          </div>
        </div>
      </header>
    </>
  )
}
