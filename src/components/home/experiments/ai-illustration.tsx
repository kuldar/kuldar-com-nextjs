import Icons from '@/components/svgs/icons'

export const AiIllustration = () => {
  return (
    <div className="origin-top-left translate-x-2 translate-y-1 rotate-6 items-end justify-end overflow-hidden opacity-60 transition-all duration-200 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:rotate-0 group-hover/card:opacity-100">
      <div className="mt-6 h-24 min-w-[160px] max-w-[200px] rounded-tl-xl border-l border-t border-gray-30 p-4 dark:border-gray-500">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Icons.ArrowDown className="h-4 w-4 text-gray-40 dark:text-gray-500" />
            <div className="flex-1">
              <div className="mb-1 h-1.5 max-w-[76px] rounded-sm bg-gray-40 dark:bg-gray-500"></div>
              <div className="h-1 max-w-[50px] rounded-sm bg-gray-30 dark:bg-gray-700"></div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Icons.ArrowDown className="h-4 w-4 rotate-180 text-gray-100 transition-colors duration-200 group-hover/card:text-gray-100 dark:group-hover/card:text-white" />
            <div className="flex-1">
              <div className="mb-1 h-1.5 max-w-[60px] rounded-sm bg-gray-50 transition-colors duration-200 group-hover/card:text-gray-100 dark:group-hover/card:bg-white"></div>
              <div className="h-1 max-w-[34px] rounded-sm bg-gray-50 transition-colors duration-200 group-hover/card:text-gray-100 dark:group-hover/card:bg-white"></div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Icons.ArrowDown className="h-4 w-4 text-gray-40 dark:text-gray-500" />
            <div className="flex-1">
              <div className="mb-1 h-1.5 max-w-[86px] rounded-sm bg-gray-40 dark:bg-gray-500"></div>
              <div className="h-1 max-w-[58px] rounded-sm bg-gray-30 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
