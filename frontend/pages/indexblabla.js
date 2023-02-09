
import React, { useState } from 'react'
import { Inter } from '@next/font/google'
import Button from '../components/link_btn';
import Navbar from '../components/navbar';
import styles from '@/styles/Home.module.css'

import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [expand, setExpand] = useState(false)

 

  return (
    <>
      

      <Navbar setExpand={setExpand} />
      

      <main className={` ${expand === true ? 'w-3/4' : 'w-full lg:w-[95%]'} w-screen h-screen text-white bg-slate-700 overflow-x-hidden transition-all duration-700 absolute top-0 right-0`}>
        
        <Footer />
      </main>
    </>
  )
}
