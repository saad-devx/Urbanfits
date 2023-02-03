import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../subcomponents/_navbar';
import Button from '../../subcomponents/_simple_btn';
import AccountMenu from '../../subcomponents/_accountmenu'

export default function Orders() {
    const [expand, setExpand] = useState(false)
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full lg:fixed right-0 flex transition-all duration-700`}>
                    <AccountMenu />
                    <section className='w-full lg:w-[67%] font_futuraLT text-left p-9 lg:pl-7 lg:pr-16 overflow-y-scroll scroll-py-10' >
                        <h2 className="text-3xl mb-4">Not Your Ready Yet</h2>
                    </section>
                </section>
            </main>
        </>
    )
}