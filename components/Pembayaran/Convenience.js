import React, { useState, useRef } from "react";
import { FaStore } from "react-icons/fa";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { ConvenienceData } from "../dataDummy/ConvenienceData";
import BgMethode from "../atom/bgMethode";
import InfoPembayaran from "../Pembayaran/infoPembayaran";
import { Transition } from "@headlessui/react";


function Convenience({ satu, active }) {
  // const [active, setActive] = useState(false);
  
  const contentAnimation = useRef();


  return (
    <div className="mt-4 dark:border-gray-300 dark:hover:border-orange-200    border-gray-600 shadow-2xl rounded-md mx-4 border hover:border-orange-200 hover:cursor-pointer">
      <div
        className={`bg-[#F5FAFF]  rounded-lg 
            ${active ? "active" : ""}`}
      >
        <div className="p-2 dark:bg-white rounded-t-md flex justify-between cursor-pointer bg-abu-muda" onClick={satu}>
          <div className=" font-semibold ">
            <div className="text-white  font-bold flex dark:text-black mt-2">
              <FaStore />
              <p className="-mt-1 ml-2 dark:text-black text-md">
               Convenience
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
        
          {ConvenienceData.map((item, index) => (
            <InfoPembayaran item={item} key={index} />
          ))}
        </div>
        <div
          onClick={satu}
          className="bg-abu-abu dark:bg-neutral-300 py-2 px-2 flex flex-wrap justify-end rounded-b-md"
        >
          {ConvenienceData.map((item, index) => (
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

export default Convenience;
