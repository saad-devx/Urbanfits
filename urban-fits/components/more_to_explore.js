import React, { useState } from 'react'
import Shoppingcard from './cards/shoppingcard'
import Button from './buttons/simple_btn'
import image from '@/public/card imgs/card img17.jpg'

export default function MoreToExplore() {
    const exploreItems = ["Ready to Wear", "Atelier Urban", "Essentials", "Bags", "Sneakers"]
    const [exploreItem, setExploreItem] = useState(exploreItems[0])
    const [loading, setLoading] = useState(false)
    const product = {
        name: 'Sample Product title - UF',
        price: '76.99',
        variants: [1, 2, 3, 4]
    }
    const getExploreItems = (e) => {
        setExploreItem(e.target.name)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 800);
    }
    return (
        <div className="w-full mt-10">
            <h3 className="text-[10px] md:text-base text-center md:text-left font_gotham_medium tracking-vast">MORE TO EXPLORE</h3>
            <div className="w-full mt-5 flex flex-wrap">
                {exploreItems.map(query => {
                    return <Button name={query} onclick={getExploreItems} fontSize='text-[8px] md:text-[10px]' classes="mr-3 px-3 md:px-5 whitespace-nowrap" height='h-[34px]' font='font_gotham_medium tracking-widest' my="my-1" text={exploreItem == query ? 'white' : 'black'} bg={exploreItem == query ? 'bg-gold-land' : 'bg-gray-50'}>{query.toUpperCase()}</Button>
                })}
            </div>
            <section className="w-full">
                {loading ? <span className="self-center w-full h-[225px] md:h-[290px] lg:h-[430px] flex justify-center items-center font_gotham_medium text-gray-500 text-[10px] md:text-base tracking-vast">LOADING...</span> :
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 xl:gap-5 2xl:gap-12">
                        <Shoppingcard product={product} img={image} />
                        <Shoppingcard product={product} img={image} />
                        <Shoppingcard product={product} img={image} />
                        <Shoppingcard product={product} img={image} />
                    </div>}
            </section>
        </div>
    )
}
