import React, { useState } from "react";
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
import AvatarIconV from "@/public/icons/AvatarIconV";
import { ClockIcon } from "@/public/icons/ClockIcon";
import Button from "@/components/buttons/simple_btn";
import { Button2 } from "@/components/buttons/Button2";
import useUser from "@/hooks/useUser";

export default function Sidebaradmin({ children }) {
    const [sidebaritems, setSidebaritems] = React.useState(sidebarItems);
    const {user} = useUser()
    // const [selected, SetSelected] = React.useState(false);
    // const [subrowopen, setSubrowopen] = React.useState(false);
    const [showmenue, setshowMenue] = React.useState(false);
    const [shownotification, setShownotification] = React.useState(false);
    const [arrowmenue, setArrowmenu] = React.useState(false);

    const handlemenuclick = (menu) => {
        if (menu == "avatar") {
            setshowMenue(!showmenue);
            setArrowmenu(false);
            setShownotification(false);
        }
        else if (menu == "arrow") {
            setArrowmenu(!arrowmenue);
            setshowMenue(false);
            setShownotification(false);
        }
        else {
            setShownotification(!shownotification);
            setArrowmenu(false);
            setshowMenue(false);
        }

    }

    const [notchecked, setNotchecked] = useState(1);

    const handlenotmenuclick = (id) => {
        setNotchecked(id);
    };

    const [sidebaropen, setSidebaropen] = React.useState(true);
    const handleSidebar = () => {
        if (sidebaropen == true) {

            let temp = sidebaritems;
            temp.forEach((item) => {
                item.expanded = false;
            });
            setSidebaritems([...temp]);
        }

        setSidebaropen(!sidebaropen);
    };

    const handleItemClick = (index) => {
        index += 1;

        let temp = sidebaritems;
        temp.forEach((item) => {
            if (item.id == index) item.expanded = !item.expanded;
        });
        setSidebaritems([...temp]);
    };

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const onSearch = (e) => {
        const term = e.target.value
        setQuery(term)
    }

    return (
        <div className="flex-col bg-[#F4F4F4] overflow-x-hidden overflow-y-scroll font_futura ">
            <div className={`fixed ${sidebaropen ? "w-[250px]" : "w-[80px]"} duration-300 ${sidebaropen && "rounded-r-[25px]"} bg-[#FFFFFF] h-screen`} >
                <div className="flex-col justify-between h-full">
                    <div id={styles.top_gradient} className={`h-[12%] ${sidebaropen && "rounded-tr-[25px]"}   `} >
                        <div className={`relative`}>
                            <div className={`absolute  flex  items-center ${sidebaropen ? "pl-[40px]" : "pl-[20px]"}  pt-[20px] `} >
                                <Image width={37.05} height={37.05} alt="Urban Fits" src={sidebaropen ? logo_outlined : sidebar_logo_closed} />
                                <p className={` font_futura  text-white ${!sidebaropen && "hidden"} size text-[22px] ml-[12px]`} > URBAN FITS</p>
                            </div>
                        </div>
                    </div>

                    <div className={`overflow-x-hidden overflow-y-scroll  ${sidebaropen ? "h-3/5" : "h-full"} ${sidebaropen ? "px-[30px]" : "px-[29.94px]"}`} >
                        {sidebaritems?.map((item, index) => (
                            <div>
                                <div onClick={() => handleItemClick(index)} style={{margin: sidebaritems.length == index + 1? "36px 0": "36px 0 0 0"}} className="flex cursor-pointer justify-between items-center " >
                                    <Link href={item.navlink || "#"}>
                                        <div className="flex gap-[10px] items-center  ">
                                            <div>{item.icon}</div>

                                            <p className={` font_futura uppercase text-black text-[12px] ${sidebaropen ? "visible" : "hidden"}`}>
                                                {item.label}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className={` cursor-pointer ${item.subrows ? "visible" : "hidden"} ${sidebaropen ? "visible" : "hidden"}`} onClick={() => handleItemClick(index)} >
                                        {!item.expanded ? <RightArrowIcon /> : <DownArrowIcon />}
                                    </div>
                                </div>

                                {item.subrows?.map((subitem, index) => (
                                    <div className={`flex gap-[10px] mt-[28px]  ${item.expanded ? "visible" : "hidden"}  `} >
                                        <Link href={subitem.navlink || '#'}>
                                            <p className={` font_futura uppercase text-black cursor-pointer text-[12px] font-[500] font-[Futura LT Pro]  ${sidebaropen ? "visible" : "hidden"} `}>
                                                {subitem.label}
                                            </p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-[27%] pl-[30px] flex flex-col justify-center hide_scrollbar border-t border-gray-300">
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
                                    {" "}<CallIcon />{" "}
                                </span>
                                <p className="font_futura text-[12px] font-[400] text-black  ml-[15.88px] ">
                                    +971 52 700 1997
                                </p>
                            </div>
                    </div>
                </div>
            </div>

            <div className={`min-h-[100vh] px-[30px] py-[44px] bg-[#F4F4F4] overflow-y-scroll ${sidebaropen ? "ml-[250px]" : "ml-[80px]"}  duration-300 `} >
                <div className={` flex justify-between  items-center `}>
                    <div className={`flex items-center `}>
                        <label className={`${styles.switch2} w-[40px] h-[22.25px] `}>
                            <input onClick={handleSidebar} type="checkbox" defaultChecked={true} />
                            <span className={styles.slider}></span>
                        </label>
                        <div id={styles.searchdiv} className={` ml-[29.53px] mr-4`}>
                            <div className="flex flex-row items-center gap-[10] w-[15.95px] h-[16px]"></div>
                            {/* <i className="material-symbols-outlined absolute">search</i> */}
                            <span className="absolute">
                                <SearchIcon />
                            </span>

                            <input
                                type="text"
                                id="search"
                                value={query}
                                onChange={onSearch}
                                className="w-[139px] h-[17px] flex items-center text-[14px] font-[400] font_futuralt bg-transparent outline-none  "
                                placeholder="Search (Keyword, etc)"
                            />
                        </div>
                        {/* <CursorToggleBtn /> */}
                    </div>

                    <div className={` flex items-center  `}>
                        <span onClick={() => handlemenuclick("avatar")} className="w-10 border border-gray-400 aspect-square rounded-full overflow-hidden cursor-pointer" >
                            <Image src={user.image} width={50} height={50} />
                        </span>
                        <div className={` duration-200 ${showmenue ? "visible" : "hidden"}   absolute top-[89px] right-[154px] `} >
                            <CardAdmin classes=" w-[150px] p-[20px] " round="rounded-[15px]" >
                                <div className="grid grid-cols-1 gap-[15px] text-[12px] font-[400]  " >
                                    <p className="cursor-pointer" >My Profile</p>
                                    <p className="cursor-pointer">Settings</p>
                                    <p className="cursor-pointer">Log out</p>
                                </div>
                            </CardAdmin>
                        </div>

                        <span onClick={() => handlemenuclick("arrow")} className={` cursor-pointer ml-[15px] `}>
                            <DownArowSmallIcon />
                        </span>
                        <div className={` duration-200 ${arrowmenue ? "visible" : "hidden"}   absolute top-[89px] right-[35px] `} >
                            <CardAdmin classes=" w-[150px] p-[20px] " round="rounded-[15px]" >
                                <div className="grid grid-cols-1 gap-[15px] text-[12px] font-[400]  " >
                                    <p className="cursor-pointer" >My Account</p>
                                    <p className="cursor-pointer">Security</p>
                                    <p className="cursor-pointer">2FA Authentication</p>
                                </div>
                            </CardAdmin>
                        </div>

                        <span onClick={() => handlemenuclick("bell")} className={` cursor-pointer ml-[20px] `}>
                            <BellIcon />
                        </span>
                        <div className={` z-[999] duration-200 ${shownotification ? "visible" : "hidden"}   absolute top-[89px] right-[92px] `} >
                            <CardAdmin classes=" w-[320px] p-[20px] z-50 " round="rounded-[15px]" >
                                <div  >
                                    <p className=" text-[14px] font-[500] " > Notification </p>
                                    <div>
                                        <div className="flex gap-[50px]  text-[16px] mt-[15px] ">
                                            <p
                                                className={`${notchecked == 1
                                                    ? "  border-b-2 gradient_txt_2 border-b-[#ccb849] "
                                                    : null
                                                    }  text-[11px] font-[500] uppercase z-50  pb-[10px] cursor-pointer `}
                                                onClick={() => handlenotmenuclick(1)}
                                            >
                                                Activities
                                            </p>
                                            <p
                                                className={`${notchecked == 2
                                                    ? " border-b-2 gradient_txt_2 border-b-[#ccb849]"
                                                    : "font-[300] "
                                                    } text-[11px] font-[500] uppercase z-50 px-[16px] pb-[10px] cursor-pointer`}
                                                onClick={() => handlenotmenuclick(2)}
                                            >
                                                Notes
                                            </p>
                                            <p
                                                className={`${notchecked == 3
                                                    ? " border-b-2 gradient_txt_2 border-b-[#ccb849]"
                                                    : "font-[300] "
                                                    } text-[11px] font-[500] uppercase  px-[16px] pb-[10px] cursor-pointer`}
                                                onClick={() => handlenotmenuclick(3)}
                                            >
                                                Alerts
                                            </p>
                                        </div>
                                        <hr className=" border-none h-[1px] bg-[#CCCCCC] translate-y-[-1px]  " />
                                    </div>
                                    {notchecked == 1 &&
                                        <>
                                            {[...Array(5)].map(() => (

                                                <div className="flex items-center gap-[15px] my-[9px] " >
                                                    <div className="bg-[#B9BBC1] w-[25px] h-[25px] flex items-center justify-center rounded-[50px] " >
                                                        <AvatarIconV fill="white" stroke="white" w="8" h="10" />
                                                    </div>
                                                    <div  >
                                                        <p className=" text-[12px] font-[500] " >You Joined a Group</p>
                                                        <p className=" text-[10px] font-[300] flex gap-[5px] items-center "> <ClockIcon w="8" h="8" /> <p>Today</p></p>
                                                    </div>
                                                </div>

                                            ))}

                                        </>
                                    }
                                    {notchecked == 2 &&
                                        <>
                                            {[...Array(5)].map(() => (

                                                <div className="flex items-center gap-[15px] my-[9px] " >
                                                    <div className="bg-[#B9BBC1] w-[25px] h-[25px] flex items-center justify-center rounded-[50px] " >
                                                        <AvatarIconV fill="white" stroke="white" w="8" h="10" />
                                                    </div>
                                                    <div  >
                                                        <p className=" text-[12px] font-[500] " >You Joined a Group</p>
                                                        <p className=" text-[10px] font-[300] flex gap-[5px] items-center "> <ClockIcon w="8" h="8" /> <p>Today</p></p>
                                                    </div>
                                                </div>

                                            ))}

                                        </>
                                    }
                                    {notchecked == 3 &&
                                        <>
                                            {[...Array(5)].map(() => (

                                                <div className="flex items-center gap-[15px] my-[9px] " >
                                                    <div className="bg-[#B9BBC1] w-[25px] h-[25px] flex items-center justify-center rounded-[50px] " >
                                                        <AvatarIconV fill="white" stroke="white" w="8" h="10" />
                                                    </div>
                                                    <div  >
                                                        <p className=" text-[12px] font-[500] " >You Joined a Group</p>
                                                        <p className=" text-[10px] font-[300] flex gap-[5px] items-center "> <ClockIcon w="8" h="8" /> <p>Today</p></p>
                                                    </div>
                                                </div>

                                            ))}

                                        </>
                                    }

                                    <div className="flex gap-[20px] mt-[20px] " >
                                        <Button2 width="w-[130px]" > Mark All Read </Button2>
                                        <Button2 width="w-[130px]" > Delete All </Button2>
                                    </div>
                                </div>
                            </CardAdmin>
                        </div>
                        <span>
                            <SettingIcon />
                        </span>
                    </div>
                </div>
                <hr className={`mt-[20px]`} />
                {/* ////////////////////////////Children START //////////////////////////////////////////////////////// */}

                {query == '' ? children : results}

                {/* ///////////////////////////////Children END///////////////////////////////////////////////////// */}
            </div>
            {/* footer */}
            <div className={`text-center text-[12px] mb-[40px] flex justify-center 
      ${sidebaropen ? "w-[120%]" : "w-[105%]"}   `} >
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
