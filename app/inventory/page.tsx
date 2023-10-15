"use client";
import CardsInventory from "@/components/cardsInventory";
import Navbar from "@/components/hostee/Navbar";
import Rewards from "@/components/inventory/Rewards"
import Events from "@/components/inventory/Events"
import MyCalender from "@/components/inventory/MyCalender"
import { fetchUsername } from "@/utils";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";

const EventsByHost = () => {
    const [username, setUsername] = useState("iamacid");
    const [hostAddress, setHostAddress] = useState<String | undefined>();
    const [loading, setLoading] = useState(false);

    const { wallets } = useWallet();

    useEffect(() => {
        fetchUsernameCall();
    }, []);

    async function fetchUsernameCall() {
        setLoading(true);
        let user = await fetchUsername();
        // setUsername(user);
        setUsername("iamacid");
        await getHosteeAddress();
        setLoading(false);
    }

    async function getHosteeAddress() {
        let hostee = "88J...4RMV8yw";
        setHostAddress(hostee);
    }

    return (
        <div className=" text-white w-full overflow-hidden">
            <Navbar />
            <div className="flex justify-between px-[6rem]">
                <div className="pb-8 flex flex-col gap-1">
                    <div>
                        <p className="text-2xl font-semibold">Inventory</p>
                    </div>
                    <p className="opacity-75">Explore the events you&apos;e marked as yours.</p>
                </div>
                <input
                    type="text"
                    placeholder="Search events"
                    className="text-white h-[40px] border-white w-[20rem] bg-[#1C1C1C]  rounded-full px-4 "
                />
            </div>
            <Rewards />

            <div className="w-full mt-[5rem]">
                <div className="flex flex-col-reverse lg:flex-row mx-8">
                    <Events />
                    <MyCalender/>
                </div>
            </div>

            {/* <div>
                <div className="flex justify-between px-[6rem]">
                    <div className="pb-8 flex flex-col gap-1">
                        <div>
                            <p className="text-2xl font-semibold">Inventory</p>
                        </div>
                        <p className="opacity-75">Explore the events you&apos;e marked as yours.</p>
                    </div>
                    <input
                        type="text"
                        placeholder="Search events"
                        className="text-white h-[40px] border-white w-[20rem] bg-[#1C1C1C]  rounded-full px-4 "
                    />
                </div>

                <div className="flex gap-x-[2rem] gap-y-[3rem] flex-wrap pt-4 px-[7rem] pb-[5rem]">
                    <CardsInventory
                        image={"1.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsInventory
                        image={"2.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsInventory
                        image={"3.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsInventory
                        image={"4.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />

                    <CardsInventory
                        image={"1.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsInventory
                        image={"2.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsInventory
                        image={"3.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                    <CardsInventory
                        image={"4.png"}
                        name="Lorem Ipsum"
                        price="1.20"
                        date="01.34.45"
                        username={username}
                    />
                </div>
            </div> */}
        </div>
    );
};

export default EventsByHost;
