import Icons from "@/components/svgs/icons";
import SectionTitle from "@/components/shared/section-title";

// Experiments
export const experiments = [
  {
    name: "Generated",
    description: "Wallpapers for mobile",
    link: "https://generatedhumans.com/",
  },
  {
    name: "Looper",
    description: "Creative Figma plugin",
    link: "https://github.com/kuldar/figma-looper",
  },
  {
    name: "Untick",
    description: "Tiny Chrome extension",
    link: "https://github.com/kuldar/untick",
  },
];

// Experiments component
export default function Experiments() {
  return (
    <div className="order-3 col-span-12 border-x border-t border-gray-500 bg-dotted bg-center p-4 xs:p-8 xl:order-2 xl:col-span-4 xl:border-t-0 xl:border-l-0">
      {/* Title */}
      <SectionTitle title="Experiments" icon={Icons.Labs} />

      {/* List of experiments */}
      <div className="mt-4 grid grid-cols-6 gap-4 xs:mt-6 xs:gap-5">
        {experiments.map((experiment, i) => {
          return (
            <a
              target="_blank"
              href={experiment.link}
              key={experiment.name}
              className="group/card relative col-span-6 flex items-center justify-between space-x-4 rounded-2xl border border-gray-500 bg-gray-1000 p-6 pr-8 active:top-[1px] last:max-[1104px]:col-span-6 md:col-span-3 min-[1104px]:col-span-2 xl:col-span-6"
            >
              {/* Experiment */}
              <div>
                <h3 className="text-3xl font-bold leading-none">
                  {experiment.name}
                </h3>
                <div className="mt-2 text-lg leading-snug text-gray-50">
                  {experiment.description}
                </div>
              </div>
              <span className="inline-flex items-center space-x-2 rounded-lg border border-gray-500 py-2 pl-2.5 pr-2 transition-colors group-hover/card:border-gray-200">
                <div className="text-sm font-bold leading-none text-white">
                  View
                </div>
                <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover/card:border-green-400 group-hover/card:bg-green-400">
                  <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover/card:text-gray-1000" />
                </div>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
