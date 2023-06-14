import React, { useState, useEffect } from 'react'
import AuthPage from '.'
import Link from 'next/link'
import Button from '@/components/buttons/simple_btn'
import Tooltip from '@/components/tooltip'
import toaster from '@/utils/toast_function'
import countryCodes from '@/static data/countryCodes'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import useUser from '@/hooks/useUser'
import useAddress from '@/hooks/useAddress'
import * as Yup from 'yup'
import { useFormik } from 'formik'
//Image imports
import Image from 'next/image'
import google_logo from '@/public/logos/google-logo.svg'
import apple_logo from '@/public/logos/apple-logo.svg';

export default function Signup() {
    const { data: session } = useSession()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { updateUser } = useUser()
    const { initiateAddress } = useAddress()

    const onsubmit = async (values, x, oAuthQuery) => {
        console.log(values)
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.HOST}/api/user/signup/${oAuthQuery ? oAuthQuery : ''}`, values)
            console.log(res)
            if (res.data.success && res.data.payload) {
                const { data } = res
                await updateUser(data.payload, true)
                await initiateAddress(data.payload, router)
                toaster("success", data.msg)
                router.push('/user/personalinfo')
            }
            else {
                const { data } = res.response
                toaster("error", data.msg)
            }
        }
        catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        setLoading(false)
    }

    const signupuSchema = Yup.object({
        username: Yup.string().min(5, 'Username must be at least 5 characters long').max(24, 'Username cannot exceed 24 characters').matches(/^[A-Za-z0-9_]+$/, 'Username must contain only letters, numbers, and underscores').notOneOf([' ', '-'], 'Username should not contain any spaces or hyphen symbols').required('Username is required'),
        email: Yup.string().email().required('Please enter your email address'),
        // phone: Yup.string().matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, Please enter a valid phone number with postal code and space eg. +971 0000000000).required(),
        phone_prefix: Yup.string().required('Phone prefix is required to save'),
        phone_number: Yup.string().min(6, 'Phone number can be a minimum of 6 digits').max(14, 'Phone number can be a maximum of 14 digits').required('Phone number is required to save'),
        password: Yup.string().min(8).max(30).required('Please enter your password'),
        accept_policies: Yup.boolean().required("You can't go ahead uless you agree with our policies").oneOf([true], "You can't go further without accepting our policies).required(You can't go further without accepting our policies")
    })
    const initialSignupValues = { username: '', email: '', phone_prefix: 'Conuntry Code', phone_number: '', password: '', accept_policies: '' }
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: initialSignupValues,
        validationSchema: signupuSchema,
        onSubmit: onsubmit
    })

    const oauth = localStorage.getItem('oauth')
    useEffect(() => {
        if (oauth && session) {
            let username = session.user.email.split('@')[0]
            let name = session.user.name.split(' ')
            let firstname = name[0]
            name.shift()
            let lastname = name.join(' ')
            const loginDetails = { email: session.user.email, username, firstname, lastname, image: session.user.image, register_provider: "google" }
            onsubmit(loginDetails, null, '?auth=OAuth')
            return localStorage.setItem('oauth', false)
        }
        else return
    }, [session])

    return (
        <>
            <AuthPage loading={loading} >
                <form className="bg-white p-2 font_gotham text-xl" onReset={handleReset} onSubmit={handleSubmit} >
                    <div className="relative data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                        {touched.username && errors.username ? <Tooltip classes="form-error" content={errors.username} /> : null}
                        <input className="w-full outline-none border-none" type="text" name="username" id="username" value={values.username} onBlur={handleBlur} onChange={handleChange} placeholder="Username" />
                    </div>
                    <div className={`relative data_field lex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                        {touched.email && errors.email ? <Tooltip classes="form-error" content={errors.email} /> : null}
                        <input className="w-full outline-none border-none" name="email" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Email' />
                    </div>
                    <div className={` relative data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                        {touched.phone_prefix && errors.phone_prefix ? <Tooltip classes="form-error" content={errors.phone_prefix} /> : null}
                        <select defaultValue='Country Code' value={values.phone_prefix} name='phone_prefix' onBlur={handleBlur} className="w-full border-none outline-none bg-transparent border-b-gray-800" onChange={handleChange}>
                            <option value={null}>Select Country Code</option>
                            {countryCodes.map((item) => {
                                if (!item.code) return <option disabled>{item.name}</option>
                                return <option value={item.code}>{item.name} {item.code}</option>
                            })}
                        </select>
                    </div>
                    <div className={`relative data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                        {touched.phone_number && errors.phone_number ? <Tooltip classes="form-error" content={errors.phone_number} /> : null}
                        <input className="w-full bg-transparent outline-none border-none" type="tel" name="phone_number" id="phone_number" size="15" maxLength={15} value={values.phone_number} onBlur={handleBlur} onChange={handleChange} placeholder="Phone Number" />
                    </div>
                    <div className={`relative data_field lex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                        {touched.password && errors.password ? <Tooltip classes="form-error" content={errors.password} /> : null}
                        <input className="w-full outline-none border-none" type='password' name="password" id="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder='Password' />
                    </div>
                    <div className="my-3 text-gray-400 text-xs md:text-sm text-left">
                        Password must be at least 8 characters and can’t be easy to guess - commonly used or risky passwords are not premitted.
                    </div>
                    <div className={`relative w-full h-14 mb-5 flex items-center`}>
                        {touched.accept_policies && errors.accept_policies ? <Tooltip classes="form-error" content={errors.accept_policies} /> : null}
                        <div className='mr-2' >
                            <input className='rounded' type="checkbox" id="accept_policies" name="accept_policies" value={values.accept_policies} onChange={handleChange} />
                        </div>
                        <label htmlFor='accept_policies' className="w-full cursor-pointer text-sm text-left">
                            <p className="ml-1 text-gray-400">By creating an account, I agree to the <Link href="/policies/terms&conditions" className=' text-black underline' >Terms & Conditions</Link>.I have read the <Link href="/policies/legalnotice" className=' text-black underline' >Legal Notice</Link> and <Link href="/policies/privacypolicy" className=' text-black underline' >Privacy Policy</Link></p>
                        </label>
                    </div>
                    <Button loading={loading} classes='w-full tracking-expand' font='font_gotham_medium' fontSize='text-sm' type="submit" >SIGN UP</Button>
                    <Link href='/auth/login' className='underline text-xs md:text-sm'><h1 className='w-full text-center' >Log in with an Existing Account</h1></Link>
                </form>
                <div className="font_gotham w-full mt-5 flex justify-center space-x-6">
                    <button onClick={() => { localStorage.setItem('oauth', true); signIn("google") }} className="w-[190px] h-12 py-2 px-9 bg-gray-100 border border-gray-400 rounded-full hover:shadow-xl transition"><span title="Continue with Google" className='text-lg flex justify-center items-center'><Image src={google_logo} className='w-1/4 mr-3' alt="google" /><p>Google</p></span></button>
                    <button className="w-[190px] h-12 py-2 px-9 border border-black bg-black rounded-full hover:shadow-xl transition"><span title="Continue with Google" className='text-lg flex justify-center items-center'><Image src={apple_logo} className='w-1/5 mr-3' alt="apple" /><p className='text-white' >Apple</p></span></button>
                </div>
            </AuthPage>
        </>
    )
}