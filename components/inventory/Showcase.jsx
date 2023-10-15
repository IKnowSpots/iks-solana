"use client"
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Showcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 4; // Adjust this number based on your content


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000); // Change slide every 3 seconds (adjust the interval as needed)
    
        return () => {
          clearInterval(interval); // Clean up the interval on unmount
        };
      }, []);
    
  return (
    <div className='w-full flex flex-col justify-center items-center my-12'>
        <div className='w-[80%] flex flex-col'>
        <h1 className='font-semibold text-3xl mb-2'>My Rewards</h1>
            <p>Unlock and accumulate your exclusive rewards as tokens of your event journey, achieving this by not only gracing the events with your presence but actively engaging and immersing yourself within our state-of-the-art blockchain ticketing system.</p>
        </div>
    <div className='flex justify-center items-center my-12'>
        <Carousel
        autoPlay={false} // Disable auto-play since we control it manually
        showArrows={false}
        showThumbs={false}
        selectedItem={currentIndex}
        >
        <div className='w-[50%] h-[50%] mx-auto my-auto'>
            <Image src="/rewardmockup.png" height="200" width="200" alt="Slide 1" />
        </div>
        <div className='w-[50%] h-[50%] mx-auto my-auto'>
            <Image src="/rewardmockup.png" height="200" width="200" alt="Slide 2" />
        </div>
        <div className='w-[50%] h-[50%] mx-auto my-auto'>
            <Image src="/rewardmockup.png" height="200" width="200" alt="Slide 3" />
        </div>
        <div className='w-[50%] h-[50%] mx-auto my-auto'>
            <Image src="/rewardmockup.png" height="200" width="200" alt="Slide 4" />
        </div>
        </Carousel>
    </div>
    </div>
  )
}

export default Showcase
