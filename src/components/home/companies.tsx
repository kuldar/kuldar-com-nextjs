import CompanyLogos from '@/components/svgs/company-logos'

// Projects
export const companies = [
  {
    name: 'Synack',
    link: 'https://www.synack.com/',
    logo: <CompanyLogos.Synack className="h-9 w-auto" />,
  },
  {
    name: 'Pento',
    link: 'https://www.pento.io/',
    logo: <CompanyLogos.Pento className="h-11 w-auto" />,
  },
  {
    name: 'Prisma',
    link: 'https://www.prisma.io/',
    logo: <CompanyLogos.Prisma className="h-10 w-auto" />,
  },
  {
    name: 'Checkr',
    link: 'https://checkr.com/',
    logo: <CompanyLogos.Checkr className="h-6 w-auto" />,
  },
  {
    name: 'Bonusly',
    link: 'https://bonusly.com/',
    logo: <CompanyLogos.Bonusly className="h-10 w-auto" />,
  },
  {
    name: 'Fraktal',
    link: 'https://fraktal.co/',
    logo: <CompanyLogos.Fraktal className="h-12 w-auto" />,
  },
]

// Companies
export default function Companies() {
  return (
    <div className="order-2 col-span-12 flex flex-col-reverse border-x border-gray-500 lg:order-1 lg:col-span-5 lg:flex-col xl:col-span-4">
      <div className="flex h-64 flex-1 flex-col items-center justify-center border-t border-gray-500 px-8 py-8 text-center lg:border-t-0">
        <div className="mb-4 text-lg font-bold leading-snug">
          Companies{' '}
          <span className="inline lg:block">I&#39;ve worked with</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 p-4">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.link}
              target="_blank"
              className="text-gray-200 transition-colors hover:text-gray-30"
            >
              {company.logo}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
