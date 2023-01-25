import React, { useState } from 'react'
import dynamic from "next/dynamic";
import Link from 'next/link';
import Personalinfo from './personalinfo';
import Navbar from '../subcomponents/_navbar'
import Button from '../subcomponents/_button';

const Option = (props) => {
    return (
        <Link className={`w-full h-[11%] flex justify-between items-center pl-10 pr-3 text-sm border-t border_gradient rounded-sm bg-white hover:translate-x-1 transition-all `} href="/">{props.value}<i className=" arrow material-symbols-outlined text-lg text-gray-600 transition-all">chevron_right</i></Link>
    )
}

function userSettings() {
    const [expand, setExpand] = useState(false)
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'w-3/4' : 'w-[95%]'} h-full fixed right-0 flex transition-all duration-700`}>
                    <div className=" w-1/3 h-full relative">
                        <div className="flex flex-col absolute top-[7%] right-[15%] items-center w-[66.67%] h-full list-none font_futuraLT">
                            <Option value='Personal Information' />
                            <Option value='Email & Password' />
                            <Option value='My Address' />
                            <Option value='My Payment Methods' />
                            <Option value='My Orders' />
                            <Button value='Logout' classes='w-full' />
                        </div>
                    </div>

                    <Personalinfo />
                </section>
            </main>
        </>
    )
}

export default dynamic(() => Promise.resolve(userSettings), { ssr: false })