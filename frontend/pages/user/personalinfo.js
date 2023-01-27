import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../subcomponents/_navbar'
import Card from '../subcomponents/_card'
import Button from '../subcomponents/_button'
import AccountMenu from '../subcomponents/_accountmenu'

export default function Personalinfo() {
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
                    <section className='w-full lg:w-[67%] font_futuraLT text-left p-9 lg:pl-7 pb-20 overflow-y-scroll ' >
                        <h2 className="text-3xl mb-4">My Account</h2>
                        <p className='text-sm' >Welcome !<br />Save your card details and address in this area to complete your future  purchases faster.</p>
                        <form className="mt-10 font_futuraLT space-y-5" >
                            <h1 className='text-xl' >Personal Information</h1>
                            <div className="flex justify-between w-3/4 ">
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3 mb-4">
                                    <select defaultValue="Title" className="w-20 border-none outline-none bg-transparent border-b-gray-800" autoComplete="honorific-prefix" data-missing-error="This field is required." required aria-required="true">
                                        <option disabled >Title</option>
                                        <option id="mr" value="mr">Mr</option>
                                        <option id="ms" value="ms">Ms</option>
                                        <option id="other" value="other">Other</option>
                                    </select>
                                </div>
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="text" name="firstname" id="firstname" onChange={onchange} placeholder="First Name" />
                                </div>
                            </div>
                            <div className="flex justify-between w-3/4 ">
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="lastname" name="tlastname" id="tlastname" onChange={onchange} placeholder="Last Name" />
                                </div>
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="dob" name="dob" id="dob" onChange={onchange} placeholder="Date Of Birth" />
                                </div>
                            </div>
                            <div className="w-3/4 flex justify-end space-x-4">
                                <Button value="Cancel" bg="bg-gray-200 text-black" classes="w-full md:w-1/3" />
                                <Button value="Save" classes="w-full md:w-1/3" />
                            </div>
                        </form>
                        <h1 className="text-xl mt-5">Newsletter Subscription</h1>
                        <div className="flex justify-between w-3/4 my-7 space-x-4 md:space-x-0">
                            <div className="w-1/2 md:w-1/4 flex justify-between">
                                Email<label className="switch w-[45px] md:w-11 h-6 "><input type="checkbox" /><span className="slider"></span></label>
                            </div>
                            <div className="w-1/2 md:w-1/4 flex justify-between">
                                Phone<label className="switch w-[45px] md:w-11 h-6"><input type="checkbox" /><span className="slider"></span></label>
                            </div>
                        </div>
                        <div className=" w-[90%] space-y-5">
                            <p>Urban Fits processes the data collected to enable you to manage your information to facilitate your order. To find out more about how we manage your personal data and exercise your rights please refer to our privacy policy.</p>
                            <p>Mandatory information : If you choose not to consent to the collection of mandatory data (with an asterisk). You will not be able to manage your information.</p>
                        </div>
                        <div className='my-14 space-y-5' >
                            <h2 className="text-xl">Email & Password</h2>
                            <div className=" w-full data_field flex justify-between items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3 mb-4">
                                <input className="bg-transparent outline-none border-none" value="user@gmail.com" type="email" name="email" id="email" onChange={onchange} placeholder="Email" /><Link href='/user/email&password' ><i class="material-symbols-outlined">edit_square</i></Link>
                            </div>
                        </div>
                        <div className='my-14 space-y-5' >
                            <h2 className="text-xl mb-8">My Addresses</h2>
                            <div>
                                <h5 className='text-lg my-2' >Shipping (0)</h5>
                                <Link href='/user/address' id='address' className="w-full px-3 py-5 border border-gray-400 rounded-md flex justify-between items-center" >Add New Address<i className="material-symbols-outlined">add</i></Link>
                            </div>
                            <div>
                                <h5 className='text-lg my-2' >Billing (0)</h5>
                                <Link href='/user/address' id='address' className="w-full px-3 py-5 border border-gray-400 rounded-md flex justify-between items-center" >Add New Address<i className="material-symbols-outlined">add</i></Link>
                            </div>
                        </div>
                        <div className='my-14 space-y-5' >
                            <h2 className="text-xl mb-8">My Payment Methods</h2>
                            <Link href='/user/paymentmethods' id='address' className=" w-full px-3 py-5 border border-gray-400 rounded-md flex justify-between items-center" >Add New Address<i className="material-symbols-outlined">add</i></Link>
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <Card title="FAQ" value='Find all the answers to the frequently asked questions below.' btnValue="See Your FAQs" btnClasses=" w-1/2 md:w-1/5 text-sm" classes='w-full h-[40%] mb-7 p-10 justify-center items-center md:items-start' />
                            <Card title="Customer Care" value='Do you have any questions ? We are here to help you. You can contact our customer care team by email or over the phone.' btnValue="Get In Touch" btnClasses=" w-1/2 md:w-1/5 text-sm" classes='w-full h-[40%] mb-7 p-10 justify-center items-center md:items-start' />
                            <Card title="Privacy Policy" value='Do you have any questions on how we process your data ? Please consult our privacy policy.' btnValue="See Your FAQs" btnClasses=" w-1/2 md:w-1/5 text-sm" classes='w-full h-[40%] mb-7 p-10 justify-center items-center md:items-start' />
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}
