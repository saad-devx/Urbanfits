import React from "react";
import Profile from ".";
import CardAdmin from "@/components/cards/cardadmin";
import { InputText } from "@/components/InputText";
import { InputSelect } from "@/components/InputSelect";

export default function myprofile() {
  return (
    <Profile>
      <div className=" w-[100%] flex gap-x-[20px] font_futura   ">
        <CardAdmin
          classes=" w-[100%]  p-[30px] rounded-[25px] "
          round="rouded-[25px]"
        >
          <p className=" font_futura text-[24px] font-[500] leading-[14px] ">
            Basic Information
          </p>

          <div className="flex" style={{ marginTop: "38px" }}>
            <div>
              <InputText label="Name" width="w-[255px]" placeholder="Name" />
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
                placeholder="username"
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
              <InputText label="Email " width="w-[255px]" placeholder="email" />
            </div>
            <div className="ml-[20px]">
              <InputSelect
                label="Department"
                width="w-[150px]"
                options={["Development", "Other"]}
              />
            </div>
          </div>

          <div className="flex gap-[20px] " style={{ marginTop: "20px" }}>
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
                options={["Jan", "Other"]}
              />
            </div>
            <div className="">
              <InputSelect
                label="&nbsp;"
                width="w-[70px]"
                options={["1998", "Other"]}
              />
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p className="font_futura font-semibold  text-[14px] ">Gender</p>
            <div className="flex gap-[28px] " style={{ marginTop: "20px" }}>
              <div className="flex items-center">
                <input className="" type="checkbox" name="" id="" />
                <label className=" ml-[15px] text-[14px] font_futura ">
                  Male{" "}
                </label>
              </div>
              <div className="flex items-center">
                <input className="" type="checkbox" name="" id="" />
                <label className=" ml-[15px] text-[14px] font_futura ">
                  Female{" "}
                </label>
              </div>
              <div className="flex items-center">
                <input className="" type="checkbox" name="" id="" />
                <label className=" ml-[15px] text-[14px] font_futura ">
                  Other
                </label>
              </div>
            </div>
          </div>
        </CardAdmin>
        {/*  second card right start   */}
        <CardAdmin
          classes=" w-[100%]  p-[30px] rounded-[25px] "
          round="rouded-[25px]"
        >
          <p className=" font_futura text-[24px] font-[500] leading-[14px] ">
            Contact
          </p>

          <div
            className="grid  grid-cols-2 gap-[20px] "
            style={{ marginTop: "38px" }}
          >
            <div className="flex flex-col gap-[20px]">
              <InputText
                label="Phone"
                // width="100%"
                placeholder="phone"
              />
              <InputText
                label="Address Line 1"
                // width=""
                placeholder="Address"
              />
              <InputText
                label="City "
                // width=""
                placeholder="Name"
              />
              <InputText
                label="Country"
                // width=""
                placeholder="&nbsp;"
              />
            </div>

            <div className="flex flex-col gap-[20px]">
              <InputText
                label="Mobile No."
                // width=""
                placeholder="Mobile no."
              />
              <InputText
                label="Address Line 2"
                postlabel="(Optional)"
                // width=""
                placeholder="Address"
              />
              <InputText
                label="State "
                // width=""
                placeholder="Name"
              />
            </div>
          </div>
        </CardAdmin>
      </div>
    </Profile>
  );
}
