import React, { useState } from 'react'
import Navbar from '../../components/navbar';
import LinkBtn from '@/components/buttons/link_btn';
import Button from '@/components/buttons/simple_btn';
import Footer from '../../components/footer'

export const Accordian = (props) => {
    return (
        <div className="group outline-none accordion-section mb-7 border-b border-b-gray-300" tabindex={props.index}>
            <div className="group flex justify-between py-3 items-center text-gray-700 transition ease duration-500 cursor-pointer pr-10 relative">
                <div className="group-focus:text-black transition ease duration-500">
                    {props.title}
                </div>
                {/* <div className="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2"> */}
                <i className={`fa-solid fa-caret-down group-focus:-rotate-180 absolute top-1/2 -translate-y-1/2 right-0 mb-auto ml-auto mt-2 mr-2 transform transition ease duration-500`}></i>
                {/* </div> */}
            </div>
            <div className="group-focus:max-h-screen max-h-0 bg-white rounded overflow-hidden ease duration-500">
                <p className="p-2 text-gray-900 text-justify">{props.children}</p>
            </div>
        </div>
    )
}

export default function index() {

    const faqs = ['Frequnetly Asked Questions', 'Orders', 'Delivery', 'Returns & Refund', 'My Account', 'Payments', 'Shopping', 'Sizing']
    const [faq, setFaq] = useState(faqs[0])
    const [faqHeading, setFaqHeading] = useState(faq)
    const getFaqs = (e) => {
        setFaq(e.target.name)
        setFaqHeading(e.target.name)
    }

    return (
        <>
            <Navbar />
            <main className="w-full flex justify-center bg-white font_gotham">
                <section className='w-full p-5 lg:p-0 lg:pt-9 lg:w-[75%] h-full font_gotham text-left pt-9' >
                    <h2 className="font_gotham_medium text-2xl md:text-4xl lg:text-[44px] tracking-widest mb-5 lg:mb-16">FAQ</h2>
                    {/*                                         Search Bar */}
                    <div className='w-full h-[42px] md:h-12 bg-white px-5 py-1 lg:py-2 flex justify-start items-center border border-gray-400 rounded-full' >
                        <i className="fa-solid fa-magnifying-glass mr-4 text-xl"></i><input type="text" className="bg-transparent outline-none border-none w-full h-full" placeholder='Type a Question here' />
                    </div>

                    {/*                                         pill buttons */}
                    <div className="my-8 w-full flex flex-wrap space-x-2">
                        {faqs.map(query => {
                            return <Button name={query} onclick={getFaqs} fontSize='text-xs md:text-sm' classes="mr-3 px-3 md:px-5 whitespace-nowrap" height='h-8 md:h-[37px]' my="my-1" text={faq == query ? 'white' : 'black'} bg={faq == query ? 'bg-black' : 'bg-gray-50 border border-gray-300'}>{query}</Button>
                        })}
                    </div>

                    {/*                                        Accordians section                                                  */}
                    <section className="w-full my-10 mx-auto">
                        <h1 className="font_gotham_medium text-xl md:text-[22px] tracking-widest mb-7">{faqHeading.toUpperCase()}</h1>
                        <div className="w-full overflow-hidden">
                            {[1, 2, 3, 4, 5].map((a) => {
                                return <Accordian index={a} title={`Accordian Number ${a}`} >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dicta sit aut est quidem dolorum minus maxime.
                                    Nam repellat sequi amet mollitia deleniti illum quas cupiditate porro ullam at! Molestias facilis quidem fuga non officia?
                                    Debitis commodi rerum atque placeat repellendus!
                                </Accordian>
                            })
                            }
                        </div>
                    </section>

                    <div className={`w-full my-10 p-8 pb-4 justify-center items-center md:items-start rounded-2xl bg-white card_boxshadow flex flex-col transition duration-500`}>
                        <h2 className="font_gotham_bold text-center md:text-left text-xl md:text-2xl">Can't find answer to your question?</h2>
                        <LinkBtn href="/contact"  classes="w-[150px] h-11 text-sm" font='font_gotham_medium' fontSize='text-xs md:text-sm' >CONTACT US</LinkBtn>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
