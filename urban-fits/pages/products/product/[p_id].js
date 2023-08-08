import React, { useEffect, useState } from 'react'
import { useCart } from "react-use-cart";
import { useRouter } from 'next/router';
import Head from 'next/head';
import Shoppingcard, { SmallShoppingcard } from '@/components/cards/shoppingcard';
import ProductCarousel from '@/components/carousels/productCarousel';
import Cutomization from '@/components/modals/cutomization';
import toaster from '@/utils/toast_function';
// image imports
import image1 from '@/public/card imgs/card img14.png'
import image2 from '@/public/card imgs/card img17.jpg'
import image3 from '@/public/card imgs/card img2.jpg'
import image4 from '@/public/card imgs/card img3.jpg'
import Button from '@/components/buttons/simple_btn';

export default function Product(props) {
    const productData = { ...props.response.product, id: props.response.product._id }
    const router = useRouter()
    const [product, setProduct] = useState(productData.variants[0])
    const [sizevalue, setSizevalue] = useState(product.sizes[0].size)
    const [quantity, setQuantity] = useState(1)

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

    // size value channge funciton
    const onSizeChange = (e) => {
        setQuantity(1)
        setSizevalue(e.target.value)
    }
    const onColorChange = (e) => {
        setQuantity(1)
        router.push(`/products/product/${productData.id}?color=${e.target.value}`)
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

    // setting up teh toggle fucntion and state for the size cutomization modal 
    const [modal4, setModal4] = useState(false)
    const toggleModal = (e, name) => {
        if (e?.target?.name === "modal4" || name === "modal4") {
            if (modal4 === false) return setModal4(true)
            if (modal4 === true) return setModal4(false)
        }
    }
    //Cart function
    const { addItem, inCart } = useCart()
    const addToCart = () => {
        if (getFilteredQuantity() < 1) return toaster('info', 'This item is out of stock right now')
        if (inCart(`${product._id}${sizevalue}`)) return toaster('info', 'This item is already in the cart!')
        addItem({
            product_id: productData.id,
            id: `${product._id}${sizevalue}`,
            name: productData.name,
            price: productData.price,
            shipping_fee: productData.shipping_details.fees,
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
    return (
        <>
            <Head>
                <title className='capitalize' >{`${productData.name} - UF`}</title>
            </Head>
            <Cutomization show={modal4} toggleModal={toggleModal} toaster={toaster} />
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
                                <h2 className="hidden lg:block font_urbanist_medium lg:text-2xl">${productData.price}</h2>

                                <div className="w-full my-8 flex flex-col md:flex-row justify-between">
                                    <div className="w-full lg:w-48pr mb-5 lg:mb-0 flex flex-col">
                                        <h3 className="mb-1 lg:mb-3 font_urbanist_bold italic text-[10px] lg:text-xs text-gray-300 tracking-[0.15em]">DESCRIPTION</h3>
                                        <p className="font_urbanist text-xs 2xl:text-sm">{productData.description}</p>
                                    </div>
                                    <div className="w-full lg:w-48pr flex flex-col font_urbanist text-xs 2xl:text-sm">
                                        <h3 className="mb-1 lg:mb-3 font_urbanist_bold italic text-[10px] lg:text-xs text-gray-300 tracking-[0.15em]">SUMMARY</h3>
                                        <p className='capitalize'>Color: {router.query.color}</p>
                                        <p>In Stock: {product.stock}</p>
                                        <p>Height of model: 177 cm. / 5′ 9″</p>
                                        <span style={{ color: getFilteredQuantity() <= 10 ? 'rgb(207, 55, 55)' : 'rgb(99, 194, 123)' }}>{getFilteredQuantity()} pieces left in {sizevalue} size</span>
                                    </div>
                                </div>

                                <div className="w-full gap-2 lg:gap-4 lg:gap-y-8 flex flex-wrap justify-between">
                                    <div className="flex flex-col max-w-[320px] w-48pr">
                                        <div className='relative w-full h-9 lg:h-[52px] border'>
                                            <span className="select_container after:right-[10%]"></span>
                                            <select type="select" value={sizevalue} onChange={onSizeChange} className="select_element relative cursor-pointer w-full h-full px-5 font_urbanist_bold tracking-widest text-xs outline-none">
                                                {product.sizes.map(obj => {
                                                    const { size } = obj
                                                    return <option value={size}>{size}</option>
                                                })}
                                            </select>
                                        </div>
                                        {/* <button onClick={toggleModal} name="modal4" className="hidden lg:block my-2 font_urbanist_bold italic text-left text-xs text-gray-300 tracking-[0.15em]">OR CUSTOMIZED SIZE</button> */}
                                    </div>
                                    <div className='relative max-w-[320px] w-48pr h-9 lg:h-[52px] border'>
                                        <span className="select_container after:right-[10%]"></span>
                                        <select type="select" defaultValue={productData.variants.color_name} onChange={onColorChange} className="select_element relative cursor-pointer w-full h-full px-5 font_urbanist_bold tracking-widest text-xs outline-none">
                                            {productData.variants.map(variant => {
                                                let { color, color_name } = variant
                                                return <option value={color_name}>{color_name.toUpperCase()}</option>
                                            })}
                                        </select>
                                    </div>
                                    <span className="max-w-[320px] w-48pr h-9 lg:h-[52px] px-5 font_urbanist border flex justify-between items-center">
                                        <span onClick={(e) => { changeQuantity(e) }} name="decrement" className="text-lg cursor-pointer transition-all text-gray-300 select-none">-</span>
                                        <input type="number" readOnly className='w-3/5 h-auto font_urbanist text-center border-none outline-none pointer-events-none' value={quantity} />
                                        <span onClick={(e) => { changeQuantity(e) }} name="increment" className="text-lg cursor-pointer transition-all text-gray-300 select-none">+</span>
                                    </span>
                                    {/* <button onClick={toggleModal} name="modal4" className="lg:hidden flex justify-center items-center max-w-[320px] w-48pr border text-xs text-black">
                                        Customization
                                    </button> */}
                                    {
                                        getFilteredQuantity() < 1 ? <span className="lg:max-w-[320px] w-full lg:w-48pr h-9 lg:h-[52px] my-2 flex justify-center items-center font_urbanist_bold italic text-center text-xs text-gray-300">Out of Stock</span>
                                            : <>
                                                <button onClick={addToCart} className="hidden lg:flex bg-gold max-w-[320px] w-48pr h-9 lg:h-[52px] px-5 justify-between items-center font_urbanist_bold text-white text-sm">Add to Cart <i className="fas fa-plus text-white" /></button>
                                                <Button onClick={addToCart} classes='w-full lg:hidden' my='my-1' bg='bg-gold' fontSize='text-[10px]' text='white' >ADD TO CART | ${productData.price}</Button>
                                            </>
                                    }
                                </div>

                                {productData.bundle_items && productData.bundle_items.length !== 0 ?
                                    <div className="w-full pt-7 2xl:pt-7 mt-7 2xl:mt-7 lg:border-t">
                                        <h1 className="font_urbanist_bold text-xs text-gray-300 italic">MATCH WITH</h1>
                                        <div className="hidden lg:grid w-full grid-cols-2 md:grid-cols-3 gap-3 2xl:gap-6">
                                            {productData.bundle_items.map((product, index) => (
                                                <SmallShoppingcard key={index} product={product} />
                                            ))}
                                        </div>
                                        <div className="lg:hidden w-full grid grid-cols-2 md:grid-cols-3 gap-3 2xl:gap-6">
                                            <Shoppingcard product={si_product} img={image3} />
                                            <Shoppingcard product={si_product} img={image4} />
                                            <Shoppingcard product={si_product} img={image1} />
                                            <Shoppingcard classes='md:hidden' product={si_product} img={image1} />
                                        </div>
                                    </div>
                                    : null}
                            </div>
                        </div>

                        <div className="hidden md:block w-full mt-36">
                            <h3 className="text-lg md:text-xl lg:text-2xl font_urbanist_bold">Similar Items</h3>
                            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 xl:gap-5 2xl:gap-12">
                                {[image1, image2, image1, image2].map((img, i) => {
                                    if (window.matchMedia('(max-width: 1024px)').matches && i === 3) return
                                    if (i === 4) return
                                    return <Shoppingcard product={si_product} img={img} />
                                })}
                                {/* <Shoppingcard product={si_product} img={image2} />
                                <Shoppingcard product={si_product} img={image1} />
                                <Shoppingcard product={si_product} img={image2} /> */}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export async function getServerSideProps(context) {
    const { p_id } = await context.query
    try {
        let response = await (await fetch(`${process.env.HOST}/api/products/get/one?id=${p_id}`)).json()
        if (!response.success) {
            return {
                redirect: {
                    destination: '/404',
                    permanent: false,
                },
            };
        }
        return { props: { response, p_id } }
    }
    catch (error) {
        console.error('Error fetching data:', error);
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        };
    }
}