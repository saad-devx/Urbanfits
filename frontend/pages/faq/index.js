import React, { useState } from 'react'
import Card from '../../components/card';
import Navbar from '../../components/navbar';
import Button from '../../components/simple_btn';
import Footer from '../../components/footer'
import SearchBar from '@/components/searchBar';

export default function index() {
    const [expand, setExpand] = useState(false)
    return (
        <>
            <main className="bg-gray-100 w-full h-screen font_futuraLT">
                <Navbar setExpand={setExpand} />
                <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
                    <div className="w-full flex justify-center">
                        <section className='w-full p-5 lg:p-0 lg:pt-9 lg:w-[75%] h-full font_futuraLT text-left pt-9' >
                            <h2 className="text-4xl mb-4">FAQ</h2>
                            <SearchBar />
                            <div className="w-full my-10 flex flex-col justify-center items-center">
                                <div className={`w-full h-[25vh] mb-7 p-9 justify-center items-center md:items-start rounded-2xl bg-white shadow-lg flex flex-col hover:-translate-y-3 transition duration-500 space-y-8`}>
                                    <h2 className="font_futuraLT text-xl md:text-2xl">Can't find answer to your question?</h2>
                                    <Button classes="w-1/2 md:w-1/3 text-sm" >Contact Us</Button>
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
