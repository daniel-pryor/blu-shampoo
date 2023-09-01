'use client'

import { FormProps } from '@/types'
import { useState } from 'react'

const Form = ({
  member,
  setMember,
  submitting,
  setSubmitting,
  handleSubmit,
}: FormProps) => {
  const [emailError, setEmailError] = useState<string>('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setMember({ ...member, email })
    if (!submitting) {
      validateEmail(email)
    }
  }

  const validateEmail = (email: string) => {
    const errors = []

    // Regular expression to match email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    if (!email.match(emailRegex)) {
      errors.push('Invalid email format')
    }

    setEmailError(errors.join(', '))
  }

  const isSubmitDisabled = submitting || !!emailError
  return (
    <div>
      <div className='text-center'>
        <h1 className='md:text-5xl text-4xl bold text-white '>
          join our waitlist
        </h1>
      </div>
      <section>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          {/* <label htmlFor=''>
            <input
              type='text'
              placeholder='First name'
              onChange={(e) =>
                setMember({ ...member, firstname: e.target.value || 'John' })
              }
              className='input'
            />
          </label>
          <label htmlFor=''>
            <input
              type='text'
              placeholder='Last name'
              onChange={(e) =>
                setMember({ ...member, lastname: e.target.value || 'Doe' })
              }
              className='input'
            />
          </label> */}
          <div className='flex justify-between mt-10'>
            <label htmlFor=''>
              <input
                type='text'
                required
                placeholder='Email...'
                onChange={handleEmailChange}
                className='input'
              />
              {emailError && submitting && (
                <p className='text-red-500'>{emailError}</p>
              )}
            </label>
            <button
              type='submit'
              disabled={isSubmitDisabled}
              className='px-5 py-1.5 text-xl border-2 border-solid'
            >
              {submitting ? `Loading...` : 'Join'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Form
