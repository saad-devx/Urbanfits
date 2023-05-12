import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import LinkBtn from '@/components/buttons/link_btn';
import Button from './buttons/simple_btn';
import MoreToExplore from './more_to_explore';
// Image imports
import Image from 'next/image'
import EmptyCartVector from "../public/cart/emptyCart.svg"
import CartBg from '@/public/cart/cartbg.jpg'
import Link from 'next/link';

// Cart item function
function CartItem(props) {
    const { product } = props
    //Setting up the cart functions
    const { updateItemQuantity, removeItem } = useCart()
    // confguring the Quantity conter of the prodcut
    const [quantity, setQuantity] = useState(product.quantity)
    // updateItemQuantity(product.id, product.quantity)
    const changeQuantity = (e, id) => {
        // updateItemQuantity(product.id, product.quantity)
        let name = e.target.getAttribute("name")
        if (name === "decrement" && quantity === 1) return
        if (name === "increment" && quantity === product.stock) return
        if (name === "decrement") {
            setQuantity(quantity - 1)
            updateItemQuantity(id, quantity - 1)
        }
        if (name === "increment") {
            setQuantity(quantity + 1)
            updateItemQuantity(id, quantity + 1)
        }
    }

    return (
        <li key={props.li_key} className="relative group w-full h-[110px] my-10 text-[10px] lg:text-xs flex md:justify-between items-center">
            <div className="relative w-[100px] h-[110px] lg:w-[129px] lg:h-[140px] mr-5 flex justify-center items-center overflow-hidden">
                <Image width={129} height={160} src={product.images[0].url} alt="Urban images" className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700" ></Image>
                <button onClick={() => { removeItem(product.id) }} className="md:hidden absolute top-2 left-2 fa-solid fa-xmark text-gray-200" />
            </div>
            {/* to be displayed from md breakpoint */}
            <div className="hidden md:flex md:w-[85%] lg:py-3 md:p-0 h-full flex-row justify-between items-center font_gotham_medium tracking-widest">
                <Link href={`/products/product/${product.product_id}?color=${product.color}`} className="w-[145px] font_gotham_medium text-black transition-all duration-700">{product.name.toUpperCase()}</Link>
                <h3 className="w-[100px]">{product?.color.toUpperCase()}</h3>
                {/* <Select /> */}
                <div className='relative'>
                    <span className="select_container after:right-[20%]"></span>
                    <select type="select" defaultValue={product.size} className="select_element relative cursor-pointer w-24 h-11 font_gotham_medium tracking-widest text-xs px-5 border outline-none">
                        {product.sizes.map(size => {
                            return <option value={size}>{size}</option>
                        })}
                    </select>
                </div>
                <span className="w-24 h-11 px-5 font_gotham_light border flex justify-between items-center">
                    <span onClick={(e) => { changeQuantity(e, product.id) }} name="decrement" className="text-lg cursor-pointer transition-all text-gray-300 select-none">-</span>
                    <input type="number" readOnly className='w-3/5 h-auto font_gotham text-center border-none outline-none pointer-events-none' value={quantity} />
                    <span onClick={(e) => { changeQuantity(e, product.id) }} name="increment" className="text-lg cursor-pointer transition-all text-gray-300 select-none">+</span>
                </span>
                <h3 className="font_gotham_bold self-center text-xs">${props.get3dpNumber(product.price * quantity)}</h3>
                <button onClick={() => { removeItem(product.id) }} className="hidden md:block fa-solid fa-xmark font_gotham_medium text-xs tracking-widest"></button>
            </div>
            {/* to be displayed in mobile */}
            <div className="md:hidden h-full ml-2 flex flex-col justify-between items-start font_gotham_medium tracking-widest">
                <h3 className="w-full font_gotham_medium text-black transition-all duration-700">{product.name.toUpperCase()} </h3>
                <h3 className="font_gotham_black self-start text-xs">${props.get3dpNumber(product.price * quantity)}</h3>
                <div className="w-full flex self-end gap-3">
                    <div className='relative'>
                        <span className="select_container after:right-[20%]"></span>
                        <select type="select" defaultValue={product.size} className="select_element relative cursor-pointer w-[100px] h-[30px] font_gotham_medium tracking-widest text-[10px] px-5 border outline-none">
                            {product.sizes.map(size => {
                                return <option value={size}>{size}</option>
                            })}
                        </select>
                    </div>
                    <span className="w-[100px] h-[30px] px-5 font_gotham_light border flex justify-between items-center">
                        <span onClick={(e) => { changeQuantity(e, product.id) }} name="decrement" className="text-lg cursor-pointer transition-all text-gray-300 select-none">-</span>
                        <input type="number" readOnly className='w-2/5 h-auto font_gotham text-center border-none outline-none pointer-events-none' value={quantity} />
                        <span onClick={(e) => { changeQuantity(e, product.id) }} name="increment" className="text-lg cursor-pointer transition-all text-gray-300 select-none">+</span>
                    </span>
                </div>
            </div>
        </li>
    )
}

