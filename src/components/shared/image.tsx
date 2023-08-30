import NextImage from 'next/image'

export function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="-mx-16 my-8">
      <NextImage className="h-auto w-full" src={src} alt={alt} />
    </div>
  )
}
