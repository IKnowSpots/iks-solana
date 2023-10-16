"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { WalletProvider, useWallet } from "@solana/wallet-adapter-react";
import { WalletConnectButton } from "@solana/wallet-adapter-react-ui";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WalletsProvider = dynamic(
    () => import("../../components-integration/wallets"),
    {
        ssr: false,
    }
);

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);


    const [Toggle,setToggle]=useState(true);

    const handleClick = () => {
      setToggle(!Toggle);
    };

    const { publicKey } = useWallet();

    function pushingDashboard() {
        if (!publicKey?.toBase58()) {
            toast.warn("Connect your wallet to proceed further!", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            window.location.replace("/dashboard");
        }
    }

    function pushingInventory() {
        if (!publicKey?.toBase58()) {
            toast.warn("Connect your wallet to proceed further!", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            window.location.replace("/inventory");
        }
    }

    return (
        <nav className="z-[10] flex justify-evenly items-center px-8 py-8 w-full absolute">
        {/* <nav className="z-[10] ml-[-10%] flex gap-[8%] justify-center items-center py-8 w-[110%] absolute"> */}
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Link href="/">
                <Image
                    src="/iks-logo.png"
                    width="252"
                    height="300"
                    className="w-[75%]"
                    alt="I know spots logo"
                />
            </Link>
            <div className="md:flex gap-[2rem] lg:gap-[3.5rem] justify-center items-center hidden">
                <button onClick={pushingDashboard}>
                    <p className="hoverUnderline text-[0.75rem] lg:text-base">Dashboard</p>
                </button>

                <Link href="#howitworks">
                    <p className="hoverUnderline text-[0.75rem] lg:text-base">Product</p>
                </Link>
                {/* <Link href="/infra">
                    <p>Infra</p>
                </Link> */}
                <Link
                    target="_blank"
                    href="https://docs.google.com/document/d/1Ayzu2fjTUuCTS3TXmCySz6xfIWffbJshLgd0Uh47wS0/edit"
                >
                    <p className="hoverUnderline text-[0.75rem] lg:text-base">Docs</p>
                </Link>
                <Link href="/support">
                    <p className="hoverUnderline text-[0.75rem] lg:text-base">Support</p>
                </Link>

                <div className="flex gap-[10%] text-[0.5rem] lg:text-base">
                    <button className="border border-[#C584F5] px-4 py-2 rounded-xl w-[210px] text-white justify-center text-center ml-4"
   >
                        <WalletsProvider />
                        {/* Connect Wallet */}
                    </button>

                    <button onClick={pushingInventory}>
                        <p className="border border-[#C584F5] px-4 py-2 rounded-xl">
                            Inventory
                        </p>
                    </button>
                </div>
            </div>

            {Toggle ? <img src="/hamburger (1).png" alt="" className="z-0 md:hidden ml-4 h-[20px]" onClick={handleClick} /> : <img src="/close.png" alt="" className="z-0 md:hidden ml-4 h-[20px]" onClick={handleClick}/>}

            <div className={ `delay-300 md:hidden flex text-center gap-8 p-12 h-screen bg-black/90 w-full fixed top-[80px] text-white text-left  flex-col ${Toggle? 'right-[100%]':'left-[100%]}'}`}>
                <button onClick={pushingDashboard}>
                    <p className="hoverUnderline">Dashboard</p>
                </button>

                <Link href="#howitworks">
                    <p className="hoverUnderline">Product</p>
                </Link>
                {/* <Link href="/infra">
                    <p>Infra</p>
                </Link> */}
                <Link
                    target="_blank"
                    href="https://docs.google.com/document/d/1Ayzu2fjTUuCTS3TXmCySz6xfIWffbJshLgd0Uh47wS0/edit"
                >
                    <p className="hoverUnderline">Docs</p>
                </Link>
                <Link href="/support">
                    <p className="hoverUnderline">Support</p>
                </Link>

                <div className="flex flex-col justify-center items-center gap-8 ">
                    <p className="border border-[#C584F5] px-4 py-2 rounded-xl w-[210px]">
                        <WalletsProvider />
                        
                    </p>

                    <button onClick={pushingInventory}>
                        <p className="border border-[#C584F5] px-4 py-2 rounded-xl">
                            Inventory
                        </p>
                    </button>
                </div>
            </div>
            {/* {showModal ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center bg-black bg-opacity-50 transform
        transition-transform duration-300">
            <div className="bg-[#151c25] shadow-xl shadow-[#8A42D8] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">

            
            <WalletsProvider />
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold justify-between items-center"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
          </div>
        </div>
      ) : null} */}

        </nav>
    );
};
export default Navbar;
