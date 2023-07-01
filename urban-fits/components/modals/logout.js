import React from 'react'
import { useRouter } from 'next/router';
import Button from '../buttons/simple_btn';

export default function Logout(props) {
    const router = useRouter()
    return (
        <>
            <div className={`w-full h-full font_gotham fixed inset-0 z-50 bg-gray-800/40 backdrop-blur flex justify-center items-center transition-all duration-500 ${props.modal5 === false ? "opacity-0 pointer-events-none" : ''}`}>
                <div className={` ${props.modal5 === false ? "translate-y-10" : ''} relative w-11/12 md:w-3/5 lg:w-[33rem] text-sm flex flex-col lg:flex-row bg-white rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500`}>
                    <button onClick={props.toggleModal} name="modal5" className="material-symbols-rounded text-3xl absolute right-5 top-5 cursor-pointer hover:rotate-180 transition-all duration-1000">close</button>
                    <section className="w-full h-full p-6">
                        <div className="w-full space-y-5">
                        <h2 className="text-black font_gotham_medium text-sm md:text-base tracking-widest">LOGOUT</h2>
                            <p className='text-xs' >Are you sure you want to log out from your account?</p>
                        </div>
                        <div className="w-full mt-7 flex  justify-around">
                            <Button onClick={props.toggleModal} name="modal5" my="my-2" bg="bg-gray-200" text="black" classes="w-48pr" >Cancel</Button>
                            <Button onClick={()=>props.logOut(router)} my="my-2" classes="w-48pr text-sm md:text-base text-center" >Sign Out</Button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}