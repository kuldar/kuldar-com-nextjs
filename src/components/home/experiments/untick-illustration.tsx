import Icons from '@/components/svgs/icons'

export const UntickIllustration = () => {
  return (
    <div className="flex h-full items-end overflow-hidden opacity-60 transition-opacity duration-200 group-hover/card:opacity-100">
      <div className="flex gap-10 pl-3">
        <div className="relative mb-6 hidden h-24 min-w-[160px] max-w-[200px] origin-bottom-right -translate-x-2 -translate-y-1 rotate-6 rounded-b-xl border-x border-b border-gray-30 transition-transform duration-200 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:rotate-0 dark:border-gray-500 md:block min-[1104px]:hidden">
          <Icons.Untick className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 transform bg-white text-gray-50 transition-all duration-200 group-hover/card:text-gray-100 dark:bg-gray-1000 dark:text-gray-100 dark:group-hover/card:text-white" />

          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-30 dark:bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[60px] rounded-sm bg-gray-40 dark:bg-gray-500"></div>
                <div className="h-1 max-w-[40px] rounded-sm bg-gray-30 dark:bg-gray-700"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-30 dark:bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[78px] rounded-sm bg-gray-40 dark:bg-gray-500"></div>
                <div className="h-1 max-w-[55px] rounded-sm bg-gray-30 dark:bg-gray-700"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-30 dark:bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[70px] rounded-sm bg-gray-40 dark:bg-gray-500"></div>
                <div className="h-1 max-w-[50px] rounded-sm bg-gray-30 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 h-24 min-w-[160px] max-w-[200px] origin-top-left translate-x-2 translate-y-1 rotate-6 rounded-tl-xl border-l border-t border-gray-30 transition-transform duration-200 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:rotate-0 dark:border-gray-500">
          <Icons.Untick className="absolute -top-4 left-1/2 h-6 w-6 -translate-x-1/2 transform bg-white text-gray-50 transition-all duration-200 group-hover/card:text-gray-100 dark:bg-gray-1000 dark:text-gray-100 dark:group-hover/card:text-white" />

          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-30 dark:bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[60px] rounded-sm bg-gray-40 dark:bg-gray-500"></div>
                <div className="h-1 max-w-[40px] rounded-sm bg-gray-30 dark:bg-gray-700"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-30 dark:bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[78px] rounded-sm bg-gray-40 dark:bg-gray-500"></div>
                <div className="h-1 max-w-[55px] rounded-sm bg-gray-30 dark:bg-gray-700"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-30 dark:bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[70px] rounded-sm bg-gray-40 dark:bg-gray-500"></div>
                <div className="h-1 max-w-[50px] rounded-sm bg-gray-30 dark:bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
