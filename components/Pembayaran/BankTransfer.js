import React, { useRef, useState } from "react";
import BgMethode from "../atom/bgMethode";
import { AiFillBank } from "react-icons/ai";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import InfoPembayaran from "./infoPembayaran";
import { Transition } from "@headlessui/react";

function BankTransfer({ satu, active }) {
  const item = [
    {
      name: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
      name2: "Bank BCA",
      data: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
    },
  ];

  const contentAnimation = useRef();


  return (
    <div className="mt-3   border-gray-600 dark:border-gray-300 shadow-xl rounded-md mx-4 border dark:hover:border-orange-200  hover:border-orange-200 hover:cursor-pointer">
      <div
        className={`bg-[#F5FAFF]  rounded-lg 
            ${active ? "active" : ""}`}
      >
        <div className="p-2 dark:bg-white rounded-t-md flex justify-between cursor-pointer bg-abu-muda" onClick={satu}>
          <div className=" font-semibold ">
            <div className="text-white  font-bold flex dark:text-black mt-2">
              <AiFillBank />
              <p className="-mt-1 ml-2 dark:text-black text-md">
                Transfer Bank
              </p>
            </div>
          </div>
          <div className="text-white text-sm flex mt-1 justify-end dark:text-black ">
            Rp. 140.000
          </div>
        </div>

        <div
          ref={contentAnimation}
          className={`answer_wrapper bg-abu-muda dark:bg-white h-0 overflow-hidden ${
            active ? "open" : ""
          } `}
          style={
            active
              ? { height: contentAnimation.current.scrollHeight }
              : { height: "0px" }
          }
        >
          
          {item.map((item, index) => (
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
            enterTo="opacity-100 rotate-0 scale-full"
            leave="transform duration-400 transition scale-50 "
            leaveFrom="scale-75 "
            leaveTo="opacity-0 scale-0"
            className="md:bg-transparent z-10 md:z-0 px-4 overflow-auto bg-abu-abu dark:bg-neutral-300  "
          >
          {item.map((item, index) => (
            <BgMethode
              item={item}
              key={index}
              className={`${active && "hidden"}`}
            />
          ))}</Transition>
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
};

export default BankTransfer;
