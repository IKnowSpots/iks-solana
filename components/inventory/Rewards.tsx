import React from 'react';
import Image from "next/image";

export default function Rewards() {
  return (
    <div>
        <div className="w-full flex justify-end">
                    <div className="grad1 blur-[50px] flex h-[200px] w-[40%] absolute"></div>
                </div>
    <div className='flex justify-center items-center'>
      <div className="bg-[#3C3C3C] relative flex items-center p-8 w-[85%] rounded-xl bg-opacity-40 bg-blur-md">
            <div className="flex flex-col items-start">
                <h1 className="text-3xl sm:text-4xl font-semibold mt-4 ">My Rewards</h1>
                <p className="w-3/4 text-[0.9rem] sm:text-[1rem] pt-6">
                Experience the seamless aggregation of your event-related rewards, earned through your attendance at various curated experiences
                </p>
            </div>
            <div>
            
            </div>
        </div>
        <div className='w-[80%] flex justify-end items-end absolute'>
            <Image src="/rewardCard.png" width="230" height="220" alt="discs" />
        </div>
    </div>
    </div>
  )
}
