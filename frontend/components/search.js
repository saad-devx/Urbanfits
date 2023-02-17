import React, { useState } from 'react'
import LinkBtn from '@/components/link_btn';
import Shoppingcard from '@/components/cards/shoppingcard';

import image1 from '../public/card imgs/card img4.png'

export default function Search(props) {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const onchange = async (e) => {
        setQuery(e.target.value)
        let results = await (await fetch(`${process.env.HOST}/api/search?q=${query}`)).json()
        setResults(results)
        console.log(query, results)
    }

    return (
        <>
            <section className={`bg-gray-100/30 backdrop-blur-[12px] w-full lg:w-[100%] h-full fixed right-0 z-50 transition-all duration-[1s] overflow-x-hidden overflow-y-scroll ${props.search === true ? "" : "translate-x-full opacity-0"} font_futuraLT`}>
                <div className="w-full flex justify-center">
                    <section className='w-full p-3 lg:p-0 lg:pt-9 lg:w-[85%] h-full font_futuraLT text-left pt-14' >
                        <button onClick={props.toggleSearch} className="fa-solid fa-xmark text-3xl text-black absolute right-8 top-5 cursor-pointer hover:rotate-180 transition-all duration-700"></button>
                        {/* Search Bar */}
                        <div className='w-full h-[5vh] bg-white/40 lg:h-[7vh] px-5 py-2 flex justify-start items-center border border-gray-400 hover:bg-white/70 transition-all duration-300 rounded-full' >
                            <i className="material-symbols-outlined mr-4 translate-y-[1px] text-[2rem]">search</i><input type="text" onChange={onchange} value={query} className="bg-transparent outline-none border-none w-full h-full placeholder:text-gray-700" placeholder='Search' />
                        </div>
                        {/*                                         pill buttons */}
                        <div className={`${query !== "" ? "hidden" : ""} my-8 w-full flex flex-wrap text-sm md:text-base`}>
                            <h1 className="w-full text-2xl mb-7">Suggestions</h1>
                            {["Jeans Women", "Blazer Women", "Jeans Men", "Blazer Men", "T-Shirt Men", "T-Shirt Women", "Shoes Men", "Shoes Women", "Dresses", "Bags"].map(value => {
                                return <>
                                    <LinkBtn href="/productlisting" classes="mr-2 md:mr-3 px-[6%] md:px-[4%] text-xs md:text-base border border-gray-400 hover:bg-gold-land hover:border-current hover:text-white" my="my-1" text="text-black" bg="bg-white/40" >{value}</LinkBtn>
                                </>
                            })}
                        </div>
                        {/*                                        Top Searches Section                                                  */}
                        <section className={`${query !== "" ? "hidden" : ""} w-full my-10 mx-auto`}>
                            <h1 className="text-2xl mb-7">Top Searches</h1>
                            <div className="w-full flex flex-wrap justify-between overflow-hidden">
                                <Shoppingcard img={image1} />
                                <Shoppingcard img={image1} />
                                <Shoppingcard img={image1} />
                                <Shoppingcard img={image1} />
                            </div>
                        </section>
                        {/*                      When query mathes the results and being fethed for api               */}
                        <section className={`${query === "" ? "hidden" : ""} w-full my-10 mx-auto`}>
                            <div className="w-full flex flex-wrap overflow-hidden">
                            {results.length !== 0 ? results.map((result) => {
                                return <Shoppingcard id={result._id} name={result.name} price={result.price} colors={result.color.length} img={result.images[0].url} />
                            }) : <h6 className="text-xl md:text-3xl text-gray-500 w-full text-center">No search results found!</h6>}
                            </div>
                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}
