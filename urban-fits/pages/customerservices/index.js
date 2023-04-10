import React, {useState}  from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuLink = (props)=>{
    const path = useRouter().pathname
    return <Link href={`/customerservices${props.href}`} className={`${path.includes(props.href)?'underline':''} ${props.submenu?'ml-7':null} text-sm 2xl:text-base hover:underline text-black`}>{props.children}</Link>
}

export default function CutomerServices(props) {
    const [sideMenu, setSideMenu] = useState(false)
    const toggleMenu = ()=>{
        console.log(sideMenu, 'yesss')
        if(!sideMenu)return setSideMenu(true)
        if(sideMenu)return setSideMenu(false)
    }
    return (
        <>
            <Navbar />
            <main className='w-full p-5 lg:p-10 lg:pt-16 2xl:p-14 flex justify-between bg-white'>
            <div onClick={toggleMenu} className={`lg:hidden ${sideMenu?'rotate-90':''} w-10 h-10 flex justify-center items-center rounded-full shadow-md fixed top-[70px] left-3 z-10 bg-gray-200 transition-all duration-500`}><i className={`fa-solid transition-all ${sideMenu?'fa-xmark':' fa-ellipsis-vertical'}`}></i></div>
                <section className={`${sideMenu?'max-h-screen top-[130px]':'max-h-0 top-[110px]'} w-3/4 md:1/2 lg:w-1/4 lg:h-auto lg:max-h-none fixed left-5 z-10 lg:z-0 lg:static rounded-2xl lg:rounded-none shadow-lg lg:shadow-none transition-all duration-500 overflow-hidden lg:overflow-visible`}>
                    <div className="sticky top-16 left-0 right-0 w-full py-8 2xl:py-10 px-7 gap-y-4 flex flex-col bg-gray-50 font_gotham rounded-2xl">
                        <h1 className="mb-3 2xl:mb-5 font_gotham_bold tracking-widest">CUSTOMER SERVICES</h1>
                        <MenuLink href='/returns&refund' >Returns & Refund</MenuLink>
                        <MenuLink href='/orderinfo' >Order Information</MenuLink>
                        <MenuLink href='/payment' >Payment</MenuLink>
                        <MenuLink href='/delivery' >Delivery</MenuLink>
                        <MenuLink href='/productinfo' >Product Information</MenuLink>
                        <MenuLink href='/myaccount' >My Account</MenuLink>
                        <MenuLink href='/sizeguide' >Size Guide</MenuLink>
                        <MenuLink href='/sizeguide/women' submenu >Women</MenuLink>
                        <MenuLink href='/sizeguide/men' submenu >Men</MenuLink>
                        <MenuLink href='/sizeguide/kids' submenu >Kids</MenuLink>
                        <MenuLink href='/cfproducts' >Counterfeit Products</MenuLink>
                        <MenuLink href='/sitemap' >Sitemap</MenuLink>
                        <MenuLink href='/companyinfo' >Company Information</MenuLink>
                    </div>
                </section>
                <section className="w-full lg:w-[70%] pt-14 lg:p-0">
                    {props.children}
                </section>
            </main>
            <Footer />
        </>
    )
}
