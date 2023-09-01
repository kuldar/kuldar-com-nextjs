import { getCurrentlyPlaying } from '@/utils/spotify'
import { Listening } from '@/components/home/listening'

export async function ListeningWrapper() {
  const currentlyPlaying = await getCurrentlyPlaying()

  return <Listening currentlyPlaying={currentlyPlaying} />
}
