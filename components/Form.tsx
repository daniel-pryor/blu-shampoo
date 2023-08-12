import React from 'react'

const Form = () => {
  return (
    <div>
      <section>
        <label htmlFor=''>
          <span className='text-white'>Join our waitlist: </span>
          <input type='text' required placeholder='Email...' />
        </label>
      </section>
    </div>
  )
}

export default Form
