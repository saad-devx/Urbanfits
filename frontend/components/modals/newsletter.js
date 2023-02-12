import React, { useState } from 'react'
import Button from '../link_btn'

// Newsletter Modal Component
export default function Newsletter(props) {
    const initialNewsletterObj = {
        email: '',
        gender: '',
        interest: [],
    }
    const [letterDetails, setLetterDetails] = useState(initialNewsletterObj)
    const onchange = (e) => {
        setLetterDetails({ ...letterDetails, [e.target.name]: e.target.value })
        console.log(letterDetails)
    }

    // to make the interest buttons show a checked effect
    const [checked, setChecked] = useState("")
    return (
        <>
            <div className={`w-full h-full font_futuraLT fixed inset-0 z-50 bg-gray-800/40 backdrop-blur flex justify-center items-center transition-all duration-500 ${props.show === false ? "opacity-0 pointer-events-none" : ''}`}>
                <div className={` ${props.show === false ? "translate-y-10" : ''} relative w-11/12 md:w-3/4 lg:w-[60rem] text-sm flex flex-col lg:flex-row bg-white rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500`}>
                    {/* <i className="material-symbols-rounded text-xl absolute right-5 top-5 cursor-pointer hover:rotate-180 transition-all duration-1000">close</i> */}
                    <button onClick={props.toggleModal} name="modal2" className="fa-solid fa-xmark text-3xl text-gray-700 absolute right-8 top-5 cursor-pointer hover:rotate-180 transition-all duration-700"></button>
                    <div className=" w-1/2 h-auto bg_newsletter bg-top bg-cover bg-no-repeat"></div>
                    <section className="w-full h-full p-5 pt-14 md:pt-5">
                        <div className="w-full space-y-5">
                            <h3 className="text-black text-base">Move to the Urban Fit</h3>
                            <p className='font_futuraLTlite' >Be in the know about what’s happening at the Parisian Maison: never miss out on the latest trend, newest collections and exciting special projects from Urban fit. </p>
                        </div>
                        <form className="mt-7 font_futuraLT space-y-5 md:space-y-7" >
                            <div className='space-y-3' >
                                <h3 className='text-black text-base' >Email Sign Up*</h3>
                                <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="email" name="email" id="email" value={letterDetails.email} onChange={onchange} placeholder="Email*" />
                                </div>
                            </div>
                            <div className='space-y-4' >
                                <h3 className='text-black text-base' >Gender*</h3>
                                <div className="font_futuraLTlite w-full md:w-3/5 flex justify-between items-center ">
                                    <div className='mx-2' >
                                        <input className='custom_checkbox rounded-full mx-3 translate-y-[1px]' type="radio" id="male" name="gender" value="male" onChange={onchange} /><label htmlFor='male'>Male</label>
                                    </div>
                                    <div className='mx-2' >
                                        <input className='custom_checkbox rounded-full mx-3 translate-y-[1px]' type="radio" id="female" name="gender" value="female" onChange={onchange} /><label htmlFor='female'>Female</label>
                                    </div>
                                    <div className='mx-2' >
                                        <input className='custom_checkbox rounded-full mx-3 translate-y-[1px]' type="radio" id="fluid" name="gender" value="fluid" onChange={onchange} /><label htmlFor='fluid'>Fluid</label>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-black text-base">Favourite Subjects*</h3>
                                <div className="pill-container w-full flex flex-wrap text-xs md:text-sm space-y-2 md:space-y-0 space-x-1">
                                    {['Bags', 'Sneakers', 'Jackets', 'Dresses', 'Fashion Shows'].map((name) => {
                                        return (
                                            <>
                                                <input type="checkbox" id={name} name="selector" value={name} />
                                                <label className="selector border border-gray-400 rounded-full mb-3 px-4 py-2" htmlFor={name}>{name}</label>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            <p className='font_futuraLTlite text-sm' >Mandatory information: if you chose not to give your consent for the collection of mandatory data you will not be able to save your payment method.</p>
                            <Button type="submit" classes="w-11/12 mx-auto" >Subscribe</Button>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}