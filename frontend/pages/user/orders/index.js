import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/navbar';
import Button from '../../../components/simple_btn';
import AccountMenu from '../../../components/accountmenu'

export default function OrdersPage(props) {
    const [expand, setExpand] = useState(false)
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[94.6%]'} h-full lg:fixed right-0 flex transition-all duration-700`}>
                    <AccountMenu />
                    <section className='w-full lg:w-[67%] font_futuraLT text-left p-9 lg:pl-7 lg:pr-16 overflow-y-scroll' >
                        <div className="w-full lg:w-4/5">
                            <h2 className="text-3xl mb-4">My Order</h2>
                            <nav className="flex justify-between items-center border-b border-b-gray-400 my-5 py-4">
                                <Link href="/user/orders/orders" >Orders</Link>
                                <Link href="/user/orders/buyagain" >Buy Again</Link>
                                <Link href="/user/orders/notdispatched" >Not Yet Dispatched</Link>
                                <Link href="/user/orders/cancelorder" >Cancelled Order</Link>
                            </nav>
                            {props.children}
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}