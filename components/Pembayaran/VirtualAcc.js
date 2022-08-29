import React, { useState } from "react";
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
  return (
    <div>
      <div className=" mt-3  border-gray-500 shadow-2xl rounded-md mx-1 border hover:border-orange-200 hover:cursor-pointer relative overflow-hidden">
        <div onClick={satu} className=" bg-abu-muda dark:bg-white p-3 grid grid-cols-2 rounded-t-lg overflow-hidden relative z-10">
          <div className="text-white  dark:text-black  font-bold flex mt-2">
            <AiFillCreditCard />
            <p className="-mt-1 ml-2 text-md dark:text-black ">Virtual Account</p>
          </div>
          <div className="text-white dark:text-black text-sm flex mt-1 justify-end">
            Rp. 140.000
          </div>
        </div>
        <Transition
            show={active}
            enter="transition ease-in-out duration-500 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-y-0 ease-in"
            leaveTo="-translate-y-full"
         className={`bg-[#212529] md:bg-transparent  px-4 overflow-auto dark:bg-white`}
          >

        {/* dalam */}
        <div>
          {VirtualaccData.map((item, index) => (
            <InfoPembayaran item={item} key={index} />
          ))}
        </div>

</Transition>
        <div
          onClick={satu}
          className="bg-abu-abu dark:bg-neutral-300 py-4 px-2 flex flex-wrap  justify-end rounded-b-md"
        >
          {VirtualaccData.map((item, index) => (
            <BgMethode
              item={item}
              key={index}
              className={`${active && "hidden"}`}
            />
          ))}
          <div
            className="text-xl hover:cursor-pointer"
            onClick={() => setActive(!active)}
          >
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
