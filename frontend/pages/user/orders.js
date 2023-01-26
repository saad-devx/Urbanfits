import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../subcomponents/_navbar'
import Card from '../subcomponents/_card'
import AccountMenu from '../subcomponents/_accountmenu'

export default function EmailPassword() {
    const [expand, setExpand] = useState(false)
    const initialFormObj = {
        username: '',
        email: '',
        phone: '',
        password: '',
    }
    const [credentials, setCredentials] = useState(initialFormObj)
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        console.log(credentials)
    }
    return (
        <>

            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'w-3/4' : 'w-[95%]'} h-full fixed right-0 flex transition-all duration-700`}>
                    <AccountMenu />
                    <section className='w-full lg:w-[67%] font_futuraLT text-left p-9 pl-7 overflow-y-scroll scroll-py-10' >
                        <h2 className="text-3xl mb-4">My Account</h2>
                        <p className='text-sm' >Welcome !<br />Save your card details and address in this area to complete your future  purchases faster.</p>
                    </section>
                </section>
            </main>
        </>
    )
}