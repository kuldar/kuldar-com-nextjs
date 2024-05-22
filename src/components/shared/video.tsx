// Video
export function Video({ src }: { src: string }) {
  return (
    <div className="-mx-10 my-8 min-[900px]:-mx-16">
      <video className="h-auto w-full" src={src} controls autoPlay muted />
    </div>
  )
}
