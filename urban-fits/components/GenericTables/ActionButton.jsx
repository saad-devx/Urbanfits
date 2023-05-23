import { DownArowSmallIcon } from "@/public/sidebaricons/DownArowSmallIcon";
import React from "react";
import CardAdmin from "../cards/cardadmin";
import Link from "next/link";


const ActionButton = ({infoLink}) => {

  const [menu, setMenu] = React.useState(false);
  const  handleArrowClick = () => {
    setMenu(!menu);
  }


  return (
    <>
    <div className="flex items-center" >
      <Link  href={infoLink || "#" } >
      <button   
      className="rounded-l-[25px]  border-[1px] h-[40px] w-[50.86px] border-yellow-400 
      text-[14px]  font-[300]
      " >
        info

      </button>
      </Link>
      <button   onClick={handleArrowClick}
      className="rounded-r-[25px]  border-[1px] h-[40px] w-[39.19px] border-yellow-400 
      flex items-center justify-center relative
      " >
        <DownArowSmallIcon color="black" />
            <div className={` duration-200 ${menu ? "visible" : "hidden"}  z-50
              absolute top-[45px] right-[5px] `} >
              <CardAdmin classes=" w-[70px] p-[10px] " round="rounded-[15px]" >
                <div className="grid grid-cols-1 gap-[10px] text-[13px] font-[400]   " >
                  <p className="cursor-pointer" >Edit</p>
                  <p className="cursor-pointer">Delete</p>
                </div> 
              </CardAdmin>
            </div>
      </button>
    </div>
    </>
  );
};

export default ActionButton;
