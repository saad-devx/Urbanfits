import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '../subcomponents/_navbar';
import Button from '../subcomponents/_simple_btn';
import AccountMenu from '../subcomponents/_accountmenu'
import SuccessAlert from '../subcomponents/_successAlert';

// imports for the schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '../subcomponents/_tooltip';

export default function EmailPassword() {
    // state to handle navbar expansion and contraction
    const [expand, setExpand] = useState(false)

    // getting data from input fields and applying validation
    const validatedSchema = Yup.object({
        email: Yup.string().email().required("Please enter your email address"),
        confirm_email: Yup.string().email().required("Please enter your email address").oneOf([Yup.ref("email"), null], "Email must match"),
        password: Yup.string().min(8).max(30).required("Please enter your password")
    })
    const [alert, setAlert] = useState(false) // state to show the alert after the submit function runs
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: { email: '', password: '', confirm_email: '' },
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
                    <SuccessAlert show={alert} />
                    <AccountMenu />
                    <section className='w-full lg:w-[67%] font_futuraLT text-left p-9 pl-7 overflow-y-scroll scroll-py-10' >
                        <h2 className="text-3xl mb-4">My Account</h2>
                        <p className='text-sm' >Welcome !<br />Save your card details and address in this area to complete your future  purchases faster.</p>
                        <form className="mt-10 font_futuraLT space-y-10" onReset={handleReset} onSubmit={handleSubmit} >
                            <h1 className='text-xl' >Change Email</h1>
                            <div className="relative w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                {touched.email && errors.email ? <Tooltip classes="form-error" content={errors.email} /> : null}
                                <input className="w-full bg-transparent outline-none border-none" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email*" />
                            </div>
                            <div className="relative w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                {touched.confirm_email && errors.confirm_email ? <Tooltip classes="form-error" content={errors.confirm_email} /> : null}
                                <input className="w-full bg-transparent outline-none border-none" name="confirm_email" id="confirm_email" value={values.confirm_email} onChange={handleChange} onBlur={handleBlur} placeholder="Confirm Email*" />
                            </div>
                            <div className="relative w-full data_field flex justify-between items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                {touched.password && errors.password ? <Tooltip classes="form-error" content={errors.password} /> : null}
                                <input className="w-full bg-transparent outline-none border-none" type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password*" /><Link href='/resetpassword' ><i className="material-symbols-outlined">edit_square</i></Link>
                            </div>
                            <div className="w-full flex justify-end space-x-4">
                                <Button type="reset" value="Cancel" bg="bg-gray-200" text="black" classes="w-full md:w-1/3" />
                                <Button type="submit" value="Save New Email" classes="w-full md:w-1/3" />
                            </div>
                        </form>
                    </section>
                </section>
            </main>
        </>
    )
}