import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../subcomponents/_navbar'
import Card from '../subcomponents/_card'
import Button from '../subcomponents/_simple_btn';
import AccountMenu from '../subcomponents/_accountmenu'
import SuccessAlert from '../subcomponents/_successAlert';

// imports for Schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '../subcomponents/_tooltip';


const InfoCard = (props) => {
    return <Card title={props.title} value={props.value} btnValue={props.btnValue} btnClasses=" w-1/2 md:w-1/3 text-sm" classes='w-full h-1/3 mb-7 p-9 justify-center items-center md:items-start' />
}

export default function Personalinfo() {
    const [expand, setExpand] = useState(false)

    // getting data from input fields and applying validation
    const validatedSchema = Yup.object({
        title: Yup.string().required("Please enter a title"),
        firstname: Yup.string().min(2).required("Please enter your First name"),
        lastname: Yup.string().min(2).required("Please enter your Last name"),
        dateofbirth: Yup.date(),
        newsletter_sub_email: Yup.bool(),
        newsletter_sub_phone: Yup.bool()
    })
    const [alert, setAlert] = useState(false) // state to show the alert after the submit function runs
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: { title: '', firstname: '', lastname: '', dateofbirth: '', newsletter_sub_email: false, newsletter_sub_phone: false },
        validationSchema: validatedSchema,
        onSubmit: (values) => {
            console.log(values)
            handleReset()
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    })
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full lg:fixed right-0 flex transition-all duration-700`}>
                    <AccountMenu />
                    <SuccessAlert show={alert} />
                    <section className='w-full lg:w-[67%] font_futuraLT text-left p-9 lg:pl-7 pb-20 overflow-x-hidden overflow-y-scroll ' >
                        <h2 className="text-3xl mb-4">My Account</h2>
                        <p className='text-sm' >Welcome !<br />Save your card details and address in this area to complete your future  purchases faster.</p>
                        <form className="mt-10 font_futuraLT space-y-5" onReset={handleReset} onSubmit={handleSubmit} >
                            <h1 className='text-xl' >Personal Information</h1>
                            <div className="flex justify-between w-full lg:w-3/4 ">
                                <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.title && errors.title ? <Tooltip classes="form-error" content={errors.title} /> : null}
                                    <select defaultValue="Title" value={values.title} name='title' onBlur={handleBlur} className="w-full border-none outline-none bg-transparent border-b-gray-800" onChange={handleChange}>
                                        <option defaultChecked >Title</option>
                                        <option id="mr" value="mr">Mr</option>
                                        <option id="ms" value="ms">Ms</option>
                                        <option id="other" value="other">Other</option>
                                    </select>
                                </div>
                                <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.firstname && errors.firstname ? <Tooltip classes="form-error" content={errors.firstname} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="text" name="firstname" id="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur} placeholder="First Name" />
                                </div>
                            </div>
                            <div className="flex justify-between w-full lg:w-3/4 ">
                                <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.lastname && errors.lastname ? <Tooltip classes="form-error" content={errors.lastname} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="lastname" name="lastname" id="lastname" value={values.lastname} onChange={handleChange} onBlur={handleBlur} placeholder="Last Name" />
                                </div>
                                <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.dateofbirth && errors.dateofbirth ? <Tooltip classes="form-error" content={errors.dateofbirth} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="date" name="dateofbirth" id="dateofbirth" value={values.dateofbirth} onChange={handleChange} onBlur={handleBlur} placeholder="Date Of Birth" />
                                </div>
                            </div>
                            <div className="w-full lg:w-3/4 flex justify-end space-x-4">
                                <Button type="reset" value="Cancel" bg="bg-gray-200" text="black" classes="w-full md:w-1/3" />
                                <Button type="submit" value="Save" classes="w-full md:w-1/3" />
                            </div>
                        </form>
                        <div className='w-full lg:w-5/6' >
                            <h1 className="text-xl mt-5">Newsletter Subscription</h1>
                            <div className="flex justify-between w-3/4 my-7 space-x-4 md:space-x-0">
                                <div className="w-1/2 md:w-1/4 flex justify-between">
                                    Email<label className="switch w-[45px] md:w-11 h-6 "><input type="checkbox" name='newsletter_sub_email' value={values.newsletter_sub_email} onChange={handleChange} /><span className="slider"></span></label>
                                </div>
                                <div className="w-1/2 md:w-1/4 flex justify-between">
                                    Phone<label className="switch w-[45px] md:w-11 h-6"><input type="checkbox" name='newsletter_sub_phone' value={values.newsletter_sub_phone} onChange={handleChange} /><span className="slider"></span></label>
                                </div>
                            </div>
                            <div className=" w-[90%] space-y-5">
                                <p>Urban Fits processes the data collected to enable you to manage your information to facilitate your order. To find out more about how we manage your personal data and exercise your rights please refer to our privacy policy.</p>
                                <p>Mandatory information : If you choose not to consent to the collection of mandatory data (with an asterisk). You will not be able to manage your information.</p>
                            </div>
                            <div className='my-14 space-y-5' >
                                <h2 className="text-xl">Email & Password</h2>
                                <div className=" w-full data_field flex justify-between items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" readOnly="user@gmail.com" type="email" name="email" id="email" placeholder="Email" /><Link href='/user/email&password' ><i className="material-symbols-outlined">edit_square</i></Link>
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
