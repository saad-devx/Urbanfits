import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import jwt from 'jsonwebtoken';
import { toast, Slide } from 'react-toastify';
import Loader from '@/components/loader';
import Navbar from '../../components/navbar';
import Button from '../../components/simple_btn';
import AccountMenu from '../../components/accountmenu'
// image imports
import Image from 'next/image';
import female_avatar from '../../public/avatars/female.svg'
import male_avatar from '../../public/avatars/male.svg'

// imports for the schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '../../components/tooltip';

export default function EmailPassword() {
    // state to handle navbar expansion and contraction
    const [expand, setExpand] = useState(false)
    //state to handle loader component
    const [loader, setLoader] = useState(false)
    // user data state
    const [user, setUser] = useState({})
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

    // getting data from input fields and applying validation
    const validatedSchema = Yup.object({
        email: Yup.string().email().required("Please enter your email address"),
        confirm_email: Yup.string().email().required("Please enter your email address").oneOf([Yup.ref("email"), null], "Email must match"),
        password: Yup.string().min(8).max(30).required("Please enter your password")
    })
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit, setValues } = useFormik({
        initialValues: { email: '', password: '', confirm_email: '' },
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
            if(!res.payload) return setLoader(null)
            localStorage.setItem("authToken", res.payload)
            handleReset()
            setLoader(null)
            setValues({ confirm_email: '', password: '' })
        }
    })
    // determining if the scroll direction is upwards or downwards
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
        const userData = jwt.decode(localStorage.getItem("authToken"))
        if (userData) {
            let user = userData._doc
            setUser(user)
            setValues({ email: ifExists(user.email) })
        }
    }, [])
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                {loader}
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full lg:fixed right-0 flex transition-all duration-700`}>
                    <AccountMenu direction={direction} />
                    <section onScroll={handleScroll} className='w-full lg:w-[67%] font_futuraLT text-left p-9 pt-24 lg:pt-9 pl-7 overflow-y-scroll' >
                        <div className="w-full lg:w-5/6">
                            <div className="flex flex-row-reverse md:flex-row items-center gap-3">
                                <Image className="w-1/3 md:w-1/6 rounded-full border-2 p-2 border-white" src={ifExists(user.title) === "Mrs." ? female_avatar : male_avatar} />
                                <span>
                                    <h2 className="text-xl lg:text-2xl mb-4">My Account</h2>
                                    <p className='text-xs lg:text-sm' >Welcome {ifExists(user.firstname)} !<br />Save or change your email address and password in this area to to tell us about you for further assistence.</p>
                                </span>
                            </div>
                            <form className="w-full mt-10 font_futuraLT space-y-10 overflow-x-hidden" onReset={handleReset} onSubmit={handleSubmit} >
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
                                    <Button type="reset" bg="bg-gray-200" text="black" classes="w-full md:w-1/3" >Cancel</Button>
                                    <Button type="submit" classes="w-full md:w-1/3" >Save New Email</Button>
                                </div>
                            </form>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}