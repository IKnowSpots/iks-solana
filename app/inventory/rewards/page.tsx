"use client";
import React from 'react'
import Navbar from '@/components/hostee/Navbar'
import Showcase from "@/components/inventory/Showcase"

export default function page() {
  return (
    <div className='text-white w-full overflow-hidden'>
        <Navbar/>
        <div className='flex justify-center items-center'>
            <div className='w-[85%] h-[2px] bg-white/40'></div>
        </div>
        <div>
          <Showcase/>
        </div>
    </div>
  )
}
