import React, { useEffect, useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";

function BottonScroll() {
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
    <div
      className={`text-5xl z-50 text-white bg-[#BD4CAE] rounded-lg fixed bottom-6 left-3 cursor-pointer ease-in-out duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <RiArrowDropUpLine
        className="text-white hover:text-blue-400 flex w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
}

export default BottonScroll;
