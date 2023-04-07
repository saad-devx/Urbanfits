import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import Accordians from './accordians';
import LinkBtn from '@/components/buttons/link_btn';
import Button from './buttons/simple_btn';
import Shoppingcard from './cards/shoppingcard';
// Image imports
import Image from 'next/image'
import EmptyCartVector from "../public/emptyCart.svg"
const image1 = 'https://images.unsplash.com/photo-1551377293-17f3c11c4768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'

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
        <li key={props.li_key} className="relative group w-full h-[250px] my-8 flex justify-between items-center border-y md:border-none">
            <div className="w-4/5 md:w-auto h-full mr-4 flex justify-center items-center overflow-hidden">
                <Image width={160} height={200} src={product.images[0].url} alt="Urban images" className="w-full md:w-90pr object-cover object-top group-hover:scale-105 transition-all duration-700" ></Image>
            </div>
            <div className="w-full md:w-[85%] py-3 md:p-0 h-full flex flex-col md:flex-row justify-between items-start md:justify-between md:items-center font_gotham_medium tracking-widest">
                <h3 className="max-w-[13rem] font_gotham_medium text-xs lg:text-sm transition-all duration-700">{product.name.toUpperCase()}</h3>
                <h3 className="text-xs md:text-sm">{product.color.toUpperCase()}</h3>
                <select type="select" defaultValue={product.size} className="w-90pr md:w-24 h-9 md:h-11 font_gotham_medium tracking-widest text-gotham-black text-xs px-5 border outline-none">
                    {product.sizes.map(size => {
                        return <option value={size}>{size}</option>
                    })}
                </select>
                <span className="w-90pr md:w-24 h-9 md:h-11 px-5 font_gotham_light border flex justify-between items-center">
                    <span onClick={(e) => { changeQuantity(e, product.id) }} name="decrement" className="text-lg cursor-pointer transition-all text-gray-300 select-none">-</span>
                    <input type="number" readOnly className='w-2/5 md:w-3/5 h-auto text-xs font_gotham text-center border-none outline-none pointer-events-none' value={quantity} />
                    <span onClick={(e) => { changeQuantity(e, product.id) }} name="increment" className="text-lg cursor-pointer transition-all text-gray-300 select-none">+</span>
                </span>
                <h3 className="font_gotham_bold self-start md:self-center text-xs md:text-sm">${product.price}</h3>
                <button onClick={() => { removeItem(product.id) }} className="absolute bottom-3 right-0 font_gotham_medium text-xs tracking-widest flex"><i className="fa-solid fa-trash group-hover:animate-bounce mx-2"></i>REMOVE</button>
            </div>
        </li>
    )
}

export default function Cart(props) {
    // Setting up the Cart functions
    const { isEmpty, totalUniqueItems, items, cartTotal } = useCart()
    // function to get rounded off number upto 3 decimal places
    const get3dpNumber = (num) => {
        return num.toFixed(3)
    }

    return (
        <>
            <section className={`bg-white border-t w-full layout_height fixed top-[50px] right-0 z-50 transition-all duration-700 overflow-x-hidden overflow-y-scroll ${props.cart === true ? "" : "translate-x-full opacity-0"} font_gotham`}>
                <div className="w-full flex justify-center">
                    {isEmpty ?
                        <section className="w-full h-screen flex flex-col justify-center items-center space-y-4" >
                            <Image src={EmptyCartVector} alt="Urban images" className="w-1/2 md:w-auto" />
                            <h4 className="text-3xl text-center">Your Cart Is Empty</h4>
                            <p className="w-11/12 md:w-1/2 lg:w-1/3 text-center font_gotam_light">Look like have not added anything to your cart. Go ahead & explore top categories.</p>
                            <Button onclick={props.toggleCart} classes="w-1/2 md:w-1/4 lg:w-64" >Back to Shope</Button>
                        </section>
                        :
                        <section className='w-full h-full p-5 md:p-7 lg:p-10 text-left' >
                                    <h1 className="font_gotham_bold text-2xl lg:text-[32px] text-center tracking-expand my-10">SHOPPOING CART</h1>
                            <div className="w-full flex flex-col lg:flex-row lg:justify-between">
                                <div className="w-full lg:w-[65%] mb-3">
                                    <span className="w-full flex justify-between border-b border-b-gray-300 mb-5"> <h5>Shopping Bag ({totalUniqueItems})</h5> <button onClick={props.toggleCart}><i className="fa-solid fa-arrow-left mr-2"></i>Back</button> </span>
                                    <div className="hidden md:flex justify-between w-full font_gotham_medium tracking-widest text-xs">
                                        <span className="md:w-[35vw] lg:w-[23vw] 2xl:w-[18vw] 2xl:bg-green-600 text-gray-500">PRODUCT</span>
                                        <span className='text-gray-500'>COLOR</span>
                                        <span className='text-gray-500'>SIZE</span>
                                        <span className='text-gray-500'>UNIT</span>
                                        <span className='text-gray-500'>PRIZE</span>
                                    </div>
                                    {items.map((product) => {
                                        return <CartItem li_key={product.id} product={product} size={product.size[0]} toggleCart={props.toggleCart} get3dpNumber={get3dpNumber} />
                                    })}
                                </div>
                                <div className="details w-full lg:w-[30%] space-y-3">
                                    <h3 className="text-center lg:text-start text-xl font_gotham_medium text-[28px] mb-5">ORDER SUMMARY</h3>
                                    <div className="w-full h-auto p-4 rounded-2xl bg-white items-center card_boxshadow">
                                        <span className="w-full my-3 mx-auto flex justify-between"><small>Subtotal</small> <small>${get3dpNumber(cartTotal)}</small></span>
                                        <span className="w-full my-3 mx-auto flex justify-between"><small>Shipping</small> <small>${items[0].shipping_fee}</small></span>
                                        <span className="w-full my-3 mx-auto flex justify-between"><small>Sales Tax</small> <small>${0}</small></span>
                                        <span className="w-full my-3 mx-auto flex justify-between"><small>Total</small> <small>${parseFloat(cartTotal + items[0].shipping_fee).toFixed(3)}</small></span>
                                        <LinkBtn href="/checkout/step1" onclick={props.toggleCart} classes="w-full" >Checkout</LinkBtn>
                                    </div>
                                    <Accordians />
                                </div>
                            </div>

                            <div className="w-full mt-10">
                                <h3 className="text-2xl font_gotham_medium tracking-widest">MORE TO EXPLORE</h3>
                                <div className="w-full my-5 flex flex-wrap">
                                    {["Ready to Wear", "Atelier Urban", "Essentials", "Bags", "Sneakers"].map(link => {
                                        return <LinkBtn href={`/products/${link}`} classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >{link}</LinkBtn>
                                    })}
                                </div>
                                <section className="w-full my-6 md:my-10 flex flex-wrap overflow-hidden">
                                    <Shoppingcard colors={3} price={67.99} name="Leather Jacket - Men" img={image1} />
                                    <Shoppingcard colors={0} price={45.99} name="Ladies Herbel Bag" img={image1} />
                                    <Shoppingcard colors={2} price={72.99} name="Men Joggers" img={image1} />
                                    <Shoppingcard colors={2} price={72.99} name="Men Joggers" img={image1} />
                                </section>
                            </div>
                        </section>}
                </div>
            </section>
        </>
    )
}
