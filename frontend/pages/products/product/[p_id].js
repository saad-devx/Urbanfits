import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import dynamic from "next/dynamic";
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import SuggestionCard from '@/components/cards/suggestionPicCard';
import LinkBtn from '@/components/link_btn';
import Button from '@/components/simple_btn';
import Link from 'next/link';
import ProductCarousel from '@/components/carousels/productCarousel';
import Cutomization from '@/components/modals/cutomization';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// image imports
import image1 from '../../../public/card imgs/card img6.jpg'
import image2 from '../../../public/card imgs/card img11.jpg'
import image3 from '../../../public/card imgs/card img8.jpg'

const Product = (props) => {
    const product = { ...props.response.product, id: props.response.product._id }
    // const product = response.product
    const [expand, setExpand] = useState(false)

    // confguring the Quantity conter of the prodcut
    const [quantity, setQuantity] = useState(1)
    const changeQuantity = (e) => {
        let name = e.target.getAttribute("name")
        if (name === "decrement" && quantity === 1) return
        if (name === "increment" && quantity === product.stock) return
        if (name === "decrement") return setQuantity(quantity - 1)
        if (name === "increment") return setQuantity(quantity + 1)
    }

    // setting up teh toggle fucntion and state for the size cutomization modal 
    const [modal4, setModal4] = useState(false)

    const toggleModal = (e) => {
        if (e.target.name === "modal4") {
            if (modal4 === false) return setModal4(true)
            if (modal4 === true) return setModal4(false)
        }
    }
    // Setting up Toast
    const showToast = () => {
        toast("Your item is added to the Cart", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            type: "success",
            progress: undefined,
            theme: "colored",
            transition: Slide
        })
    }
    //Cart function
    const { addItem } = useCart()
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <Cutomization show={modal4} toggleModal={toggleModal} showToast={showToast} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
                    <div className="w-full pb-20 flex justify-center">
                        <section className='w-full p-5 md:p-7 lg:p-0 lg:pt-9 lg:w-[90%] h-full font_futuraLT text-left pt-5' >
                            <div className="w-full flex flex-col lg:flex-row lg:space-x-2">
                                <div className="w-full lg:w-[70%] mb-3">
                                    <ProductCarousel img_array={product.images} />
                                    <div className="w-full my-5">
                                        <h3 className="text-3xl mb-4">{product.name}</h3>
                                        <h4 className="Slug text-xl">{product.slug && product.slug}</h4>
                                        <p className="description font_futuraLTlite my-3">{product.description}</p>
                                        <ul className='pl-4 list-disc font_futuraLTlite text-sm leading-6' >
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit.</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                                            <li>Lorem ipsum dolor amet consectetur.</li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="details w-full lg:w-[30%] m-0 space-y-3">
                                    <div className="w-full h-28 p-4 rounded-2xl bg-white items-center">
                                        <small className="w-full">Choose a Color:</small>
                                        <span className="w-full my-3 mx-auto flex flex-wrap justify-center space-x-3">
                                            {product.color.map(color => {
                                                return <input type="button" className={`w-5 h-5 mb-3 outline-none ${color === "white" ? "border" : "border-none"} cursor-pointer rounded-full bg-${color}${color === "black" ? "" : "-600"}`} ></input>
                                            })}
                                        </span>
                                    </div>

                                    <div className="w-full h-28 p-4 rounded-2xl bg-white items-center">
                                        <small className='w-full' >{product.stock} Pieces left in Stock</small>
                                        <div className="flex justify-end my-5">
                                            <span className="w-full flex justify-end">
                                                <span onClick={changeQuantity} name="decrement" className="fa-solid fa-circle-minus text-2xl cursor-pointer active:-translate-x-2 transition-all text-gray-300"></span>
                                                <input type="number" readOnly className='w-1/6 h-auto text-sm text-center mx-3 border-none outline-none pointer-events-none' value={quantity} />
                                                <span onClick={changeQuantity} name="increment" className="fa-solid fa-circle-plus text-2xl cursor-pointer active:translate-x-2 transition-all text-gray-300"></span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-full h-32 p-4 rounded-2xl bg-white items-center">
                                        <span className="w-full flex justify-between">
                                            <small>Size</small>
                                            <small><Link href="/product/sizechart" className='underline'>Size Chart</Link></small>
                                        </span>
                                        <span className="w-full mt-3 flex flex-wrap justify-end pill-container text-xs">
                                            {product.size.map((value) => {
                                                return <>
                                                    <input type="radio" id={value} name="size" value={value} />
                                                    <label className="selector border border-gray-400 rounded-full w-10 mb-2 mr-1 px-1 py-1" htmlFor={value}>{value}</label>
                                                </>
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between p-3 text-lg">
                                        <p>Price :</p> <p>${product.price}</p>
                                    </div>
                                    <div className="w-full">
                                        <Button onclick={() => { addItem(product); showToast() }} classes="w-full" my="my-2" >Add to Cart</Button>
                                        <Button onclick={toggleModal} name="modal4" classes="w-full" my="my-2" >Customization</Button>
                                    </div>
                                    {/* Accordian */}
                                    <div className="group p-5 outline-none accordion-section rounded-2xl bg-white mb-7 border-b" tabIndex={1}>
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

                                    <div className="group p-5 outline-none accordion-section rounded-2xl bg-white mb-7 border-b" tabIndex={1}>
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
                                        return <LinkBtn href={`/products/${link}`} classes="mr-3 px-[7%] md:px-[4%] border border-gray-400" my="my-1" text="text" bg="bg-white" >{link}</LinkBtn>
                                    })}
                                </div>
                                <div className="flex flex-wrap justify-between md:justify-center lg:justify-between space-y-4 lg:space-y-0">
                                    <SuggestionCard href="/products/Ready to Wear" btnValue="Shope Now" title="Ready to Wear" img={image1} />
                                    <SuggestionCard href="/products/Bags" btnValue="Shope Now" title="Bags" img={image2} />
                                    <SuggestionCard href="/products/Shoes" btnValue="Shope Now" title="Shoes" img={image3} />
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer classes={expand === true ? 'rounded-3xl' : 'rounded-sm'} />
                </section>
            </main>
        </>
    )
}

export async function getServerSideProps(context) {
    const { p_id } = await context.query
    let response = await (await fetch(`${process.env.HOST}/api/products/getsingleproduct?id=${p_id}`)).json()
    return { props: { response, p_id } }
}
export default dynamic(() => Promise.resolve(Product), { ssr: false })