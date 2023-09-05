import { Person, PersonAlt } from '@/components/svgs/illustrations'

export const GeneratedIllustration = () => {
  return (
    <div className="origin-top-left translate-x-2 translate-y-1 rotate-6 overflow-hidden opacity-60 transition-all duration-200 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:rotate-0 group-hover/card:opacity-100">
      <div className="mt-6 h-24 min-w-[160px] max-w-[200px] rounded-tl-xl border-l border-t border-gray-30 p-4 dark:border-gray-500">
        <div className="mb-1 h-1.5 max-w-[80px] rounded-sm bg-gray-40 dark:bg-gray-500"></div>
        <div className="mb-2.5 h-1 max-w-[52px] rounded-sm bg-gray-30 dark:bg-gray-700"></div>
        <div className="flex gap-2">
          <div className="flex h-14 min-w-[32px] flex-1 items-center justify-center rounded border border-gray-30 text-gray-30 dark:border-gray-500 dark:text-gray-500">
            <Person />
          </div>
          <div className="flex h-14 min-w-[32px] flex-1 items-center justify-center rounded border border-gray-40 text-gray-50 transition-colors duration-200 group-hover/card:text-gray-100 dark:border-gray-100 dark:text-gray-100 dark:group-hover/card:border-white dark:group-hover/card:text-white">
            <PersonAlt />
          </div>
          <div className="flex h-14 min-w-[32px] flex-1 items-center justify-center rounded border border-gray-30 text-gray-30 dark:border-gray-500 dark:text-gray-500">
            <Person />
          </div>
        </div>
      </div>
    </div>
  )
}
