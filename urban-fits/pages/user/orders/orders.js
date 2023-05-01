import React, { useState } from 'react'
import OrdersPage from './index'
import Invoice from '@/components/modals/invoice'
import Image from 'next/image'
import shirt_img from '../../../public/card imgs/card img4.png'

const OrderCard = (props) => {
    const [invoice, setInvoice] = useState(false)
    const toggleInvoice = ()=>{
        if(!invoice) return setInvoice(true)
        if(invoice) return setInvoice(false)
    }
    return (
        <>
        <Invoice toggleInvoice={toggleInvoice} show={invoice} />
        <div className=" w-full h-48 md:h-52 my-3 flex flex-col items-start rounded-xl overflow-clip">
            <div className="bg-gray-50 w-full h-[30%] px-2 md:px-5 py-2 font_gotham_light text-[10px] md:text-xs flex justify-between">
                <div className="w-2/5 h-full flex justify-between">
                    <span className='flex flex-col justify-between h-full space-y-2' >
                        <p className='font_gotham_medium'>Order Placed</p><p className='font_gotam_light' >{props.order_date}</p>
                    </span>
                    <span className='flex flex-col justify-between h-full space-y-2' >
                        <p className='font_gotham_medium'>Total</p><p className='font_gotam_light' >{props.price}</p>
                    </span>
                </div>
                <div className='w-auto h-full flex flex-col justify-between items-end space-y-2 font_gotham'>
                    <h6>Order: # <code className='font_gotham_light' >{props.order_number}</code></h6>
                    <div className="w-full flex justify-between">
                        <button className="underline cursor-pointer">View Order Details</button>
                        <span className="bg-black w-[1px] h-3 md:h-4 translate-y-1"></span>
                        <button onClick={toggleInvoice} className="underline cursor-pointer">Invoice</button>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex justify-between items-center text-xs md:text-sm">
                <div className="w-full md:w-3/4 h-full flex items-center">
                    <span className=' w-24 md:w-28 mr-10' >
                        <Image alt="Urban images" src={props.img} className="w-full object-cover" />
                    </span>
                    <div className="flex flex-col space-y-2">
                        <h3 className="font_gotham_medium text-sm md:text-base tracking-wide lg:tracking-widest">{props.product_title.toUpperCase()}</h3>
                        <p className="font_gotham_light text-[10px] md:text-xs">Return Window Closed on June 23</p>
                    </div>
                </div>
                <span className='hidden md:flex justify-self-end text-[10px] md:text-xs' >
                    <p className="font_gotham_light">Powered By:&nbsp;</p><h6>Urban Fits</h6>
                </span>
            </div>
        </div>
        </>
    )
}

export default function orders() {
    return (
        <>
            <OrdersPage>
                <h2 className="text-xs md:text-sm">Order Placed in 2023</h2>
                <OrderCard product_title="Urban T-shirt with logo Design" img={shirt_img} order_date="8 Jan 2023" price="$78.00" order_number="406-0406900-597108" />
                <OrderCard product_title="Urban T-shirt with logo Design" img={shirt_img} order_date="8 Jan 2023" price="$78.00" order_number="406-0406900-597108" />
                <OrderCard product_title="Urban T-shirt with logo Design" img={shirt_img} order_date="8 Jan 2023" price="$78.00" order_number="406-0406900-597108" />
                <OrderCard product_title="Urban T-shirt with logo Design" img={shirt_img} order_date="8 Jan 2023" price="$78.00" order_number="406-0406900-597108" />
            </OrdersPage>
        </>
    )
}
