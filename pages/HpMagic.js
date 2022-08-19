import React from "react";

import Copyright from "../components/Copyright";
import BottomHome from "../components/bottomHome";
import Logo from "../public/logo.png";
import Image from "next/image";
import { GiCutDiamond } from "react-icons/gi";
import FixedButton from "../components/FixedButton";

function HpMagic() {
  return (
    <div>
      <div className="md:flex py-16 md:ml-36">
        <div className="md:w-5/12 md:mr-11">
          <Image src={Logo} className="w-48 h-28" />
          <h1 className="text-white text-xl px-2 py-2 dark:text-black">
            Kalkulator Magic Wheel
          </h1>
          <p className="text-white text-sm px-2 dark:text-black">
            Kalkulator Magic Wheel berfungsi untuk mengetahui total maksimal
            diamond yang kamu butuhkan untuk mendapatkan skin LEGEND
          </p>
        </div>
        <div className="md:w-5/12">
          <h1 className="text-white  dark:text-black text-xl my-11 md:-mt-2 pl-3">
            Geser Sesuai Point Magic Wheel and
          </h1>
          <div className="w-full mx-3">
            <div className="flex">
              <p className="text-md text-white  dark:text-black">Point Magic Wheel Anda : </p>
              <p className="text-md text-blue-300 pl-2">100</p>
            </div>
            <div className="mt-3 w-11/12 mr-7 h-7 bg-logo-color rounded-full">
              <div className="w-7 h-7 rounded-full bg-yellow-400 bg-opacity-40"></div>
            </div>

            <div className="flex mt-3">
              <p className="text-md text-white  dark:text-black">Membutuhkan Maksimal : </p>
              <p className="text-lg text-green-300 pt-1 pl-2">
                <GiCutDiamond />
              </p>
            </div>
            <button className="text-left pl-5 mt-3 w-11/12 h-11 rounded-md mr-7 bg-logo-color text-white border border-white">
              Klik Untuk Membeli Diamond
            </button>
          </div>
        </div>
      </div>

      <BottomHome />
      <FixedButton />
    </div>
  );
}

export default HpMagic;
