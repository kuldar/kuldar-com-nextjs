import Icons from '@/components/svgs/icons'

// Small button component
export function ButtonSmall({ label, link }: { label: string; link: string }) {
  return (
    <a
      target={link.startsWith('https') ? '_blank' : '_self'}
      rel={link.startsWith('https') ? 'noreferrer' : undefined}
      href={link}
      className="group/button inline-flex items-center space-x-2 rounded-lg border border-gray-500 py-2 pl-2.5 pr-2 transition-colors hover:border-gray-200 active:translate-y-[1px]"
    >
      <div className="text-sm font-bold leading-none text-white">{label}</div>
      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-200 transition-colors group-hover/button:border-green-400 group-hover/button:bg-green-400">
        <Icons.Arrow className="h-2 w-2 text-white transition-colors group-hover/button:text-gray-1000" />
      </div>
    </a>
  )
}
