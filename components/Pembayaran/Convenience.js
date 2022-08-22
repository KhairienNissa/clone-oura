import React, {useState} from "react";
import { FaStore } from "react-icons/fa";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import {ConvenienceData} from '../dataDummy/ConvenienceData'
import BgMethode from "../atom/bgMethode";
import InfoPembayaran from "../Pembayaran/infoPembayaran"

function Convenience() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className=" mt-3  border-gray-500 shadow-2xl rounded-md mx-1 border">
        <div className=" bg-abu-muda dark:bg-white p-3 grid grid-cols-2 rounded-t-lg">
          <div className="text-white dark:text-black text-sm font-bold flex mt-2">
            <FaStore />
            <p className="-mt-1 ml-2 ">Convenience Store</p>
          </div>
          <div className="text-white text-sm flex mt-1 justify-end  dark:text-black ">
            Rp. 140.000
          </div>
        </div>
        
        {/* bagian dalam */}
        <div className={` ${ !active && "hidden"}`}>
            {ConvenienceData.map(((item, index) => (
              <InfoPembayaran item={item} key={index}/>
            )))}
    
          </div>
        <div className="bg-abu-abu dark:bg-neutral-300 py-4 px-2 flex justify-end rounded-b-md">
            {ConvenienceData.map((item, index) => (
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

export default Convenience;
