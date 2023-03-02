import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import { useRouter } from 'next/router';
import Accordians from './accordians';
import LinkBtn from '@/components/link_btn';
import Button from './simple_btn';
import Link from 'next/link';
import SuggestionCard from './cards/suggestionPicCard';
// Image imports
import Image from 'next/image'
import EmptyCartVector from "../public/emptyCart.svg"
const image1 = 'https://images.unsplash.com/photo-1551377293-17f3c11c4768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'

// Cart item function
function CartItem (props)  {
    const router = useRouter()
    const product = props.product
    // confguring the Quantity conter of the prodcut
    const [quantity, setQuantity] = useState(1)
    const changeQuantity = (e) => {
        let name = e.target.getAttribute("name")
        if (name === "decrement" && quantity === 1) return
        if (name === "increment" && quantity === props.stock ? props.stock : 1) return
        if (name === "decrement") return setQuantity(quantity - 1)
        if (name === "increment") return setQuantity(quantity + 1)
    }
    //Setting up the cart functions
    const { updateItemQuantity, removeItem } = useCart()
    return (
        <li key={props.li_key} className="relative mb-3 bg-white card_boxshadow w-full h-64 md:h-80 flex justify-between items-center rounded-xl md:rounded-3xl p-5">
            <div className=" w-[35%] md:w-1/3 h-3/5 md:h-full">
                <Image width={640} height={853} src={product.images[0].url} alt="Urban images" className="w-full h-full rounded-lg md:rounded-xl object-cover object-top" ></Image>
            </div>
            <div className="w-4/6 md:w-2/5 flex flex-col items-end">
                <h3 className="w-full lg:text-2xl text-end">{product.name}</h3>
                <div className="w-3/4 h-auto text-sm md:text-base my-5 md:my-3 font_futuraLTlite">
                    <span key={1} className="w-full md:mb-2 mx-auto flex justify-between"><small>Color</small> <small>{props.color}</small></span>
                    <span key={2} className="w-full md:mb-2 mx-auto flex justify-between"><small>Size</small> <small>{props.size}</small></span>
                    <span key={3} className="w-full md:mb-2 mx-auto flex justify-between"><small>Quantity</small> <small>{props.quantity}</small></span>
                    <span key={4} className="w-full md:mb-2 mx-auto flex justify-between"><small>Price</small> <small>${props.price}</small></span>
                    <span key={5} className="w-full md:mb-2 mx-auto flex justify-between"><small>Discount</small> <small>{props.discount ? props.discount : 0}</small></span>
                    <span key={6} className="w-full md:mb-2 mx-auto flex justify-between"><small>Sale Price</small> <small>${props.price + 0}</small></span>
                </div>
                <div className=" text-sm md:text-base w-full flex justify-between">
                    <small><Link href={`/products/product/${product._id}`} onClick={()=>{props.toggleCart()}} >Edit<i className="fa-regular fa-pen-to-square ml-1"></i></Link></small>
                    <small onClick={() => { removeItem(product._id) }} ><button>Remove <i className="fa-solid fa-trash text-gray-800 ml-1"></i></button></small>
                    <span className="w-20 md:w-24 flex justify-between">
                        <span onClick={changeQuantity} name="decrement" className="fa-solid fa-circle-minus text-lg md:text-xl cursor-pointer active:-translate-x-2 transition-all text-gray-300"></span>
                        <input type="number" readOnly className='w-2/5 md:w-3/5 h-auto text-sm text-center md:mx-3 border-none outline-none pointer-events-none' value={quantity} />
                        <span onClick={() => updateItemQuantity(product.id, product.stock + 1)} name="increment" className="fa-solid fa-circle-plus text-lg md:text-xl cursor-pointer active:translate-x-2 transition-all text-gray-300"></span>
                    </span>
                </div>
            </div>
        </li>
    )
}

export default function Cart(props) {
    // Setting up the Cart functions
    const { isEmpty, totalUniqueItems, items } = useCart()

    return (
        <>
            <section className={`bg-gray-100/40 backdrop-blur-[14px] w-full lg:w-[100%] h-full fixed right-0 z-50 transition-all duration-[1s] overflow-x-hidden overflow-y-scroll ${props.cart === true ? "" : "translate-x-full opacity-0"} font_futuraLT`}>
                <div className="w-full flex justify-center">
                    {isEmpty ? <section className="w-full h-screen flex flex-col justify-center items-center space-y-4" >
                        <Image src={EmptyCartVector} alt="Urban images" className="w-1/2 md:w-auto" />
                        <h4 className="text-3xl text-center">Your Cart Is Empty</h4>
                        <p className="w-11/12 md:w-1/2 lg:w-1/3 text-center font_futuraLTlite">Look like have not added anything to your cart. Go ahead & explore top categories.</p>
                        <Button onclick={props.toggleCart} classes="w-1/2 md:w-1/4 lg:w-64" >Back to Shope</Button>
                    </section>
                        : <section className='w-full p-5 md:p-7 lg:px-0 lg:pb-20 lg:pt-12 lg:w-[90%] h-full font_futuraLT text-left' >
                            <div className="w-full flex flex-col lg:flex-row gap-5">
                                <div className="w-full lg:w-[70%] mb-3">
                                    <span className="w-full flex justify-between border-b border-b-gray-300 mb-5"> <h5>Shopping Bag({totalUniqueItems})</h5> <button onClick={props.toggleCart}><i className="fa-solid fa-arrow-left mr-2"></i>Back</button> </span>
                                    {items.map((product, index) => {
                                        return <CartItem li_key={index} product={product} size={product.size[0]} toggleCart={props.toggleCart} />
                                    })}
                                </div>
                                <div className="details w-full lg:w-[30%] m-0 space-y-3">
                                    <h3 className="text-2xl mb-5">Order Summary</h3>
                                    <div className="w-full h-auto p-4 rounded-2xl bg-white items-center card_boxshadow">
                                        <span className="w-full my-3 mx-auto flex justify-between"><small>Subtotal</small> <small>$0</small></span>
                                        <span className="w-full my-3 mx-auto flex justify-between"><small>Shipping</small> <small>$0</small></span>
                                        <span className="w-full my-3 mx-auto flex justify-between"><small>Sales Tax</small> <small>$0</small></span>
                                        <LinkBtn href="/checkout/step1" onclick={props.toggleCart} classes="w-full" >Checkout</LinkBtn>
                                    </div>
                                    {/* Accordian */}
                                    <Accordians />
                                </div>
                            </div>

                            <div className="w-full mt-10">
                                <h3 className="text-2xl">More To Explore</h3>
                                <div className="w-full my-5 flex flex-wrap">
                                    {["Ready to Wear", "Atelier Urban", "Essentials", "Bags", "Sneakers"].map(link => {
                                        return <LinkBtn href={`/products/${link}`} classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >{link}</LinkBtn>
                                    })}
                                </div>
                                <div className="flex flex-wrap justify-between md:justify-center lg:justify-between space-y-4 lg:space-y-0">
                                    <SuggestionCard href="/products/Ready to Wear" btnValue="Shope Now" title="Ready to Wear" img={image1} />
                                    <SuggestionCard href="/products/Bags" btnValue="Shope Now" title="Bags" img={image1} />
                                    <SuggestionCard href="/products/Shoes" btnValue="Shope Now" title="Shoes" img={image1} />
                                </div>
                            </div>
                        </section>}
                </div>
            </section>
        </>
    )
}
