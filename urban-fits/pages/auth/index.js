import React from 'react'
import Head from 'next/head'
import Loader from '@/components/loaders/loader';

export default function AuthPage(props) {
    return (
        <>
            <Head>
                <title>Urban Fits</title>
                <meta name="description" content="User Authentication endpoints" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {props.loading ? <Loader /> : null}
            <main className="bg-white lg:overflow-x-hidden">
                <section className='lg:flex lg:items-center text-center lg:justify-center min-h-screen' >
                    <div className="hidden lg:block w-[95%] md:w-full lg:w-[470px] mt-16 lg:mt-0 mx-auto ">
                        <h2 className="w-full lg:w-[470px] font_urbanist font-normal text-2xl lg:text-[38px] lg:leading-[47px]">Join Our Urban Fits Program <br /> and get free Shipping <br /> & free returns on <br /> every order</h2>
                        <br />
                        <p className="font_urbanist_light text-xl md:text-2xl">Urban Members get Exclusive <br /> access to products, events, <br /> and offers. Just provide a <br /> few details. It’s free to join and <br /> open to all.</p>
                    </div>
                    <div className="w-[95%] md:w-3/5 lg:w-1/3 max-w-[400px] h-screen lg:h-auto mx-auto py-16 pb-20 font_gotham bg-white">
                        {props.children}
                    </div>
                </section>
            </main>
        </>
    )
}
