import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import LanguageModal from '@/components/modals/languagemodal';
import Accordians from '@/components/accordians';
import LinkBtn from '@/components/link_btn';
// imports for images
import Image from 'next/image';
import shirt_img from '../../public/card imgs/card img4.png'
// imports for Schema and validation
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Tooltip from '@/components/tooltip';

export default function Checkout1(props) {
    const router = useRouter()
    // state for navbar expansion
    const [expand, setExpand] = useState(false)
    // state and funciton to handle modify input fields
    const name = useRef(null)
    const email = useRef(null)
    const [readOnly, setReadOnly] = useState(true)
    const handleModify = (e) => {
        setReadOnly(false)
        let elemName = e.target.getAttribute("name")
        if (elemName === "name") return name.current.focus()
        if (elemName === "email") return email.current.focus()
    }

    // states and function for change localization modal
    const [modal3, setModal3] = useState(false)
    const toggleModal = (e) => {
        if (e.target.name === "modal3") {
            if (modal3 === false) return setModal3(true)
            if (modal3 === true) return setModal3(false)
        }
    }

    // getting data from input fields and applying validation
    const validatedSchema = Yup.object({
        title: Yup.string().required("Please enter a title"),
        firstname: Yup.string().min(2).required("Please enter your First name"),
        lastname: Yup.string().min(2).required("Please enter your Last name"),
        dateofbirth: Yup.date(),
        newsletter_sub_email: Yup.bool(),
        newsletter_sub_phone: Yup.bool()
    })
    const { values, errors, touched, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
        initialValues: { title: '', firstname: '', lastname: '', dateofbirth: '', newsletter_sub_email: false, newsletter_sub_phone: false },
        validationSchema: validatedSchema,
        onSubmit: (values) => {
            console.log(values)
            handleReset()
        }
    })
    const username = "bilawal"
    const useremail = "bilawal@gmail.com"
    const address = "UAE, bhatta wala chowk mochi gate, lahore"


    return (
        <>
            <Navbar setExpand={setExpand} />
            <LanguageModal show={modal3} toggleModal={toggleModal} />
            <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
                <div className="w-full pb-20 flex justify-center">
                    <section className='w-full p-5 md:p-7 lg:p-0 lg:pt-9 lg:w-[90%] h-full font_futuraLT text-left pt-5' >
                        <div className="w-full flex flex-col lg:flex-row">
                            <div className="w-full lg:w-[60%] mb-3 mr-auto">
                                <form className="w-full" onSubmit={handleSubmit} onReset={handleReset} >
                                    <div className="w-full border-b border-b-gray-300 mb-5"><button onClick={router.back}><i className="fa-solid fa-arrow-left mr-2"></i>Back</button></div>
                                    <span className=" mb-7 flex justify-between text-2xl"> <h1>1. Contact Informaton</h1> <i className="fa-solid fa-circle-check"></i> </span>
                                    <span className="flex flex-col mb-6">
                                        <label htmlFor="name">Name</label>
                                        <div className=" w-full data_field flex justify-between items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                            <input className="w-full bg-transparent outline-none border-none" onBlur={() => { setReadOnly(true) }} readOnly={readOnly} ref={name} type="text" name="name" id="name" placeholder="John Doe" /><button onClick={handleModify} ><i className="material-symbols-outlined" title='Edit' name="name">edit_square</i></button>
                                        </div>
                                    </span>
                                    <span className="flex flex-col">
                                        <label htmlFor="email">Email</label>
                                        <div className=" w-full data_field flex justify-between items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                            <input className="w-full bg-transparent outline-none border-none" onBlur={() => { setReadOnly(true) }} readOnly={readOnly} ref={email} type="email" name="email" id="email" placeholder="John Doe" /><button onClick={handleModify} ><i className="material-symbols-outlined" title='Edit' name="email">edit_square</i></button>
                                        </div>
                                    </span>
                                    <span className=" my-7 flex justify-between text-2xl"> <h1>2. Shipping Imformation</h1> <i className="fa-solid fa-circle-check"></i> </span>
                                    <div className="flex flex-col mb-6">
                                        <label className='w-full border-b border-b-gray-400 pb-3' htmlFor="delivery_options">Delivery Option</label>
                                        <div id="delivery_options" className="w-full py-3 flex justify-between">
                                            <span className="flex">
                                                <input className='rounded mx-2 translate-y-1' type="radio" id="express" name="language" defaultChecked={true} value="english" onBlur={null} onChange={null} /><label className='flex flex-col cursor-pointer text-xs lg:text-base' htmlFor="express">Express Delivery <p className="font_futuraLTlite text-xs">2-4 working days</p></label>
                                            </span>
                                            <span className="flex">
                                                <input className='rounded mx-2 translate-y-1' type="radio" id="standard" name="language" defaultChecked={true} value="english" onBlur={null} onChange={null} /><label className='flex flex-col cursor-pointer text-xs lg:text-base' htmlFor="standard">Standard Delivery <p className="font_futuraLTlite text-xs">3-5 working days</p></label>
                                            </span>
                                            <span className="flex">
                                                <input className='rounded mx-2 translate-y-1' type="radio" id="free" name="language" defaultChecked={true} value="english" onBlur={null} onChange={null} /><label className='flex flex-col cursor-pointer text-xs lg:text-base' htmlFor="free">Free Delivery <p className="font_futuraLTlite text-xs">5-7 working days</p></label>
                                            </span>
                                        </div>
                                        <h1 className=" my-7 text-2xl">Enter Your Shipping Address</h1>
                                        <section className="w-full space-y-10">
                                            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                                <input className="w-full bg-transparent outline-none border-none" type="text" name="address" id="address" onChange={handleChange} placeholder="Address 1*" />
                                            </div>
                                            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                                <input className="w-full bg-transparent outline-none border-none" type="text" name="apt_or_suite" id="apt_or_suite" onChange={handleChange} placeholder="Apt, Suite, Company etc. (optional)*" />
                                            </div>
                                            <div className=" w-1/2 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                                <input className="w-full bg-transparent outline-none border-none" type="text" name="city" id="city" onChange={handleChange} placeholder="City*" />
                                            </div>
                                            <div className='text-gray-600' >Shipping outside united Arab Emirates ? <button name='modal3' onClick={toggleModal} className='underline text-black' >Change Localization</button> </div>
                                            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                                <select defaultValue="Country" className="w-full border-none outline-none bg-transparent border-b-gray-800" onChange={handleChange}>
                                                    <option disabled >Country</option>
                                                    <option id="mr" value="mr">UAE</option>
                                                    <option id="ms" value="ms">USA</option>
                                                    <option id="other" value="other">Pakistan</option>
                                                </select>
                                            </div>
                                            <div className="flex justify-between w-full md:w-3/4 ">
                                                <div className="w-[47%] md:w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                                    <input className="w-full bg-transparent outline-none border-none" type="tel" name="phone_prefix" id="phone_prefix" size="4" maxLength={4} onChange={handleChange} placeholder="+971" />
                                                </div>
                                                <div className="w-[47%] md:w-2/5 data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                                    <input className="w-full bg-transparent outline-none border-none" type="tel" name="phone" id="phone" size="15" maxLength={15} onChange={handleChange} placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <span className="flex justify-end"> <LinkBtn href={`/checkout/step2?name=${username}&email=${useremail}&address=${address}`} type="submit" classes="px-8" >Continue to Payment</LinkBtn> </span>
                                        </section>
                                    </div>
                                </form>
                            </div>
                            <div className="details w-full lg:w-[31%] m-0 space-y-3">
                                <h3 className="text-2xl mb-5">Order Summary</h3>
                                {/* summary here */}
                                <div className=" hidden lg:flex relative mb-3 p-5 pt-10 bg-white card_boxshadow w-full h-64 md:h-[21rem] flex-col justify-between items-center rounded-xl md:rounded-3xl">
                                    <h3 className="absolute top-[6%] left-[7%] lg:text-lg text-end">Product Title Here</h3>
                                    <div className="flex justify-between items-center">
                                        <div className=" w-[35%] md:w-1/3">
                                            <Image width={640} height={853} src={shirt_img} alt="Urban images" className="w-full h-full rounded-lg md:rounded-xl object-cover object-top" ></Image>
                                        </div>
                                        <div className="w-1/2 h-auto text-xs md:text-sm my-5 md:my-3 font_futuraLTlite">
                                            <span key={1} className="w-full mx-auto flex justify-between"><small className='font_futuraLT'>Color:</small> <small>{props.color}</small></span>
                                            <span key={2} className="w-full mx-auto flex justify-between"><small className='font_futuraLT'>Size:</small> <small>{props.size}</small></span>
                                            <span key={3} className="w-full mx-auto flex justify-between"><small className='font_futuraLT'>Quantity:</small> <small>{props.quantity}</small></span>
                                            <span key={4} className="w-full mx-auto flex justify-between"><small className='font_futuraLT'>Price:</small> <small>${props.price}</small></span>
                                            <span key={5} className="w-full mx-auto flex justify-between"><small className='font_futuraLT'>Discount:</small> <small>{props.discount ? props.discount : 0}</small></span>
                                            <span key={6} className="w-full mx-auto flex justify-between"><small className='font_futuraLT'>Sale Price:</small> <small>${props.price + 0}</small></span>
                                        </div>
                                    </div>
                                    <div className="w-full h-auto my-5 md:my-3">
                                        <span key={1} className="w-full mx-auto flex justify-between"><small>Color</small> <small>{props.color}</small></span>
                                        <span key={2} className="w-full mx-auto flex justify-between"><small>Size</small> <small>{props.size}</small></span>
                                        <span key={3} className="w-full mx-auto flex justify-between"><small>Quantity</small> <small>{props.quantity}</small></span>
                                        <span key={4} className="w-full mx-auto flex justify-between"><small>Price</small> <small>${props.price}</small></span>
                                    </div>
                                    <div className="w-full pt-2 flex justify-between border-t border-t-gray-400">
                                        <h4 className="text-lg">Total</h4>
                                        <h4 className="text-lg">$89.78</h4>
                                    </div>
                                </div>
                                {/* Accordian */}
                                <Accordians />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </section >
        </>
    )
}
