import React, { useState } from "react";
import BgMethode from "../atom/bgMethode";
import { AiFillBank } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import InfoPembayaran from "./infoPembayaran";

function BankTransfer() {
  const [active, setActive] = useState(false);
  const item = [
    {
      name: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
      name2: "Bank BCA",
      data: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
    },
  ];
  return (
    <div>
      <div className=" mt-3 border-gray-500 shadow-2xl rounded-md mx-1 border">
        <div className=" bg-abu-muda  dark:bg-white p-3 rounded-t-lg">
          <div className="grid grid-cols-2 ">
            <div className="text-white text-sm font-bold flex mt-2 dark:text-black">
              <AiFillBank />
              <p className="-mt-1 ml-2">Transfer Bank</p>
            </div>
            <div className="text-white dark:text-black text-sm flex mt-1 justify-end">
              Rp. 140.000
            </div>
          </div>

          {/* bagian dalam */}
          <div className={` ${active ? "block" : "hidden"}`}>
            {item.map((item, index) => (
              <InfoPembayaran item={item} key={index} />
            ))}

            <div></div>
          </div>
        </div>
        <div className="bg-abu-abu dark:bg-neutral-300 py-4 px-2 flex justify-end rounded-b-md">
          {item.map((item, index) => (
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
            {active ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankTransfer;
