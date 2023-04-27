import React from "react";
import Image from "next/image";

import styles from "@/styles/sidebar.module.css";
import logo_outlined from "../../../public/icons/logo_outlined.svg";
import sidebar_logo_closed from "../../../public/icons/sidebar_logo_closed.svg";

import { sidebarItems } from "@/mock/navData";
import { RightArrowIcon } from "@/public/sidebaricons/RightArrowIcon";
import Search from "@/components/search";
import { AvatarIcon } from "@/public/sidebaricons/AvatarIcon";
import { DownArowSmallIcon } from "@/public/sidebaricons/DownArowSmallIcon";
import { SettingIcon } from "@/public/sidebaricons/SettingIcon";
import { BellIcon } from "@/public/sidebaricons/BellIcon";
import { DownArrowIcon } from "@/public/sidebaricons/DownArrowIcon";
import Link from "next/link";
import { SearchIcon } from "@/public/sidebaricons/SearchIcon";
import { LocationIcon } from "@/public/sidebaricons/LocationIcon";
import { CallIcon } from "@/public/sidebaricons/CallIcon";
import CardAdmin from "@/components/cards/cardadmin";

export default function Sidebaradmin({ children }) {
  const [sidebaritems, setSidebaritems] = React.useState(sidebarItems);
  const [selected, SetSelected] = React.useState(false);
  const [subrowopen, setSubrowopen] = React.useState(false);
  const [showmenue, setshowMenue] = React.useState(false);

  const toggleshowmenue = () => {
    setshowMenue(!showmenue)
  }

  const handleSubrow = () => {
    setSubrowopen(!subrowopen);
  };

  const [sidebaropen, setSidebaropen] = React.useState(true);
  const handleSidebar = () => {
    setSidebaropen(!sidebaropen);
  };

  const handleItemClick = (index) => {
    index += 1;

    let check = false;
    let temp = sidebaritems;
    temp.forEach((item) => {
      if (item.id == index) item.expanded = !item.expanded;
    });
    setSidebaritems([...temp]);
  };

  return (
    <div className="flex-col bg-[#F4F4F4] overflow-x-hidden overflow-y-scroll font_futura ">
      <div
        className={` fixed  ${
          sidebaropen ? "w-[300px]" : "w-[80px]"
        }  duration-300 ${
          sidebaropen && "rounded-r-[25px]"
        }  bg-[#FFFFFF] h-screen    `}
      >
        <div
          id={styles.top_gradient}
          className={`h-[77.05px] ${sidebaropen && "rounded-tr-[25px]"}   `}
        >
          <div className={`relative`}>
            {/* <Image
              className="absolute   "
              width={sidebaropen ? 300 : 80}
              height={60.92}
              alt="Urban Fits"
              src={sidebar_top_gradient}
            /> */}
            {/* <div style={{backgroundColor:'red'}}
            className={` absolute ${sidebaropen? "w-[300px]": "w-[80px]"} `} >

            </div> */}

            <div
              className={`absolute  flex  items-center ${
                sidebaropen ? "pl-[40px]" : "pl-[20px]"
              }  pt-[20px] `}
            >
              <Image
                width={37.05}
                height={37.05}
                alt="Urban Fits"
                src={sidebaropen ? logo_outlined : sidebar_logo_closed}
              />
              <p
                className={` font_futura  text-white ${
                  !sidebaropen && "hidden"
                }    size text-[22px] ml-[12px]`}
              >
                URBAN FITS
              </p>
            </div>
          </div>
        </div>
        {/* <div className="text-green" onClick={handleSidebar}>
          click me
        </div> */}

        {/* <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
        >
          <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
          </TreeItem>
          <TreeItem nodeId="5" label="Documents">
            <TreeItem nodeId="10" label="OSS" />
            <TreeItem nodeId="6" label="MUI">
              <TreeItem nodeId="8" label="index.js" />
            </TreeItem>
          </TreeItem>
        </TreeView> */}
        <div className="flex-col   h-screen  ">
          <div
            className={` overflow-y-scroll  ${
              sidebaropen ? "h-[56%]" : "h-[100%]"
            } 
            ${sidebaropen ? "px-[30px]" : "px-[29.94px]"}  `}
          >
            {sidebaritems?.map((item, index) => (
              <div>
                <div
                  onClick={() => handleItemClick(index)}
                  className="flex  cursor-pointer  mt-[37.54px] justify-between  items-center "
                >
                  {/* <Link href={item.navlink}> */}
                  <div className="flex gap-[10px] items-center  ">
                    <div>{item.icon}</div>

                    <p
                      className={` font_futura uppercase text-black   text-[12px]  
                  ${sidebaropen ? "visible" : "hidden"}
                  `}
                    >
                      {item.label}
                    </p>
                  </div>
                  {/* </Link> */}
                  <div
                    className={` cursor-pointer ${
                      item.subrows ? "visible" : "hidden"
                    } ${sidebaropen ? "visible" : "hidden"}`}
                    onClick={() => handleItemClick(index)}
                  >
                    {!item.expanded ? <RightArrowIcon /> : <DownArrowIcon />}
                  </div>
                </div>

                {item.subrows?.map((subitem, index) => (
                  <div
                    className={`flex gap-[10px] mt-[28px]  ${
                      item.expanded ? "visible" : "hidden"
                    }  `}
                  >
                    <Link href={subitem.navlink}>
                      <p
                        className={` font_futura uppercase text-black cursor-pointer text-[12px] font-[500] font-[Futura LT Pro] 
                    ${sidebaropen ? "visible" : "hidden"}
                    `}
                      >
                        {subitem.label}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className=" absolute bottom-[40px] left-[30px] ">
            <hr
              className={` ${
                sidebaropen ? "visible" : "hidden"
              } mb-[30px] mt-[38px] `}
            />
            <div className={` ${sidebaropen ? "visible" : "hidden"}  `}>
              <p className="font_futura text-[12px] font-[400] text-black ">
                Language: English
              </p>
              <p className="font_futura text-[12px] font-[400] text-black mt-[10px]">
                Shipping to: United Arab Emirates
              </p>
              <div className="flex items-center mt-[10px]">
                {" "}
                <span>
                  <LocationIcon />
                </span>
                <p className="font_futura text-[12px] font-[400] text-black  ml-[15.88px] ">
                  Urban Fits (UAE)
                </p>
              </div>
              <div className="flex items-center mt-[10px]">
                {" "}
                <span>
                  {" "}
                  <CallIcon />{" "}
                </span>
                <p className="font_futura text-[12px] font-[400] text-black  ml-[15.88px] ">
                  +971 52 700 1997
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /////////66666666666666666666666666666666666//////////// */}

      <div
        className={`px-[30px] py-[44px] bg-[#F4F4F4]    overflow-y-scroll
        ${sidebaropen ? "ml-[300px]" : "ml-[80px]"}  duration-300
       `}
      >
        {/* /////////////////////////////////////////////////// */}
        <div className={` flex justify-between  items-center `}>
          <div className={`flex items-center `}>
            <label className={`${styles.switch2} w-[40px] h-[22.25px] `}>
              <input onClick={handleSidebar} type="checkbox" />
              <span className={styles.slider}></span>
            </label>
            <div id={styles.searchdiv} className={` ml-[29.53px] `}>
              <div className="flex flex-row items-center gap-[10] w-[15.95px] h-[16px]"></div>
              {/* <i className="material-symbols-outlined absolute">search</i> */}
              <span className="absolute">
                <SearchIcon />
              </span>

              <input
                type="text"
                id="search"
                onChange={onchange}
                className="w-[139px] h-[17px] flex items-center text-[14px] font-[400] font_futuralt bg-transparent outline-none  "
                placeholder="Search (Keyword, etc)"
              />
            </div>
          </div>

          <div className={` flex items-center  `}>
            <span onClick={toggleshowmenue} className="cursor-pointer  " >
              <AvatarIcon />
            </span>
              <div className={` duration-200 ${showmenue? "visible": "hidden" }   absolute top-[89px] right-[154px] `} > 
                  <CardAdmin classes=" w-[150px] p-[20px] " round="rounded-[15px]" > 
                    <div className="grid grid-cols-1 gap-[15px] text-[12px] font-[400]  " >
                      <p className="cursor-pointer" >My Profile</p>
                      <p className="cursor-pointer">Settings</p>
                      <p className="cursor-pointer">Log out</p>
                    </div>
                   </CardAdmin>
              </div>
            <span className={` ml-[15px] `}>
              <DownArowSmallIcon />
            </span>
            <span className={` ml-[20px] `}>
              <BellIcon />
            </span>
            <span>
              <SettingIcon />
            </span>
          </div>
        </div>
        <hr className={`mt-[20px]`} />
        {/* ////////////////////////////Children START //////////////////////////////////////////////////////// */}

        {children}

        {/* ///////////////////////////////Children END///////////////////////////////////////////////////// */}
      </div>
      {/* footer */}
      <div className={`text-center text-[12px] mb-[40px] flex justify-center 
      ${sidebaropen?  "w-[120%]": "w-[105%]"}   `} >
        <p>
          Urban Fits L.L.C., Company Reg. Number - 2447 LLC 2023, Registered
          Office Address - 500 4th St NW Suite 102 PMB 1958 Albuquerque, NM
          87102 
          <br />
           Urban Fits L.L.C. © 2023-2024 All rights reserved.
        </p>
      </div>
    </div>
  );
}
