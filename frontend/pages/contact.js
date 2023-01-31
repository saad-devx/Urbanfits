import React, { useState } from 'react'
import Link from 'next/link'
import Card from './subcomponents/_card'
import Navbar from './subcomponents/_navbar'
import Button from './subcomponents/_button'

const InfoCard = (props) => {
    return <Card title={props.title} value={props.value} btnValue={props.btnValue} btnClasses=" w-1/2 md:w-1/3 text-sm" classes='w-full h-1/3 mb-7 p-9 justify-center items-center md:items-start' />
}

export default function Contact() {
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
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 flex justify-center transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
                    <section className='w-full p-5 lg:p-0 lg:pt-9 lg:w-[75%] h-full font_futuraLT text-left pt-9' >
                        <h2 className="text-3xl mb-4">Contact Us</h2>
                        <form className="mt-16 pb-20 font_futuraLT space-y-10" >
                            <div className="flex justify-between w-full ">
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <select defaultValue="Title" className="w-full border-none outline-none bg-transparent border-b-gray-800" autoComplete="honorific-prefix" data-missing-error="This field is required." required aria-required="true">
                                        <option disabled >Title</option>
                                        <option id="mr" value="mr">Mr</option>
                                        <option id="ms" value="ms">Ms</option>
                                        <option id="other" value="other">Other</option>
                                    </select>
                                </div>
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="text" name="firstname" id="firstname" onChange={onchange} placeholder="First Name" />
                                </div>
                            </div>
                            <div className="flex justify-between w-full ">
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="lastname" name="tlastname" id="tlastname" onChange={onchange} placeholder="Last Name" />
                                </div>
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="email" name="email" id="email" onChange={onchange} placeholder="Email*" />
                                </div>
                            </div>
                            <div className="flex justify-between w-full ">
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="phone" name="phone" id="phone" onChange={onchange} placeholder="Phone Number*" />
                                </div>
                                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="dob" name="dob" id="dob" onChange={onchange} placeholder="Date Of Birth" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-end">
                                <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mt-4">
                                    <input className="bg-transparent outline-none border-none" type="text" name="msg" id="msg" maxLength={100} onChange={onchange} placeholder="Type Your Message here..." />
                                </div>
                                <small className='self-end text-gray-500 my-3' >1000 characters max</small>
                            </div>
                            <div className=" w-full my-10 space-y-5">
                                <p>Urban Fits processes the data collected to enable you to manage your information to facilitate your order. To find out more about how we manage your personal data and exercise your rights please refer to our privacy policy.</p>
                                <p>Mandatory information : If you choose not to consent to the collection of mandatory data (with an asterisk). You will not be able to manage your information.</p>
                            </div>
                            <div className="w-full flex justify-end space-x-4">
                                <Button value="Cancel" bg="bg-gray-200" text="black" classes="w-full md:w-2/12" />
                                <Button value="Send" type="submit" classes="w-full md:w-2/12" />
                            </div>
                        </form>
                        <div className="w-full flex flex-col justify-center items-center">
                            <InfoCard title="FAQ" value="Find all the answers to the frequently asked questions below." btnValue="Get In Touch" />
                            <InfoCard title="Customer Care" value="Do you have any questions ? We are here to help you. You can contact our customer care team by email or over the phone." btnValue="See Your FAQs" />
                            <InfoCard title="Privacy Policy" value="Do you have any questions on how we process your data ? Please consult our privacy policy." btnValue="GSee Your FAQs" />
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}