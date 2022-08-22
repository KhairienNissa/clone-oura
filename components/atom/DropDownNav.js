import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { AiFillIdcard } from "react-icons/ai";
import Link from "next/link";

function DropDownNav() {
  const [aktif, setAktif] = useState(false);
  return (
    <>
      <Menu>
        <Menu.Button className="text-sm" onClick={() => setAktif(!aktif)}>
          Calculator ML
        </Menu.Button>
        <div
          className={`dark:border -ml-4 px-3 py-3 mt-3 relative md:absolute z-10 w-96 md:w-auto rounded-sm bg-white ${
            !aktif && "hidden"
          } py-2`}>
          <Menu.Items className="py-3">
            <Menu.Item>
              <Link href="/HpMagic">
                <a className="text-black flex text-sm">
                  <AiFillIdcard />
                  <p className="-mt-1 px-2 text-sm">HP Magic Wheel</p>
                </a>
              </Link>
            </Menu.Item>
          </Menu.Items>
          <Menu.Items className="pb-2">
            <Menu.Item>
              <Link href="/HpZodiac">
                <a  className="text-black flex">
                  <AiFillIdcard />
                  <p className="-mt-1 px-2 text-sm">HP Zodiac</p>
                </a>
              </Link>
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
    </>
  );
}

export default DropDownNav;
