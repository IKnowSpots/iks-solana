import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="w-full h-[440px] md:h-[650px] lg:h-[800px] xl:h-auto">
      <div className="top-[17%] lg:top-[35%] flex flex-col justify-center items-center text-center w-full absolute">
        <h1 className="text-[2.5rem] sm:text-8xl font-bold text-gradient ">
          Introducing <span className="block">iknowspots</span>
        </h1>
        <p className="m-5 text-lg sm:text-xl">
          Seamless granular events hosting with NFT tickets.
        </p>
<div>
<a className="cta-button w-full px-4 sm:px-6 py-1 text-[0.8rem] sm:text-[1rem]" href="https://www.youtube.com/watch?v=2iu2g7btF9A">
    Demo Video</a>
</div>

      </div>
      <div id="parent-div" className="relative hidden sm:flex w-full p-6 flex justify-center items-center">
        <Image
          src="/circles.png"
          width="1500"
          height="50"
          className="opacity-20  "
          alt="Circle" />
        <Image
          src="/circles-mirror.png"
          width="1500"
          height="100"
          className="absolute top-0 rotate-12 opacity-20"
          alt="Circle" />
      </div>
    </div>
  )
}
export default HeroSection