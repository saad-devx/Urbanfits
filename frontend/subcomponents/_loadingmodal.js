import Link from 'next/link'
import React , { useState } from 'react'
import Button from './_link_btn'
import LanguageModal from './_languagemodal';

// Country location notifyer Modal Component
export default function LoadingModal(props) {

    // states and function for modals
    const [modal3, setModal3] = useState(false)
    const toggleModal = (e) => {
        if (e.target.name === "modal3") {
            if (modal3 === false) return setModal3(true)
            if (modal3 === true) return setModal3(false)
        }
    }
    return (
        <>
            <LanguageModal show={modal3} toggleModal={toggleModal} />
            <div className={`w-full h-full font_futuraLT fixed inset-0 z-30 bg-gray-800/40 backdrop-blur flex justify-center items-center transition-all duration-500 ${props.show === false ? "opacity-0 pointer-events-none" : ''}`}>
                <div className={` ${props.show === false ? "translate-y-10" : ''} relative w-2/5 md:w-2/5 h-1/2 text-sm flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden transition-all duration-500`}>
                    {/* <i className="material-symbols-rounded text-xl absolute right-5 top-5 cursor-pointer hover:rotate-180 transition-all duration-1000">close</i> */}
                    <button onClick={props.toggleModal} name="modal1" className="fa-solid fa-xmark text-3xl text-gray-700 absolute right-8 top-5 cursor-pointer hover:rotate-180 transition-all duration-700"></button>
                    <section className="w-full h-full p-7">
                        <div className="w-full space-y-5">
                            <h2 className="text-2xl">Change Country</h2>
                            <p>You are trying to access the united states sites - would you like to go to the United Arab Emirates site?</p>
                        </div>
                        <div className="w-full mt-7 flex flex-col justify-center space-y-3">
                            <Button my="my-0" value="Yes, go to United Arab Emirates site" classes="w-full" />
                            <Button my="my-0" value="No, stay on the United States site" bg="bg-white" text="black" classes="w-full border border-black" />
                            <Link href="#" onClick={toggleModal} name="modal" className="w-full text-base text-center text-gray-700 underline " >Choose a different Country/Region</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}