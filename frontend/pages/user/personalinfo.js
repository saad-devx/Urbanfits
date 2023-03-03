import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import jwt from 'jsonwebtoken';
import { toast, Slide } from 'react-toastify';
import Navbar from '../../components/navbar'
import Loader from '@/components/loader';
import Card from '../../components/cards/card'
import Button from '../../components/simple_btn';
import AccountMenu from '../../components/accountmenu'
// image imports
import Image from 'next/image';
import female_avatar from '../../public/avatars/female.svg'
import male_avatar from '../../public/avatars/male.svg'

// imports for Schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '../../components/tooltip';

// little function to use inside right this component to avoid mess
const InfoCard = (props) => {
    return <Card title={props.title} value={props.value} btnValue={props.btnValue} btnClasses=" w-1/2 md:w-1/3 text-sm" round="rounded-2xl" classes='w-full h-1/5 mb-7 p-9 justify-center items-center md:items-start' />
}

export default function Personalinfo() {
    const [expand, setExpand] = useState(false)
      //state to handle loader component
      const [loader, setLoader] = useState(false)
    const toaster = (type, msg) => {
        toast(msg, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            type: type,
            progress: undefined,
            theme: "colored",
            transition: Slide
        })
    }
    // user data state
    const [user, setUser] = useState({})
    // getting data from input fields and applying validation
    const validatedSchema = Yup.object({
        title: Yup.string().required("Please enter a title"),
        firstname: Yup.string().min(2).required("Please enter your First name"),
        lastname: Yup.string().min(2).required("Please enter your Last name"),
        dateofbirth: Yup.date(),
        newsletter_sub_email: Yup.bool(),
        newsletter_sub_phone: Yup.bool()
    })
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit, setValues } = useFormik({
        initialValues: { title: 'Title', firstname: '', lastname: '', date_of_birth: '', newsletter_sub_email: false, newsletter_sub_phone: false },
        validationSchema: validatedSchema,
        onSubmit: async (values) => {
            setLoader(<Loader />)
            let response = await fetch(`${process.env.HOST}/api/user/update?id=${user._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            })
            let res = await response.json()
            localStorage.setItem("authToken", res.payload)
            toaster(res.success === true ? "success" : "error", res.msg)
            setLoader(null)
        }
    })
    // determining if the scroll direction is upwards or downwards (so that if user scrolls down, the menu in mobile will disappear giving user a full screen view)
    const [direction, setDirection] = useState('')
    const handleScroll = (e) => {
        e.target.scrollTop > 7 ? setDirection("-translate-y-20") : setDirection('translate-y-0')
    }
    // getting user payload form jwt token in localstorage
    const ifExists = (data, return_type) => {
        if (data) return data
        if (return_type === false) return false
        if (return_type !== false) return return_type
        else return ""
    }
    useEffect(() => {
        const userData = jwt.decode(localStorage.getItem("authToken"))._doc
        if (userData) {
            setUser(userData)
            setValues({
                title: ifExists(userData.title),
                firstname: ifExists(userData.firstname),
                lastname: ifExists(userData.lastname),
                date_of_birth: ifExists(userData.date_of_birth),
                newsletter_sub_email: ifExists(userData.newsletter_sub_email, false),
                newsletter_sub_phone: ifExists(userData.newsletter_sub_phone, false)
            })
        }
    }, [])
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                {loader}
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full lg:fixed right-0 flex transition-all duration-700`}>
                    <AccountMenu direction={direction} />
                    <section onScroll={handleScroll} className='w-full lg:w-[67%] font_futuraLT text-left p-9 lg:pl-7 pt-24 lg:pt-9 pb-20 overflow-x-hidden overflow-y-scroll ' >
                        <div className="flex flex-row-reverse md:flex-row items-center gap-3">
                            <Image className="w-1/3 md:w-1/6 rounded-full border-2 p-2 border-white" src={ifExists(user.title) === "Mrs." ? female_avatar : male_avatar} />
                            <span>
                                <h2 className="text-xl lg:text-2xl mb-4">My Account</h2>
                                <p className='text-xs lg:text-sm' >Welcome {ifExists(user.firstname)} !<br />Save your personal details here in this area to tell us about you for more assistence.</p>
                            </span>
                        </div>
                        <form className="mt-10 font_futuraLT space-y-5" onReset={handleReset} onSubmit={handleSubmit} >
                            <h1 className='text-xl' >Personal Information</h1>
                            <div className="flex justify-between w-full lg:w-5/6 ">
                                <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {errors.title ? <Tooltip classes="form-error" content={errors.title} /> : null}
                                    <select value={values.title} name='title' onBlur={handleBlur} className="w-full border-none outline-none bg-transparent border-b-gray-800" onChange={handleChange}>
                                        <option >Title</option>
                                        <option id="Mr" value="Mr.">Mr</option>
                                        <option id="Mrs" value="Mrs.">Ms</option>
                                        <option id="other" value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {errors.firstname ? <Tooltip classes="form-error" content={errors.firstname} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="text" name="firstname" id="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur} placeholder="First Name" />
                                </div>
                            </div>
                            <div className="flex justify-between w-full lg:w-5/6 ">
                                <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {errors.lastname ? <Tooltip classes="form-error" content={errors.lastname} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="lastname" name="lastname" id="lastname" value={values.lastname} onChange={handleChange} onBlur={handleBlur} placeholder="Last Name" />
                                </div>
                                <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {errors.date_of_birth ? <Tooltip classes="form-error" content={errors.date_of_birth} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="date" name="date_of_birth" id="date_of_birth" value={values.date_of_birth} onChange={handleChange} onBlur={handleBlur} placeholder="Date Of Birth" />
                                </div>
                            </div>
                            <div className="w-full lg:w-5/6 ">
                                <h1 className="text-xl mt-5">Newsletter Subscription</h1>
                                <div className="flex justify-between w-full md:w-3/4 my-7 space-x-4 md:space-x-0">
                                    <div className="w-1/2 md:w-1/4 flex justify-between">
                                        Email<label className="switch w-[45px] md:w-11 h-6 "><input type="checkbox" name='newsletter_sub_email' checked={values.newsletter_sub_email} value={values.newsletter_sub_email} onChange={handleChange} /><span className="slider"></span></label>
                                    </div>
                                    <div className="w-1/2 md:w-1/4 flex justify-between">
                                        Phone<label className="switch w-[45px] md:w-11 h-6"><input type="checkbox" name='newsletter_sub_phone' checked={values.newsletter_sub_phone} value={values.newsletter_sub_phone} onChange={handleChange} /><span className="slider"></span></label>
                                    </div>
                                </div>
                                <div className=" w-full space-y-5 font_futuraLTlite">
                                    <p>Urban Fits processes the data collected to enable you to manage your information to facilitate your order. To find out more about how we manage your personal data and exercise your rights please refer to our privacy policy.</p>
                                    <p>Mandatory information : If you choose not to consent to the collection of mandatory data (with an asterisk). You will not be able to manage your information.</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/5 flex justify-end">
                                <Button type="reset" bg="bg-gray-200" text="black" classes="w-full md:w-1/3 mx-2" >Cancel</Button>
                                <Button type="submit" classes="w-full md:w-1/3 ml-2" >Save</Button>
                            </div>
                        </form>
                        <div className='w-full lg:w-5/6' >
                            <div className='my-14 space-y-5' >
                                <h2 className="text-xl">Email & Password</h2>
                                <div className=" w-full data_field flex justify-between items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="w-full bg-transparent outline-none border-none" readOnly value={ifExists(user.email, "example@gmail.com")} type="email" name="email" id="email" /><Link href='/user/email&password' ><i className="material-symbols-outlined">edit_square</i></Link>
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
                                <InfoCard title="FAQ" value="Find all the answers to the frequently asked questions below." btnValue="Get In Touch" />
                                <InfoCard title="Customer Care" value="Do you have any questions ? We are here to help you. You can contact our customer care team by email or over the phone." btnValue="See Your FAQs" />
                                <InfoCard title="Privacy Policy" value="Do you have any questions on how we process your data ? Please consult our privacy policy." btnValue="GSee Your FAQs" />
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}
