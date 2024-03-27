"use client"
import Image from 'next/image'
import React from 'react'

export default function ImageBox({src,children}) {
  return (
    <div
          className="PROJECT  bg-gradient-to-b from-color-2 via-[rgb(27_27_27)] to-color-2 rounded-3xl  text-[#d1d0ca]  lg:p-2 px-1 pt-1"
        >
        <div className="rounded-2xl PROJECT h-full border-t bg-gradient-to-b from-[#333] to-[#131313]">
           {src && <Image className='h-full rounded-2xl' src={src} width={2400} height={3024}></Image>} 
           {children}
        </div>
            
        </div>
  )
}
