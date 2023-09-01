'use server'

import { cookies } from 'next/headers'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

export async function likeWork(formData: FormData) {
  const work = formData.get('work')
  const supabase = createServerActionClient({ cookies })
  const likes = cookies().get('likes')?.value
  var likesArray = JSON.parse(likes || '[]')
  likesArray.push(work)
  cookies().set('likes', JSON.stringify(likesArray))

  try {
    await supabase.from('work_likes').insert({ work })
    return { message: 'Success!' }
  } catch (e) {
    return { message: 'There was an error.' }
  }
}
