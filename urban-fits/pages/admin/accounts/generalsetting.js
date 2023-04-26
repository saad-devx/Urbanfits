import React from "react";
import Sidebaradmin from "../sidebar";
import CardAdmin from "@/components/cards/cardadmin";
import { InputText } from "@/components/InputText";
import { QuestionIcon } from "@/public/icons/QuestionIcon";

const generalsetting = () => {
  return (
    <Sidebaradmin>
      <CardAdmin classes="p-[40px]  " round="rounded-[25px]">
        <div className="font_futura">
          <p className="text-[22px] font-semibold "> Store Address</p>

          <p className="text-[14px] mt-[15px] ">
            This is where your business is located. Tax rates and shipping rates
            will use this address.
          </p>

          <div className="flex  " >
            <InputText
              label="Address Line 1"
              postlabel={<QuestionIcon />}
              width="  max-w-[50%]"
              placeholder="Address"
            />
            <InputText
              label="Address Line 1"
              postlabel={<QuestionIcon />}
              width="  max-w-[50%]"
              placeholder="Address"
            />
          </div>
        </div>
      </CardAdmin>
    </Sidebaradmin>
  );
};

export default generalsetting;
