import React, { useState, useRef } from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { VirtualaccData } from "../dataDummy/VirtualaccData";
import BgMethode from "../atom/bgMethode";
import InfoPembayaran from "../Pembayaran/infoPembayaran";
import { Transition } from "@headlessui/react";

function VirtualAcc({satu, active}) {
  // const [active, setActive] = useState(false);
  
  const contentAnimation = useRef();


  return (
    <div className="mt-4  border-gray-600 dark:hover:border-orange-200   dark:border-gray-300  shadow-2xl rounded-md mx-4 border hover:border-orange-200 hover:cursor-pointer">
      <div
        className={`bg-[#F5FAFF]  rounded-lg 
            ${active ? "active" : ""}`}
      >
        <div className="p-2 flex justify-between cursor-pointer dark:bg-white bg-abu-muda rounded-t-md" onClick={satu}>
          <div className=" font-semibold ">
            <div className="text-white  font-bold flex dark:text-black mt-2">
              <AiFillCreditCard />
              <p className="-mt-1 ml-2 dark:text-black text-md">
                Virtual Account
              </p>
            </div>
          </div>
          <div className="text-white text-sm flex mt-1 justify-end dark:text-black ">
            Rp. 140.000
          </div>
        </div>

        <div
          ref={contentAnimation}
          className={`answer_wrapper dark:bg-white bg-abu-muda h-0 overflow-hidden ${
            active ? "open" : ""
          } `}
          style={
            active
              ? { height: contentAnimation.current.scrollHeight }
              : { height: "0px" }
          }
        >
        
          {VirtualaccData.map((item, index) => (
            <InfoPembayaran item={item} key={index} />
          ))}
        </div>
        <div
          onClick={satu}
          className="bg-abu-abu  dark:bg-neutral-300 py-2 px-2 flex flex-wrap justify-end rounded-b-md"
        >
          {VirtualaccData.map((item, index) => (
            <BgMethode
              item={item}
              key={index}
              className={`${active && "hidden"}`}
            />
          ))}
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

export default VirtualAcc;
