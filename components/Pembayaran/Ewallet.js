import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ewalletdata } from "../dataDummy/ewalletdata";
import BgMethode from "../atom/bgMethode";
import InfoPembayaran from '../Pembayaran/infoPembayaran'

function Ewallet() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className=" mt-3  border-gray-500 shadow-2xl rounded-md mx-1 border">
        <div className=" bg-abu-muda p-3 grid grid-cols-2 rounded-t-lg dark:bg-white">
          <div className="text-white text-sm font-bold flex mt-2 dark:text-black">
            <FaWallet />
            <p className="-mt-1 ml-2">E-Wallet</p>
          </div>
          <div className="text-white text-sm flex mt-1 justify-end dark:text-black">
            Rp. 140.000
          </div>
        </div>

        <div className={` ${!active && "hidden"}`}>
          {ewalletdata.map((item, index) => (
            <InfoPembayaran item={item} key={index} />
          ))}
        </div>

        <div className="bg-abu-abu dark:bg-neutral-300 py-4 px-2 flex flex-wrap justify-end rounded-b-md">
          {ewalletdata.map((item, index) => (
            <BgMethode item={item} key={index} className={`${active && "hidden"}`} />
          ))}
          <div className="text-xl hover:cursor-pointer" onClick={() => setActive(!active)}>
              {active ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Ewallet;
