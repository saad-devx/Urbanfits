import React, { useState } from 'react'
import LinkBtn from '@/components/link_btn';
import Button from './simple_btn';
import Link from 'next/link';
import SuggestionCard from './cards/suggestionPicCard';
// Image imports
import Image from 'next/image';
const image1 = 'https://images.unsplash.com/photo-1551377293-17f3c11c4768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
import image2 from '../public/card imgs/card img11.jpg'

// Cart item function
const CartItem = (props) => {
    // confguring the Quantity conter of the prodcut
    const [quantity, setQuantity] = useState(1)
    const changeQuantity = (e) => {
        let name = e.target.getAttribute("name")
        if (name === "decrement" && quantity === 1) return
        if (name === "increment" && quantity === props.stock?props.stock:1) return
        if (name === "decrement") return setQuantity(quantity - 1)
        if (name === "increment") return setQuantity(quantity + 1)
    }
    return (
        <li className="Cart_Card bg-white card_boxshadow w-full h-80 flex justify-between rounded-3xl p-5">
            <div className="w-1/3 h-full">
                <Image src={props.img} className="w-full h-full rounded-xl object-cover" ></Image>
            </div>
            <div className="w-1/3 flex flex-col items-end">
                <h3 className="w-full text-xl lg:text-2xl text-center">Product Title here</h3>
                <div className="w-3/4 h-auto my-auto font_futuraLTlite">
                    <span className="w-full my-1 mx-auto flex justify-between"><small>Color</small> <small>${props.color}</small></span>
                    <span className="w-full my-1 mx-auto flex justify-between"><small>Size</small> <small>${props.size}</small></span>
                    <span className="w-full my-1 mx-auto flex justify-between"><small>Quantity</small> <small>${props.quantity}</small></span>
                    <span className="w-full my-1 mx-auto flex justify-between"><small>Price</small> <small>${props.price}</small></span>
                    <span className="w-full my-1 mx-auto flex justify-between"><small>Discount</small> <small>${props.discount ? props.discount : "0"}</small></span>
                    <span className="w-full my-1 mx-auto flex justify-between"><small>Sale Price</small> <small>${props.sale_price}</small></span>
                </div>
                <div className="w-full flex justify-between">
                    <small><Link href="#" >Edit<i class="fa-regular fa-pen-to-square ml-1"></i></Link></small>
                    <small><button>Remove <i class="fa-solid fa-trash text-gray-800 ml-1"></i></button></small>
                    <span className="w-24 flex justify-between">
                        <span onClick={changeQuantity} name="decrement" className="fa-solid fa-circle-minus text-xl cursor-pointer active:-translate-x-2 transition-all text-gray-300"></span>
                        <input type="number" readOnly className=' w-[60%] h-auto text-sm text-center mx-3 border-none outline-none pointer-events-none' value={quantity} />
                        <span onClick={changeQuantity} name="increment" className="fa-solid fa-circle-plus text-xl cursor-pointer active:translate-x-2 transition-all text-gray-300"></span>
                    </span>
                </div>
            </div>
        </li>
    )
}

