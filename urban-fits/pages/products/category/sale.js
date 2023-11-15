import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import useProduct from '@/hooks/useProduct';
const CatalogueCarousel = dynamic(() => import('@/components/carousels/catalogueCarousel'));
import Shoppingcard from '@/components/cards/shoppingcard';
import BounceLoader from '@/components/loaders/bounceLoader';
import ListingShopSection from '@/components/listingShop_section';
import toaster from '@/utils/toast_function';

export default function SaleCatalogue() {
    const { getSaleProducts, productLoading } = useProduct()
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getSaleProducts(page, (newProducts) => {
            setProducts(newProducts)
        })
    }, [])

    return <>
        <main className="w-full pb-20 bg-white font_urbanist overflow-hidden">
            <CatalogueCarousel />
            <section className='w-full p-5 md:px-7 lg:px-14 xl:px-20 py-16 h-full font_urbanist text-left' >
                <div className="w-full my-4 md:my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-2 xl:gap-4 2xl:gap-8">
                    <h1 className="col-span-full font_urbanist_bold capitalize text-lg md:text-xl lg:text-2xl">Sales&nbsp;</h1>
                    {products.map((product, index) => <Shoppingcard key={index} margin='0' product={product} />)}
                </div>

                <button disabled={productLoading} onClick={() => {
                    getSaleProducts(page + 1, (newProducts) => {
                        if (newProducts.length == 0) return toaster('info', "No more products available")
                        setProducts([products.concat(newProducts)])
                        return setPage(page + 1)
                    })
                }} className={`${productLoading && 'pointer-events-none'} lg:mt-20 group flex items-center mx-auto font_copper text-xs md:text-sm tracking-expand md:tracking-[1.5em] md:hover:tracking-[1em] transition-all duration-300`}>
                    <i className="w-16 group-hover:w-28 h-0.5 mx-1 bg-black transition-all"/>
                    <i className="w-5 group-hover:w-0 h-0.5 mx-1 bg-black transition-all"/>
                    {productLoading ? <BounceLoader /> : <p>&nbsp;MORE</p>}
                    <i className="w-5 group-hover:w-0 h-0.5 mx-1 bg-black transition-all"/>
                    <i className="w-16 group-hover:w-28 h-0.5 mx-1 bg-black transition-all"/>
                </button>
            </section>
        </main>
        <ListingShopSection whiteTheme />
    </>
}