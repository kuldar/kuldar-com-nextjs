'use client'
import { Plane } from '@/components/svgs/icons'

// Newsletter form
const NewsletterForm = () => {
  return (
    <div className="mb-4 space-y-4 sm:mb-12 min-[1150px]:mb-0">
      <div className="flex items-center space-x-3">
        <Plane className="h-4 text-gray-100" />
        <div className="text-sm font-bold uppercase tracking-wide text-gray-100">
          Get the latest articles
        </div>
      </div>

      {/* <form
        action="#"
        className="flex items-center rounded-2xl border border-gray-500 bg-gray-1000"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          className="h-16 w-full flex-1 bg-transparent pl-6 text-lg outline-none placeholder:text-gray-200"
          type="email"
          name="email"
          id="email"
          placeholder="your@email.com"
        />
        <button
          className="group/button mr-3.5 inline-flex h-9 items-center space-x-2 rounded-lg border border-gray-500 px-2.5 py-2 transition-colors hover:border-gray-200 active:translate-y-[1px]"
          type="submit"
        >
          <div className="text-sm font-bold leading-none text-white">
            Stay up to date
          </div>
        </button>
      </form> */}

      <form
        className="flex items-center rounded-2xl border border-gray-500 bg-gray-1000"
        action="https://tinyletter.com/kuldar"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window.open(
            'https://tinyletter.com/kuldar',
            'popupwindow',
            'scrollbars=yes,width=800,height=600'
          )
        }
      >
        <input
          type="email"
          name="email"
          id="tlemail"
          className="h-16 w-full flex-1 bg-transparent pl-6 text-lg outline-none placeholder:text-gray-200"
        />
        <input type="hidden" value="1" name="embed" />
        <button
          className="group/button mr-3.5 inline-flex h-9 items-center space-x-2 rounded-lg border border-gray-500 px-2.5 py-2 transition-colors hover:border-gray-200 active:translate-y-[1px]"
          type="submit"
        >
          <div className="text-sm font-bold leading-none text-white">
            Stay up to date
          </div>
        </button>
      </form>
    </div>
  )
}

export default NewsletterForm
