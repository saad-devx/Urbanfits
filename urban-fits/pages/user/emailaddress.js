import React, { useState } from 'react'
import Error403 from '../403';
import useUser from '@/hooks/useUser';
import User from '.';
import Link from 'next/link'
import toaster from '@/utils/toast_function';
import Head from 'next/head';
import Loader from '@/components/loaders/loader';
import Button from '../../components/buttons/simple_btn';
// imports for the schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '../../components/tooltip';

export default function EmailPassword() {
    const { user, updateUser } = useUser()
    //state to handle loader component
    const [loader, setLoader] = useState(false)
    // getting data from input fields and applying validation
    const validatedSchema = Yup.object({
        email: Yup.string().email().required("Please enter your email address"),
        confirm_email: Yup.string().email().required("Please enter your email address").oneOf([Yup.ref("email"), null], "Email must match"),
        password: Yup.string().min(8).max(30).required("Please enter your password")
    })
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit, setValues } = useFormik({
        initialValues: { email: user?.email, password: '', confirm_email: '' },
        validationSchema: validatedSchema,
        onSubmit: async (values) => {
            setLoader(<Loader />)
            let response = await fetch(`${process.env.HOST}/api/user/update?id=${user._id}&authpassword=${values.password}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: values.confirm_email })
            })
            let res = await response.json()
            if (!res.success) toaster("error", res.msg)
            if (res.success) toaster("success", res.msg)
            if (!res.payload) return setLoader(null)
            updateUser(res.payload)
            handleReset()
            setLoader(null)
            setValues({ confirm_email: '', password: '' })
        }
    })
    if (!user) return <Error403 />
    if (window.matchMedia('(max-width: 1024px)').matches) return <>
        <Head><title>Email</title></Head>
        <main className='w-screen h-screen bg-white flex flex-col transition-all duration-500'>
            <div className="w-full p-4 border-b border-gray-50 flex justify-between items-center">
                <Link href="/user/myaccount" className='fa-solid fa-chevron-left text-xl'></Link>
                <div className="flex flex-col justify-center items-center font_urbanist text-xs text-gray-400">
                    <h1 className="font_urbanist_medium text-lg">Email Address</h1>
                    All data will be encrypted
                </div>
                <i className='w-0 h-0' />
            </div>
            <div className="w-full mt-7 px-4 flex flex-col">
                <div className="flex justify-between items-center p-4 rounded-md bg-gray-50 font_urbanist text-sm">
                    <span className="text-base">{user.email}</span>
                    <Link href="/user/change-email">Change</Link>
                </div>
                <p className="mt-2 font_urbanist text-[15px]">The bound email can be used as a login username and will act as a security verification when authentication is enabled.</p>
                <div className="w-full mt-5 flex items-center justify-between font_urbanist_medium text-base">
                    Email verification
                    <label className="switch w-[45px] md:w-11 h-6 "><input type="checkbox" name='active_by_email' /><span className="slider"></span></label>
                </div>
            </div>
        </main>
    </>
    return <>
        <Head><title>Email</title></Head>
        {loader}
        <User>
            <form className="w-full mt-10 font_urbanist space-y-10 text-sm overflow-x-hidden" onReset={handleReset} onSubmit={handleSubmit} >
                <h1 className='text-sm lg:text-base font_urbanist_bold' >Change Email</h1>
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
                    <Button type="reset" bg="bg-gray-100" text="black" font='font_urbanist_medium' classes="w-full md:w-1/3" >Cancel</Button>
                    <Button type="submit" classes="w-full md:w-1/3" font='font_urbanist_medium' >Save New Email</Button>
                </div>
            </form>
        </User>
    </>
}