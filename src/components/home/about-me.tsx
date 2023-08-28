import Signature from '@/components/svgs/signature'
import Social from '@/components/shared/social'
// import Icons from '@/components/svgs/icons'

// // Social links
// export const links = [
//   {
//     name: "X",
//     link: "https://twitter.com/kkuldar",
//     icon: Icons.X,
//   },
//   {
//     name: "Instagram",
//     link: "https://instagram.com/kkkuldar",
//     icon: Icons.Instagram,
//   },
//   {
//     name: "Github",
//     link: "https://github.com/kuldar",
//     icon: Icons.Github,
//   },
//   {
//     name: "Email",
//     link: "mailto:email@kuldar.com",
//     icon: Icons.Email,
//   },
// ];

// About component
export default function AboutMe() {
  return (
    <div className="order-2 col-span-12 flex flex-col justify-between border-x border-gray-500 md:order-1 md:col-span-6 min-[896px]:col-span-7 xl:col-span-4">
      {/* Intro */}
      <div className="px-4 pt-4 xs:px-10 xs:pt-10">
        <h2 className="text-5xl font-bold tracking-snug">About me</h2>
        <div className="mt-6 space-y-6 text-lg leading-normal text-gray-50">
          <p>
            I’m a nerd from Estonia working as a designer &amp; developer,
            building all sorts of interesting and dumb ideas.
          </p>
          <p>
            I like to{' '}
            <a
              target="_blank"
              href="https://www.instagram.com/kkkuldar/"
              className="text-white underline decoration-green-400"
            >
              play with cameras
            </a>
            , nerd over cool{' '}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=TeVbYCIFVa8"
              className="text-white underline decoration-green-400"
            >
              space rockets
            </a>{' '}
            and learn more about math and artificial intelligence.
          </p>
        </div>

        <Signature className="mt-8 h-10" />
      </div>

      {/* Contact */}
      <div className="px-8 pb-8 text-right">
        <div className="mb-4 text-sm font-bold uppercase">Find me at</div>

        {/* Icons */}
        <Social />
      </div>
    </div>
  )
}
