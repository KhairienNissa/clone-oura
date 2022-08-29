import React, { useRef, useState } from "react";
import BgMethode from "../atom/bgMethode";
import { AiFillBank } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import InfoPembayaran from "./infoPembayaran";
import { Transition } from "@headlessui/react";

function BankTransfer({satu, active}) {
  // const [active, setActive] = useState(false);
  const contentAnimation = useRef();
  const item = [
    {
      name: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
      name2: "Bank BCA",
      data: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
    },
  ];
  return (
    <div>
      <div className=" mt-3  border-gray-500 shadow-2xl rounded-md mx-1 border hover:border-orange-200 hover:cursor-pointer relative overflow-hidden">
        <div
          onClick={satu}
          className=" bg-abu-muda p-3 grid grid-cols-2 rounded-t-lg dark:bg-white  overflow-hidden relative z-10"
        >
          <div className="text-white  font-bold flex dark:text-black mt-2">
            <AiFillBank />
            <p className="-mt-1 ml-2 dark:text-black text-md">Transfer Bank</p>
          </div>
          <div className="text-white text-sm flex mt-1 justify-end dark:text-black ">
            Rp. 140.000
          </div>
        </div>
        <Transition
          show={active}
          enter="transition ease-in-out duration-500 transform"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
          className={`bg-[#212529] md:bg-transparent  px-4 -z-10 dark:bg-white`}
        >
          <div>
            {item.map((item, index) => (
              <InfoPembayaran item={item} key={index} />
            ))}
          </div>
        </Transition>

        <div
          onClick={satu}
          className="bg-abu-abu dark:bg-neutral-300 py-4 px-2 flex flex-wrap justify-end rounded-b-md"
        >
          {item.map((item, index) => (
            <BgMethode item={item} key={index} className={`${active && "hidden"}`}/>
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

export default BankTransfer;
