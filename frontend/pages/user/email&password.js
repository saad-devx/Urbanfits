import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../subcomponents/_navbar';
import Button from '../subcomponents/_button';
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
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full lg:fixed right-0 flex transition-all duration-700`}>
                    <AccountMenu />
                    <section className='w-full lg:w-[67%] font_futuraLT text-left p-9 pl-7 overflow-y-scroll scroll-py-10' >
                        <h2 className="text-3xl mb-4">My Account</h2>
                        <p className='text-sm' >Welcome !<br />Save your card details and address in this area to complete your future  purchases faster.</p>
                        <form className="mt-10 font_futuraLT space-y-10" >
                            <h1 className='text-xl' >Change Email</h1>
                            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <input className="bg-transparent outline-none border-none" type="email" name="email" id="email" onChange={onchange} placeholder="Email*" />
                            </div>
                            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <input className="bg-transparent outline-none border-none" type="email" name="email" id="email" onChange={onchange} placeholder="Confirm Email*" />
                            </div>
                            <div className=" w-full data_field flex justify-between items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <input className="bg-transparent outline-none border-none" type="password" name="password" id="password" onChange={onchange} placeholder="Password*" /><Link href='/resetpassword' ><i class="material-symbols-outlined">edit_square</i></Link>
                            </div>
                        </form>
                        <div className="w-full flex justify-end space-x-4">
                            <Button value="Cancel" bg="bg-gray-200 text-black" classes="w-full md:w-1/3" />
                            <Button value="Save New Email" classes="w-full md:w-1/3" />
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}