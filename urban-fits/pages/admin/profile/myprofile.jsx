import React from "react";
import Profile from "./index";
import CardAdmin from "@/components/cards/cardadmin";
import { InputText } from "@/components/InputText";
import { InputSelect } from "@/components/InputSelect";

export default function myprofile() {
  return (
    <Profile>
      <div className=" flex gap-x-[20px]  ">
        <CardAdmin
          classes=" w-[590px]  p-[30px] rounded-[25px] "
          round="rouded-[25px]"
        >
          <p className=" font_futura text-[24px] font-[500] leading-[14px] ">
             
            Basic Information 
          </p>

          <div className="flex" style={{ marginTop: "38px" }}>
            <div>
               
              <InputText
                label="Name"
                width="w-[255px]"
                placeholder="Name"
              /> 
            </div>
            <div className="ml-[20px]">
               
              <InputSelect
                label="Role"
                width="w-[150px]"
                options={["Staff", "Other"]}
              /> 
            </div>
          </div>

          <div className="flex " style={{ marginTop: "20px" }}>
            <div>
               
              <InputText
                label="User Name"
                width="w-[255px]"
                placeholder="Name"
              /> 
            </div>
            <div className="ml-[20px]">
               
              <InputSelect
                label="Status"
                width="w-[150px]"
                options={["Active", "Other"]}
              /> 
            </div>
          </div>

          <div className="flex " style={{ marginTop: "20px" }}>
            <div>
               
              <InputText
                label="Email "
                width="w-[255px]"
                placeholder="Name"
              /> 
            </div>
            <div className="ml-[20px]">
               
              <InputSelect
                label="Department"
                width="w-[150px]"
                options={["Development", "Other"]}
              /> 
            </div>
          </div>

          <div className="flex gap-[23px] " style={{ marginTop: "20px" }}>
            <div className="">
               
              <InputSelect
                label="Date of Birth "
                width="w-[70px]"
                options={["20", "19"]}
              /> 
            </div>
            <div className="">
               
              <InputSelect
                label="&nbsp;"
                width="w-[70px]"
                options={["Development", "Other"]}
              />
            </div>
            <div className="">
              <InputSelect
                label="&nbsp;"
                width="w-[70px]"
                options={["Development", "Other"]}
              />
            </div>
          </div>
          <div style={{marginTop:'20px'}} >
            <p className="font_futura font-semibold  text-[14px] ">Gender</p>
            <div className="flex gap-[28px] " style={{ marginTop: "20px" }}>
              <div className="flex items-center" >
                <input className=""  type="checkbox" name="" id="" />
                <label className=" ml-[15px] text-[14px] font_futura " >Male </label>
              </div>
              <div className="flex items-center" >
                <input className=""  type="checkbox" name="" id="" />
                <label className=" ml-[15px] text-[14px] font_futura " >Female </label>
              </div>
              <div className="flex items-center" >
                <input className=""  type="checkbox" name="" id="" />
                <label className=" ml-[15px] text-[14px] font_futura " >Other </label>
              </div>
            </div>
          </div>
        </CardAdmin>
        {/*  second card right start   */}
        <CardAdmin
          classes=" w-[590px] p-[30px]  rounded-[25px] "
          round="rouded-[25px]"
        >
          <p className="font_futura text-[24px] font-[500] leading-[14px] ">
            Contact
           </p>

          <div className="grid grid-cols-2 gap-x-[10px] " >
            <div className="grid gap-y-[20px] " >
               <InputText
                 label="Phone"
                 width="w-[255px]"
                 placeholder="Name"
               /> 

               
               <InputText
                 label="Address Line 1 "
                 width="w-[255px]"
                 placeholder="Name"
               /> 
               <InputText
                 label="City "
                 width="w-[255px]"
                 placeholder="Name"
               /> 
               <InputText
                 label="Country "
                 width="w-[255px]"
                 placeholder="Name"
               /> 
             
            </div>

           

          </div>


        </CardAdmin>
      </div>
    </Profile>
  );
}
