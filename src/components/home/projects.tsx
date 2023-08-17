import SectionTitle from '@/components/shared/section-title'
import Illustrations from '@/components/svgs/illustrations'
import Icons from '@/components/svgs/icons'

// Projects
export const projects = [
  {
    name: 'Awesome AI',
    description:
      'Had a stupid itch to build a Hacker News for AI in the style of Windows 95. So I did.',
    link: 'https://awesomeai.xyz/',
    illustration: Illustrations.Windows,
  },
  {
    name: 'A-Barber',
    description:
      'Some branding, marketing design and web development for my dear sister-in-law.',
    link: 'https://a-barber.ee/',
    illustration: Illustrations.Barber,
  },
  {
    name: 'Õunaturg',
    description:
      'Designed, co-built and sold a marketplace for selling second-hand Apple products.',
    link: 'https://ounaturg.ee/',
    illustration: Illustrations.Ounaturg,
  },
]

// Projects
export default function Projects() {
  return (
    <div className="col-span-12 border-x border-t border-gray-500 bg-dotted bg-center p-4 xs:p-8">
      {/* Title */}
      <SectionTitle title="Projects" icon={Icons.Fire} />

      {/* List of projects */}
      <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-8">
        {projects.map((project, i) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            className={`group/card relative col-span-6 overflow-hidden rounded-2xl border-t border-gray-50/20 bg-gradient-to-br from-gray-950 to-gray-800 p-8 active:top-[1px] ${
              i + 1 === projects.length ? 'md:col-span-6' : 'md:col-span-3'
            } lg:col-span-2`}
          >
            <project.illustration
              className={`absolute text-gray-600/80 duration-300 group-hover/card:text-gray-500`}
            />

            {/* Content */}
            <div className="relative flex h-full flex-col items-start">
              <h2 className="text-5xl font-bold tracking-snug">
                {project.name}
              </h2>

              <div className="mb-10 mt-6 flex-1 space-y-6 pr-4 text-lg leading-normal text-gray-50">
                {project.description}
              </div>

              <span className="inline-flex items-center space-x-2 rounded-lg border border-gray-500 bg-gray-900 py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-200">
                <div className="text-sm font-bold leading-none text-white">
                  View project
                </div>
                <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover/card:border-green-400 group-hover/card:bg-green-400">
                  <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover/card:text-gray-1000" />
                </div>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
