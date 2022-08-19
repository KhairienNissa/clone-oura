import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sosmed from "../public/callcenter.png";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

// icon
import { FaTiktok } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export default function Babi() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="h-[200vh]">
      <div
        className={`fixed p-1 left-6 bottom-8 h-[30px] w-[30px] bg-blue-300 rounded-md cursor-pointer ease-in-out duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <IoIosArrowUp
          className="text-white flex w-full h-full"
          aria-hidden="true"
        />
      </div>
      <div
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => setIsActive(false)}
        className="flex flex-col-reverse gap-2 fixed bottom-8 right-6 "
      >
        <div
          className={`w-[45px] h-[45px] bg-slate-200 p-1 rounded cursor-pointer z-10}`}
        >
          <Image src={Sosmed} alt="logo" />
        </div>
        <Transition
          show={isActive}
          enter="transition-opacity duration-300"
          enterFrom=" opacity-0 left-3"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="flex gap-2 flex-col-reverse absolute bottom-14"
        >
          {[...new Array(3)].map((item, index) => (
            <div
              key={index}
              className={`w-[45px] h-[45px] bg-blue-500 p-1 rounded `}
            >
              <FaTiktok className="text-white w-full p-1 h-full" />
            </div>
          ))}
        </Transition>
      </div>
    </div>
  );
}
