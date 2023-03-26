import React, { useEffect, useState } from 'react'
import { useCart } from "react-use-cart";
import { useRouter } from 'next/router';
import Navbar from '@/components/oldnavbar'
import Footer from '@/components/footer'
import Accordians from '@/components/accordians';
import SuggestionCard from '@/components/cards/suggestionPicCard';
import LinkBtn from '@/components/buttons/link_btn';
import Button from '@/components/buttons/simple_btn';
import Link from 'next/link';
import ProductCarousel from '@/components/carousels/productCarousel';
import Cutomization from '@/components/modals/cutomization';
import toaster from '@/utils/toast_function';
// image imports
import image1 from '../../../public/card imgs/card img6.jpg'
import image2 from '../../../public/card imgs/card img11.jpg'
import image3 from '../../../public/card imgs/card img8.jpg'

export default function Product(props) {
    const productData = { ...props.response.product, id: props.response.product._id }
    const router = useRouter()
    const [expand, setExpand] = useState(false)
    const [product, setProduct] = useState(productData.variants[0])
    const [sizevalue, setSizevalue] = useState(null)
    
    useEffect(() => {
        const { color } = router.query
        if(!color) return
        let newProduct = productData.variants.filter((variant) => {
            return variant.color_name === color
        })
        setProduct(newProduct[0])
        setSizevalue(null)
    }, [router.query.color])
    // confguring the Quantity conter of the prodcut
    const [quantity, setQuantity] = useState(1)
    const changeQuantity = (e) => {
        let name = e.target.getAttribute("name")
        if (name === "decrement" && quantity === 1) return
        if (name === "increment" && quantity === product.stock) return
        if (name === "decrement") return setQuantity(quantity - 1)
        if (name === "increment") return setQuantity(quantity + 1)
    }
    // size vaue channge funciton
    const onSizeChange = (e) => {
        setSizevalue(e.target.value)
    }

    // setting up teh toggle fucntion and state for the size cutomization modal 
    const [modal4, setModal4] = useState(false)
    const toggleModal = (e) => {
        if (e.target.name === "modal4") {
            if (modal4 === false) return setModal4(true)
            if (modal4 === true) return setModal4(false)
        }
    }
    //Cart function
    const { addItem } = useCart()
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <Cutomization show={modal4} toggleModal={toggleModal} toaster={toaster} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
                    <div className="w-full pb-20 flex justify-center">
                        <section className='w-full p-5 md:p-7 lg:p-0 lg:pt-9 lg:w-[90%] h-full font_futuraLT text-left pt-5' >
                            <div className="w-full flex flex-col lg:flex-row lg:space-x-2">
                                <div className="w-full lg:w-[70%] mb-3">
                                    <ProductCarousel img_array={product.images} />
                                    <div className="w-full my-5">
                                        <h3 className="text-3xl mb-4">{productData.name}</h3>
                                        <h4 className="Slug text-xl">{productData.slug && productData.slug}</h4>
                                        <p className="description font_futuraLTlite my-3">{productData.description}</p>
                                    </div>
                                </div>
                                <div className="details w-full lg:w-[30%] m-0 space-y-3">
                                    <div className="w-full h-28 p-4 rounded-2xl bg-white items-center">
                                        <small className="w-full">Choose a Color:</small>
                                        <span className="w-full my-3 mx-auto flex flex-wrap justify-center space-x-3">
                                            {productData.variants.map(variant => {
                                                let { color, color_name } = variant
                                                return <Link style={{ background: color}} name={color} title={color_name} href={`/products/product/${productData.id}?color=${color_name}`} className={`w-6 h-6 mb-3 cursor-pointer rounded-full ${router.query.color===color_name?`scale-105 opacity-100`:'opacity-70 border-2'} transition-all`} ></Link>
                                            })}
                                        </span>
                                    </div>

                                    <div className="w-full h-28 p-4 rounded-2xl bg-white items-center">
                                        <small className='w-full' >{product.stock} Pieces left in Stock</small>
                                        <div className="flex justify-end my-5">
                                            <span className="w-full flex justify-end">
                                                <span onClick={(e)=>{changeQuantity(e)}} name="decrement" className="fa-solid fa-circle-minus text-2xl cursor-pointer active:-translate-x-2 transition-all text-gray-300"></span>
                                                <input type="number" readOnly className='w-1/6 h-auto text-sm text-center mx-3 border-none outline-none pointer-events-none' value={quantity} />
                                                <span onClick={(e)=>{changeQuantity(e)}} name="increment" className="fa-solid fa-circle-plus text-2xl cursor-pointer active:translate-x-2 transition-all text-gray-300"></span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-full h-32 p-4 rounded-2xl bg-white items-center">
                                        <span className="w-full flex justify-between">
                                            <small>Size</small>
                                            <small><Link href="/product/sizechart" className='underline'>Size Chart</Link></small>
                                        </span>
                                        <span className="w-full mt-3 flex flex-wrap justify-end pill-container text-xs">
                                            {product.size.map((value, index) => {
                                                console.log(product.color_name, router.query.color)
                                                return <>
                                                    <input type="radio" id={value} onChange={onSizeChange} name="size" value={value} />
                                                    <label className="selector border border-gray-400 rounded-full w-10 mb-2 mr-1 px-1 py-1" htmlFor={value}>{value}</label>
                                                </>
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex justify-between p-3 text-lg">
                                        <p>Price :</p> <p>${productData.price}</p>
                                    </div>
                                    <div className="w-full">
                                        <Button onclick={() => {addItem({ id: product._id, name: productData.name, price: productData.price, shipping_fee: productData.shipping_detials.fees, stock: product.stock, size: sizevalue?sizevalue:product.size[0], color: product.color_name, images: product.images }, quantity); toaster('success', 'Your items has been added to the cart') }} classes="w-full" my="my-2" >Add to Cart</Button>
                                        <Button onclick={toggleModal} name="modal4" classes="w-full" my="my-2" >Customization</Button>
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