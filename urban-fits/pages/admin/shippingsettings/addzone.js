import React from 'react'
import Sidebaradmin from '../sidebar'
import CardAdmin from '@/components/cards/cardadmin'
import QuestionIcon from '@/public/icons/QuestionIcon'
import MenuIcons from '@/public/icons/MenuIcons'
import { Button2 } from '@/components/buttons/Button2'
import Button from '@/components/buttons/simple_btn'

const addzone = () => {
    return (
<div className='font-futura'>
        <Sidebaradmin>
            <CardAdmin>
                <div className='p-[40px]'>
                    <div className='flex flex-row'>
                        <p className='text-[14px] font-normal text-center'>Shipping Zones</p>
                        <p className='text-[14px] font-normal text-center ml-[15px]'>Shipping Options</p>
                    </div>
                    <div>
                        <p className='text-[14px] font-light mt-[20px]'>A Shipping zone is a geographic region where a certain set of shipping methods are offered. It will match a customer to a single zone using their shipping address and present the shipping methods within that zone to them.</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div>
                            <label className='flex flex-row items-center mt-[20px] mb-[10px] text-[14px] font-medium'>Zone name <span className='ml-[8px]'><QuestionIcon /></span></label>
                            <input className='border-[1px] w-[400px] h-[50px] rounded-[10px]'
                                type='text'
                                placeholder='United State (US)'
                                
                                ></input>
                        </div>
                        <div>
                            <label className='flex flex-row items-center mt-[20px] mb-[10px] text-[14px] font-medium'>Zone regions <span className='ml-[8px]'><QuestionIcon /></span></label>
                            <input className='border-[1px] w-[400px] h-[50px] rounded-[10px]'
                                type='text'
                                ></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='flex flex-row items-center mt-[30px] text-[18px] font-normal'>Shipping methods<span className='ml-[8px]'><QuestionIcon /></span></p>
                        </div>
                        <div className='grid grid-cols-3 mt-[30px] items-center'>
                            <div>
                                <p className='ml-[114px] text-[15px] font-normal'>Title</p>
                            </div>
                            <div>
                                <p className='text-[15px] font-normal'>Enable</p>
                            </div>
                            <div>
                                <p className='text-[15px] font-normal'>Description</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 border-[1px] mt-10px] items-center bg-[#F9F9F9]'>
                            <div className='flex flex-row ml-[10px] items-center' >
                                < MenuIcons />
                                <p className='ml-[88.33px] text-[14px] font-normal'>Free Shipping</p>
                            </div>
                            <div>
                                <p className='w-[100px] text-[14px] font-normal'>Enable</p>
                            </div>
                            <div>
                                <p className='max-w-[570px] text-[14px] font-normal'>Free Shipping <br />
                                    Free shipping is a special method which can be triggered with coupons and minimum spend.  </p>
                            </div>
                        </div>
                    </div>
                    <Button classes='mb-[0px] text-[12px] font-medium'>Add Shipping Method</Button>
                </div>
            </CardAdmin>
            <div className='flex float-right text-[15px] font-normal'>
            <Button>Save Changes</Button>
            </div>
        </Sidebaradmin>
</div>
    )
}

export default addzone