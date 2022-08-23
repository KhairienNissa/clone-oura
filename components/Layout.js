import React from "react";
import Navbar from "./Navbar";
import Copyright from "./Copyright";
import BottomHome from "./bottomHome";

function Layout({ children }) {
  return (
    <>
      <div className="bg-[#212529] dark:bg-white w-full h-full flex flex-col items-stretch">
        <Navbar />
        <main className="pt-16 flex-grow-1 flex-shrink-0">{children}</main>
        <footer className="flex-shrink-0">
          <BottomHome />
          <Copyright />
        </footer>
      </div>
    </>
  );
}

export default Layout;
