import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AuthPage from "."
import Button from '@/components/buttons/simple_btn';
import Link from 'next/link';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { useSession, signIn } from "next-auth/react"
import useUser from '@/hooks/useUser'
import toaster from '@/utils/toast_function';
import AlertPage from '@/components/alertPage';
import Tooltip from '@/components/tooltip';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import Image from 'next/image'
import google_logo from '@/public/logos/google-logo.svg'

export default function ResetPassword() {
    const { data: session } = useSession()
    const { user } = useUser()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [payload, setPayload] = useState(null)
    const [token, setToken] = useState(null)

    const signInWithGoogle = async (values, x, oAuthQuery) => {
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.HOST}/api/user/login${oAuthQuery ? oAuthQuery : ''}`, values)
            if (res.data.success && res.data.payload) {
                const { data } = res
                await updateUser(data.payload, true)
                toaster("success", data.msg)
                router.push('/user/myaccount')
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

    const providerSignIn = (name) => {
        sessionStorage.setItem('oauth', true);
        sessionStorage.setItem('register_provider', name);
        return signIn(name)
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
            signInWithGoogle(loginDetails, null, '?auth=OAuth')
            return sessionStorage.removeItem('oauth')
        }
        else return
    }, [session])

    const onsubmit = async (values) => {
        console.log(values, token)
        try {
            setLoading(true)
            const res = await axios.put(`${process.env.HOST}/api/user/resetpassword`, { ...values, token })
            if (res.data.success && res.data.resetPassword) {
                const { data } = res
                toaster("success", data.msg)
                router.push('/auth/login')
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

    const resetpassSchema = Yup.object({
        email: Yup.string().email().required('Email is required to change your password'),
        password: Yup.string().min(8).max(30).required("Please enter your password"),
        confirm_password: Yup.string().min(8, "Password must be atleast 8 characters").max(30, "Password cannot exceed 30 characters").required("Please enter your password").oneOf([Yup.ref("password"), null], "Password must match")
    })
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit, setValues } = useFormik({
        initialValues: { email: payload?.email, password: '', confirm_password: '' },
        validationSchema: resetpassSchema,
        onSubmit: onsubmit
    })

    useEffect(() => {
        const resetpassToken = router.query.token
        const decodedToken = jwt.decode(resetpassToken)
        setPayload(decodedToken)
        setToken(resetpassToken)
        setValues({ ...values, email: decodedToken?.email })
    }, [router.query])

    const unixTime = Math.floor(Date.now() / 1000)
    if (!payload || payload.exp <= unixTime) return <AlertPage type="error" heading="Oh Snap! Session Expired" message="The content your are trying to access either invalid or expired. Please try again." />

    return <>
        <AuthPage loading={loading} mblNav="/auth/forgotpassword" mblNavName="Forgot password" >
            <form className="w-full h-full lg:h-auto bg-white p-2 font_gotham text-base flex flex-col justify-between md:justify-around lg:justify-center" onReset={handleReset} onSubmit={handleSubmit} >
                <section className="w-full mb-6 md:mb-0">
                    <h1 className="lg:hidden text-[22px] mb-5 text-left font_urbanist">Reset Your Password</h1>
                    <div className={`relative data_field lex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                        <span className="w-full outline-none border-none" name="email" id="email" value={values.email} placeholder='Email' >{values.email}</span>
                    </div>
                    <div className={`relative data_field lex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                        {touched.password && errors.password ? <Tooltip classes="form-error" content={errors.password} /> : null}
                        <input className="w-full outline-none border-none" type='password' name="password" id="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder='Password' />
                    </div>
                    <div className={`relative data_field lex items-center border-b  focus:border-yellow-700 hover:border-yellow-600 transition py-2`}>
                        {touched.confirm_password && errors.confirm_password ? <Tooltip classes="form-error" content={errors.confirm_password} /> : null}
                        <input className="w-full outline-none border-none" type='password' name="confirm_password" id="confirm_password" value={values.confirm_password} onBlur={handleBlur} onChange={handleChange} placeholder="Confirm Password" />
                    </div>
                    <div className="my-3 text-gray-400 text-xs md:text-sm text-left">
                        Password must be at least 8 characters and can’t be easy to guess - commonly used or risky passwords are not premitted.
                    </div>
                </section>
                <section>
                    <Button loading={loading} classes='w-full' type="submit" >Update</Button>
                    <div className="lg:hidden w-full flex justify-between items-center font_urbanist text-sm">
                        <span className="w-2/5 h-px bg-gray-200"></span>
                        login via
                        <span className="w-2/5 h-px bg-gray-200"></span>
                    </div>
                    <Link href='/auth/login' className='hidden lg:block underline text-xs md:text-sm'><h1 className='w-full text-center' >Log in with an Existing Account</h1></Link>
                    <button type='button' onClick={() => providerSignIn("google")} name='google' className="lg:hidden group w-full h-12 my-4 py-2 px-2 flex justify-center items-center bg-gray-100 text-lg border border-gray-400 rounded-full hover:shadow-xl transition">
                        <Image src={google_logo} width={50} height={50} className='w-6 md:w-8 mr-3' alt="google" />
                        <span className='max-w-0 whitespace-nowrap overflow-hidden transition-all duration-500 group-hover:max-w-[10rem]'>Sign Up with&nbsp;</span>
                        Google
                    </button>
                </section>
            </form>
        </AuthPage>
    </>
}