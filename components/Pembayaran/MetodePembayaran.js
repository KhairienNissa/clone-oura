import React from "react";
import Nominal from "../Nominal";
import BankTransfer from "./BankTransfer";
import Convenience from "./Convenience";
import Ewallet from "./Ewallet";
import VirtualAcc from "./VirtualAcc";

function MetodePembayaran() {
  return (
    <>
      <div className="shadow-2xl rounded-md border border-gray-800 dark:border-gray-300 mt-3 mx-3 my-3 ">
        <h1 className="text-white text-lg  dark:text-black p-3 dark:border-gray-300 border-b border-gray-700 dark:bg-[#F0F1F2]">Pilih Metode Pembayaran</h1>
        <div className="grid grid-cols-1 my-2 ">
          <BankTransfer/>
          <Ewallet />
          <VirtualAcc/>
          <Convenience/>

        </div>
      </div>
    </>
  );
}

export default MetodePembayaran;
