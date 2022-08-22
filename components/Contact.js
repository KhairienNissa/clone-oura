import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Sosmed from "../public/callcenter.png";
import Instagram from "../public/instagram.jpg";
import Whatsapp from "../public/whatsapp.png";
import Nada from "../public/musik.png";

function Contact() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => setIsActive(false)}
        className="flex flex-col-reverse gap-2 fixed bottom-16 right-3"
      >
        <div
          className={`w-[47px] h-[47px] bg-slate-200 p-1 rounded-lg cursor-pointer z-10}`}
        >
          <Image src={Sosmed} alt="logo" />
        </div>
        <Transition
          show={isActive}
          enter="transform transition duration-[400ms] "
          enterFrom="opacity-0 translate-x-4 translate-y-4"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-400 transition ease-in-out "
          leaveFrom="scale-2 "
          leaveTo="opacity-0 scale-95 "
          className="flex gap-2 flex-col-reverse absolute bottom-12"
        >
          <div>
            <div className="px-1 rounded-md my-2">
              <Image
                src={Instagram}
                width="60px"
                height="60px"
                className="rounded-md"
              />
            </div>
            <div className="px-1 rounded-md my-2">
              <Image src={Whatsapp} width="50px" height="50px" />
            </div>
            <div className=" px-1 rounded-md my-2">
              <Image
                src={Nada}
                width="50px"
                height="50px"
                className="rounded-md"
              />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default Contact;
