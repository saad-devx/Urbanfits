import React from 'react'
import Sidebaradmin from '../sidebar'
import { RightArrowIcon } from '@/public/sidebaricons/RightArrowIcon'
import Button from '@/components/buttons/simple_btn'
import CardAdmin from '@/components/cards/cardadmin'
import EditIcon from '@/public/icons/EditIcon'
import { InputText } from '@/components/InputText'
import { InputSelect } from '@/components/InputSelect'
import InputTextArea from '@/components/InputTextArea'

const addproduct = () => {
  return (
   <Sidebaradmin>
     <div className="flex mt-[15px] justify-between items-center ">
      <div>
        <div className="font_futura">
          <p className="not-italic text-[22px]  font-medium text-black">
            Add Product 
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
            Products
          </li>
          <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
            <RightArrowIcon /> 
          </li>
          <li className=" ml-[12px] not-italic text-[14px] text-center font-medium text-black list-none">
            Add Products 
          </li>
        </div>
      </div>
      {/*  */}
      <div>
        <span> 
          <Button my="my-[0px]"> View All</Button>
        </span>
      </div>
      {/*  */}
    </div>

    <CardAdmin classes="mt-[20px] " >
        <div  >
            <p className='px-[60px]  pt-[30px] mb-[12px] text-[24px] font-[400] ' >
                Add Product
            </p>
            <div className='px-[30px] mb-[30px]' >
                <hr  />
            </div>
            <div className='px-[50px] grid grid-cols-2 gap-[20px] ' >
                <section>
                    <div className=' w-[413px] h-[377px] border-[1px] flex items-center justify-center 
                     border-[#DADADA] rounded-[15px] ' >
                        <div className='p-[22px] w-[393px] h-[357px] bg-[#F4F4F4] rounded-[15px]  ' >
                            <div className=' float-right '  >
                                <EditIcon/>
                            </div>
                            <p className='text-[30px] font-[700] text-center mt-[106px] ' >765 X 850</p>
                            <p className='text-[20px] font-[500] text-center mt-[50px] ' >
                            Please choose image according to the expected ratio</p>


                        </div>
                    </div>
                    <div className=' flex gap-[26px] mt-[10px]' >
                        <div className=' flex flex-col gap-[10px]' >
                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px] ' >
                            <div className='p-[22px] w-[100px] h-[92px] bg-[#F4F4F4] rounded-[15px]  ' >
                                <div className=' float-right '  >
                                    <EditIcon/>
                                </div>
                                <p className='text-[12px] font-[500] text-center mt-[20px] ' >765 X 850</p>
                            


                            </div>
                            </div>
                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px] ' >
                            <div className='p-[22px] w-[100px] h-[92px] bg-[#F4F4F4] rounded-[15px]  ' >
                                <div className=' float-right '  >
                                    <EditIcon/>
                                </div>
                                <p className='text-[12px] font-[500] text-center mt-[20px] ' >765 X 850</p>
                            


                            </div>
                            </div>
                          
                        </div>
                        <div className=' flex flex-col gap-[10px]' >
                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px] ' >
                            <div className='p-[22px] w-[100px] h-[92px] bg-[#F4F4F4] rounded-[15px]  ' >
                                <div className=' float-right '  >
                                    <EditIcon/>
                                </div>
                                <p className='text-[12px] font-[500] text-center mt-[20px] ' >765 X 850</p>
                            


                            </div>
                            </div>
                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px] ' >
                            <div className='p-[22px] w-[100px] h-[92px] bg-[#F4F4F4] rounded-[15px]  ' >
                                <div className=' float-right '  >
                                    <EditIcon/>
                                </div>
                                <p className='text-[12px] font-[500] text-center mt-[20px] ' >765 X 850</p>
                            


                            </div>
                            </div>
                        
                        </div>
                        <div className=' flex flex-col gap-[10px]' >
                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px] ' >
                            <div className='p-[22px] w-[100px] h-[92px] bg-[#F4F4F4] rounded-[15px]  ' >
                                <div className=' float-right '  >
                                    <EditIcon/>
                                </div>
                                <p className='text-[12px] font-[500] text-center mt-[20px] ' >765 X 850</p>
                            


                            </div>
                            </div>
                            <div className=' w-[120px] h-[112px] border-[1px] flex items-center justify-center 
                        border-[#DADADA] rounded-[15px] ' >
                            <div className='p-[22px] w-[100px] h-[92px] bg-[#F4F4F4] rounded-[15px]  ' >
                                <div className=' float-right '  >
                                    <EditIcon/>
                                </div>
                                <p className='text-[12px] font-[500] text-center mt-[20px] ' >765 X 850</p>
                            


                            </div>
                            </div>
                            
                        </div>
                       
                    </div>
                </section>
                <section className=' flex flex-col gap-[20px]' >
                    <div className='grid grid-cols-2 gap-[17px]' >
                        <InputText
                        label="Product Name"
                        placeholder="&nbsp;"
                        />
                        <InputSelect
                        label="Select Categories"
                        options={[1,2,3]}
                        />
                    </div>
                    <InputText
                        label="Slug"
                        placeholder="&nbsp;"

                    />
                    <InputText
                        label="Description"
                        h="h-[84px]"
                        placeholder="&nbsp;"
                    />
                    <div className='grid grid-cols-2 gap-[17px]' >
                        <div className='flex flex-col gap-[20px] ' >
                            {/* <input className='rounded-[50px]  w-[50px] opacity-5'
                            type="color" name="" id="" /> */}
                            <p  className='text-[16px] font-[400] ' >Color</p>
                            <div className='flex gap-[5px] items-center ' >
                                <div className=' w-[20px] h-[20px] bg-[#EA3838] rounded-[50px] '/>
                                <div className=' w-[20px] h-[20px] bg-[#4B9C19] rounded-[50px] '/>
                                <div className=' w-[20px] h-[20px] bg-[#3532AA] rounded-[50px] '/>
                                <div className=' w-[20px] h-[20px] bg-[#BC26B6] rounded-[50px] '/>
                                <div className=' w-[20px] h-[20px] bg-[#E1A822] rounded-[50px] '/>
                                <div className=' w-[20px] h-[20px] bg-[#000000] rounded-[50px] '/>
                                <div className=' w-[20px] h-[20px] bg-[#D97133] rounded-[50px] '/>
                                <p className='text-[10px] font-[400]' >Custom</p>
                            </div>
                            <InputText
                            label="Price (In USD)"
                            placeholder="&nbsp;"
                            />
                        </div>
                        <div className='flex flex-col gap-[20px] ' >
                        <p  className='text-[16px] font-[400] ' >Size</p>
                            <div className='flex items-center ' >
                                <input type="checkbox" /> <p className='text-[14px] font-[400] ml-[5px] mr-[10px] ' >S</p>
                                <input type="checkbox" /> <p className='text-[14px] font-[400] ml-[5px] mr-[10px]' >M</p>
                                <input type="checkbox" /> <p className='text-[14px] font-[400] ml-[5px] mr-[10px]' >L</p>
                                <input type="checkbox" /> <p className='text-[14px] font-[400] ml-[5px] mr-[10px]' >XL</p>
                                <input type="checkbox" /> <p className='text-[14px] font-[400] ml-[5px] ' >XXL</p>
                            </div>
                        <InputSelect
                        label="Quantity"
                        options={["Quantity", "others"]}
                        />
                        </div>
                    </div>
                    <InputText
                        label="Product Tag"
                        postlabel="( Type and make comma to separate Tag )"
                        placeholder="&nbsp;"
                    />

                </section>
            </div>
            <div className='grid grid-cols-2 gap-[20px] px-[50px] py-[50px] ' >
                <div className='flex flex-col gap-[20px]' >
                    <p className='text-[20px] font-[400] ' >SEO Details</p>
                    <InputText 
                    label="SEO Title"
                    placeholder=" "
                    />
                     <InputText 
                    label="SEO Description"
                    placeholder=" "
                    />
                     <InputText 
                    label="SEO Meta Keywords"
                    placeholder=" "
                    />
                </div>
                <div className='flex flex-col gap-[20px]' >
                <p className='text-[20px] font-[400] ' >Shipping Details</p>
                    <InputText 
                    label="Width"
                    placeholder="Inch"
                    />           
                    <InputText 
                    label="Weight"
                    placeholder="gam"
                    />           
                    <InputText 
                    label="Shipping Fees"
                    placeholder="$"
                    />      
                    <div className='flex justify-end' >
                            <Button classes=" my-[0px] " >
                                Publish
                            </Button>
                    </div>     
                </div>

            </div>
    
        </div>
    </CardAdmin>


   </Sidebaradmin>
  )
}

export default addproduct