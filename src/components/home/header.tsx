import Logo from '@/components/svgs/logo'
import Icons from '@/components/svgs/icons'
import { generateGreeting } from '@/utils/helpers'

// Header component
export default function Header() {
  return (
    <>
      {/* Top bar */}
      <div className="border-b border-gray-500">
        <div className="mx-auto grid h-2 max-w-8xl grid-cols-12 px-2 xs:h-8 xs:px-6 sm:px-10 xl:h-12 xl:px-10">
          <div className="col-span-10 border-x border-gray-500 md:col-span-4"></div>
          <div className="col-span-2 border-r border-gray-500 min-[896px]:col-span-3"></div>
          <div className="col-span-1 hidden border-r border-gray-500 lg:block"></div>
          <div className="col-span-6 hidden border-r border-gray-500 md:block min-[896px]:col-span-5 lg:col-span-4"></div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          {/* H1 */}
          <div className="col-span-10 border-x border-gray-500 p-10 md:col-span-4">
            <div className="relative w-fit">
              {/* Logo */}
              <Logo className="h-16 min-[896px]:h-24 xl:h-32" />

              {/* Greeting */}
              <div className="absolute right-0 top-0 hidden -translate-y-14 translate-x-12 rounded-full bg-green-500 px-4 py-3 text-lg font-bold leading-none text-gray-1000 xs:inline-block lg:translate-x-full lg:translate-y-0">
                <span className="inline-block">{generateGreeting()}</span>
                <Icons.ChatChin className="absolute -bottom-[9px] left-[7px] w-5 text-green-500" />
              </div>
            </div>
          </div>

          <div className="col-span-2 border-r border-gray-500 min-[896px]:col-span-3"></div>
          <div className="col-span-2 block border-r border-t border-gray-500 max-md:order-last md:hidden lg:col-span-1 lg:block lg:border-t-0"></div>

          {/* Jams */}
          <div className="col-span-10 flex flex-col items-end justify-end border-x border-t border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 p-8 text-right md:col-span-6 md:border-l-0 md:border-t-0 min-[896px]:col-span-5 lg:col-span-4">
            <div className="mb-4 text-sm font-bold uppercase">Current jam</div>

            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=lQEPtMzd_jo&list=PL1qzr6CyLh5c3ppjZ9QmEVmTCJWoVoDPK"
              className="flex max-w-full items-center justify-end space-x-3 rounded-full border border-gray-500 py-1.5 pl-4 pr-3 text-gray-50 transition-colors hover:border-gray-200 hover:text-white"
            >
              <div className="w-full overflow-hidden whitespace-nowrap text-lg">
                Global Underground Select 6
              </div>

              <Icons.Youtube className="h-5 w-5 flex-shrink-0 animate-spin-slow text-red-600" />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
