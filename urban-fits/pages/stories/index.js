import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function story() {
  return (
    <>
      <Navbar />
      <main className='py-5'>
        <div className="z-10 flex flex-col justify-center items-center gap-5">
          <span className="font_gotham text-sm "><Link className="underline underline-offset-8" href='/' >Main Page</Link> / <Link className="underline underline-offset-8" href='/stories' >Stories</Link></span>
          <h1 className="font_gotham_bold text-2xl md:text-[32px] tracking-[0.15em]">STORIES</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}
