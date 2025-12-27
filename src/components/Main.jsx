import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Continue from './Continue'
import Like from './Like'

const Main = () => {
  return (
    <div className='text-white p-2 w-[85%]'>
      <Navbar />
      <Hero />
      <Continue />
      <Like />
    </div>
  )
}

export default Main
