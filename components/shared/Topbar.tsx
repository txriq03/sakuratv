import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Poppins } from 'next/font/google'

const Topbar = () => {
  return (
    <div className='w-full bg-[#2b2d42] justify-between'>
      <div className=' flex items-center justify-between mx-auto max-w-[1680px] px-6 lg:px-20 3xl:px-0 relative z-30 py-3'>

        {/* Logo */}
        <Link href="/">
          <h1 className='text-pink-500 text-2xl font-bold'>SakuraTV</h1>
        </Link>

        {/* Search input */}
        <Input placeholder='Search anime...' className='w-[35%] hidden sm:flex shadow-sm hover:shadow-md bg-zinc-500 bg-opacity-20 py-5 border-none placeholder-zinc-400 hover:bg-zinc-500 hover:bg-opacity-35 text-white placeholder:font-semibold'/>

        {/* Buttons */}
        <Link href='/login'>
          <Button className='bg-pink-600 hover:bg-pink-700 '>Login</Button>
        </Link>
      </div>


    </div>
  )
}

export default Topbar