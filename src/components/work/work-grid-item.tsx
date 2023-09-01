import Link from 'next/link'

import { Work as WorkType } from '@/utils/fetch-works'

// Work grid item
export function WorkGridItem({
  work,
  index,
}: {
  work: WorkType
  index: number
}) {
  const gridPlacement = [
    'col-span-6 md:col-span-3 lg:col-span-4',
    'col-span-6 md:col-span-3 lg:col-span-2 row-span-1 lg:row-span-2',
    'col-span-6 md:col-span-3 lg:col-span-4',
    'col-span-6 md:col-span-3 lg:col-span-2 row-span-1 lg:row-span-2',
    'col-span-6 md:col-span-3 lg:col-span-4',
    'col-span-6 md:col-span-3 lg:col-span-4',
  ]

  return (
    <article
      className={`${gridPlacement[index]} flex border-b border-r border-gray-500 @container`}
    >
      <div className="flex flex-col gap-10 p-6 @md:flex-row xs:p-10 xl:p-16">
        <div className="flex h-64 w-full @md:h-full @md:w-[40%]">
          <Link
            href={`/work/${work.slug}`}
            className="h-full w-full rounded-lg bg-gray-700"
          ></Link>
        </div>

        <div className="flex flex-1 flex-col">
          <Link href={`/work/${work.slug}`} className="mb-4 block flex-1">
            <h1 className="mb-4 text-4xl font-bold leading-[110%] tracking-snug">
              {work.title}
            </h1>
            <div className="text-lg text-gray-50">{work.description}</div>
          </Link>

          <div className="flex justify-between border-t border-gray-500 pt-4 text-lg text-gray-50">
            <div>{work.client.name}</div>
            <Link
              href={work.client.website}
              target="_blank"
              className="text-gray-30 underline decoration-green-500 hover:text-white"
            >
              {work.client.website}
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
