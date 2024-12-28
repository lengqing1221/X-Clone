import React from 'react'
import X from '@/components/svg/X';

const page = () => {
  return (
    <div className='flex w-full bg-black text-white'>
      <div className='w-1/2 items-center'>
      <X className='w-10 h-10'/>
      </div>
      <div className='w-1/2'>right </div>
    </div>
  )
}

export default page