export default function Cart(props) {
    // Setting up the Cart functions
    const { isEmpty, totalUniqueItems, items, cartTotal, emptyCart } = useCart()
    // function to get rounded off number upto 3 decimal places
    const get3dpNumber = (num) => {
        return num.toFixed(3)
    }

    return (
        <>
            <section className={`bg-white w-full fixed ${props.top_0 ? 'h-screen top-0' : 'layout_height top-[50px]'} right-0 z-50 transition-all duration-1000 ease-[cubic-bezier(1,0.35,0.15,1)] overflow-x-hidden overflow-y-scroll ${props.cart === true ? "" : "-translate-y-[130%] opacity-0"} font_gotham`}>
                <div className="w-full flex justify-center">
                    {isEmpty ?
                        <section className="w-full layout_height flex flex-col justify-center items-center space-y-4" >
                            <Image src={EmptyCartVector} alt="Urban images" className="w-1/2 md:w-auto" />
                            <h4 className="text-3xl text-center">Your Cart Is Empty</h4>
                            <p className="w-11/12 md:w-1/2 lg:w-1/3 text-center font_gotam_light">Look like have not added anything to your cart. Go ahead & explore top categories.</p>
                            <Button onclick={props.toggleCart} classes="w-1/2 md:w-1/4 lg:w-64" >Back to Shope</Button>
                        </section>
                        :
                        <section className='w-full h-full pt-0 lg:p-10 lg:pb-14 lg:pt-0 text-left' >
                            <div className="relative w-full layout_height mb-5 md:mb-7 lg:mb-10 overflow-hidden">
                                <Image src={CartBg} className='h-full lg:w-full lg:h-auto object-cover object-center' />
                                <h1 className="w-full text-center absolute top-1/2 -translate-y-1/2 font_gotham_bold text-white text-2xl md:text-[32px] tracking-[0.15em] lg:tracking-expand my-10">SHOPPING CART</h1>
                            </div>
                            <div className="w-full px-4 lg:px-14 flex flex-col lg:justify-between">
                                <div className="w-full mb-3">
                                    {/* <span className="w-full flex justify-between border-b border-b-gray-300 mb-5"> <h5>Shopping Bag ({totalUniqueItems})</h5> <button onClick={props.toggleCart}><i className="fa-solid fa-arrow-left mr-2"></i>Back</button> </span> */}
                                    <div className="hidden lg:flex justify-between w-full mt-7 mb-3 font_gotham_medium tracking-widest text-xs">
                                        <span className="md:w-[35vw] lg:w-[18vw] 2xl:w-[18vw] text-gray-300">PRODUCT</span>
                                        <span className='text-gray-300 translate-x-2'>COLOR</span>
                                        <span className='text-gray-300'>SIZE</span>
                                        <span className='text-gray-300'>UNITS</span>
                                        <span className='w-[10%] text-gray-300'>AMOUNT</span>
                                    </div>
                                    {items.map((product) => {
                                        return <CartItem li_key={product.id} product={product} get3dpNumber={get3dpNumber} />
                                    })}
                                    <button onClick={emptyCart} className="text-xs md:text-sm">Delete All <i className="fa-solid fa-xmark ml-10" /> </button>
                                </div>
                                <div className="w-full lg:w-[400px] self-center lg:self-end">
                                    <h3 className="text-center text-xs lg:text-base font_gotham_medium tracking-[0.3em] lg:tracking-expand mb-5">ORDER SUMMARY</h3>
                                    <div className="w-full h-auto p-4 rounded-2xl font_gotham_medium bg-white items-center border">
                                        <span className="w-full my-3 mx-auto flex justify-between"><small>SUBTOTAL</small> <small>${get3dpNumber(cartTotal)}</small></span>
                                        <span className="w-full my-3 mx-auto flex justify-between"><small>SHIPPING</small> <small>${items[0].shipping_fee}</small></span>
                                        <br />
                                        <span className="w-full my-3 mx-auto flex justify-between"><small>TOTAL</small> <small>${parseFloat(cartTotal + items[0].shipping_fee).toFixed(3)}</small></span>
                                    </div>
                                    <LinkBtn href="/checkout/step1" onclick={props.toggleCart} font='font_gotham_medium tracking-[0.4em]' fontSize='text-xs' classes="w-full">CHECK OUT</LinkBtn>
                                </div>
                            </div>
                            <div className="w-full px-4 lg:px-14">
                                <MoreToExplore />
                            </div>
                        </section>}
                </div>
            </section>
        </>
    )
}
