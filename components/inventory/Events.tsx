import Image from "next/image";
import MyCalendar from "./MyCalender";

const Events = () => {
  return (
    <div className="flex items-center justify-center ">
    <div className="w-full flex relative z-5">
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-center w-[80%] gap-8">
          <button className="bg-white w-[20%] p-3 rounded-[30px] text-[#090312] font-semibold">All Events</button>
          <button className="bg-white w-[20%] p-3 rounded-[30px] text-[#090312] font-semibold">Upcoming</button>
          <button className="bg-white w-[20%] p-3 rounded-[30px] text-[#090312] font-semibold">Attended</button>
        </div>
        <div className="flex w-[75%] gap-4 justify-between bg-[#56565680] p-8 my-6 sm:my-8 rounded-xl gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-semibold">Solidity Bootcamp</p>
            <p>Intensive Solidity Bootcamp: Develop smart contracts, DApps, and excel in blockchain.</p>
          </div>
          <Image
            src="/solidity.jpeg"
            width="219"
            height="136"
            alt="bubble png"
            className="rounded-xl"
          />
        </div>
        <div className="flex w-[75%] gap-4 justify-between bg-[#56565680] p-8 my-6 sm:my-8 rounded-xl">
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-semibold">Hacker Hostel</p>
            <p>Hub for tech enthusiasts, fostering innovation and collaboration in hacker culture.</p>
          </div>
          <Image
            src="/hacker.jpeg"
            width="219"
            height="136"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className="flex w-[75%] gap-4 justify-between bg-[#56565680] p-8 my-6 sm:my-8 rounded-xl">
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-semibold">TPG Meetup</p>
            <p>Gathering for tech enthusiasts to network, learn, and share industry insights.</p>
          </div>
          <Image src="/tpg.jpeg" width="219" height="136" alt="" className="rounded-xl"/>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Events;