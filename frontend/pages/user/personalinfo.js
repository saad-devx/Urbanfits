import React, { useState } from 'react'
import Link from 'next/link'

export default function Personalinfo() {
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
            <section className='w-[67%] font_futuraLT text-left p-9 pl-7 overflow-y-scroll scroll-py-10' >
                <h2 className="text-3xl mb-4">My Account</h2>
                <p className='text-sm' >Welcome !<br />Save your card details and address in this area to complete your future  purchases faster.</p>
                <form className="mt-10 font_futuraLT space-y-5" onSubmit={onsubmit} >
                    <h1 className='text-xl' >Personal Information</h1>
                    <div className="flex justify-between w-3/4 ">
                        <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3 mb-4">
                            <select className="w-20 border-none outline-none bg-transparent border-b-gray-800" autocomplete="honorific-prefix" data-missing-error="This field is required." name="dwfrm_profile_customer_salutation" required="" aria-required="true">
                                <option disabled selected >Title</option>
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
                </form>
                <h1 className="text-xl mt-5">Newsletter Subscription</h1>
                <div className="flex justify-between w-3/4 my-7">
                    <div className=" w-1/4 flex justify-between">
                        Email<label class="switch"><input type="checkbox" /><span class="slider"></span></label>
                    </div>
                    <div className=" w-1/4 flex justify-between">
                        Phone<label class="switch"><input type="checkbox" /><span class="slider"></span></label>
                    </div>
                </div>
                <div className=" w-[90%] space-y-5">
                    <p>Urban Fits processes the data collected to enable you to manage your information to facilitate your order. To find out more about how we manage your personal data and exercise your rights please refer to our privacy policy.</p>
                    <p>Mandatory information : If you choose not to consent to the collection of mandatory data (with an asterisk). You will not be able to manage your information.</p>
                </div>
                <div className='my-14 space-y-5' >
                    <h2 className="text-xl">Email & Password</h2>
                    <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 px-3 mb-4">
                        <input className="bg-transparent outline-none border-none" type="email" name="email" id="email" onChange={onchange} placeholder="Email" />
                    </div>
                </div>
                <div className='my-14 space-y-5' >
                    <h2 className="text-xl mb-7">My Address</h2>
                    <div>
                        <h5 className='text-lg my-2' >Shipping (0)</h5>
                        <Link href='/user/myaddress' id='address' className="w-full px-3 py-5 border border-gray-400 rounded-md flex justify-between items-center" >Add New Address<i className="material-symbols-outlined">add</i></Link>
                    </div>
                    <div>
                        <h5 className='text-lg my-2' >Billing (0)</h5>
                        <Link href='/user/myaddress' id='address' className="w-full px-3 py-5 border border-gray-400 rounded-md flex justify-between items-center" >Add New Address<i className="material-symbols-outlined">add</i></Link>
                    </div>
                </div>

            </section>
        </>
    )
}
