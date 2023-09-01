import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createServerComponentClient({ cookies })

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  const { count, error } = await supabase
    .from('work_likes')
    .select('*', { count: 'exact', head: true })
    .eq('work', slug)

  if (error) {
    return NextResponse.error()
  }

  const likes = cookies().get('likes')?.value
  const likesArray = JSON.parse(likes || '[]')
  const isLiked = likesArray.includes(slug)

  return NextResponse.json({ count, isLiked })
}

export const revalidate = 0
