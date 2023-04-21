import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import AccountMenu from "../../components/accountmenu";

const Option = (props) => {
  const router = useRouter();
  const route = router.pathname;
  return (
    <Link
      className={`h-full group flex flex-col justify-between items-center transition-all `}
      href={props.href}
    >
      {props.children}
      <span
        className={`bg-gold-land h-1 mt-1 rounded-lg group-hover:w-full ${
          route === props.href ? "w-full" : "w-0"
        } transition-all duration-300`}
      ></span>
    </Link>
  );
};

export default function CustomTab(props) {
  // determining if the scroll direction is upwards or downwards
  const [direction, setDirection] = useState("");
  const handleScroll = (e) => {
    e.target.scrollTop > 7
      ? setDirection("-translate-y-20")
      : setDirection("translate-y-0");
  };

  return (
    <>
      <main
        className={`    font_gotham flex overflow-hidden transition-all duration-700`}
      >
        <section onScroll={handleScroll} className="w-full font_gotham ">
          <div className=" ">
            <div className="account_menu text-sm md:text-base overflow-x-scroll hide_scroll">
              <div className=" h-full flex justify-between  border-b border-b-gray-300 ">
                {props.tabdata.map((tab, index) => (
                  <Option href={tab.navlink}>
                    {" "}
                    <span className="font-[14px] text-[500] " > {tab.label} </span>{" "}
                  </Option>
                ))}
              </div>
            </div>
            <section className="w-full h-screen my-5 font_gotham">
              {props.children}
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
