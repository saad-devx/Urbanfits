import React, { useState } from 'react'
import Shoppingcard from './cards/shoppingcard'
import Button from './buttons/simple_btn'

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
    return <div className="w-full mt-12 lg:mt-20 xl:mt-28">
        <h3 className="text-lg md:text-2xl text-center md:text-left font_urbanist_bold">More To Explore</h3>
        <div className="w-full mt-5 flex flex-wrap">
            {exploreItems.map(query => {
                return <Button name={query} onClick={getExploreItems} fontSize='text-xs md:text-[15px]' classes="mr-3 px-3 md:px-5 whitespace-nowrap" height='h-[34px]' font='font_urbanist_medium' my="my-1" text={exploreItem == query ? 'white' : 'black'} bg={exploreItem == query ? 'bg-gold-land' : 'bg-gray-50'}>{query}</Button>
            })}
        </div>
        <section className="w-full">
            {loading ? <span className="self-center w-full h-[225px] md:h-[290px] lg:h-[430px] flex justify-center items-center font_urbanist_bold text-gray-500 text-[10px] md:text-base tracking-1">Loading...</span> :
                <div className="w-full h-auto md:h-[290px] lg:h-[380px] xl:h-[430px] 2xl:h-[470px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 lg:gap-3 xl:gap-8 2xl:gap-14">
                    {[1, 2, 3, 4].map((items, i) => {
                        if (window.matchMedia('(min-width: 640px) and (max-width: 967px)').matches && i >= 3) return
                        else return <Shoppingcard key={i} product={product} />
                    })}
                </div>}
        </section>
    </div>
}
