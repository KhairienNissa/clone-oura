import React from "react";
import Navbar from "./Navbar";
import Copyright from "./Copyright";
import BottomHome from "./bottomHome";

function Layout({ children }) {
  return (
    <>
      <div className="bg-[#212529] dark:bg-white flex flex-col min-h-screen max-h-full ">
        <header className="flex items-start">
        <Navbar />
        </header>
        <main className="pt-16">{children}</main>
        <footer className="mt-6 w-full">
          <div >
          <BottomHome />
          <Copyright /></div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
