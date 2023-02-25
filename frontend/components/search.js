import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import 'react-toastify/dist/ReactToastify.css';
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
    }
    //Cart function
    const { addItem } = useCart()
    return (
        <>
            <section className={`bg-gray-100/30 backdrop-blur-[12px] w-full lg:w-[100%] h-full fixed right-0 z-50 transition-all duration-[1s] overflow-x-hidden overflow-y-scroll ${props.search === true ? "" : "translate-x-full opacity-0"} font_futuraLT`}>
                <div className="w-full flex justify-center">
                    <section className='w-full p-3 lg:p-0 lg:pt-9 lg:w-[85%] h-full font_futuraLT text-left pt-14' >
                        <button onClick={props.toggleSearch} className="absolute right-8 top-5 lg:top-11 cursor-pointer"><i className="fa-solid fa-arrow-left mr-2"></i>Back</button>
                        {/* Search Bar */}
                        <div className='w-full h-[5vh] bg-white/40 lg:h-[7vh] px-5 py-2 flex justify-start items-center border border-gray-400 hover:bg-white/70 transition-all duration-300 rounded-full' >
                            <i className="material-symbols-outlined mr-4 translate-y-[1px] text-[2rem]">search</i><input type="text" onChange={onchange} value={query} className="bg-transparent outline-none border-none w-full h-full placeholder:text-gray-700" placeholder='Search' />
                        </div>
                        {/*                                         pill buttons */}
                        <div className={`${query !== "" ? "hidden" : ""} my-8 w-full flex flex-wrap text-sm md:text-base`}>
                            <h1 className="w-full text-2xl mb-7">Suggestions</h1>
                            {["Jeans Women", "Blazer Women", "Jeans Men", "Blazer Men", "T-Shirt Men", "T-Shirt Women", "Shoes Men", "Shoes Women", "Dresses", "Bags"].map(value => {
                                return <>
                                    <LinkBtn href={`/products/${value}`} classes="mr-2 md:mr-3 px-[6%] md:px-[4%] text-xs md:text-base border border-gray-400 hover:bg-gold-land hover:border-current hover:text-white" my="my-1" text="text-black" bg="bg-white/40" >{value}</LinkBtn>
                                </>
                            })}
                        </div>
                        {/*                                        Top Searches Section                                                  */}
                        <section className={`${query !== "" ? "hidden" : ""} w-full my-10 mx-auto`}>
                            <h1 className="text-2xl mb-7">Top Searches</h1>
                            <div className="w-full flex flex-wrap justify-between overflow-hidden">
                                {[image1, image1, image1, image1].map((img, index) => {
                                    return <Shoppingcard li_key={index} img={img} />
                                })}
                            </div>
                        </section>
                        {/*                    When query matches the results being fethed from api would show here               */}
                        <section className={`${query === "" ? "hidden" : ""} w-full my-10 mx-auto`}>
                            <div className="w-full flex flex-wrap overflow-hidden">
                                {results.length !== 0 ? results.map((result) => {
                                    return (
                                        <>
                                            <Shoppingcard addItem={() => addItem({ ...result, id: result._id })} id={result._id} name={result.name} price={result.price} colors={result.color.length} img={result.images[0].url} />
                                        </>
                                    )
                                }).slice(0, 4) : <h6 className="text-xl md:text-3xl text-gray-500 w-full text-center">No search results found!</h6>}
                                <div className={`w-full flex justify-center ${results.length ===0 ? "hidden" : ""}`}> <LinkBtn classes="w-1/3" href={`/products/${results.length !==0 ?results[0].category :""}`} >View All</LinkBtn> </div>
                            </div>
                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}
