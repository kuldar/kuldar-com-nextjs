import Icons from '@/components/svgs/icons'
import Illustrations from '@/components/svgs/illustrations'

// Links
export const links = [
  {
    name: 'X',
    link: 'https://twitter.com/kkuldar',
    icon: Icons.X,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/kkkuldar',
    icon: Icons.Instagram,
  },
  {
    name: 'Github',
    link: 'https://github.com/kuldar',
    icon: Icons.Github,
  },
  {
    name: 'Email',
    link: 'mailto:email@kuldar.com',
    icon: Icons.Email,
  },
]

// Experiments
export const experiments = [
  {
    name: 'Generated',
    description: 'Wallpapers for mobile',
    link: 'https://generatedhumans.com/',
  },
  {
    name: 'Looper',
    description: 'Creative Figma plugin',
    link: 'https://github.com/kuldar/figma-looper',
  },
  {
    name: 'Untick',
    description: 'Tiny Chrome extension',
    link: 'https://github.com/kuldar/untick',
  },
]

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

// Work
export const work = {
  big: {
    name: 'Prisma',
    description: [
      'I had the amazing opportunity to join Prisma as the first full-time designer, just as they were pivoting from GraphCool to an ORM.',
      'This allowed me to help with everything from designing websites, data-browser UIs, event materials, community swag and much more.',
    ],
    link: 'https://prisma.io/',
  },
  medium: [
    {
      name: 'Pento',
      description:
        'Designed marketing website as well as designed and prototyped UI for company payroll management flow.',
      link: 'https://pento.io/',
    },
    {
      name: 'Bonusly',
      description:
        'Designed marketing website as well as designed and prototyped UI for company recognition award flows.',
      link: 'https://bonus.ly/',
    },
  ],
  small: [
    {
      name: 'Synack',
      description: 'Designed UI for a hacker platform',
    },
    {
      name: 'Checkr',
      description: 'Designed website and logo Checkr',
    },
  ],
}
