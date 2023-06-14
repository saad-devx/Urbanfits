import React, { useState } from 'react'
import AuthPage from '.'
import Link from 'next/link'
import Button from '@/components/buttons/simple_btn'
import Tooltip from '@/components/tooltip'
import toaster from '@/utils/toast_function'
import axios from 'axios'
import * as Yup from 'yup'
import { useFormik } from 'formik'

export default function ForgotPassword() {
    const [loading, setLoading] = useState(false)
    const [resendOption, setResendOption] = useState(
        <div className="my-3 text-gray-400 text-xs md:text-sm text-left">
            Please enter your username or email address. You will receive an email message with instructions on how to reset your password.
        </div>
    )

    const onsubmit = async (values) => {
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.HOST}/api/user/forgotpassword`, values)
            console.log(res)
            if (res.data.success && res.data.resetPassToken) {
                const { data } = res
                setResendOption(<span>We just sent you and email, check your inbox and follow the link. <br /> Didn't get the mail? <button type='submit' className="border-b border-b-yellow-700">Resend Email</button></span>)
                toaster("success", data.msg)
            }
            else {
                const { data } = res.response
                if (data) toaster("error", data.msg)
            }
        }
        catch (error) {
            console.log(error)
            setLoading(false)
            toaster("error", error.response.data.msg)
        }
        return setLoading(false)
    }

    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: { email: '' },
        validationSchema: Yup.object({
            email: Yup.mixed().test('valid', 'Invalid email or username', function (value) {
                const { path, createError } = this;
                if (Yup.string().required('Email or Username is required').email().isValidSync(value)) return true;
                if (Yup.string().required('Email or Username is required').min(5, 'Username must be atleast 5 characters').matches(/^[a-zA-Z0-9_]+$/, 'Invalid username').isValidSync(value)) return true;
                return createError({ path, message: 'Invalid Email or Username' });
            })
        }),
        onSubmit: onsubmit
    })

    return (
        <>
            <AuthPage loading={loading} >
                <form className="bg-white p-2 font_gotham text-xl" onReset={handleReset} onSubmit={handleSubmit} >
                    <div className={`relative data_field lex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                        {touched.email && errors.email ? <Tooltip classes="form-error" content={errors.email} /> : null}
                        <input className="w-full outline-none border-none" name="email" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Username or Email' />
                    </div>
                    {resendOption}
                    <Button classes='w-full tracking-expand' font='font_gotham_medium' fontSize='text-sm' type="submit" >VERIFY</Button>
                    <Link href='/auth/login' className='underline text-xs md:text-sm'><h1 className='w-full text-center' >Sign in with an exiting account</h1></Link>
                </form>
            </AuthPage>
        </>
    )
}
