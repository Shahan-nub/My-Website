"use client"
import React from 'react'
import { BsArrowDown } from 'react-icons/bs'
import {motion} from 'framer-motion'
export default function DownArrow() {
  return (
    <motion.div className="self-center mt-16 lg:mt-0"
          whileInView={{opacity:[.3, 1,.3],y:[0,20,0],scale:[1,1.1,1] }}
          transition={{type:'tween',duration:1,delay:2,repeat:Infinity,repeatDelay:2}}
          >
            <BsArrowDown className="text-3xl"></BsArrowDown>
          </motion.div>
  )
}
