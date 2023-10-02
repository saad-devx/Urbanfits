import React from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import User from ".."
import useUser from "@/hooks/useUser"
import Tilt from "react-parallax-tilt"

export default function () {
    const { user } = useUser()

    if (window.matchMedia('(max-width: 760px)').matches) return <>
        <Head><title>My UF Wallet - Uraban Fits</title></Head> <main className='w-screen h-screen bg-white flex flex-col transition-all duration-500'>
            <div className="w-full p-4 border-b border-gray-50 flex justify-between items-center">
                <Link href="/user" className='fa-solid fa-chevron-left text-xl'></Link>
                <div className="flex flex-col justify-center items-center font_urbanist text-xs">
                    <h1 className="font_urbanist_medium text-lg">UF Wallet</h1>
                    All data will be encrypted
                </div>
                <i className='w-0 h-0' />
            </div>
            <section className="w-full p-4">
                <h1 className="mb-5 mid:text-lg font_urbanist_bold">UF Wallet</h1>

                <Tilt
                    className="w-full mid:w-96 h-[13rem] mb-10 text-white equillibrium_shadow select-none rounded-2xl overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                    glareEnable
                    glareMaxOpacity={0.5}
                    gyroscope={true}
                    transitionSpeed={1500}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}>
                    <div className="w-full h-1/2 py-5 px-7 gap-y-4 bg-[#B3903E]+ bg_rough_gold">
                        <div className="w-full flex justify-between">
                            <span style={{ transform: "translateZ(25px)" }} className="font_copper font-thin text-xl">Points</span>
                            <span className="font_urbanist_bold text-xl">{user.uf_wallet.points}</span>
                        </div>
                        <div className="w-full flex justify-between">
                            <span className="font_copper text-xl">USD</span>
                            <span className="font_urbanist_bold text-xl">$ {user.uf_wallet.worth}</span>
                        </div>
                    </div>
                    <div className="w-full h-1/2 p-5 flex justify-center items-center">
                        <span className="w-full h-full">
                            <Image width={1000} height={1000} className="w-full h-full object-cover" src={user.uf_wallet.bar_code} alt="barcode" />
                        </span>
                    </div>
                </Tilt>

                <nav className="w-full flex justify-between">
                    <div className="flex flex-col">
                        <span className="font_copper text-sm">{user.uf_wallet.card_number}</span>
                        <span className="font_urbanist_bold text-sm text-yellow-700">Find out more about UF-Points</span>
                    </div>
                    <Link href="#" className="underline underline-offset-1 text-sm">View Points History</Link>
                </nav>
                <p className="mt-2 text-sm">As a Urban Fits member, you can earn point on all your purchases across UF brands and experiences. Points can then be redeemed towards any of your purchases.</p>
            </section>
        </main>
    </>
    else return <>
        <Head><title>My UF Wallet - Uraban Fits</title></Head>
        <User profileNull>
            <h1 className="text-2xl font_urbanist_bold">UF Wallet</h1>
            <section className="w-full h-[13rem] my-10 flex items-center gap-x-5">

                <Tilt
                    className="w-96 h-full text-white equillibrium_shadow tranform_preserve_3d select-none rounded-2xl overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                    scale={1.08}
                    glareEnable
                    glareMaxOpacity={0.65}
                    gyroscope={true}
                    transitionSpeed={1500}
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}>
                    <div className="w-full h-1/2 py-5 px-7 gap-y-4 bg-[#B3903E]+ bg_rough_gold">
                        <div className="translate_z w-full flex justify-between">
                            <span className="font_copper font-thin text-xl">Points</span>
                            <span className="font_urbanist_bold text-xl">{user.uf_wallet.points}</span>
                        </div>
                        <div className="translate_z w-full flex justify-between">
                            <span className="font_copper text-xl">USD</span>
                            <span className="font_urbanist_bold text-xl">$ {user.uf_wallet.worth}</span>
                        </div>
                    </div>
                    <div className="w-full h-1/2 p-5 bg-gray-50 flex justify-center items-center">
                        <span className="w-full h-full">
                            <Image width={1000} height={1000} className="w-full h-full object-cover" src={user.uf_wallet.bar_code} alt="barcode" />
                        </span>
                    </div>
                </Tilt>

                <nav className="h-full flex flex-col justify-between">
                    <div className="flex flex-col">
                        <span className="font_copper">{user.uf_wallet.card_number}</span>
                        <span className="font_urbanist_bold text-yellow-700">Find out more about UF-Points</span>
                    </div>
                    <Link href="#" className="underline underline-offset-1">View Points History</Link>
                </nav>
            </section>
            <p>As a Urban Fits member, you can earn point on all your purchases across UF brands and experiences. Points can then be redeemed towards any of your purchases.</p>
        </User>
    </>
}