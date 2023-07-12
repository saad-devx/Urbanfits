import { DownArowSmallIcon } from "@/public/sidebaricons/DownArowSmallIcon";
import React from "react";
import CardAdmin from "../cards/cardadmin";
import Link from "next/link";


const ActionButton = ({ infoLink }) => {

  const [menu, setMenu] = React.useState("opacity-0 pointer-events-none");
  const toggleMenu = () => {
    if (menu) return setMenu(null);
    if (!menu) return setMenu("opacity-0 pointer-events-none");
  }

  return (
    <>
      <div className="relative w-20 h-9 p-px bg-gold flex justify-center items-center rounded-full" >
        <Link className="w-3/5 h-full mr-px bg-white rounded-l-full flex justify-center items-center text-sm" href={infoLink || "#"} >
          info
        </Link>
        <button onClick={toggleMenu} className="w-2/5 h-full bg-white rounded-r-full flex items-center justify-center" >
          <DownArowSmallIcon color="black" />
        </button>
        <div onBlur={toggleMenu} className={`duration-200 ${menu} z-50 absolute top-[45px] right-[5px]`} >
          <CardAdmin classes=" w-[70px] p-[10px] " round="rounded-[15px]" >
            <div className="grid grid-cols-1 gap-[10px] text-[13px] font-[400]" >
              <p className="cursor-pointer">Edit</p>
              <p className="cursor-pointer">Delete</p>
            </div>
          </CardAdmin>
        </div>
      </div>
    </>
  );
};

export default ActionButton;
