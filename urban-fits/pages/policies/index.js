import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function PoliciesPage(props) {
    return (
        <>
            <Navbar />
            <main className='w-full px-4 lg:p-10 lg:pt-16 2xl:p-14 font_gotham scroll-smooth' >
                {props.children}
            </main>
            <Footer />
        </>
    )
}
