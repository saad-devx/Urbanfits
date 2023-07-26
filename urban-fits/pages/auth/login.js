import React, { useState, useEffect, useRef } from 'react'
import AuthPage from '.'
import Link from 'next/link'
import Button from '@/components/buttons/simple_btn'
import Head from 'next/head'
import Tooltip from '@/components/tooltip'
import toaster from '@/utils/toast_function'
import AlertPage from '@/components/alertPage'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useSession, signIn } from "next-auth/react"
import useUser from '@/hooks/useUser'
import * as Yup from 'yup'
import { useFormik } from 'formik'
//Image imports
import Image from 'next/image'
import google_logo from '@/public/logos/google-logo.svg'
import apple_logo from '@/public/logos/apple-logo.svg';

export const metadata = {
    title: "Urban Fits - Login"
}
export default function Login() {
    const { data: session } = useSession()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { user, updateUser } = useUser()
    const [showPass, setShowPass] = useState(false)

    const passRef = useRef()

    const onsubmit = async (values, x, oAuthQuery) => {
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.HOST}/api/user/login${oAuthQuery ? oAuthQuery : ''}`, values)
            if (res.data.success && res.data.payload) {
                const { data } = res
                await updateUser(data.payload, true)
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

    const loginSchema = Yup.object({
        email: Yup.mixed().test('valid', 'Invalid email or username', function (value) {
            const { path, createError } = this;
            if (Yup.string().required('Email or Username is required').email().isValidSync(value)) return true;
            if (Yup.string().required('Email or Username is required').min(5, 'Username must be atleast 5 characters').matches(/^[a-zA-Z0-9_]+$/, 'Invalid username').isValidSync(value)) return true;
            return createError({ path, message: 'Invalid Email or Username' });
        }),
        password: Yup.string().min(8).max(30).required('Please enter your password'),
        remember_me: Yup.boolean()
    })
    const initialSignupValues = { email: '', password: '', remember_me: false, register_provider: 'urbanfits' }
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: initialSignupValues,
        validationSchema: loginSchema,
        onSubmit: onsubmit
    })

    const providerSignIn = (name) => {
        console.log(name)
        sessionStorage.setItem('oauth', true);
        sessionStorage.setItem('register_provider', name);
        return signIn(`${name}`)
    }

    useEffect(() => {
        if (user && user.email) return
        const oauth = sessionStorage.getItem('oauth')
        const register_provider = sessionStorage.getItem('register_provider')
        if (oauth && session && session.user) {
            let username = session.user.email.split('@')[0]
            let name = session.user.name.split(' ')
            let firstname = name[0]
            name.shift()
            let lastname = name.join(' ')
            const loginDetails = { email: session.user.email, username, firstname, lastname, image: session.user.image, register_provider }
            onsubmit(loginDetails, null, '?auth=OAuth')
            return sessionStorage.removeItem('oauth')
        }
        else return
    }, [session])

    const sessionValidity = (e) => {
        const checked = e.target.checked
        localStorage.setItem('remember_me', checked)
    }

    if (user && user.email) return <AlertPage type="success" heading="You are already signed in !" />
    return (
        <>
            <Head>
                <title>Urban Fits - Login</title>
            </Head>
            <AuthPage loading={loading} >
                <button onClick={() => providerSignIn("google")} name='google' className="group w-full h-12 my-4 py-2 px-2 flex justify-center items-center bg-gray-100 text-lg border border-gray-400 rounded-full hover:shadow-xl transition">
                    <Image src={google_logo} width={50} height={50} className='w-6 md:w-8 mr-3' alt="google" />
                    <span className='w-0 whitespace-nowrap overflow-hidden transition-all duration-500 group-hover:w-32'>Sign Up with</span>
                    Google
                </button>
                {/* <div className="font_gotham w-full my-5 flex justify-center space-x-6">
                    <button onClick={() => providerSignIn("google")} name='google' className="w-[190px] h-12 py-2 px-9 bg-gray-100 border border-gray-400 rounded-full hover:shadow-xl transition"><span title="Continue with Google" className='text-lg flex justify-center items-center'><Image src={google_logo} className='w-1/4 mr-3' alt="google" /><p>Google</p></span></button>
                    <button onClick={() => providerSignIn("apple")} name='apple' className="w-[190px] h-12 py-2 px-9 border border-black bg-black rounded-full hover:shadow-xl transition"><span title="Continue with Apple" className='text-lg flex justify-center items-center'><Image src={apple_logo} className='w-1/5 mr-3' alt="apple" /><p className='text-white' >Apple</p></span></button>
                </div> */}
                <form className="bg-white p-2 font_gotham text-xl" onReset={handleReset} onSubmit={handleSubmit} >
                    <div className={`relative data_field lex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                        {touched.email && errors.email ? <Tooltip classes="form-error" content={errors.email} /> : null}
                        <input className="w-full outline-none border-none" name="email" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Username or Email' />
                    </div>
                    <div className={`relative data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                        {touched.password && errors.password ? <Tooltip classes="form-error" content={errors.password} /> : null}
                        <input ref={passRef} className="w-full outline-none border-none" type={showPass ? "text" : "password"} id="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder='Password' />
                        <span onClick={() => { passRef.current.focus(); if (showPass) return setShowPass(false); if (!showPass) return setShowPass(true) }} className="material-symbols-outlined text-black md:text-3xl font-bold cursor-pointer select-none">{showPass ? "lens_blur" : "motion_photos_on"}</span>
                    </div>
                    <div className="my-3 text-gray-400 text-xs md:text-sm text-left">
                        Password must be at least 8 characters and can’t be easy to guess - commonly used or risky passwords are not premitted.
                    </div>
                    <div className={`relative w-full h-14 mb-5 flex items-center`}>
                        {touched.accept_policies && errors.accept_policies ? <Tooltip classes="form-error" content={errors.accept_policies} /> : null}
                        <div className='mr-2' >
                            <input className='rounded' type="checkbox" id="accept_policies" name="accept_policies" value={values.accept_policies} onChange={(e) => { handleChange(e); sessionValidity(e) }} />
                        </div>
                        <label htmlFor='accept_policies' className="w-full cursor-pointer text-sm text-left">
                            <p className="ml-1 text-gray-400">Remember me</p>
                        </label>
                    </div>
                    <Button loading={loading} classes='w-full' font='font_gotham_medium' fontSize='text-sm' type="submit" >Login</Button>
                    <Link href='/auth/signup' className='underline text-xs md:text-sm'><h1 className='w-full text-center' >Create a New Account</h1></Link>
                </form>
            </AuthPage>
        </>
    )
}