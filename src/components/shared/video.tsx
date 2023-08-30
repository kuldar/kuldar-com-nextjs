'use client'

import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedVideo } from '@cloudinary/react'

export function Video({ src }: { src: string }) {
  const cloudinary = new Cloudinary({
    cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME },
  })

  return (
    <div className="-mx-16 my-8 bg-red-500">
      <AdvancedVideo
        className="h-auto w-full"
        cldVid={cloudinary.video(src).quality('auto:best')}
        controls
        autoPlay
        muted
      />
    </div>
  )
}
