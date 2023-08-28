import Link from 'next/link'

import Icons from '@/components/svgs/icons'

const jams = [
  // {
  //   title: 'Holiday',
  //   subtitle: 'Confidence Man',
  //   url: 'https://www.youtube.com/watch?v=VcCSBrtyEP8',
  // },
  {
    title: 'Select 6',
    subtitle: 'Global Underground',
    url: 'https://www.youtube.com/watch?v=lQEPtMzd_jo&list=PL1qzr6CyLh5c3ppjZ9QmEVmTCJWoVoDPK',
  },
]

// Jams
export default function Jams() {
  return (
    <div className="col-span-10 hidden flex-col items-end justify-end border-x border-t border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 p-8 text-right md:col-span-6 md:flex md:border-l-0 md:border-t-0 min-[896px]:col-span-5 lg:col-span-4">
      <div className="mb-4 w-full border-b border-gray-500 pb-4 text-sm font-bold uppercase">
        Current jam
      </div>

      <Link
        target="_blank"
        href={jams[0].url}
        className="group flex max-w-full items-center justify-end space-x-4 leading-snug active:translate-y-[1px]"
      >
        <div>
          <div className="overflow-hidden whitespace-nowrap text-lg font-medium text-white">
            {jams[0].title}
          </div>

          <div className="text-gray-50">{jams[0].subtitle}</div>
        </div>

        <div className="relative flex h-12 w-12 animate-spin-slower items-center justify-center rounded-full border border-gray-500 transition-colors active:top-[1px] group-hover:border-gray-200">
          <Icons.Music className="h-5 w-5 flex-shrink-0 text-gray-50 transition-colors group-hover:text-green-400" />
        </div>
      </Link>
    </div>
  )
}
