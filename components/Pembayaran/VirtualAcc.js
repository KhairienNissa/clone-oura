import React, { useState } from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VirtualaccData } from "../dataDummy/VirtualaccData";
import BgMethode from "../atom/bgMethode";
import InfoPembayaran from "../Pembayaran/infoPembayaran";

function VirtualAcc() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className=" mt-3 shadow-2xl rounded-md mx-1 border border-gray-500">
        <div className=" bg-abu-muda dark:bg-white p-3 grid grid-cols-2 rounded-t-lg">
          <div className="text-white text-sm font-bold flex mt-2">
            <AiFillCreditCard />
            <p className="-mt-1 ml-2">Virtual Account</p>
          </div>
          <div className="text-white dark:text-black text-sm flex mt-1 justify-end">
            Rp. 140.000
          </div>
        </div>

        {/* dalam */}
        <div className={` ${!active && "hidden"}`}>
          {VirtualaccData.map((item, index) => (
            <InfoPembayaran item={item} key={index}/>
          ))}
        </div>

        <div className="bg-abu-abu dark:bg-neutral-300 py-4 px-2 flex flex-wrap  justify-end rounded-b-md">
          {VirtualaccData.map((item, index) => (
            <BgMethode item={item} key={index} className={`${active && "hidden"}`} />
          ))}
          <div
            className="text-xl hover:cursor-pointer"
            onClick={() => setActive(!active)}
          >
            {active ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualAcc;
