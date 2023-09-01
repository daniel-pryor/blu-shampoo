'use client'

import Image from 'next/image'
//These are Third party packages for smooth slideshow
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { WaitList } from '.'
import { useEffect, useState } from 'react'

const Slideshow = () => {
  //Array of Images
  const images = [
    '/images/water.jpg',
    '/images/shampoo.jpg',
    '/images/skate.jpg',
    '/images/syd.jpg',
  ]

  const [showWaitList, setShowWaitList] = useState(false)
  const [showText, setShowText] = useState(true)
  const [heading, setHeading] = useState('blu.')
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const textChangeTimeout = setTimeout(() => {
      setHeading('full site coming soon')
      setShowLogo(true)
    }, 13000)

    const textTimeout = setTimeout(() => {
      setShowText(false)
    }, 16000)

    const waitListTimeout = setTimeout(() => {
      setShowWaitList(true)
    }, 16000)

    return () => {
      clearTimeout(textChangeTimeout)
      clearTimeout(textTimeout)
      clearTimeout(waitListTimeout)
    }
  }, [])

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    scale: 1,
    duration: 3000,
    transitionDuration: 300,
    infinite: false,
    prevArrow: (
      <div className='hidden'>
        <ArrowLeftIcon className='h-8 w-8 text-white cursor-pointer' />
      </div>
    ),
    nextArrow: (
      <div className='hidden'>
        <ArrowRightIcon className='h-8 w-8 text-white cursor-pointer' />
      </div>
    ),
  }
  return (
    <div className='w-full h-screen'>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className='flex justify-center items-center w-screen h-screen relative'
          >
            <Image
              className='w-screen h-screen  '
              src={each}
              alt='hero'
              fill
              objectFit='cover'
              priority
            />
            {showLogo && (
              <div className='absolute top-5 left-5 md:left-7 text-3xl'>
                <p>blu.</p>
              </div>
            )}
            <div className='flex flex-col items-center justify-center absolute gap-2'>
              {showText && (
                <h1 className='md:text-6xl text-4xl bold'>{heading}</h1>
              )}

              {showWaitList && <WaitList />}
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow
