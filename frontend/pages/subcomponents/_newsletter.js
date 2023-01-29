import React from 'react'
import Button from './_button'

export default function Newsletter() {
    const onchange = (e) => {

    }
    return (
        <>
            <div className="w-full h-full font_futuraLT absolute top-0 left-0 right-0 bottom-0 z-50 bg-gray-800/40 backdrop-blur flex justify-center items-center">
                <div className="w-9/12 h-[90%] text-sm flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden">
                    <div className="w-1/2 h-full bg_newsletter">
                        {/* <Image src={newsletterImg} className="w-full h-full" /> */}
                    </div>
                    <div className="w-full h-full p-5">
                        <div className="w-full space-y-7">
                            <h3 className="text-base">Move to the Urban Fit</h3>
                            <p>Be in the know about what’s happening at the Parisian Maison: never miss out on the latest trend, newest collections and exciting special projects from Urban fit. </p>
                        </div>
                        <form className="mt-10 font_futuraLT space-y-10" >
                            <div className='space-y-3' >
                                <h3 className='text-base' >Email Sign Up*</h3>
                                <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                    <input className="bg-transparent outline-none border-none" type="email" name="email" id="email" onChange={onchange} placeholder="Email*" />
                                </div>
                            </div>
                            <div className='space-y-3' >
                                <h3 className='text-base' >Gender*</h3>
                                <div className="w-3/4  flex justify-between ">
                                    <div className='mx-2' >
                                        <input className='custom_checkbox rounded-full mx-3 translate-y-[1px]' type="radio" id="male" name="gender" value="male" /><label htmlFor='male'>Male</label>
                                    </div>
                                    <div className='mx-2' >
                                        <input className='custom_checkbox rounded-full mx-3 translate-y-[1px]' type="radio" id="female" name="gender" value="female" /><label htmlFor='female'>Female</label>
                                    </div>
                                    <div className='mx-2' >
                                        <input className='custom_checkbox rounded-full mx-3 translate-y-[1px]' type="radio" id="fluid" name="gender" value="fluid" /><label htmlFor='fluid'>Fluid</label>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-base">Favourite Subjects*</h3>
                                <div className="w-full flex text-sm space-x-3">
                                    <button className="py-2 px-3 rounded-3xl border border-gray-400" >Bags</button>
                                    <button className="py-2 px-3 rounded-3xl border border-gray-400" >Sneakers</button>
                                    <button className="py-2 px-3 rounded-3xl border border-gray-400" >Jackets</button>
                                    <button className="py-2 px-3 rounded-3xl border border-gray-400" >Dresses</button>
                                    <button className="py-2 px-3 rounded-3xl border border-gray-400" >Fasion Shows</button>
                                </div>
                            </div>
                            <Button value="Subscribe" type="submit" classes="" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}