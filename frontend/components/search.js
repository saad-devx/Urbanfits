import React, { useState } from 'react'
import LinkBtn from '@/components/link_btn';
import Shoppingcard from '@/components/cards/shoppingcard';
import SearchBar from '@/components/searchBar';

import image1 from '../public/card imgs/card img4.png'

export default function Search(props) {
    return (
        <>
            {/* <main className="bg-gray-100 w-full h-screen "> */}
            <section className={`bg-gray-100/30 backdrop-blur-[5px] 'w-full' h-full fixed right-0 z-40 transition-all duration-700 overflow-x-hidden overflow-y-scroll ${props.search === true ? "" : "translate-x-full"} font_futuraLT`}>
                <div className="w-full flex justify-center">
                    <section className='w-full p-2 lg:p-0 lg:pt-9 lg:w-[85%] h-full font_futuraLT text-left pt-9' >
                    <button onClick={props.toggleSearch} className="fa-solid fa-xmark text-3xl text-black absolute right-8 top-5 cursor-pointer hover:rotate-180 transition-all duration-700"></button>
                        {/* Search Bar */}
                        <div className='w-full h-[5vh] bg-white/40 lg:h-[7vh] px-5 py-2 flex justify-start items-center border border-gray-400 hover:bg-white/70 transition-all duration-300 rounded-full' >
                            <i className="material-symbols-outlined mr-4 translate-y-[1px] text-[2rem]">search</i><input type="text" className="bg-transparent outline-none border-none w-full h-full" placeholder='Search' />
                        </div>

                        {/*                                         pill buttons */}
                        <div className=" my-8 w-full flex flex-wrap text-sm md:text-base">
                            <h1 className="w-full text-2xl mb-7">Suggestions</h1>
                            {["Jeans Women", "Blazer Women", "Jeans Men", "Blazer Men", "T-Shirt Men", "T-Shirt Women", "Shoes Men", "Shoes Women", "Dresses", "Bags"].map(value => {
                                return <>
                                    <LinkBtn href="/productlisting" classes="mr-3 px-[7%] md:px-[4%] border border-gray-400 hover:bg-gold-land hover:border-current hover:text-white" my="my-1" text="text-black" bg="bg-white/40" >{value}</LinkBtn>
                                </>
                            })}
                        </div>

                        {/*                                        Top Searches Section                                                  */}
                        <section className="w-full my-10 mx-auto">
                            <h1 className="text-2xl mb-7">Top Searches</h1>
                            <div className="w-full flex flex-wrap justify-between overflow-hidden">
                                <Shoppingcard img={image1} />
                                <Shoppingcard img={image1} />
                                <Shoppingcard img={image1} />
                                <Shoppingcard img={image1} />
                            </div>
                        </section>

                    </section>
                </div>
            </section>
            {/* </main> */}
        </>
    )
}
