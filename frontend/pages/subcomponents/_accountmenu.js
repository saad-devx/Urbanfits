import React, { useState } from 'react'
import dynamic from "next/dynamic";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from './_button';

const Option = (props) => {
    const router = useRouter()
    const route = router.pathname
    return (
        <Link className={` group w-full h-[10%] flex justify-between items-center mb-[2px] pr-3 text-sm rounded-sm bg-white transition-all `} href={props.href}><span className={`bg-gold w-2 h-full opacity-0 group-hover:opacity-100 ${route === props.href ? 'opacity-100' : ''} transition`}></span>{props.value}<i className=" arrow material-symbols-outlined text-lg text-gray-600 transition-all">chevron_right</i></Link>
    )
}

function AccountMenu() {
    return (
        <>
            <div className=" w-1/3 hidden lg:block h-full relative">
                <div className="flex flex-col absolute top-[7%] right-[17%] items-center w-[60%] h-full list-none font_futuraLT">
                    <Option href='/user/personalinfo' value='Personal Information' />
                    <Option href='/user/email&password' value='Email & Password' />
                    <Option href='/user/address' value='My Address' />
                    <Option href='/user/paymentmethods' value='My Payment Methods' />
                    <Option href='/user/orders' value='My Orders' />
                    <Button value='Logout' classes='w-full' />
                </div>
            </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(AccountMenu), { ssr: false })