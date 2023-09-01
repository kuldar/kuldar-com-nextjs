'use client'

// Articles placeholder newsletter form
export const ArticlesPlaceholderNewsletterForm = () => {
  return (
    <div className="w-96 space-y-4">
      <form
        className="flex items-center rounded-2xl border border-gray-500 bg-gray-1000"
        action="https://buttondown.email/api/emails/embed-subscribe/kuldar"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window.open('https://buttondown.email/kuldar', 'popupwindow')
        }
      >
        <input
          type="email"
          name="email"
          id="bd-email"
          placeholder="your@email.com"
          autoComplete="email"
          className="h-16 w-full flex-1 bg-transparent pl-6 text-lg outline-none placeholder:text-gray-200"
        />
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
