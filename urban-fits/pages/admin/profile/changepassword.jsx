import React from "react";
import Profile from ".";
import CardAdmin from "@/components/cards/cardadmin";
import { InputText } from "@/components/InputText";
import { InfoBlackIcon } from "@/public/icons/InfoBlackIcon";
import { Button2 } from "@/components/buttons/Button2";

const changepassword = () => {
  return (
    <Profile>
      <CardAdmin classes="p-[40px]   ">
        <div className="grid grid-cols-2 gap-x-[40px] ">
          <div className=" flex flex-col gap-[19px]">
            <InputText
              label="Old Password"
              width="  w-[100%]"
              placeholder="Old Password"
            />
            <InputText
              label="New Password"
              width="  w-[100%]"
              placeholder="New Password"
            />

            <div>
              <span className="flex gap-x-[7px] gap-y-[5px]  items-center text-[12px] ">
                <InfoBlackIcon />
                <p>Password should be minimum 6 Character long.</p>
              </span>
              <span className="flex gap-[7px] items-center text-[12px] ">
                <InfoBlackIcon />
                <p>Your password will update after confirm from your email.</p>
              </span>
            </div>

            <Button2 width="w-[160px]" my="my-[0px]">
              Update
            </Button2>
          </div>

          <div className=" flex flex-col mt-[97px]">
            
              <InputText
                label="Confirm New Password"
                width="  w-[100%]"
                placeholder="Confirm New Password"
              />
            
          </div>
        </div>
      </CardAdmin>
    </Profile>
  );
};

export default changepassword;
