import React, { useState } from 'react'
import Button from '@/components/buttons/simple_btn';
import Link from 'next/link';
import Image from 'next/image'
import image from "@/public/card imgs/card img9.jpg"
// imports for Schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '@/components/tooltip';

export default function Cutomization(props) {
    const [cartBtn, setCartBtn] = useState("hidden")
    const toggleCart = () => {
        props.toggleModal(null, 'modal4')
        const cartBtn = document.querySelector("#cart-btn")
        cartBtn.click()
        setCartBtn("hidden")
    }

    const schema = Yup.object({
        name: Yup.string().required("Please Enter you Name here"),
        gender: Yup.string().required("Please select your gender"),
        sleeve: Yup.number("Please enter a number here").max(9999999, "The digits cannot be more than 7").required("Please enter your Sleeve Meausre"),
        shoulder: Yup.number("Please enter a number here").max(9999999, "The digits cannot be more than 7").required("Please enter your Shoulder Meausre"),
        bust: Yup.number("Please enter a number here").max(9999999, "The digits cannot be more than 7").required("Please enter your Bust Meausre"),
        waist: Yup.number("Please enter a number here").max(9999999, "The digits cannot be more than 7").required("Please enter your Waist Meausre"),
        hips: Yup.number("Please enter a number here").max(9999999, "The digits cannot be more than 7").required("Please enter your Hips Meausre"),
        trouser_rise: Yup.number("Please enter a number here").max(9999999, "The digits cannot be more than 7").required("Please enter your Trouser Rise Meausre"),
        inside_legs: Yup.number("Please enter a number here").max(9999999, "The digits cannot be more than 7").required("Please enter your Inside Legs Meausre")
    })
    const initialSizeValues = {
        name: '',
        gender: null,
        sleeve: '',
        shoulder: '',
        bust: '',
        waist: '',
        hips: '',
        trouser_rise: '',
        inside_legs: ''
    }
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: initialSizeValues,
        validationSchema: schema,
        onSubmit: () => {
            setCartBtn("flex")
            props.toaster('success', 'Your items has been added to the cart')
        }
    })

    return (
        <div className={`w-full h-full py-8 md:py-0 font_gotham fixed left-0 top-0 right-0 z-50 bg-gray-800/40 backdrop-blur flex justify-center items-center overflow-y-scroll hide_scrollbar transition-all duration-500 ${props.show === false ? "opacity-0 pointer-events-none" : ''}`}>
            <div className={` ${props.show === false ? "translate-y-10" : ''} relative w-11/12 md:w-3/4 lg:w-[60rem] text-[10px] md:text-xs flex flex-col lg:flex-row bg-white rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500`}>
                <div className="w-full hidden md:block h-[355px] lg:w-1/2 lg:h-auto">
                    <Image src={image} className="w-full h-full object-cover object-top" alt="Urban images" ></Image>
                </div>
                <section className="w-full h-full p-5 md:p-7 pt-8 md:pt-7">
                    <div className="w-full flex justify-between items-center">
                        <h3 className="text-black font_gotham_medium text-sm md:text-base">Move to the Urban Fits</h3>
                        <button onClick={(e) => { props.toggleModal(e); handleReset() }} name="modal4" className="material-symbols-rounded text-2xl">close</button>
                    </div>
                    <form className="mt-4 font_gotham space-y-5 md:space-y-7" onSubmit={handleSubmit} >
                        <div className='space-y-3' >
                            <div className="relative w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                {touched.name && errors.name ? <Tooltip classes="form-error" content={errors.name} /> : null}
                                <input className="bg-transparent outline-none border-none" type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Name" />
                            </div>
                        </div>
                        <div className='space-y-4' >
                            <h3 className='text-black font_gotham_medium text-sm md:text-base'>Gender*</h3>
                            <div className="font_gotham_light w-full md:w-3/5 flex justify-between items-center ">
                                <div className='mr-2' >
                                    <input className='custom_checkbox rounded-full mx-3 translate-y-[1px]' type="radio" id="male" name="gender" value="male" onChange={handleChange} /><label htmlFor='male'>Male</label>
                                </div>
                                <div className='mr-2' >
                                    <input className='custom_checkbox rounded-full mx-3 translate-y-[1px]' type="radio" id="female" name="gender" value="female" onChange={handleChange} /><label htmlFor='female'>Female</label>
                                </div>
                                <div className='mr-2' >
                                    <input className='custom_checkbox rounded-full mx-3 translate-y-[1px]' type="radio" id="fluid" name="gender" value="fluid" onChange={handleChange} /><label htmlFor='fluid'>Fluid</label>
                                </div>
                            </div>
                            <div className="w-full lg:w-11/12 flex flex-wrap justify-between font_gotham_light">
                                <div className="relative w-48pr data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.sleeve && errors.sleeve ? <Tooltip classes="form-error" content={errors.sleeve} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="text" name="sleeve" id="sleeve" value={values.sleeve} onBlur={handleBlur} onChange={handleChange} placeholder="Sleeve" />
                                </div>
                                <div className="relative w-48pr data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.shoulder && errors.shoulder ? <Tooltip classes="form-error" content={errors.shoulder} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="text" name="shoulder" id="shoulder" value={values.shoulder} onBlur={handleBlur} onChange={handleChange} placeholder="Shoulder" />
                                </div>
                                <div className="relative w-48pr data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.bust && errors.bust ? <Tooltip classes="form-error" content={errors.bust} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="text" name="bust" id="bust" value={values.bust} onBlur={handleBlur} onChange={handleChange} placeholder="Bust" />
                                </div>
                                <div className="relative w-48pr data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.waist && errors.waist ? <Tooltip classes="form-error" content={errors.waist} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="text" name="waist" id="waist" value={values.waist} onBlur={handleBlur} onChange={handleChange} placeholder="Waist" />
                                </div>
                                <div className="relative w-48pr data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.trouser_rise && errors.trouser_rise ? <Tooltip classes="form-error" content={errors.trouser_rise} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="text" name="trouser_rise" id="trouser_rise" value={values.trouser_rise} onBlur={handleBlur} onChange={handleChange} placeholder="Trouser Rise" />
                                </div>
                                <div className="relative w-48pr data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.hips && errors.hips ? <Tooltip classes="form-error" content={errors.hips} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="text" name="hips" id="hips" value={values.hips} onBlur={handleBlur} onChange={handleChange} placeholder="Hips" />
                                </div>
                                <div className="relative w-full data_field flex items-center border-b focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    {touched.inside_legs && errors.inside_legs ? <Tooltip classes="form-error" content={errors.inside_legs} /> : null}
                                    <input className="w-full bg-transparent outline-none border-none" type="text" name="inside_legs" id="inside_legs" value={values.inside_legs} onBlur={handleBlur} onChange={handleChange} placeholder="Inside Leg" />
                                </div>
                            </div>
                        </div>
                        <Link href='/customerservices/sizeguides' className="group flex items-center gap-x-2 text-xs md:text-sm font_gotham_medium">Size Guide <i className="fa-solid fa-chevron-right group-hover:translate-x-2 mr-2 transition-all"></i></Link>
                        <Button type="submit" classes="w-11/12 mx-auto" >Add to Cart</Button>
                        <span className={`${cartBtn} w-11/12 justify-end`}>
                            <button onClick={toggleCart} className='underline'>View Cart</button>
                        </span>
                    </form>
                </section>
            </div>
        </div>
    )
}
