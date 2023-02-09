import React, { useState } from 'react'
import Card from '../components/card';
import Navbar from '../components/navbar';
import Button from '../components/simple_btn';
import Footer from '../components/footer'
import SuccessAlert from '../components/successAlert';

// imports for the schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '../components/tooltip';

const InfoCard = (props) => {
    return <Card title={props.title} value={props.value} btnValue={props.btnValue} btnClasses=" w-1/2 md:w-1/3 text-sm" classes='w-full h-1/3 mb-7 p-9 justify-center items-center md:items-start' />
}

export default function Contact() {
    const [expand, setExpand] = useState(false)

    const validatedSchema = Yup.object({
        title: Yup.string().required("Please enter a title"),
        firstname: Yup.string().min(2).required("Please enter your First name"),
        lastname: Yup.string().min(2).required("Please enter your Last name"),
        phone: Yup.string().matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Please enter a valid phone number with postal code and space eg. +971 0000000000").required(),
        email: Yup.string().email().required("Please enter your email address"),
        msg: Yup.string().min(6).max(1000).required("Please leave a message here"),

    })
    const [alert, setAlert] = useState(false) // state to show the alert after the submit function runs
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: { title: 'Title', firstname: '', lastname: '', dateofbirth: '', email: '', phone: '', msg: '' },
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
                <SuccessAlert show={alert} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
                    <div className="w-full pb-20 flex justify-center">
                        <section className='w-full p-5 lg:p-0 lg:pt-9 lg:w-[75%] h-full font_futuraLT text-left pt-9' >
                            <h2 className="text-3xl mb-4">Contact Us</h2>
                            <form className="mt-16 pb-20 font_futuraLT space-y-10" onReset={handleReset} onSubmit={handleSubmit}>
                                <div className="flex justify-between w-full">
                                    <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                        {touched.title && errors.title ? <Tooltip classes="form-error" content={errors.title} /> : null}
                                        <select value={values.title} name='title' className="w-full border-none outline-none bg-transparent border-b-gray-800" onBlur={handleBlur} onChange={handleChange} >
                                            <option id="mr" value="mr">Title</option>
                                            <option id="mr" value="mr">Mr</option>
                                            <option id="ms" value="ms">Ms</option>
                                            <option id="other" value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                        {touched.firstname && errors.firstname ? <Tooltip classes="form-error" content={errors.firstname} /> : null}
                                        <input className="w-full bg-transparent outline-none border-none" type="text" value={values.firstname} name="firstname" id="firstname" onBlur={handleBlur} onChange={handleChange} placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="flex justify-between w-full ">
                                    <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                        {touched.lastname && errors.lastname ? <Tooltip classes="form-error" content={errors.lastname} /> : null}
                                        <input className="w-full bg-transparent outline-none border-none" type="text" value={values.lastname} name="lastname" id="lastname" onBlur={handleBlur} onChange={handleChange} placeholder="Last Name" />
                                    </div>
                                    <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                        {touched.email && errors.email ? <Tooltip classes="form-error" content={errors.email} /> : null}
                                        <input className="w-full bg-transparent outline-none border-none" type="email" value={values.email} name="email" id="email" onBlur={handleBlur} onChange={handleChange} placeholder="Email*" />
                                    </div>
                                </div>
                                <div className="flex justify-between w-full ">
                                    <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                        {touched.phone && errors.phone ? <Tooltip classes="form-error" content={errors.phone} /> : null}
                                        <input className="w-full bg-transparent outline-none border-none" type="phone" value={values.phone} name="phone" id="phone" onBlur={handleBlur} onChange={handleChange} placeholder="Phone Number*" />
                                    </div>
                                    <div className="relative w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                        {touched.dateofbirth && errors.dateofbirth ? <Tooltip classes="form-error" content={errors.dateofbirth} /> : null}
                                        <input className="w-full bg-transparent outline-none border-none" type="date" value={values.dateofbirth} name="dateofbirth" id="dateofbirth" onBlur={handleBlur} onChange={handleChange} placeholder="Date Of Birth" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <div className="relative w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mt-4">
                                        {touched.msg && errors.msg ? <Tooltip classes="form-error" content={errors.msg} /> : null}
                                        <input className="w-full bg-transparent outline-none border-none" type="text" value={values.msg} name="msg" id="msg" maxLength={100} onBlur={handleBlur} onChange={handleChange} placeholder="Type Your Message here..." />
                                    </div>
                                    <small className='self-end text-gray-500 my-3' >1000 characters max</small>
                                </div>
                                <div className=" w-full my-10 space-y-5">
                                    <p>Urban Fits processes the data collected to enable you to manage your information to facilitate your order. To find out more about how we manage your personal data and exercise your rights please refer to our privacy policy.</p>
                                    <p>Mandatory information : If you choose not to consent to the collection of mandatory data (with an asterisk). You will not be able to manage your information.</p>
                                </div>
                                <div className="w-full flex justify-end space-x-4">
                                    <Button type="reset" bg="bg-gray-200" text="black" classes="w-full md:w-2/12" >Cancel</Button>
                                    <Button type="submit" classes="w-full md:w-2/12" >Send</Button>
                                </div>
                            </form>
                            <div className="w-full flex flex-col justify-center items-center">
                                <InfoCard title="FAQ" value="Find all the answers to the frequently asked questions below." btnValue="Get In Touch" />
                                <InfoCard title="Customer Care" value="Do you have any questions ? We are here to help you. You can contact our customer care team by email or over the phone." btnValue="See Your FAQs" />
                                <InfoCard title="Privacy Policy" value="Do you have any questions on how we process your data ? Please consult our privacy policy." btnValue="See Your FAQs" />
                            </div>
                        </section>
                    </div>
                    <Footer classes={expand === true ? 'rounded-3xl' : 'rounded-sm'} />
                </section>
            </main>
        </>
    )
}