'use client'

import React, { useState, useEffect } from 'react'
import { Form } from '.'
import { thanksArray } from '@/utils/constants'

interface WordChangerProps {
  words: string[]
}

const WordChanger: React.FC<WordChangerProps> = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)

    return () => {
      clearInterval(intervalId)
    }
  }, [words.length])

  return <div className='text-2xl'>{words[currentIndex]}</div>
}

// Example usage

const WaitList = () => {
  const [submitting, setSubmitting] = useState(false)
  const [member, setMember] = useState({
    email: '',
    firstname: '',
    lastname: '',
  })
  const [res, setRes] = useState(0)

  const createMember = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const response = await fetch('/api/member/new', {
        method: 'POST',
        body: JSON.stringify({
          email: member.email,
          firstname: member.firstname,
          lastname: member.lastname,
        }),
      })
      setRes(response.status)
      return response
    } catch (error) {
      console.log('Error', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className='z-10'>
      {res === 0 ? (
        <Form
          member={member}
          setMember={setMember}
          submitting={submitting}
          setSubmitting={setSubmitting}
          handleSubmit={createMember}
        />
      ) : (
        <WordChanger words={thanksArray} />
      )}
    </div>
  )
}

export default WaitList
