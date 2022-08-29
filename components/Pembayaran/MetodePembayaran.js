import React, { useState } from "react";
import Nominal from "../Nominal";
import BankTransfer from "./BankTransfer";
import Convenience from "./Convenience";
import Ewallet from "./Ewallet";
import VirtualAcc from "./VirtualAcc";

function MetodePembayaran() {

  const [active, setActive] = useState(null)
  

  const clickHide1 = () => {
   
      setActive(active === "satu" ? null : 'satu'  )
     
  }

  const clickHide2 =()=> {
    setActive(active === "dua" ? null : 'dua'  )
  }
  const clickHide3 =()=> {
    setActive(active === "tiga" ? null : 'tiga'  )
  }
  const clickHide4 =()=> {
    setActive(active === "empat" ? null : 'empat'  )
  }

  return (
    <>
      <div className="shadow-2xl rounded-md border border-gray-800 dark:border-gray-300 mt-3 mx-3 my-3 ">
        <h1 className="text-white text-lg  dark:text-black p-3 dark:border-gray-300 border-b border-gray-700 dark:bg-[#F0F1F2]">Pilih Metode Pembayaran</h1>
        <div className="grid grid-cols-1 my-2 ">
          <BankTransfer satu={clickHide1} active={ active === 'satu' ? true : false}/>
          <Ewallet satu={clickHide2} active={ active === 'dua' ? true : false}/>
          <VirtualAcc satu={clickHide3} active={ active === 'tiga' ? true : false}/>
          <Convenience satu={clickHide4} active={ active === 'empat' ? true : false}/>

        </div>
      </div>
    </>
  );
}

export default MetodePembayaran;
