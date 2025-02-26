import React from 'react'
import { Button } from '../ui/button'

const WatchAnimeComments = () => {
  return (
    <div className='max-w-[1760px] px-5 mx-auto text-slate-800 text-2xl mt-5'>
      <h2>Comments</h2>
      <div className='bg-white my-3 py-5 w-full grid col-1 row-auto gap-3 place-items-center  rounded-md outline-pink-500 outline outline-[1px]' >
        <p className='text-2xl font-semibold'>Login Required</p>
        <p className='text-xl'>You need an account to use this feature.</p>
        <Button className='bg-pink-100 shadow-none text-pink-500 hover:bg-pink-500 hover:text-slate-100' size='lg'>
          Go to login
        </Button>
      </div>
    </div>
  )
}

export default WatchAnimeComments