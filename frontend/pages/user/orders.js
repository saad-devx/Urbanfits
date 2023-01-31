import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../subcomponents/_navbar';
import Button from '../subcomponents/_simple_btn';
import AccountMenu from '../subcomponents/_accountmenu'

export default function Orders() {
    const [expand, setExpand] = useState(false)
    const initialOrderObj = {
        orderemail: '',
        ordernumber: ''
    }
    const [credentials, setCredentials] = useState(initialOrderObj)
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const {orderemail, ordernumber} = credentials
    const disabler = () => {
        if (!orderemail || !ordernumber) {
            return true
        }
    }
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full lg:fixed right-0 flex transition-all duration-700`}>
                    <AccountMenu />
                    <section className='w-full lg:w-[67%] font_futuraLT text-left p-9 lg:pl-7 lg:pr-16 overflow-y-scroll scroll-py-10' >
                        <h2 className="text-3xl mb-4">Track Your Order</h2>
                        <form className="mt-16 pb-20 font_futuraLT space-y-10" >
                            <h3 className="text-xl">Enter Your Order Information</h3>
                            <p>Enter your email address and order number in the space below and we will provide you with a list of the items you ordered and the relevant shipping information. If you have only just confirmed your order, this information will appear in a few minutes.</p>
                            <div className="w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <input className="bg-transparent outline-none border-none" type="email" name="orderemail" id="orderemail" onChange={onchange} placeholder="Order Email*" />
                            </div>
                            <div className="flex flex-col justify-end">
                                <div className="w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="number" name="ordernumber" id="ordernumber" onChange={onchange} placeholder="Order Number*" />
                                </div>
                                <small className='self-end text-gray-500 my-3' >9 to 20 digits, no spaces</small>
                            </div>
                            <div className=" w-full my-10 space-y-5">
                                <p>Urban Fits processes the data collected to enable you to manage your information to facilitate your order. To find out more about how we manage your personal data and exercise your rights please refer to our privacy policy.</p>
                                <p>Mandatory information : If you choose not to consent to the collection of mandatory data (with an asterisk). You will not be able to manage your information.</p>
                            </div>
                            <div className="w-full flex justify-end space-x-4">
                                <Button disabled={disabler()} value="Continue" type="submit" classes="w-full md:w-2/12" />
                            </div>
                        </form>
                    </section>
                </section>
            </main>
        </>
    )
}