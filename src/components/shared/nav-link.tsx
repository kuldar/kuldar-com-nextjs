import Link from 'next/link'

// Nav link component
export default function NavLink({
  title,
  link,
  icon: Icon,
  isActive,
}: {
  title: string
  link: string
  icon: any
  isActive?: boolean
}) {
  return (
    <div className="relative active:top-[1px]">
      <Link
        href={link}
        className={`${
          isActive
            ? 'border-green-500'
            : 'border-transparent hover:border-gray-200'
        } group flex items-center space-x-3 rounded-full border px-4 py-2 transition-colors`}
      >
        <>
          <Icon
            className={`h-4 ${isActive ? 'text-green-500' : 'text-gray-200'}`}
          />
          <div className="text-sm font-bold uppercase tracking-wide text-white">
            {title}
          </div>
        </>
      </Link>
    </div>
  )
}
