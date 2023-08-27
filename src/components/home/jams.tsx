import Icons from '@/components/svgs/icons'
import Image from 'next/image'

export default function Jams() {
  return (
    <div className="col-span-10 hidden flex-col items-end justify-end border-x border-t border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 p-8 text-right md:col-span-6 md:flex md:border-l-0 md:border-t-0 min-[896px]:col-span-5 lg:col-span-4">
      <div className="mb-4 text-sm font-bold uppercase">Current jam</div>

      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=lQEPtMzd_jo&list=PL1qzr6CyLh5c3ppjZ9QmEVmTCJWoVoDPK"
        className="group flex max-w-full items-center justify-end space-x-4 text-gray-50 transition-colors hover:text-white active:translate-y-[1px]"
      >
        <div>
          <div className="w-full overflow-hidden whitespace-nowrap text-lg">
            Select 6
          </div>

          <div className="leading-snug text-gray-200 transition-colors group-hover:text-gray-50">
            Global Underground
          </div>
        </div>

        <div
          style={{ backgroundImage: `url("/global-underground-6.jpg")` }}
          className="group/button flex h-10 w-10 items-center justify-center rounded-md bg-cover"
        >
          <Icons.PlayCircle className="h-5 w-5 text-white/75 drop-shadow-md transition-all group-hover/button:scale-125 group-hover/button:text-white" />
        </div>
      </a>
    </div>
  )
}
