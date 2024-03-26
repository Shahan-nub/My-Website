"use client"
import Image from 'next/image'
import React from 'react'

export default function ImageBox({src}) {
  return (
    <div
          className="PROJECT  bg-[rgb(30_29_29)] rounded-3xl  text-[#d1d0ca]  lg:p-2 px-1 pt-1"
        >
        <div className="rounded-2xl PROJECT border-t bg-gradient-to-b from-[#333] to-[#131313]">
            <Image className='h-full rounded-2xl' src={src} width={2400} height={3024}></Image>
        </div>
            
        </div>
  )
}
