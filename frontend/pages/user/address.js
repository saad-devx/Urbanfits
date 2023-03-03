import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar';
import jwt from 'jsonwebtoken';
import Button from '../../components/simple_btn';
import Link from 'next/link';
import AccountMenu from '../../components/accountmenu'
// image imports
import Image from 'next/image';
import female_avatar from '../../public/avatars/female.svg'
import male_avatar from '../../public/avatars/male.svg'

const AddressForm = () => {
    return (
        <form className="mt-10 font_futuraLT space-y-10" >
            <h1 className='text-xl' >Add a Shipping Address</h1>
            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                <input className="w-full bg-transparent outline-none border-none" type="addresstitle" name="addresstitle" id="addresstitle" onChange={onchange} placeholder="Address Title*" />
            </div>
            <div className="flex justify-between w-3/4 ">
                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                    <input className="w-full bg-transparent outline-none border-none" type="text" name="firstname" id="firstname" onChange={onchange} placeholder="First Name" />
                </div>
                <div className=" w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                    <input className="bg-transparent outline-none border-none" type="lastname" name="lastname" id="lastname" onChange={onchange} placeholder="Last Name" />
                </div>
            </div>
            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                <input className="w-full bg-transparent outline-none border-none" type="text" name="address" id="address" onChange={onchange} placeholder="Address 1*" />
            </div>
            <div className=" w-1/2 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                <input className="w-full bg-transparent outline-none border-none" type="text" name="city" id="city" onChange={onchange} placeholder="City*" />
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
                <Button type="reset" bg="bg-gray-200" text="black" classes="w-full md:w-1/3" >Cancel</Button>
                <Button type="submit" classes="w-full md:w-1/3" >Save</Button>
            </div>
        </form>
    )
}

export default function Address() {
    const [expand, setExpand] = useState(false)
    // user data state
    const [user, setUser] = useState({})
    // getting user payload form jwt token in localstorage
    const ifExists = (data, return_type) => {
        if (data) return data
        if (return_type === false) return false
        if (return_type !== false) return return_type
        else return ""
    }

    const onchange = () => { }
    // determining if the scroll direction is upwards or downwards
    const [direction, setDirection] = useState('')
    const handleScroll = (e) => {
        e.target.scrollTop > 7 ? setDirection("-translate-y-20") : setDirection('translate-y-0')
    }
    useEffect(() => {
        const userData = jwt.decode(localStorage.getItem("authToken"))._doc
        if (userData) {
            setUser(userData)
            // setValues({
            //     title: ifExists(userData.title),
            //     firstname: ifExists(userData.firstname),
            //     lastname: ifExists(userData.lastname),
            //     date_of_birth: ifExists(userData.date_of_birth),
            //     newsletter_sub_email: ifExists(userData.newsletter_sub_email, false),
            //     newsletter_sub_phone: ifExists(userData.newsletter_sub_phone, false)
            // })
        }
    }, [])

    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 flex transition-all duration-700`}>
                    <AccountMenu direction={direction} />
                    <section onScroll={handleScroll} className='w-full lg:w-[67%] p-9 pl-7 pt-24 lg:pt-9 pb-20 font_futuraLT text-left overflow-y-scroll scroll-py-10' >
                        <div className="w-full lg:w-5/6">
                            <div className="flex flex-row-reverse md:flex-row items-center gap-3">
                                <Image className="w-1/3 md:w-1/6 rounded-full border-2 p-2 border-white" src={ifExists(user.title) === "Mrs." ? female_avatar : male_avatar} />
                                <span>
                                    <h2 className="text-xl lg:text-2xl mb-4">My Account</h2>
                                    <p className='text-xs lg:text-sm' >Welcome {ifExists(user.firstname)} !<br />Save your address details and phone number here for easy and fast in delivery process in the future.</p>
                                </span>
                            </div>
                            <AddressForm />
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}