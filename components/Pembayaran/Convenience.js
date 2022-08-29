import React, { useState } from "react";
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
  return (
    <div>
      <div className=" mt-3  border-gray-500 shadow-2xl rounded-md mx-1 border hover:border-orange-200 hover:cursor-pointer relative overflow-hidden">
        <div
          onClick={satu}
          className=" bg-abu-muda dark:bg-white p-3 grid grid-cols-2 rounded-t-lg overflow-hidden relative z-10"
        >
          <div className="text-white dark:text-black  font-bold flex mt-2">
            <FaStore />
            <p className="-mt-1 ml-2 text-md ">Convenience Store</p>
          </div>
          <div className="text-white text-sm flex mt-1 justify-end  dark:text-black ">
            Rp. 140.000
          </div>
        </div>

        <Transition
          show={active}
          enter="transition ease-in-out duration-700 transform"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
          className={`bg-[#212529] md:bg-transparent  px-4 -z-10 dark:bg-white`}
        >
          {/* bagian dalam */}
          <div>
            {ConvenienceData.map((item, index) => (
              <InfoPembayaran item={item} key={index} />
            ))}
          </div>
        </Transition>
        <div
          onClick={satu}
          className="bg-abu-abu dark:bg-neutral-300 py-4 px-2 flex justify-end rounded-b-md"
        >
          {ConvenienceData.map((item, index) => (
            <BgMethode
              item={item}
              key={index}
              className={`${active && "hidden"}`}
            />
          ))}
          <div className="text-xl hover:cursor-pointer" onClick={satu}>
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
