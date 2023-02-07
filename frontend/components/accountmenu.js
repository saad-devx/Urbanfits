import React from 'react'
import dynamic from "next/dynamic";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from './simple_btn';
// import { RouteMatch } from 'next/dist/shared/lib/router/utils/route-matcher';

const Option = (props) => {
    const router = useRouter()
    const route = router.pathname
    return (
        <Link className={`group w-full h-[10%] flex justify-between items-center mb-[2px] pr-3 text-sm rounded-sm bg-white transition-all `} href={props.href}><span className={`bg-gold w-2 group-hover:h-full ${route === props.href ? 'h-full' : 'h-0'} transition-all duration-300`}></span>{props.children}<i className=" arrow material-symbols-outlined text-lg text-gray-600 transition-all">chevron_right</i></Link>
    )
}

function AccountMenu() {
    const router = useRouter()
    const route = router.pathname
    return (
        <>
            <div className=" w-1/3 hidden lg:block h-full relative">
                <div className="flex flex-col absolute top-[7%] right-[17%] items-center w-[60%] h-full list-none font_futuraLT">
                    <Option href='/user/personalinfo'>Personal Information</Option>
                    <Option href='/user/email&password'>Email & Password</Option>
                    <Option href='/user/address'>My Address</Option>
                    <Option href='/user/paymentmethods'>My Payment Methods</Option>
                    <Link className={` group w-full h-[10%] flex justify-between items-center mb-[2px] pr-3 text-sm rounded-sm bg-white transition-all `} href='/user/orders/orders'><span className={`bg-gold w-2 group-hover:h-full ${route.startsWith('/user/orders') ? 'h-full' : 'h-0'} transition-all duration-300`}></span>My Orders<i className=" arrow material-symbols-outlined text-lg text-gray-600 transition-all">chevron_right</i></Link>
                    <Button classes="w-full">Logout</Button>
                </div>
            </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(AccountMenu), { ssr: false })