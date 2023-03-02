import React from 'react'
import styles from '@/styles/Loader.module.css'
import Image from 'next/image'
import Urban_logo from "@/public/logos/logo_white.svg"

export default function Loader() {
    return (
        <section className='fixed z-[999] w-screen h-screen flex justify-center items-center bg-black/60' >
            <div className={styles.loader}>
                <Image unoptimized={true} className='absolute z-50 w-1/2 top-1/2 left-1/2 -translate-x-1/2  ' src={Urban_logo} alt="Urban logo" ></Image>
            </div>
        </section>
    )
}
