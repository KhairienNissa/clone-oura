import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";
import Contact from "./Contact";
import BottonScroll from "./atom/BottonScroll";

export default function FixedButton() {


  return (
    <div className="h-full">
      {/* scroll up */}
      <BottonScroll/>

      {/* kontak */}
      <Contact/>
    </div>
  );
}
