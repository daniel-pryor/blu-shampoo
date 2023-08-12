import { Hero, WaitList } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-hero-image bg-no-repeat  bg-cover'>
      <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold z-100 text-cyan-100'>
        Blu Shampoo
      </h1>
      <WaitList />
    </main>
  )
}
