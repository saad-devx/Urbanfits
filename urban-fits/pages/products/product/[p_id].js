import React, { useEffect, useState } from 'react'
import { useCart } from "react-use-cart";
import { useRouter } from 'next/router';
import useUser from '@/hooks/useUser';
import useWallet from '@/hooks/useWallet';
import useProduct from '@/hooks/useProduct';
import BounceLoader from '@/components/loaders/bounceLoader';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Head from 'next/head';
import Shoppingcard, { SmallShoppingcard } from '@/components/cards/shoppingcard';
const ProductCarousel = dynamic(() => import('@/components/carousels/productCarousel'));
import toaster from '@/utils/toast_function';
import Button from '@/components/buttons/simple_btn';

export default function Product(props) {
    const productData = { ...props.resProduct, id: props.resProduct._id }
    const router = useRouter()
    const { formatPrice } = useWallet()
    const { setRecentItems } = useUser()
    const [product, setProduct] = useState(productData.variants[0])
    const [sizevalue, setSizevalue] = useState(product.sizes[0].size)
    const [quantity, setQuantity] = useState(1)
    const [similarProducts, setSimilarProducts] = useState([])
    const { getSimilarProducts, productLoading } = useProduct()

    useEffect(() => {
        const { color } = router.query
        if (!color) return
        let newProduct = productData.variants.filter((variant) => {
            return variant.color_name === color
        })
        if (!newProduct[0]) return () => { router.push('/404') }
        setProduct(newProduct[0])
        setSizevalue(newProduct[0].sizes[0].size)
    }, [router.query.color])

    useEffect(() => {
        getSimilarProducts(productData.id, (arg) => setSimilarProducts(arg))
        setRecentItems({
            id: product._id,
            href: router.asPath,
            image: product.images[0],
            name: productData.name
        })
    }, [])

    // size value channge funciton
    const onSizeChange = (e) => {
        setQuantity(1)
        setSizevalue(e.target.name)
    }
    const onColorChange = (e) => {
        setQuantity(1)
        router.push(`/products/product/${productData.id}?color=${e.target.name}`)
    }
    const getFilteredQuantity = () => {
        let selectedSizeObj = product.sizes.filter((obj) => {
            return obj.size == sizevalue
        })[0];
        return selectedSizeObj.quantity
    }
    // confguring the Quantity conter of the prodcut
    const changeQuantity = (e) => {
        let name = e.target.getAttribute("name")
        if (name === "decrement" && quantity === 1) return
        if (name === "increment" && quantity === getFilteredQuantity()) return
        if (name === "decrement") return setQuantity(quantity - 1)
        if (name === "increment") return setQuantity(quantity + 1)
    }
    const { addItem, inCart } = useCart()
    const addToCart = () => {
        if (getFilteredQuantity() < 1) return toaster('info', 'This item is out of stock right now')
        if (inCart(`${product._id}${sizevalue}`)) return toaster('info', 'This item is already in the cart!')
        addItem({
            product_id: productData.id,
            original_id: product._id,
            id: `${product._id}${sizevalue}`,
            name: productData.name,
            price: productData.price,
            uf_points: product.uf_points,
            weight: productData.shipping_details.weight,
            stock: product.stock,
            size: sizevalue,
            sizes: product.sizes,
            color: product.color_name,
            images: product.images
        }, quantity);
        toaster('success', 'Your items has been added to the cart')
    }
    // temporary product data to show the  similar items cards
    const si_product = {
        name: 'Sample Product title - UF',
        price: '76.99',
        variants: [1, 2, 3, 4]
    }
    return <>
        <Head>
            <title className='capitalize' >{`${productData.name} - UF`}</title>
        </Head>
        <main className={`bg-white w-full h-full font_urbanist transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
            <div className="w-full pb-20 flex justify-center">
                <section className='w-full p-5 md:p-7 lg:p-0 lg:pt-20 lg:w-[90%] h-full font_urbanist text-left pt-8' >
                    <div className="w-full flex flex-col lg:flex-row lg:justify-between">
                        <p className="lg:hidden text-[10px]">Main Page / Catalogue / {'T - Shirts'}</p>
                        <div className="w-full lg:w-[55%] mb-3 mt-6 md:mt-10 lg:mt-0">
                            <h1 className="lg:hidden w-full mb-2 font_urbanist_bold text-xs md:text-lg">{productData.name.toUpperCase()}</h1>
                            <ProductCarousel img_array={product.images} />
                        </div>

                        <div className="details w-full lg:w-[40%]">
                            <h1 className="hidden lg:block w-full mb-4 font_urbanist_bold lg:text-2xl capitalize">{productData.name}</h1>
                            <h2 className="hidden lg:block font_urbanist_medium lg:text-2xl">{formatPrice(productData.price)}</h2>

                            <div className="w-full my-8 flex flex-col md:flex-row justify-between">
                                <div className="w-full lg:w-48pr mb-5 lg:mb-0 flex flex-col">
                                    <h3 className="mb-1 lg:mb-3 font_urbanist_bold italic text-[10px] lg:text-xs text-gray-300 tracking-[0.15em]">DESCRIPTION</h3>
                                    <p className="font_urbanist text-xs 2xl:text-sm">{productData.description}</p>
                                </div>
                                <div className="w-full lg:w-48pr flex flex-col font_urbanist text-xs 2xl:text-sm">
                                    <h3 className="mb-1 lg:mb-3 font_urbanist_bold italic text-[10px] lg:text-xs text-gray-300 tracking-[0.15em]">SUMMARY</h3>
                                    <p className='capitalize'>Color: {product.color_name}</p>
                                    <p>In Stock: {product.stock}</p>
                                    <p>Height of model: 177 cm. / 5′ 9″</p>
                                    <span style={{ color: getFilteredQuantity() <= 10 ? 'rgb(207, 55, 55)' : 'rgb(99, 194, 123)' }}>{getFilteredQuantity()} pieces left in {sizevalue} size</span>
                                </div>
                            </div>

                            <div className="w-full gap-2 lg:gap-4 lg:gap-y-8 flex flex-wrap justify-between">
                                <div className="flex flex-col max-w-[320px] w-48pr">
                                    <button className='group relative uppercase w-full h-9 lg:h-[52px] px-5 font_urbanist_bold text-xs flex justify-between items-center border'>
                                        {sizevalue}
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.718574 1.26652C0.471471 0.976974 0.475731 0.51076 0.729225 0.226124C0.852776 0.0862599 1.01361 0.0163273 1.1755 0.0163274C1.34166 0.0163274 1.50675 0.0899399 1.63136 0.238392L4.99708 4.20367L8.44587 0.231032C8.6951 -0.0536042 9.09984 -0.054831 9.35014 0.232259C9.59831 0.520576 9.59831 0.985564 9.34907 1.27388L5.44336 5.77162C5.323 5.90903 5.1611 5.98633 4.99175 5.98633L4.98749 5.98633C4.81708 5.9851 4.65305 5.90535 4.53483 5.76426L0.718574 1.26652Z" fill="#C4C4C4" />
                                        </svg>
                                        <div className="absolute w-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-0 right-0 top-[105%] flex flex-col bg-white equillibrium_shadow rounded-md min-h-[2rem] overflow-hidden transition-all">
                                            {product.sizes.map((obj, index) => {
                                                const { size } = obj
                                                return <button onClick={onSizeChange} name={size} key={index} className={`w-full px-4 py-1 md:py-1.5 border-b hover:bg-gray-100 hover:text-gotham-black ${sizevalue === size ? "bg-[#FF4A60] text-white" : "text-black"} transition`}>{size}</button>
                                            })}
                                        </div>
                                    </button>
                                    {/* <button onClick={toggleModal} name="modal4" className="hidden lg:block my-2 font_urbanist_bold italic text-left text-xs text-gray-300 tracking-[0.15em]">OR CUSTOMIZED SIZE</button> */}
                                </div>
                                <button className='group relative uppercase w-48pr h-9 lg:h-[52px] px-5 font_urbanist_bold text-xs flex justify-between items-center border'>
                                    {router.query.color || productData.variants.color_name}
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.718574 1.26652C0.471471 0.976974 0.475731 0.51076 0.729225 0.226124C0.852776 0.0862599 1.01361 0.0163273 1.1755 0.0163274C1.34166 0.0163274 1.50675 0.0899399 1.63136 0.238392L4.99708 4.20367L8.44587 0.231032C8.6951 -0.0536042 9.09984 -0.054831 9.35014 0.232259C9.59831 0.520576 9.59831 0.985564 9.34907 1.27388L5.44336 5.77162C5.323 5.90903 5.1611 5.98633 4.99175 5.98633L4.98749 5.98633C4.81708 5.9851 4.65305 5.90535 4.53483 5.76426L0.718574 1.26652Z" fill="#C4C4C4" />
                                    </svg>
                                    <div className="absolute  w-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto left-0 right-0 top-[105%] flex flex-col bg-white equillibrium_shadow rounded-md min-h-[2rem] overflow-hidden transition-all">
                                        {productData.variants.map((variant, index) => {
                                            let { color, color_name } = variant
                                            return <button onClick={onColorChange} name={color_name} key={index} className={`w-full px-4 py-1 md:py-1.5 border-b hover:bg-gray-100 hover:text-gotham-black ${router.query.color === color_name ? "bg-[#FF4A60] text-white" : "text-black"} transition`}>{color_name}</button>
                                        })}
                                    </div>
                                </button>
                                <span className="max-w-[320px] w-48pr h-9 lg:h-[52px] px-5 font_urbanist border flex justify-between items-center">
                                    <span onClick={(e) => { changeQuantity(e) }} name="decrement" className="text-lg cursor-pointer transition-all text-gray-300 select-none">-</span>
                                    <input type="number" readOnly className='w-3/5 h-auto font_urbanist text-center border-none outline-none pointer-events-none' value={quantity} />
                                    <span onClick={(e) => { changeQuantity(e) }} name="increment" className="text-lg cursor-pointer transition-all text-gray-300 select-none">+</span>
                                </span>
                                {
                                    getFilteredQuantity() < 1 ? <span className="lg:max-w-[320px] w-full lg:w-48pr h-9 lg:h-[52px] my-2 flex justify-center items-center font_urbanist_bold italic text-center text-xs text-gray-300">Out of Stock</span>
                                        : <>
                                            <button onClick={addToCart} className="hidden lg:flex bg-gold max-w-[320px] w-48pr h-9 lg:h-[52px] px-5 justify-between items-center font_urbanist_bold text-white text-sm">Add to Cart <i className="fas fa-plus text-white" /></button>
                                            <Button onClick={addToCart} classes='w-full lg:hidden' my='my-1' bg='bg-gold' fontSize='text-[10px]' text='white' >ADD TO CART | {formatPrice(productData.price)}</Button>
                                        </>
                                }
                            </div>

                            {productData.bundle_items && productData.bundle_items.length !== 0 ?
                                <div className="w-full pt-7 2xl:pt-7 mt-7 2xl:mt-7 lg:border-t">
                                    <h1 className="font_urbanist_bold text-xs text-gray-300 italic">MATCH WITH</h1>
                                    <div className="hidden lg:grid w-full grid-cols-2 md:grid-cols-3 gap-3 2xl:gap-6">
                                        {productData.bundle_items.slice(0, 4).map((product, index) => {
                                            if (window.matchMedia('(min-width: 1024px)').matches && index === 3) return
                                            return <SmallShoppingcard key={index} product={product} />
                                        })}
                                    </div>
                                </div>
                                : null}
                        </div>
                    </div>

                    <div className="w-full mt-36">
                        <h3 className="text-lg md:text-xl lg:text-2xl font_urbanist_bold">Similar Items</h3>
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 xl:gap-5 2xl:gap-12">
                            {productLoading ? <div className="w-full h-[30vh] col-span-full flex justify-center items-center"><BounceLoader /></div>
                                : similarProducts.map((product, index) => {
                                    if (window.matchMedia('(min-width: 760px) and (max-width: 1024px)').matches && index > 2) return
                                    else if (index > 3) return
                                    return <Shoppingcard margin='0' product={product} />
                                })}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </>
}
export async function getServerSideProps(context) {
    const { p_id } = await context.query
    try {
        const { data } = await axios.get(`${process.env.HOST}/api/products/get/one?id=${p_id}`)
        return { props: { resProduct: data.product, p_id } }
    }
    catch (error) {
        console.error(error);
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        };
    }
}