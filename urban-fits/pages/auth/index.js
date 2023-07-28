import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Loader from '@/components/loaders/loader';
import LinkBtn from '@/components/buttons/link_btn'
import Urbanfit_logo from '@/public/logos/logo_gold_outlined.svg'

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
                        <h2 className="w-full lg:w-[470px]- font_gotham_medium text-2xl lg:text-[38px] lg:leading-[47px]">Join Our Urban Program <br /> and get free Shipping <br /> & free returns on <br /> every order</h2>
                        <br />
                        <p className="font_gotham_light text-xl md:text-2xl">Urban Members get Exclusive <br /> access to products, events, <br /> and offers. Just provide a <br /> few details. It’s free to join and <br /> open to all.</p>
                    </div>
                    <div className=" w-[95%] md:w-3/5 lg:w-1/3 max-w-[400px] mx-auto py-16 pb-20 font_gotham bg-white">
                        <Image src={Urbanfit_logo} alt="Urbanfits Logo" className='w-20 md:w-[100px] aspect-square mx-auto mb-8' />
                        {props.children}
                    </div>
                </section>

                <div className="w-full my-5 px-10 font_gotham hidden lg:flex justify-between lg:space-x-3">
                    <LinkBtn key={1} href='/' classes='w-full'>Home</LinkBtn>
                    <LinkBtn key={2} href='/products/women' classes='w-full'>Catalogue</LinkBtn>
                    <LinkBtn key={3} href='/contact' classes='w-full'>Contact Us</LinkBtn>
                    <LinkBtn key={4} href='/policies/privacypolicy' classes='w-full'>Privacy Policy</LinkBtn>
                    <LinkBtn key={5} href='/policies/legalnotice' classes='w-full'>Legal Notice</LinkBtn>
                    <LinkBtn key={6} href='/policies/terms&conditions' classes='w-full'>Terms & Conditions</LinkBtn>
                </div>
            </main>
        </>
    )
}
