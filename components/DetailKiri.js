import React from "react";
import TopUp from "./atom/topUp";

function DetailKiri({ item }) {
  return (
    <div>
      <div className="m-3 w-12/12  md:2/12">
        <div className="w-full pb-5 px-2 shadow-2xl rounded-md dark:border-gray-300 border border-gray-800">
          <div className="hidden text-center md:flex justify-center">
            <img src={item.image} width="150px" height="150px" />
          </div>
          <div className="py-3 px-3 md:text-[25px]">
          <div className='text-white dark:text-black mt-2 text-[25px]'>{item.title}</div>
        <div className='mt-2 w-[63px] bg-logo-color h-[5px] rounded-sm'></div>
          </div>

          <div className="float-left md:hidden mx-3">
            <img src={item.image} width="50px" height="50px" />
          </div>

          <div>
            <h1 className="text-gray-400">Proses Otomatis</h1>
            <h1 className="text-white dark:text-black">
              Top Up Diamond {item.title}
            </h1>
          </div>

          <div className="mt-3 ml-11 text-white dark:text-black">
            <p>1. Masukkan ID (SERVER) </p>
            <p>2. Pilih Nominal Diamond</p>
            <p>3. Pilih Metode Pembayaran</p>
            <p>4. Tulis nomor WhatsApp yg benar!</p>
            <p>5. Klik Beli dan lakukan Pembayaran</p>
            <p>6. Diamond akan masuk otomatis ke akun anda</p>
          </div>
          <div className="text-orange-400 text-md text-center mt-3 font-semibold">
            Top Up Buka 24 Jam
          </div>
        </div>

        <div className="w-full rounded-md mt-2 dark:text-black hidden md:block p-3 shadow-2xl border border-gray-800  dark:border-gray-300 text-white ">
          <h1>Game Lainnya</h1>
          <div className="flex m-4 border-navbar-color">
            <img src={item.image} width="50px" height="50px" />
            <div className="ml-9">
              <p className=" dark:text-black font-bold">Dragon Raja</p>
              <p className="dark:text-black">Coupon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailKiri;
