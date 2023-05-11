import React from "react";
import Sidebaradmin from "../sidebar";
import CardAdmin from "@/components/cards/cardadmin";
import { RightArrowIcon } from "@/public/sidebaricons/RightArrowIcon";
import Button from "@/components/buttons/simple_btn";
import GenericTable1 from "@/components/GenericTables/GenericTable1";
import {
  userListTableColumns,
  userListTableData,
} from "@/mock/tablesdata";

const userlist = () => {
  return (
    <Sidebaradmin>
      <div className="flex mt-[15px] justify-between items-center ">
        <div>
          <div className="font_futura">
            <p className="not-italic text-[22px]  font-medium text-black">
              User List
            </p>
          </div>
          <div className=" flex items-center mt-[15px] ">
            <li className="  not-italic text-[14px] text-center font-medium text-black list-none">
              Home
            </li>
            <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
              <RightArrowIcon />
            </li>
            <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
              User
            </li>
            <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
              <RightArrowIcon />
            </li>
          </div>
        </div>
        {/*  */}
        <div>
          <span>
            <Button my="my-[0px]"> Add User</Button>
          </span>
        </div>
        {/*  */}
      </div>

      <CardAdmin classes="px-[40px] py-[42px] mt-[20px] ">
        <div className="grid grid-cols-1">
          {/* <div className="flex flex-col  "> */}
            <GenericTable1
            border={true}
              columns={userListTableColumns}
              data={userListTableData}
            />
          </div>
        {/* </div> */}
      </CardAdmin>
    </Sidebaradmin>
  );
};

export default userlist;
