import { Hero, Slideshow, WaitList } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-hero-image bg-no-repeat  bg-cover text-primary-white font-Taviraj tracking-wide'>
      <Slideshow />
    </main>
  )
}
