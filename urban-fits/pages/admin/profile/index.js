import React from "react";
import Sidebaradmin from "../sidebar";

import ProfilePic from "../../../public/ProfilePic.png";
import Image from "next/image";
import Button from "@/components/buttons/simple_btn";
import { BasketIcon } from "@/public/sidebaricons/BasketIcon";
import Navbar from "@/components/navbar";
import AccountMenu from "@/components/accountmenu";
import CustomTab from "@/components/CustomTabs/CustomTab";

import { profileTabData } from "@/mock/customtabData";
import { Button2 } from "@/components/buttons/Button2";
import { Badge1 } from "@/components/buttons/badges/Badge1";
import CardAdmin from "@/components/cards/cardadmin";


export default function Profile({children}) {
  return (
    <Sidebaradmin>
      <div className={` mt-[40px] flex items-center font_futura `}>
        <Image width="150px" height="150px" src={ProfilePic} />

        <div className="ml-[30px]">
          <p className=" text-[22px] mb-0  "> Bilawal </p>

          <div className="flex  items-center mt-[18px] ">
            <Button classes="mt-0 mb-0"> Change Avtar </Button>{" "}
            <span className="ml-[20px]">
              {" "}
              <BasketIcon />
            </span>
          </div>

          <p className="text-[14px] mt-[10px] ">
            For best results use an image at least 256px by 256px in either .jpg
            or .png format
          </p>
        </div>
      </div>

      <div className="mt-[43px]" >
      <CustomTab tabdata={profileTabData}  >
        {children}


        <CardAdmin
        classes=" mt-[30px]  p-[40px] rounded-[25px] "
        round="rouded-[25px]"
      >
        <div className="font_futura">
          <p className="text-[22px]  "> Two-Factor Authentication </p>
          <p className="text-[14px] mt-[9px]   max-w-[1121px] ">
            Two-factor authentication is a method for protection your web
            account. When it is activated you need to enter not only your
            password, but also a special code. You can receive this code by in
            mobile app. Even if third person will find your password, then can't
            access with that code.
          </p>
          
          <div className="flex justify-between">
            <span className="mt-[30px]">
              <Button2 width="w-[160px]">Enable 2FA</Button2>
              
            </span>
            <div className="flex items-center">
              <p className="text-black text-[12px] "  >CURRENT STATUS:</p>
              <span className="ml-[10px]" >
                <Badge1>DISABALED</Badge1>
                
              </span>
            </div>
          </div>
        </div>
      </CardAdmin>

      </CustomTab>
      </div>

      
    </Sidebaradmin>
  );
}
