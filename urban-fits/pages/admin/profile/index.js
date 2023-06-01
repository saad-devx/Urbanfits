import React from "react";
import Sidebaradmin from "../sidebar";

import ProfilePic from "../../../public/ProfilePic.png";
import Image from "next/image";
import Button from "@/components/buttons/simple_btn";
import { BasketIcon } from "@/public/sidebaricons/BasketIcon";
import Navbar from "@/components/navbar";
import CustomTab from "@/components/CustomTabs/CustomTab";

import { profileTabData } from "@/mock/customtabData";
import { Button2 } from "@/components/buttons/Button2";
import { Badge1 } from "@/components/buttons/badges/Badge1";
import CardAdmin from "@/components/cards/cardadmin";
import CustomModal from "@/components/modals/CustomModal";
import QrCode from "@/public/QrCode.png";
import { InputText } from "@/components/InputText";


export default function Profile({children}) {

  const [authmodal, setAuthmodal] = React.useState(false);

  const toggleauthmodal = () => {
    setAuthmodal(!authmodal);
  };


  const [picurl, setPicurl] = React.useState(ProfilePic);

  const handleProfilePic = (e) =>{
    
    if( e.target.files){
      setPicurl(URL.createObjectURL(e.target.files[0]))
    } 

  }

  // const imgInp = document.getElementById("imgInp")
  // imgInp?.onchange = e =>{
  //  const [file] = imgInp.files
  //  if (file) {
  //    blah.src = URL.createObjectURL(file)
  //  }
  // }


  return (
    <Sidebaradmin>
      <div className={` mt-[40px] flex items-center font_futura `}>

        <Image width={150} height={150} className="rounded-[15px]" src={picurl} />


        <div className="ml-[30px]">
          <p className=" text-[22px] mb-0  "> Bilawal </p>

          <div className="flex  items-center mt-[18px] ">
            <span className="cursor-pointer"  >
            <Button type="file" classes="mt-0 mb-0 relative  ">
               <input id="imgInp"
                onChange={handleProfilePic}
             type="file" className="opacity-0   absolute  w-[150px] left-0 " /> Change Avatar </Button>
            </span>
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
              <Button2 
              onClick={toggleauthmodal}
              width="w-[160px]">Enable 2FA</Button2>
              
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

{/*  */}

<CustomModal
                px="px-[50px]"
                py="py-[40px]"
                width="w-[686.4px]"
                show={authmodal}
                toggleModal={toggleauthmodal}
              >
                <div className="grid grid-cols-1 gap-[20px] ">
                  <p className="text-[22px]">Enable 2FA Authentication</p>
                  <p className="text-[14px] font-[400]  ">
                    Step 1: install this app from{" "}
                    <span className="gradient_txt_2"> Google Play </span>or{" "}
                    <span className="gradient_txt_2"> App Store </span>{" "}
                  </p>

                  <p className="text-[14px] font-[400] ">
                    Step 2: Scan the QR Code by your Google Authenticator app,
                    or you can add account manually.
                  </p>

                  <div className="flex items-center gap-[17px] " >
                    <Image width="150px" height="150px" src={QrCode} />

                    <div className="grid grid-cols-1 gap-[15px]" >
                      <p className="text-[14px] font-[500] " >Enter Google Authenticator Code</p>
                      <InputText mt="mt-[0px]" placeholder="Enter the code to verify" width="w-[409.4px]"/>
                      <Button2 width="w-[170px]" >
                        Confirm 2FA
                      </Button2>
                    </div>

                  </div>
                </div>
              </CustomModal>
      {/*  */}
    </Sidebaradmin>
  );
}
