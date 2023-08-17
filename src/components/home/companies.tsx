// Companies
export default function Companies() {
  return (
    <div className="col-span-12 flex flex-col-reverse border-x border-gray-500 lg:col-span-5 lg:flex-col xl:col-span-4">
      <div className="relative flex h-64 flex-1 items-center justify-center border-b border-t-0 border-gray-500 bg-gradient-to-br from-gray-700 via-gray-1000 to-gray-1000 px-8 py-12 text-center before:absolute before:-top-[1px] before:right-0 before:-z-10 before:h-[1px] before:w-[100vw] before:bg-gray-500 before:content-[''] lg:border-b-0">
        <div className="max-w-sm space-y-4 text-lg leading-snug">
          <p>
            Have an interesting, stupid or crazy idea you&#39;d like some help
            building?
          </p>
          <a
            href="mailto:email@kuldar.com"
            className="inline-block font-bold underline decoration-green-400"
          >
            Let&#39;s talk.
          </a>
        </div>
      </div>
    </div>
  )
}
