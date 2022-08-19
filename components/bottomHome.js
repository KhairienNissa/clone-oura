import React from "react";
import Logoo from "./Logo";
import { IoIosArrowForward } from "react-icons/io";

function BottomHome() {
  return (
    <div className="pt-11 py-1 shadow-2xl dark:border">
      <div className="md:flex md:justify-center">
        <div className="md:w-6/12">
          <div className="float-left mx-3">
            <Logoo />
          </div>
          <h1 className="text-lg text-white dark:text-black mx-3 mb-2">
            OURA STORE
          </h1>
          <p className="text-sm mx-5 text-white dark:text-black ">
            Oura Store Adalah Tempat Top Up Games Yang Aman, Murah. Oura Store
            Menyediakan Layanan Top Up Games seperti Diamond Mobile Legends, FF,
            Genshin Impact, AOV, dll. Untuk Mempermudah Pembayaran Anda Disini
            Kami Juga Menyediakan Metode Pembayaran Alfamart, Bank BCA, Bank
            Mandiri, Bank BNI, Bank Bri, DANA, OVO, Gopay, Shopee Pay, Link Aja,
            dll. Jika ada kendala silahkan klik logo CS pada kanan bawah di web
            ini. Menu Home Hitung Point Magic Wheel
          </p>
        </div>

        <div className="pt-9 md:pt-0">
          <h1 className="text-lg text-white mx-3 dark:text-black">MENU</h1>
          <div>
            <div className="flex mx-7 my-4">
              <div className="text-logo-color text-sm">
                <IoIosArrowForward />
              </div>
              <div className="-mt-1 text-sm text-white dark:text-black">Home</div>
            </div>
            <div className="flex mx-7 my-4">
              <div className="text-logo-color text-md">
                <IoIosArrowForward />
              </div>
              <div className="-mt-1 text-sm text-white dark:text-black">
                Hitung Point Magic Wheel
              </div>
            </div>
            <div className="flex mx-7 my-4">
              <div className="text-logo-color text-md">
                <IoIosArrowForward />
              </div>
              <div className="-mt-1 text-md text-white dark:text-black">
                Hitung Point Zodiac
              </div>
            </div>
          </div>
        </div>

        <div className="pb-11">
          <h1 className="text-lg text-white mx-3 dark:text-black">Other Services</h1>
          <div>
            <div className="flex mx-7 my-4">
              <div className="text-logo-color text-sm">
                <IoIosArrowForward />
              </div>
              <div className="-mt-1 text-md text-white dark:text-black">Mobile Legends</div>
            </div>
            <div className="flex mx-7 my-4">
              <div className="text-logo-color text-sm">
                <IoIosArrowForward />
              </div>
              <div className="-mt-1 text-md text-white dark:text-black">Free Fire</div>
            </div>
            <div className="flex mx-7 my-4">
              <div className="text-logo-color text-sm">
                <IoIosArrowForward />
              </div>
              <div className="-mt-1 text-md text-white dark:text-black">
                Call of Duty Mobile
              </div>
            </div>
            <div className="flex mx-7 my-4">
              <div className="text-logo-color text-sm">
                <IoIosArrowForward />
              </div>
              <div className="-mt-1 text-md text-white dark:text-black">Arena if Valor</div>
            </div>
            <div className="flex mx-7 my-4">
              <div className="text-logo-color text-sm">
                <IoIosArrowForward />
              </div>
              <div className="-mt-1 text-md text-white dark:text-black"> Sausage Man</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomHome;
