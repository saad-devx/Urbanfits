import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Loader from '@/components/loaders/loader';

export default function AuthPage(props) {
    return <>
        <Head><title>Urban Fits</title></Head>
        <main className={`bg-white w-full h-screen flex ${props.height || "lg_layout_height"} px-4 md:px-20 lg:overflow-x-hidden`}>
            <section className="hidden lg:flex w-[30%] flex-col justify-center items-center md:w-full ">
                <h2 className="mb-6 font_urbanist text-2xl text-center lg:text-[38px] lg:leading-[47px]">Join Our Urban Fits <br /> Program and get free <br /> Shipping and 200 <br /> Points Sign Up Bonus</h2>
                <p className="font_urbanist_light text-xl md:text-2xl text-center">Urban Members get Exclusive <br /> access to products, events, <br /> and offers. Just provide a <br /> few details. It’s free to join and <br /> open to all.</p>
            </section>
            {props.loading ? <Loader /> : null}
            <section className="w-full lg:w-[70%] xl:px-4 flex flex-col lg:flex-row justify-center items-center h-full font_gotham bg-white">
                <nav className="lg:hidden w-full py-4 md:py-8 mb-6 text-lg font_urbanist flex justify-between items-center">
                    <Link href="/"><i className='fa-solid fa-xmark text-2xl' /></Link>
                    <Link href={props.mblNav}>{props.mblNavName}</Link>
                </nav>
                {props.children}
            </section>
        </main>
    </>
}
