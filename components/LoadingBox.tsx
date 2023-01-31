import Image from 'next/image'
import React from 'react'
import LoadingSvg from '../assets/icon/loading.svg'

function Loading() {
  return (
    <div className='z-40 bg-black/40 fixed w-screen min-h-screen flex justify-center items-center'>
        <Image
            src={LoadingSvg}
            width={100}
            height={100}
            alt='loading-icon'
            style={{pointerEvents:'none'}}
        />
    </div>
  )
}

export default Loading