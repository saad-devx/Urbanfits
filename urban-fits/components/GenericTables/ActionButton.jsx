import { DownArowSmallIcon } from "@/public/sidebaricons/DownArowSmallIcon";
import React from "react";

const ActionButton = () => {
  return (
    <div className="flex items-center" >
      <button  
      className="rounded-l-[25px]  border-[1px] h-[40px] w-[50.86px] border-yellow-400 
      text-[14px]  font-[300]
      " >
        info

      </button>
      <button  
      className="rounded-r-[25px]  border-[1px] h-[40px] w-[39.19px] border-yellow-400 
      flex items-center justify-center
      " >
        <DownArowSmallIcon color="black" />
      </button>
    </div>
  );
};

export default ActionButton;
