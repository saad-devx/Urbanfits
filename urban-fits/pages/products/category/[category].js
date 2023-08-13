import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import axios from 'axios';
const CatalogueCarousel = dynamic(() => import('@/components/carousels/catalogueCarousel'));
import Shoppingcard from '@/components/cards/shoppingcard';
import MoreToExplore from '@/components/more_to_explore';
// import Spinner from '@/components/loaders/spinner';
import BounceLoader from '@/components/loaders/bounceLoader';
import ListingShopSection from '@/components/listingShop_section';
import useProduct from '@/hooks/useProduct';
// import { useRouter } from 'next/router';
import toaster from '@/utils/toast_function';

export default function ProductCatalogueCategory({ products, category, name }) {
    // const router = useRouter()
    // const { name } = router.query
    const { getProducts, productLoading } = useProduct()
    const [catalogueProducts, setCatalogueProducts] = useState(products)
    const [page, setPage] = useState(1)
    // const [loading, setLoading] = useState(false)

    // const fetchProducts = async () => {
    //     console.log("entry point functional")
    //     if (!category || category.length < 16) return
    //     setLoading(true)
    //     const products = await getProducts(1, category)
    //     if (!products) return setLoading(false)
    //     setCatalogueProducts(products)
    //     setLoading(false)
    // }

    useEffect(() => {
        setCatalogueProducts(products)
    }, [category, name])
    console.log(category, name, products)

    return <>
        <main className="w-full pb-20 bg-white flex justify-center font_urbanist overflow-hidden">
            <section>
                <CatalogueCarousel />
                <section className='w-full p-5 md:p-7 lg:p-14 xl:p-16 2xl:p-24 h-full font_urbanist text-left' >
                    <div className="w-full my-4 md:my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-3 xl:gap-8 2xl:gap-14">
                        <div className="w-full col-span-full flex items-center justify-between">
                            <h1 className="font_urbanist_bold capitalize text-lg md:text-xl lg:text-2xl">{name}&nbsp;</h1>
                            <nav className="flex items-center gap-x-2">
                                <button className="border px-3 py-0.5 rounded-full flex items-center font_urbanist text-xs md:text-[15px] cursor-pointer">
                                    <span className="material-symbols-outlined mr-2 hover:shadow-md rotate-180">event_list</span>
                                    Sort
                                </button>
                                <button className="border px-3 py-0.5 rounded-full flex items-center font_urbanist text-xs md:text-[15px] cursor-pointer">
                                    <span className="material-symbols-outlined mr-2 hover:shadow-md">filter_list</span>
                                    Filters
                                </button>
                            </nav>
                        </div>
                        {/* {loading ? <div className="w-full h-[20vh] col-span-full flex justify-center"><Spinner forBtn variant="border-black" /></div> : */}
                        {catalogueProducts.length !== 0 ? catalogueProducts.map((product, index) => {
                            if (index == 4) return <>
                                <ListingShopSection classes='my-12 col-span-2 md:col-span-3 lg:col-span-4' />
                                <Shoppingcard key={`${index}-listing sections`} margin='0' product={product} />
                            </>
                            return <Shoppingcard key={index} margin='0' product={product} />
                        }) : <div className='w-full col-span-full flex justify-center items-center h-[20vh] font_urbanist_medium text-base md:text-lg lg:text-xl'>No Products found for this Category :(</div>}
                    </div>

                    {catalogueProducts.length === 0 ? null :
                        <button disabled={productLoading} onClick={async () => {
                            const products = await getProducts(page + 1, category)
                            if (products.length === 0) return toaster('info', "No more products available")
                            setCatalogueProducts([catalogueProducts.concat(products)])
                            return setPage(page + 1)
                        }} className={`${productLoading && 'pointer-events-none'} lg:mt-20 group flex items-center mx-auto font_copper text-xs md:text-sm tracking-expand md:tracking-[1.5em] md:hover:tracking-[1em] transition-all duration-300`}>
                            <i className="w-16 group-hover:w-28 h-0.5 mx-1 bg-black transition-all"></i>
                            <i className="w-5 group-hover:w-0 h-0.5 mx-1 bg-black transition-all"></i>
                            {productLoading ? <BounceLoader /> : <p>&nbsp;MORE</p>}
                            <i className="w-5 group-hover:w-0 h-0.5 mx-1 bg-black transition-all"></i>
                            <i className="w-16 group-hover:w-28 h-0.5 mx-1 bg-black transition-all"></i>
                        </button>}
                    <MoreToExplore />
                </section>
            </section>
        </main>
        <ListingShopSection whiteTheme />
    </>
}
export async function getServerSideProps(context) {
    const { category, name } = await context.query
    console.log(category, name)
    try {
        let response = await (await fetch(`${process.env.HOST}/api/products/get/bycategory?id=${category}&page=1`)).json()
        if (!response.success) {
            return {
                redirect: {
                    destination: '/404',
                    permanent: false,
                },
            };
        }
        return { props: { products: response.products, category, name } }
    }
    catch (error) {
        console.error('Error fetching data:', error);
        return { props: { products: [], category, name } }
    }
}
// export async function getServerSideProps(context) {
//     const { category, name } = await context.query
//     console.log(category)
//     try {
//         const { data } = await axios.get(`${process.env.HOST}/api/products/get/bycategory?id=${category}&page=1`)
//         console.log(data)
//         return { props: { products: data.products, category, name } }
//     }
//     catch (error) {
//         console.error('Error fetching data:', error);
//         return { props: { products: [], category, name } }
//         // return {
//         //     redirect: {
//         //         destination: '/404',
//         //         permanent: false,
//         //     },
//         // };
//     }
// }