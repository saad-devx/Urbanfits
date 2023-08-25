import React from 'react'
import Link from 'next/link'
import * as Yup from 'yup'
import { useFormik } from 'formik'

export default function ChangeEmail() {

    const initialSignupValues = { email: '', password: '' }
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: initialSignupValues,
        validationSchema: Yup.object({
            email: Yup.string().email().required("Please enter your email address"),
            password: Yup.string().min(8).max(30).required('Please enter your password')
        }),
        onSubmit: () => { }
    })

    return <main className='w-screen h-screen bg-white flex flex-col transition-all duration-500'>
        <div className="w-full p-4 border-b border-gray-50 flex justify-between items-center">
            <Link href="/user/emailaddress" className='fa-solid fa-chevron-left text-xl'></Link>
            <div className="flex flex-col justify-center items-center font_urbanist text-xs text-gray-400">
                <h1 className="font_urbanist_medium text-lg">Change the linked email</h1>
                All data will be encrypted
            </div>
            <i className='w-0 h-0' />
        </div>
        <form onSubmit={handleSubmit} onReset={handleReset} className="w-full p-4 font_urbanist">
            <label htmlFor="email" className='font_urbanist text-sm'>New Email Address</label>
            <div className={`relative data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4`}>
                {touched.email && errors.email ? <Tooltip classes="form-error" content={errors.email} /> : null}
                <input className="w-full outline-none border-none" name="email" id="email" value={values.email} onBlur={handleBlur} onChange={handleChange} placeholder='Username or Email' />
            </div>
        </form>
    </main>
}
