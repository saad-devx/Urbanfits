import React from "react";
import Profile from "./index";
import CardAdmin from "@/components/cards/cardadmin";
import { InputText } from "@/components/InputText";
import { InputSelect } from "@/components/InputSelect";

export default function myprofile() {
  return ( 
    <Profile>
      <div className=" flex gap-x-[20px]  " >
        <CardAdmin classes=" w-[100%]  p-[30px] rounded-[25px] "  round="rouded-[25px]" >
           
          <p className="  font-[Futura LT Pro] text-[24px] font-[500] leading-[14px] "  > Basic Information </p>

          <div className="flex" style={{marginTop:"38px"}}  >
            <div> <InputText label="Name" width='w-[255px]'  placeholder="Name" /> </div>
            <div className="ml-[20px]" >  <InputSelect label="Role"  width="w-[150px]"
            options={["Staff","Other"]}
            />  </div>
          </div>

          <div className="flex " style={{marginTop:"20px"}}>
            <div> <InputText label="User Name" width='w-[255px]'  placeholder="Name" /> </div>
            <div className="ml-[20px]" >  <InputSelect label="Status" width="w-[150px]"
            options={["Active","Other"]}
            />  </div>
          </div>

          <div className="flex " style={{marginTop:"20px"}}>
            <div> <InputText label="Email " width='w-[255px]'  placeholder="Name" /> </div>
            <div className="ml-[20px]"   >  <InputSelect label="Department"  width="w-[150px]"
            options={["Development","Other"]}
            />  </div>
          </div>
         

        </CardAdmin>
        <CardAdmin classes=" w-[100%] p-[30px] h-[50px] rounded-[25px] "  round="rouded-[25px]" >
          slama
        </CardAdmin>
       </div>
    </Profile>

        
   

  )
  
};
