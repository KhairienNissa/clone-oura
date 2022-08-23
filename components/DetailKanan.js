import React from "react";
import Button from "./atom/Button";
import Nominal from "./Nominal";
import MetodePembayaran from "./Pembayaran/MetodePembayaran";
import Whatsapp from "./Whatsapp";
import {FaCartArrowDown} from 'react-icons/fa'


function DetailKanan() {
  return (
    <>
      {/* lengkapi data */}
      <div className=" mt-3 shadow-2xl border rounded-md dark:border-gray-300 border-gray-800 mx-3 my-3">
        <h1 className="text-white w-full p-4 text-lg  dark:text-black  dark:border-gray-300 border-b border-gray-700 dark:bg-[#F0F1F2]">Lengkapi Data</h1>
        <div className="md:flex mt-2 px-4">
          <div className="mt-5 md:w-6/12 md:mt-3 md:mx-3">
            <label className="text-white dark:text-black" htmlFor="user">
              User ID
            </label>
            <br />
            <input
              type="number"
              placeholder="Masukan User ID"
              className=" dark:bg-white dark:border-2 w-full p-1.5 placeholder:text-sm rounded-md dark:text-black"
            />
          </div>
          <div className="mt-3 md:w-6/12">
            <label className="text-white dark:text-black" htmlFor="user">
              Server ID
            </label>
            <br />
            <input
              type="number"
              placeholder="Masukan Server ID"
              className="dark:bg-white dark:text-black dark:border-2 w-full p-1.5 placeholder:text-sm  placeholder:text-md rounded-md"
            />
          </div>
        </div>
        <Button className="rounded-md md:ml-7 ml-4 mt-4 mb-4">Petunjuk</Button>
      </div>

      {/* nominal */}
      <div className="shadow-2xl border rounded-md dark:border-gray-300 border-gray-800 mt-3 mx-3 my-3">
        <h1 className="text-white text-lg dark:text-black  dark:border-gray-300 border-b border-gray-700 dark:bg-[#F0F1F2] w-full p-3">Pilih Nominal</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 my-2">
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
          <Nominal />
        </div>
      </div>

      <MetodePembayaran />
      <Whatsapp/>

      <div className="w-full flex justify-end -ml-3">
        <Button className="flex mb-4"><FaCartArrowDown/><p className="ml-1 -mt-1">Order Now</p></Button>
      </div>

      
    </>
  );
}

export default DetailKanan;
