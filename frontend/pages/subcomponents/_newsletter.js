import React, { useState } from 'react'
import Button from './_button'

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
                <div className={` ${props.show === false ? "translate-y-10" : ''} relative w-5/6 md:w-9/12 h-[90%] text-sm flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden transition-all duration-500`}>
                    {/* <i className="material-symbols-rounded text-xl absolute right-5 top-5 cursor-pointer hover:rotate-180 transition-all duration-1000">close</i> */}
                    <button onClick={props.toggleModal} name="modal2" className="fa-solid fa-xmark text-3xl text-gray-700 absolute right-8 top-5 cursor-pointer hover:rotate-180 transition-all duration-700"></button>
                    <div className="hidden lg:block w-1/2 h-full bg_newsletter"></div>
                    <section className="w-full h-full p-5">
                        <div className="w-full space-y-5">
                            <h3 className="text-base">Move to the Urban Fit</h3>
                            <p>Be in the know about what’s happening at the Parisian Maison: never miss out on the latest trend, newest collections and exciting special projects from Urban fit. </p>
                        </div>
                        <form className="mt-10 font_futuraLT space-y-5 md:space-y-7" >
                            <div className='space-y-3' >
                                <h3 className='text-base' >Email Sign Up*</h3>
                                <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="email" name="email" id="email" value={letterDetails.email} onChange={onchange} placeholder="Email*" />
                                </div>
                            </div>
                            <div className='space-y-3' >
                                <h3 className='text-base' >Gender*</h3>
                                <div className=" w-full md:w-3/4  flex justify-between ">
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
                            <div className="space-y-2">
                                <h3 className="text-base">Favourite Subjects*</h3>
                                <div className="w-full text-xs md:text-sm space-y-2 md:space-y-0 space-x-3">
                                    <input value="Bags" type="button" name='interest' onClick={() => { onchange; setChecked("bg-gold text-white border-none") }} className={`${checked} p-2 cursor-pointer rounded-2xl md:rounded-3xl border border-gray-400`} />
                                    <input value="Sneakers" type="button" name='interest' onClick={() => { onchange; setChecked("bg-gold text-white border-none") }} className={`${checked} p-2 cursor-pointer rounded-2xl md:rounded-3xl border border-gray-400`} />
                                    <input value="Jackets" type="button" name='interest' onClick={() => { onchange; setChecked("bg-gold text-white border-none") }} className={`${checked} p-2 cursor-pointer rounded-2xl md:rounded-3xl border border-gray-400`} />
                                    <input value="Dresses" type="button" name='interest' onClick={() => { onchange; setChecked("bg-gold text-white border-none") }} className={`${checked} p-2 cursor-pointer rounded-2xl md:rounded-3xl border border-gray-400`} />
                                    <input value="Fashion Shows" type="button" name='interest' onClick={() => { onchange; setChecked("bg-gold text-white border-none") }} className={`${checked} p-2 cursor-pointer rounded-2xl md:rounded-3xl border border-gray-400`} />
                                    {/* { ['Bags', 'Sneakers', 'Jackets', 'Dresses', 'Fashion Shows'].map((name) => {
                                        return <input value={name} type="button"  name='interest' onClick={()=>{onchange; setChecked("bg-gold text-white border-none")}} className={`${checked} p-2 cursor-pointer rounded-2xl md:rounded-3xl border border-gray-400`} />
                                    }) } */}
                                </div>
                            </div>
                            <p className='text-xs text-gray-800' >Mandatory information: if you chose not to give your consent for the collection of mandatory data you will not be able to save your payment method.</p>
                            <Button value="Subscribe" type="submit" classes="w-11/12 mx-auto" />
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}