import React, { useState } from "react";
import { useRef } from "react";
import { AiFillBank } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import BgMethode from "../atom/bgMethode";
import InfoPembayaran from "../Pembayaran/infoPembayaran";

const Cobasatu = ({ active, onToggle }) => {
  const item = [
    {
      name: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
      name2: "Bank BCA",
      data: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
    },
  ];

  const contentAnimation = useRef();


  return (
    <div className="mt-3  border-gray-300 shadow-2xl rounded-md mx-1 border hover:border-orange-200 hover:cursor-pointer">
      <li
        className={`bg-[#F5FAFF]  rounded-lg 
            ${active ? "active" : ""}`}
      >
        <div className="p-3 flex justify-between cursor-pointer bg-abu-muda" onClick={onToggle}>
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
          className={`answer_wrapper h-0 overflow-hidden ${
            active ? "open" : ""
          } `}
          style={
            active
              ? { height: contentAnimation.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className="pt-2">
            <div className="h-[1px] bg-slate-200  px-5"></div>
          </div>
          {item.map((item, index) => (
            <InfoPembayaran item={item} key={index} />
          ))}
        </div>
        <div
          onClick={onToggle}
          className="bg-abu-abu dark:bg-neutral-300 py-4 px-2 flex flex-wrap justify-end rounded-b-md"
        >
          {item.map((item, index) => (
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
      </li>
    </div>
  );
};

export default Cobasatu;
