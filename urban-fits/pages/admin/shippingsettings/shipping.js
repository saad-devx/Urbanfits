import React from 'react'
import Sidebaradmin from '../sidebar'
import CardAdmin from '@/components/cards/cardadmin'
import MenuIcons from '@/public/icons/MenuIcons'
import QuestionIcon from '@/public/icons/QuestionIcon'
import WebIcons from '@/public/icons/WebIcons'
import Button from '@/components/buttons/simple_btn'

const shipping = () => {
    return (
        <div className='font_futura'>
        <Sidebaradmin>
            <div className='flex flex-row-reverse'>
                <Button>Add Shipping Zone</Button>
            </div>
            <CardAdmin>
                <div className='p-[40px] '>
                    <div className='flex flex-row '>
                        <p className='text-[14px] font-medium text-center '>Shipping Zones</p>
                        <p className='text-[14px] font-normal text-center ml-[30px] '>Shipping Options</p>
                    </div>
                    <div className='my-[19px]'>
                        <p className='text-[14px] font-light '>A Shipping zone is a geographic region where a certain set of shipping methods are offered. It will match a customer to a single zone using their shipping address and present the shipping methods within that zone to them.</p>
                    </div>
                    <div className=''>
                        <div className='grid grid-cols-3 mx-[10px] '>
                            <div className='flex items-center'>
                                <QuestionIcon />
                                <p className='text-[15px] ml-[15.33px] font-normal max-w-[250px] my-[23.5px] col-2 '>Zone name</p>
                            </div>
                            <div>
                                <p className='text-[15px] font-normal max-w-[540px] my-[23.5px] col-2'>Region (s)</p>
                            </div>
                            <div>
                                <p className='text-[15px] font-normal max-w-[250px] my-[23.5px] col-2'>Shipping method(s)</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] border-[1px] items-center'>
                        <div className='grid grid-cols-3  mx-[10px]'>
                            <div className='flex items-center'>
                                <MenuIcons />
                                <p className='text-[14px] ml-[15.33px] font-normal not-itapc max-w-[250px] my-[23.5px]'>United States (US)</p>
                            </div>
                            <div>
                                <p className='text-[14px] font-normal not-itapc max-w-[540px] my-[23.5px]'>United States (US)</p>
                            </div>
                            <div>
                                <p className='text-[14px] font-normal not-itapc max-w-[250px] my-[23.5px] '>Free shipping</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='grid grid-cols-3 mx-[10px]'>
                            <div className='flex items-center'>
                                <WebIcons />
                                <p className='text-[13px] ml-[15.33px] font-normal not-itapc max-w-[250px] my-[23.5px]  '>Location not covered by your other zones</p>
                            </div>
                            <div>
                                <p className='text-[13px] font-normal not-itapc max-w-[540px] my-[23.5px] '>This zone is optionally used for region that are not included in any other shipping zone. </p>
                            </div>
                            <div>
                                <p className='text-[13px] font-normal not-itapc max-w-[250px] my-[23.5px] '>No shipping method offered to this zone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardAdmin>
        </Sidebaradmin>
        </div>
    )
}

export default shipping