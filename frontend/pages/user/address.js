import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../subcomponents/_navbar';
import Button from '../subcomponents/_simple_btn';
import AccountMenu from '../subcomponents/_accountmenu'

export default function Address() {
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
                    <section className='w-full lg:w-[67%] p-9 pl-7 pb-20 font_futuraLT text-left overflow-y-scroll scroll-py-10' >
                        <h2 className="text-3xl mb-4">My Account</h2>
                        <p className='text-sm' >Welcome !<br />Save your card details and address in this area to complete your future  purchases faster.</p>
                        <form className="mt-10 font_futuraLT space-y-10" >
                            <h1 className='text-xl' >Add New Address</h1>
                            {/* <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <input className="bg-transparent outline-none border-none" type="addresstitle" name="addresstitle" id="addresstitle" onChange={onchange} placeholder="Address Title*" />
                            </div>
                            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <input className="bg-transparent outline-none border-none" type="email" name="email" id="email" onChange={onchange} placeholder="Confirm Email*" />
                            </div>
                            <div className=" w-full data_field flex justify-between items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <input className="bg-transparent outline-none border-none" type="password" name="password" id="password" onChange={onchange} placeholder="Password*" /><Link href='/resetpassword' ><i class="material-symbols-outlined">edit_square</i></Link>
                            </div>
                            <div className="flex justify-between w-3/4 ">
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <select defaultValue="Title" className="w-full border-none outline-none bg-transparent border-b-gray-800" autoComplete="honorific-prefix" data-missing-error="This field is required." required aria-required="true">
                                        <option disabled >Title</option>
                                        <option id="mr" value="mr">Mr</option>
                                        <option id="ms" value="ms">Ms</option>
                                        <option id="other" value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-between w-3/4 ">
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="text" name="firstname" id="firstname" onChange={onchange} placeholder="First Name" />
                                </div>
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="lastname" name="lastname" id="lastname" onChange={onchange} placeholder="Last Name" />
                                </div>
                            </div> */}
                            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <input className="bg-transparent outline-none border-none" type="text" name="address" id="address" onChange={onchange} placeholder="Address 1*" />
                            </div>
                            <div className=" w-1/2 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <input className="bg-transparent outline-none border-none" type="text" name="city" id="city" onChange={onchange} placeholder="City*" />
                            </div>
                            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <select defaultValue="Country" className="w-full border-none outline-none bg-transparent border-b-gray-800" autoComplete="honorific-prefix" data-missing-error="This field is required." required aria-required="true">
                                    <option disabled >Country</option>
                                    <option id="mr" value="mr">UAE</option>
                                    <option id="ms" value="ms">USA</option>
                                    <option id="other" value="other">Pakistan</option>
                                </select>
                            </div>
                            <div className="flex justify-between w-3/4 ">
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="tel" name="postalcode" id="postalcode" size="4" maxLength={4} onChange={onchange} placeholder="+971" />
                                </div>
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="w-full bg-transparent outline-none border-none" type="tel" name="phone" id="phone" size="15" maxLength={15} onChange={onchange} placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="w-full flex justify-end space-x-4">
                                <Button type="reset" value="Cancel" bg="bg-gray-200" text="black" classes="w-full md:w-1/3" />
                                <Button type="submit" value="Save" classes="w-full md:w-1/3" />
                            </div>
                        </form>
                    </section>
                </section>
            </main>
        </>
    )
}