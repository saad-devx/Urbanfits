import React, { useState } from 'react'
import Button from './_link_btn'

export default function LanguageModal(props) {

    const initialLangCountObj = {
        country: '',
        language: ''
    }
    const [credentials, setCredentials] = useState(initialLangCountObj)
    const onchange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(credentials)
    }

    return (
        <>
            <div className={`w-full h-full font_futuraLT fixed inset-0 z-50 bg-gray-800/40 backdrop-blur flex justify-center items-center transition-all duration-500 ${props.show === false ? "opacity-0 pointer-events-none" : ''}`}>
                <div className={` ${props.show === false ? "translate-y-10" : ''} relative w-2/5 md:w-2/5 h-3/4 text-sm flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden transition-all duration-500`}>
                    {/* <i className="material-symbols-rounded text-xl absolute right-5 top-5 cursor-pointer hover:rotate-180 transition-all duration-1000">close</i> */}
                    <button onClick={props.toggleModal} name="modal3" className="fa-solid fa-xmark text-3xl text-gray-700 absolute right-8 top-5 cursor-pointer hover:rotate-180 transition-all duration-700"></button>
                    <section className="w-full h-full p-7">
                        <h2 className="text-xl">Country and Language</h2>
                        <div className="w-full my-12 flex flex-col space-y-4">
                            <h3>Choose your shipping destination:</h3>
                            <div className=" w-full data_field flex items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                <i className="material-symbols-outlined mr-2">local_mall</i>
                                <select name='country' onChange={onchange} className="w-full border-none outline-none bg-transparent border-b-gray-800" autoComplete="honorific-prefix" data-missing-error="This field is required." required aria-required="true">
                                    <option name="country" id="country" value="uae" defaultChecked>United States America</option>
                                    <option name="country" id="country" value="usa">United States America</option>
                                    <option name="country" id="country" value="ca">Canada</option>
                                    <option name="country" id="country" value="pk">Pakistan</option>
                                    <option name="country" id="country" value="sa">Saudi Arabia</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full my-10 flex flex-col space-y-7">
                            <h3>Choose your language:</h3>
                            <span className="flex"><input className='rounded mx-2 translate-y-[1px]' type="radio" id="english" name="language" value="english" onChange={onchange} defaultChecked /><label htmlFor="english">English</label></span>
                            <span className="flex"><input className='rounded mx-2 translate-y-[1px]' type="radio" id="arabic" name="language" value="arabic" onChange={onchange} /><label htmlFor="arabic">Arabic</label></span>
                        </div>
                        <div className="w-full mt-7 flex justify-end space-x-3">
                            <button onClick={props.toggleModal} name="modal3" className="w-1/4 rounded-full bg-gray-200 hover:shadow-lg" >Cancel</button>
                            <Button my="0" value="Update" classes="w-1/4" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
