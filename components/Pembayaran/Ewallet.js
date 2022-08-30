import React, { useState, useRef } from "react";
import { FaWallet } from "react-icons/fa";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { ewalletdata } from "../dataDummy/ewalletdata";
import BgMethode from "../atom/bgMethode";
import InfoPembayaran from "../Pembayaran/infoPembayaran";
import { Transition } from "@headlessui/react";

function Ewallet({ satu, active }) {
  // const [active, setActive] = useState(false);
  
  const contentAnimation = useRef();


  return (
    <div className="mt-4 dark:border-gray-300 dark:hover:border-orange-200   border-gray-600 shadow-2xl rounded-md mx-4 border hover:border-orange-200 hover:cursor-pointer">
      <div
        className={`bg-[#F5FAFF]  rounded-lg 
            ${active ? "active" : ""}`}
      >
        <div className="p-2 dark:bg-white rounded-t-md flex justify-between cursor-pointer bg-abu-muda" onClick={satu}>
          <div className=" font-semibold ">
            <div className="text-white  font-bold flex dark:text-black mt-2">
              <FaWallet />
              <p className="-mt-1 ml-2 dark:text-black text-md">
                E-Wallet
              </p>
            </div>
          </div>
          <div className="text-white text-sm flex mt-1 justify-end dark:text-black ">
            Rp. 140.000
          </div>
        </div>

        <div
          ref={contentAnimation}
          className={`answer_wrapper h-0 overflow-hidden ${
            active ? "open" : ""
          } `}
          style={
            active
              ? { height: contentAnimation.current.scrollHeight }
              : { height: "0px" }
          }
        >
          
          {ewalletdata.map((item, index) => (
            <InfoPembayaran item={item} key={index} />
          ))}
        </div>
        <div
          onClick={satu}
          className="bg-abu-abu dark:bg-neutral-300 py-2 px-2 flex flex-wrap justify-end rounded-b-md"
        >
            <Transition
            show={!active}
            enter="transform transition duration-[400ms] "
            enterFrom="opacity-0 translate-x-4 translate-y-4"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-400 transition  "
            leaveFrom="scale-100 "
            leaveTo="opacity-0"
            className="md:bg-transparent flex z-10 md:z-0 px-4 overflow-auto bg-abu-abu dark:bg-neutral-300  "
          >
          {ewalletdata.map((item, index) => (
            <BgMethode
              item={item}
              key={index}
              // className={`${active && "hidden"}`}
            />
          ))} </Transition>
          <div className="text-xl hover:cursor-pointer">
            {active ? (
              <div className="text-2xl text-[#414141]">
                <MdOutlineKeyboardArrowUp />
              </div>
            ) : (
              <div className="text-2xl text-[#414141]">
                <MdOutlineKeyboardArrowDown />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ewallet;
