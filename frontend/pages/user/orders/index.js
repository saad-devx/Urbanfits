import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Navbar from '../../../components/navbar';
import AccountMenu from '../../../components/accountmenu'

const Option = (props) => {
    const router = useRouter()
    const route = router.pathname
    return (
        <Link className={`h-full group flex flex-col justify-between items-center transition-all `} href={props.href}>{props.children}<span className={`bg-gold-land h-1 mt-1 rounded-lg group-hover:w-full ${route === props.href ? 'w-full' : 'w-0'} transition-all duration-300`}></span></Link>
    )
}

export default function OrdersPage(props) {
    const [expand, setExpand] = useState(false)
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full lg:fixed right-0 flex transition-all duration-700`}>
                    <AccountMenu />
                    <section className='w-full lg:w-[67%] font_futuraLT text-left p-5 md:p-9 lg:pl-7 lg:pr-16 overflow-y-scroll' >
                        <div className="w-full lg:w-5/6">
                            <h2 className="text-3xl mb-4">My Order</h2>
                            <div className="w-full h-[10] text-sm md:text-base overflow-x-scroll hide_scroll">
                                <div className="w-[150%] md:w-full h-full flex justify-between  border-b border-b-gray-300 ">
                                    <Option href='/user/orders/orders'>Orders</Option>
                                    <Option href='/user/orders/buyagain'>Buy Again</Option>
                                    <Option href='/user/orders/notdispatched'>Not Yet Dispatched</Option>
                                    <Option href='/user/orders/cancelorder'>Cancelled Order</Option>
                                </div>
                            </div>
                            <section className="w-full h-screen my-5 font_futuraLT">
                                {props.children}
                            </section>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}