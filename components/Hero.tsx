import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex'>
      <div>
        <Image
          src='/hero.png'
          alt='hero'
          fill
          className='object-cover z-0 absolute'
        />
      </div>{' '}
    </div>
  )
}

export default Hero
