import { NextResponse } from 'next/server'

import { getCurrentlyPlaying } from '@/utils/spotify'

export async function GET() {
  const currentlyPlaying = await getCurrentlyPlaying()
  return NextResponse.json(currentlyPlaying)
}

export const revalidate = 0
