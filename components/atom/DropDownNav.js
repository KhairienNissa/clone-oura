import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { AiFillIdcard } from "react-icons/ai";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";

function DropDownNav() {
  const [aktif, setAktif] = useState(!aktif);
  return (
    <>
     
        <div className="text-sm flex" onClick={() => setAktif(!aktif)}>
         <p> Calculator ML</p>
         <div className="-mt-0.6 text-lg">
                      <MdOutlineArrowDropDown />
                    </div>
        </div>
        <div
          className={` -ml-4 px-3 py-3 mt-3 relative md:absolute z-10 w-full mr-5 md:w-auto rounded-sm bg-white ${
            !aktif && "hidden"
          } py-2`}>
          <div className="py-3">
            <div>
              <Link href="/HpMagic">
                <a className="text-black flex text-sm">
                  <AiFillIdcard />
                  <p className="-mt-1 px-2 text-sm">HP Magic Wheel</p>
                </a>
              </Link>
            </div>
          </div>
          <div className="pb-2">
            <div>
              <Link href="/HpZodiac">
                <a  className="text-black flex">
                  <AiFillIdcard />
                  <p className="-mt-1 px-2 text-sm">HP Zodiac</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default DropDownNav;
