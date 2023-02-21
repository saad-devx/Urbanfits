import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import Accordians from '@/components/accordians';
import Link from 'next/link';
import Button from '@/components/simple_btn';
import Image from 'next/image';
import shirt_img from '../public/card imgs/card img4.png'

export default function Checkout1(props) {
    const [expand, setExpand] = useState(false)
    const router = useRouter()
    const [readOnly, setReadOnly] = useState(true)
    return (
        <>
            <Navbar setExpand={setExpand} />
            <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
                <div className="w-full pb-20 flex justify-center">
                    <section className='w-full p-5 md:p-7 lg:p-0 lg:pt-9 lg:w-[90%] h-full font_futuraLT text-left pt-5' >
                        <div className="w-full flex flex-col lg:flex-row">
                            <div className="w-full lg:w-[60%] mb-3 mr-auto">
                                <div className="w-full border-b border-b-gray-300 mb-5"><button onClick={router.back}><i class="fa-solid fa-arrow-left mr-2"></i>Back</button></div>
                                <span className=" mb-7 flex justify-between text-2xl"> <h1>1. Contact Informaton</h1> <i class="fa-solid fa-circle-check"></i> </span>
                                <span className="flex flex-col">
                                    <label htmlFor="name">Name</label>
                                    <div className=" w-full data_field flex justify-between items-center border-b border-b-gray-400 focus:border-yellow-700 hover:border-yellow-600 transition py-2 mb-4">
                                        <input className="w-full bg-transparent outline-none border-none" readOnly={readOnly} type="email" name="name" id="name" placeholder="John Doe" /><button onClick={()=>{setReadOnly(false)}} ><i className="material-symbols-outlined">edit_square</i></button>
                                    </div>
                                </span>
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
            </section>
        </>
    )
}
