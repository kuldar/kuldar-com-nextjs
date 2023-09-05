import Header from '@/components/home/header'
import AboutMe from '@/components/home/about-me'
import Experiments from '@/components/home/experiments'
import Portrait from '@/components/home/portrait'
import Companies from '@/components/home/companies'
import { ArticlesPlaceholder } from '@/components/home/articles-placeholder'
import Works from '@/components/home/works'
import Footer from '@/components/shared/footer'

// Home page
export default async function Home() {
  return (
    <div>
      <Header />

      {/* First section */}
      <div className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          <AboutMe />
          <Experiments />
          <Portrait />
        </div>
      </div>

      {/* Second section */}
      <div className="border-b border-gray-30 dark:border-gray-500">
        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          <Companies />
          <ArticlesPlaceholder />
        </div>

        <div className="mx-auto grid max-w-8xl grid-cols-12 px-2 xs:px-6 sm:px-10">
          <Works />
        </div>
      </div>

      <Footer />
    </div>
  )
}
