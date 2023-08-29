import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import useUser from '@/hooks/useUser';
import Error403 from '@/pages/403';
import Link from 'next/link'
import User from '..';

const Option = (props) => {
    const router = useRouter()
    const route = router.pathname
    return <Link className='h-full group flex flex-col justify-between items-center transition-all' href={props.href}>{props.children}<span className={`bg-gold-land h-1 mt-1 rounded-lg group-hover:w-full ${route === props.href ? 'w-full' : 'w-0'} transition-all duration-300`}></span></Link>
}

export default function OrdersPage(props) {
    const { user } = useUser()
    if (!user) return <Error403 />
    return <>
        <Head>
            <title>Orders</title>
            <meta name="description" content="Urban Fits user order information" />
        </Head>
        <User profileNull >
            <h1 className='my-5 text-xl lg:text-2xl font_urbanist_bold'>My Orders</h1>
            <div className="w-full text-sm md:text-base overflow-x-scroll hide_scrollbar">
                <div className="w-[150%] md:w-full h-full flex justify-between border-b border-b-gray-300 ">
                    <Option href='/user/orders/orders'>Orders</Option>
                    <Option href='/user/orders/buyagain'>Buy Again</Option>
                    <Option href='/user/orders/notdispatched'>Not Yet Dispatched</Option>
                    <Option href='/user/orders/cancelledorders'>Cancelled Orders</Option>
                </div>
            </div>
            <section className="w-full my-5 font_urbanist">
                {props.children}
            </section>
        </User>
    </>
}