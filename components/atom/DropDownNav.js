import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { AiFillIdcard } from "react-icons/ai";

function DropDownNav() {
  const [aktif, setAktif] = useState(false);
  return (
    <>
      <Menu>
        <Menu.Button className='text-sm' onClick={() => setAktif(!aktif)}>
          Calculator ML
        </Menu.Button>
        <div
          className={` dark:border px-3 mt-2 relative md:absolute z-10 w-96 md:w-auto rounded-md bg-white ${
            !aktif && "hidden"
          } py-2`}
        >
          <Menu.Items className="py-2">
            <Menu.Item>
              <a href="/HpMagic" className="text-black flex text-sm">
                <AiFillIdcard /> <p className="-mt-1 px-2 text-sm">HP Magic Wheel</p>
              </a>
            </Menu.Item>
          </Menu.Items>
          <Menu.Items className="pb-2">
            <Menu.Item>
              <a href="/HpZodiac" className="text-black flex">
                <AiFillIdcard /><p className="-mt-1 px-2 text-sm">HP Zodiac</p>
              </a>
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
    </>
  );
}

export default DropDownNav;
