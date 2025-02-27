import React from 'react'
import { Button } from '../ui/button'

const WatchAnimeComments = () => {
  return (
    <div className='max-w-[1760px] px-5 mx-auto text-slate-800 text-2xl mt-5'>
      <h2>Comments</h2>
      <div className='bg-white/60 my-3 py-5 px-3 w-full grid col-1 row-auto gap-3 place-items-center  rounded-md text-center' >
        <p className='text-xl font-semibold md:text-2xl'>Login Required</p>
        <p className='text-base sm:text-lg md:text-xl text-black/50'>You need an account to use this feature.</p>
        <Button className='bg-pink-100 shadow-none text-pink-500 hover:bg-pink-500 hover:text-slate-100' size='lg'>
          Go to login
        </Button>
      </div>
    </div>
  )
}

export default WatchAnimeComments