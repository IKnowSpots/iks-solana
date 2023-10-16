"use client"
import Spline from "@splinetool/react-spline";

const SdkSection = () => {
  return (
    <div className="p-10 my-10 box-background mx-4 sm:mx-12">
      <div>
        <div className="grad2 blur-[300px] absolute w-full h-[700px]"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-evenly">
        {/* <img src="/snippet.png" alt="snippet-image" /> */}
        <Spline scene="https://prod.spline.design/AYHgIgDYGdwYyrFj/scene.splinecode"/>
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
            SDK
          </h1>
          <h3 className="CS-text-gradient font-semibold text-3xl md:text-5xl lg:text-7xl italic tracking-tighter">
            Coming soon!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SdkSection;