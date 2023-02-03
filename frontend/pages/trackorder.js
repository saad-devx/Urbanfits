import React, { useState } from 'react'
import Navbar from '@/subcomponents/_navbar'
import Button from '@/subcomponents/_simple_btn'

export default function Trackorder() {
    const [expand, setExpand] = useState(false)
    const onchange = () => {

    }
    return (
        <>
            <Navbar setExpand={setExpand} />
            <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[94.6%]'} h-full lg:fixed right-0 px-5 lg:px-48 py-20 transition-all duration-700 overflow-y-scroll`}>
                <h2 className="text-5xl mb-8">Track Your Order</h2>
                <form className="w-full mt-16 pb-10 lg:pb-0 font_futuraLT space-y-10" >
                    <h3 className="text-xl">Enter Your Order Information</h3>
                    <p className='font_futuraLTlite' >Enter your email address and order number in the space below and we will provide you with a list of the items you ordered and the relevant shipping information. If you have only just confirmed your order, this information will appear in a few minutes.</p>
                    <div className="w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                        <input className="bg-transparent outline-none border-none" type="email" name="orderemail" id="orderemail" onChange={onchange} placeholder="Order Email*" />
                    </div>
                    <div className="flex flex-col justify-end">
                        <div className="w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                            <input className="bg-transparent outline-none border-none" type="number" name="ordernumber" id="ordernumber" onChange={onchange} placeholder="Order Number*" />
                        </div>
                        <small className='self-end text-gray-500 my-3' >9 to 20 digits, no spaces</small>
                    </div>
                    <div className="font_futuraLTlite w-full my-10 space-y-5">
                        <p>Urban Fits processes the data collected to enable you to manage your information to facilitate your order. To find out more about how we manage your personal data and exercise your rights please refer to our privacy policy.</p>
                        <p>Mandatory information : If you choose not to consent to the collection of mandatory data (with an asterisk). You will not be able to manage your information.</p>
                    </div>
                    <div className="w-full flex justify-start space-x-4">
                        <Button value="Continue" type="submit" classes="w-full md:w-1/5" />
                    </div>
                </form>
            </section>
        </>
    )
}
