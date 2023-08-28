import Icons from '@/components/svgs/icons'
import SectionTitle from '@/components/shared/section-title'
import { Person, PersonAlt } from '@/components/svgs/illustrations'

const GeneratedIllustration = () => {
  return (
    <div className="translate-x-2 translate-y-1 overflow-hidden transition-transform duration-200 group-hover/card:translate-x-0 group-hover/card:translate-y-0">
      <div className="mt-6 h-24 min-w-[160px] max-w-[200px] rounded-tl-xl border-l border-t border-gray-500 p-4">
        <div className="mb-1 h-1.5 max-w-[80px] rounded-sm bg-gray-500"></div>
        <div className="mb-2.5 h-1 max-w-[52px] rounded-sm bg-gray-700"></div>
        <div className="flex gap-2">
          <div className="flex h-14 min-w-[32px] flex-1 items-center justify-center rounded border border-gray-500 text-gray-500">
            <Person />
          </div>
          <div className="flex h-14 min-w-[32px] flex-1 items-center justify-center rounded border border-gray-100 text-gray-100 transition-colors duration-200 group-hover/card:border-white group-hover/card:text-white">
            <PersonAlt />
          </div>
          <div className="flex h-14 min-w-[32px] flex-1 items-center justify-center rounded border border-gray-500 text-gray-500">
            <Person />
          </div>
        </div>
      </div>
    </div>
  )
}

const AiIllustration = () => {
  return (
    <div className="translate-x-2 translate-y-1 items-end justify-end overflow-hidden transition-transform duration-200 group-hover/card:translate-x-0 group-hover/card:translate-y-0">
      <div className="mt-6 h-24 min-w-[160px] max-w-[200px] rounded-tl-xl border-l border-t border-gray-500 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Icons.ArrowDown className="h-4 w-4 text-gray-500" />
            <div className="flex-1">
              <div className="mb-1 h-1.5 max-w-[76px] rounded-sm bg-gray-500"></div>
              <div className="h-1 max-w-[50px] rounded-sm bg-gray-700"></div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Icons.ArrowDown className="h-4 w-4 rotate-180 text-gray-100 transition-colors duration-200 group-hover/card:text-white" />
            <div className="flex-1">
              <div className="mb-1 h-1.5 max-w-[60px] rounded-sm bg-gray-100 transition-colors duration-200 group-hover/card:bg-white"></div>
              <div className="h-1 max-w-[34px] rounded-sm bg-gray-300 transition-colors duration-200 group-hover/card:bg-white"></div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Icons.ArrowDown className="h-4 w-4 text-gray-500" />
            <div className="flex-1">
              <div className="mb-1 h-1.5 max-w-[86px] rounded-sm bg-gray-500"></div>
              <div className="h-1 max-w-[58px] rounded-sm bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const UntickIllustration = () => {
  return (
    <div className="flex h-full items-end overflow-hidden">
      <div className="flex gap-10 pl-0 md:pl-3 min-[1104px]:pl-0">
        <div className="max-w-[200px2 relative mb-6 hidden h-24 min-w-[160px] -translate-x-2 -translate-y-1 rounded-b-xl border-x border-b border-gray-500 transition-transform duration-200 group-hover/card:translate-x-0 group-hover/card:translate-y-0 md:block min-[1104px]:hidden">
          <Icons.Untick className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 transform bg-gray-1000 text-gray-100 transition-all duration-200 group-hover/card:text-white" />

          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[60px] rounded-sm bg-gray-500"></div>
                <div className="h-1 max-w-[40px] rounded-sm bg-gray-700"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[78px] rounded-sm bg-gray-500"></div>
                <div className="h-1 max-w-[55px] rounded-sm bg-gray-700"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[70px] rounded-sm bg-gray-500"></div>
                <div className="h-1 max-w-[50px] rounded-sm bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 h-24 min-w-[160px] max-w-[200px] translate-x-2 translate-y-1 rounded-tl-xl border-l border-t border-gray-500 transition-transform duration-200 group-hover/card:translate-x-0 group-hover/card:translate-y-0">
          <Icons.Untick className="absolute -top-4 left-1/2 h-6 w-6 -translate-x-1/2 transform bg-gray-1000 text-gray-100 transition-all duration-200 group-hover/card:text-white" />

          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[60px] rounded-sm bg-gray-500"></div>
                <div className="h-1 max-w-[40px] rounded-sm bg-gray-700"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[78px] rounded-sm bg-gray-500"></div>
                <div className="h-1 max-w-[55px] rounded-sm bg-gray-700"></div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gray-500"></div>
              <div className="flex-1">
                <div className="mb-1 h-1 max-w-[70px] rounded-sm bg-gray-500"></div>
                <div className="h-1 max-w-[50px] rounded-sm bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const experiments = [
  {
    name: 'Generated',
    description: 'Wallpapers for mobile',
    link: 'https://generatedhumans.com/',
    illustration: <GeneratedIllustration />,
  },
  {
    name: 'Awesome AI',
    description: 'AI resource aggregator',
    link: 'https://awesomeai.xyz/',
    illustration: <AiIllustration />,
  },
  {
    name: 'Untick',
    description: 'Tiny Chrome extension',
    link: 'https://github.com/kuldar/untick',
    illustration: <UntickIllustration />,
  },
]

// Experiments
export default function Experiments() {
  return (
    <div className="order-3 col-span-12 border-x border-t border-gray-500 bg-dotted bg-center p-4 xs:p-8 xl:order-3 xl:col-span-4 xl:border-l-0 xl:border-t-0">
      {/* Title */}
      <SectionTitle title="Experiments" icon={Icons.Labs} />

      {/* List of experiments */}
      <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-5">
        {experiments.map((experiment) => {
          return (
            <a
              target="_blank"
              href={experiment.link}
              key={experiment.name}
              className="group/card relative col-span-6 overflow-hidden rounded-2xl border border-gray-500 bg-gray-1000 bg-gradient-to-br from-gray-900 via-gray-1000 to-gray-800 transition-colors hover:border-gray-200/70 active:top-[1px] last:max-[1103px]:col-span-6 md:col-span-3 min-[1104px]:col-span-2 xl:col-span-6"
            >
              {/* Experiment */}
              <div className="flex h-full items-center justify-between space-x-4 bg-gray-1000 transition-colors hover:bg-transparent">
                <div className="flex-shrink-0 p-6 pr-2">
                  <h3 className="text-3xl font-bold leading-none">
                    {experiment.name}
                  </h3>
                  <div className="mt-2 text-lg leading-snug text-gray-50">
                    {experiment.description}
                  </div>
                </div>

                {experiment.illustration}
                {/* <span className="inline-flex items-center space-x-2 rounded-lg border border-gray-500 py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-200">
                  <div className="text-sm font-bold leading-none text-white">
                    View
                  </div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover/card:border-green-400 group-hover/card:bg-green-400">
                    <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover/card:text-gray-1000" />
                  </div>
                </span> */}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