export default function Cart(props) {

    return (
        <>
            <section className={`bg-gray400/40 backdrop-blur-[14px] w-full lg:w-[100%] h-full fixed right-0 z-50 transition-all duration-[1s] overflow-x-hidden overflow-y-scroll ${props.cart === true ? "" : "translate-x-full opacity-0"} font_futuraLT`}>
                <div className="w-full flex justify-center">
                    <section className='w-full p-5 md:p-7 lg:px-0 lg:py-20 lg:w-[90%] h-full font_futuraLT text-left' >
                        {/* <button onClick={props.toggleCart} className="fa-solid fa-xmark text-3xl text-black absolute right-8 top-5 cursor-pointer hover:rotate-180 transition-all duration-700"></button> */}
                        <div className="w-full flex flex-col lg:flex-row gap-5">
                            <div className="w-full lg:w-[70%] mb-3">
                                <span className="w-full flex justify-between border-b border-b-gray-300 mb-5"> <h5>Shopping Bag(1)</h5> <button onClick={props.toggleCart}>Back</button> </span>
                                <CartItem img={image2} />
                            </div>
                            <div className="details w-full lg:w-[30%] m-0 space-y-3">
                                <h3 className="text-2xl mb-5">Order Summary</h3>
                                <div className="w-full h-auto p-4 rounded-2xl bg-white items-center card_boxshadow">
                                    <span className="w-full my-3 mx-auto flex justify-between"><small>Subtotal</small> <small>$0</small></span>
                                    <span className="w-full my-3 mx-auto flex justify-between"><small>Shipping</small> <small>$0</small></span>
                                    <span className="w-full my-3 mx-auto flex justify-between"><small>Sales Tax</small> <small>$0</small></span>
                                    <Button classes="w-full" >Checkout</Button>
                                </div>
                                {/* Accordian */}
                                <div className="group p-5 outline-none accordion-section rounded-2xl bg-white mb-7 border-b card_boxshadow" tabIndex={1}>
                                    <div className="group flex justify-between h-12 items-center text-gray-500 transition ease duration-700 cursor-pointer relative">
                                        <div className="group-focus:text-black text-base transition ease duration-700">Contact</div>
                                        <span className="transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180 ">
                                            <i className="fas fa-minus minus_icon group-focus:block"></i>
                                            <i className="fas fa-plus group-focus:hidden"></i>
                                        </span>
                                    </div>
                                    <div className="group-focus:max-h-screen max-h-0 border-b-gray-300 text-sm leading-5 rounded overflow-hidden ease duration-700">
                                        <div className="flex items-center mb-3 py-2 border-b border-b-gray-400">
                                            <i className="material-symbols-outlined mr-6">mail</i>
                                            <span>
                                                <h5 className='mb-2'>Email</h5>
                                                <p className=' font_futuraLTlite '>Send us an email : Our customer care team will get back to you as soon as possible.</p>
                                            </span>
                                        </div>
                                        <div className="flex items-center py-2">
                                            <i className="material-symbols-outlined mr-6">call</i>
                                            <span>
                                                <h5 className='mb-2'>Call</h5>
                                                <p className=' font_futuraLTlite '>You can also call us on the following number +1 (559) 554-0082 Monday to Saturday from 9am to 8pm, except public holiday. </p>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="group p-5 outline-none accordion-section rounded-2xl bg-white mb-7 border-b card_boxshadow" tabIndex={1}>
                                    <div className="group flex justify-between h-12 items-center text-gray-500 transition ease duration-700 cursor-pointer relative">
                                        <div className="group-focus:text-black text-base transition ease duration-700">Delivery & Return</div>
                                        <span className="transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180 ">
                                            <i className="fas fa-minus minus_icon group-focus:block"></i>
                                            <i className="fas fa-plus group-focus:hidden"></i>
                                        </span>
                                    </div>
                                    <div className="group-focus:max-h-screen max-h-0 border-b-gray-300 text-sm leading-5 rounded overflow-hidden ease duration-700">
                                        <div className="flex items-center mb-3 py-2 border-b border-b-gray-400">
                                            <i className="material-symbols-outlined mr-6">local_mall</i>
                                            <span>
                                                <h5 className='mb-2'>Delivery</h5>
                                                <p className=' font_futuraLTlite '>-Express delivery made within 2-4 working days(30$)<br />-Potential delays to be communicated due to customs-approved treatment.</p>
                                            </span>
                                        </div>
                                        <div className="flex items-center mb-3 py-2 border-b border-b-gray-400">
                                            <i className="material-symbols-outlined mr-6">local_shipping</i>
                                            <span>
                                                <h5 className='mb-2'>Return</h5>
                                                <p className=' font_futuraLTlite '>We make return easy for you. For more information see our return policy.<br />-Potential delays to be communicated due to customs-approved treatment.</p>
                                            </span>
                                        </div>
                                        <div className="flex items-center mb-3 py-2 border-b border-b-gray-400">
                                            <i className="material-symbols-outlined mr-6">credit_card</i>
                                            <span>
                                                <h5 className='mb-2'>Payment</h5>
                                                <p className=' font_futuraLTlite '>Credit card, Debit card & Paypal.</p>
                                            </span>
                                        </div>
                                        <div className="flex items-center py-2">
                                            <i className="material-symbols-outlined mr-6">search</i>
                                            <span>
                                                <h5 className='mb-2'>FAQ</h5>
                                                <p className=' font_futuraLTlite '>Looking for information? See our FAQs</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-10">
                            <h3 className="text-2xl">More To Explore</h3>
                            <div className="w-full my-5 flex flex-wrap">
                                {["Ready to Wear", "Atelier Urban", "Essentials", "Bags", "Sneakers"].map(link => {
                                    return <LinkBtn classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >{link}</LinkBtn>
                                })}
                            </div>
                            <div className="flex flex-wrap justify-between md:justify-center lg:justify-between space-y-4 lg:space-y-0">
                                <SuggestionCard btnValue="Shope Now" title="Ready to Wear" img={image1} object_fit="object-top" ></SuggestionCard>
                                <SuggestionCard btnValue="Shope Now" title="Bags" img={image1} object_fit="object-top" ></SuggestionCard>
                                <SuggestionCard btnValue="Shope Now" title="Shoes" img={image1} object_fit="object-top" ></SuggestionCard>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
