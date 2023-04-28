import React, { useState } from "react";
import Sidebaradmin from "../sidebar";
import CardAdmin from "@/components/cards/cardadmin";
import QuestionIcon from "@/public/icons/QuestionIcon";

import { Button2 } from "@/components/buttons/Button2";
import Button from "@/components/buttons/simple_btn";
import MenueIcon from "@/public/icons/MenueIcon";
import { InputText } from "@/components/InputText";
import { RightArrowIcon } from "@/public/sidebaricons/RightArrowIcon";

const addzone = () => {
  const [checked, setChecked] = useState(1);

  const handlemenueclick = (id) => {
    setChecked(id);
  };

  return (
    <div className="font-futura">
      <Sidebaradmin>
        <div className="mt-[15px]  ">
          <div>
            <div className="font_futura">
              <p className="not-italic text-[22px]  font-medium text-black">
                Shipping
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
                Account
              </li>
              <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
                <RightArrowIcon />
              </li>
              <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
                Shipping
              </li>
            </div>
          </div>
        </div>

        <CardAdmin classes="mt-[20px]">
          <div className="p-[40px]">
            <div className="flex gap-[30px] text-[14px] font-medium text-center">
              <p
                className={`${
                  checked == 1 && "gradient_txt_2"
                } cursor-pointer `}
                onClick={() => handlemenueclick(1)}
              >
                Shipping Zones
              </p>
              <p
                className={`${
                  checked == 2 && "gradient_txt_2"
                } cursor-pointer `}
                onClick={() => handlemenueclick(2)}
              >
                Shipping Options
              </p>
            </div>

            {checked == 1 && (
              <section>
                <div>
                  <p className="text-[14px] font-light mt-[20px]">
                    A Shipping zone is a geographic region where a certain set
                    of shipping methods are offered. It will match a customer to
                    a single zone using their shipping address and present the
                    shipping methods within that zone to them.
                  </p>
                </div>
                <div className="grid grid-cols-2 mt-[20px] gap-[53px]  ">
                  <InputText
                    label="Zone name"
                    postlabel={<QuestionIcon />}
                    placeholder="United State (US)"
                  />
                  <InputText
                    label="Zone regions"
                    postlabel={<QuestionIcon />}
                    placeholder="United State (US)"
                  />
                </div>
                <div>
                  <div>
                    <p className="flex  items-center mt-[30px] text-[18px] font-normal">
                      Shipping methods
                      <span className="ml-[8px]">
                        <QuestionIcon />
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-7 mt-[30px] gap-y-[10px] items-center  ">
                    <p className="ml-[114px] col-span-2  text-[15px] font-normal text-[#0000004d] ">
                      Title
                    </p>

                    <p className="text-[15px] col-span-2 font-normal text-[#0000004d] ">
                      Enable
                    </p>

                    <p className="text-[15px] col-span-3 font-normal text-[#0000004d] ">
                      Description
                    </p>
                  </div>
                  <div className="grid grid-cols-7 border-[1px] mt-[10px] items-center bg-[#F9F9F9]">
                    <div className="flex flex-row ml-[10px] items-center col-span-2 ">
                      <MenueIcon />
                      <p className="ml-[88.33px] text-[14px] font-normal  ">
                        Free Shipping
                      </p>
                    </div>

                    <p className="w-[100px] text-[14px] font-normal col-span-2 ">
                      <label className="switch w-[40px] h-[22.25px]  ">
                        <input
                          type="checkbox"
                        />

                        <span className="slider"></span>
                      </label>
                    </p>

                    <p className="max-w-[570px] text-[14px] font-normal col-span-3 ">
                      Free Shipping <br />
                      Free shipping is a special method which can be triggered
                      with coupons and minimum spend.{" "}
                    </p>
                  </div>
                </div>
                <Button classes="mb-[0px] text-[12px] font-medium">
                  Add Shipping Method
                </Button>
              </section>
            )}
            {checked == 2 && (
              <section className=" text-[14px] ">
                <p className=" font-[500] mt-[40px] ">Calculations</p>
                <p className="font-[400] flex gap-[15px] items-center mt-[15px] ">
                  {" "}
                  <input type="checkbox" />{" "}
                  <p className="mt-[2px]">
                    {" "}
                    Enable the shipping calculator on the cart page.{" "}
                  </p>{" "}
                </p>
                <p className="font-[400] flex gap-[15px] items-center mt-[20px] ">
                  {" "}
                  <input type="checkbox" />{" "}
                  <p className="mt-[2px]">
                    {" "}
                    Hide shipping costs until an address is entered{" "}
                  </p>{" "}
                </p>

                <p className=" font-[500] mt-[40px] flex items-center ">
                  {" "}
                  <p> Shipping methods</p> <QuestionIcon />{" "}
                </p>
                <p className="font-[400] flex gap-[15px] items-center mt-[15px] ">
                  {" "}
                  <input type="checkbox" />{" "}
                  <p className="mt-[2px]">
                    {" "}
                    Default to customer shipping address{" "}
                  </p>{" "}
                </p>
                <p className="font-[400] flex gap-[15px] items-center mt-[20px] ">
                  {" "}
                  <input type="checkbox" />{" "}
                  <p className="mt-[2px]">
                    {" "}
                    Default to customer billing address
                  </p>{" "}
                </p>
                <p className="font-[400] flex gap-[15px] items-center mt-[20px] ">
                  {" "}
                  <input type="checkbox" />{" "}
                  <p className="mt-[2px]">
                    Force shipping to the customer billing address
                  </p>{" "}
                </p>

                <p className=" font-[500] mt-[40px] flex items-center ">
                  {" "}
                  <p> Debug Mode</p> <QuestionIcon />{" "}
                </p>
                <p className="font-[400] flex gap-[15px] items-center mt-[15px] ">
                  {" "}
                  <input type="checkbox" />{" "}
                  <p className="mt-[2px]"> Enable debug mode</p>{" "}
                </p>

                <p className=" font-[500] mt-[20px]  ">
                  {" "}
                  Enable shipping debug mode to show matching shipping zones and
                  to by pass shipping rate cache.{" "}
                </p>
              </section>
            )}
          </div>
        </CardAdmin>
        <div className="flex float-right text-[15px] font-normal">
          <Button>Save Changes</Button>
        </div>
      </Sidebaradmin>
    </div>
  );
};

export default addzone;
