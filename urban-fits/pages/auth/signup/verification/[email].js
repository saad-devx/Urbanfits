import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/router'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import toaster from '@/utils/toast_function'
import Logo from "@/public/logos/logo_gold.svg"
import AlertPage from '@/components/alertPage'
import Image from 'next/image'
import successIcon from '@/public/success.svg'

const BigSpinner = () => {
    return <span className="h-7 w-7 md:w-10 md:h-10 animate-spin rounded-full border-2 md:border-4 border-solid border-black border-r-transparent" role="status"></span>
}

export default function Verification(props) {
    const { email, token } = props
    const { user, updateUser } = useUser()
    const router = useRouter()
    const [content, setContent] = useState(
        <><BigSpinner />
            <p className="w-4/5 my-4 lg:mt-8 text-center font_gotham_medium text-sm lg:text-lg tracking-widest">Creatig your account, Please wait !</p></>
    )

    useEffect(() => {
        const decodedToken = jwt.decode(token)
        const unixTime = Math.floor(Date.now() / 1000)
        if (!token || token.length < 80 || decodedToken.exp <= unixTime) return setContent(<AlertPage type="error" heading="Oh Snap! Session Expired" message="The session your are trying to access either invalid or expired. Please try again." />)
        const makeAccount = async () => {
            try {
                const { data } = await axios.post(`${process.env.HOST}/api/user/signup/callback?token=${token}`)
                setContent(<>
                    <BigSpinner />
                    <p className="my-4 lg:mt-8 text-center font_gotham_medium text-sm lg:text-lg tracking-widest">Almost there !</p>
                </>)
                await updateUser(data.payload, true)
                toaster("success", data.msg)
                setContent(
                    <> <Image src={successIcon} alt="Success" />
                        <p className="my-4 lg:mt-8 text-center font_gotham_medium text-sm lg:text-lg tracking-widest">You'r ready to go !</p></>)
                router.push('/user/myaccount')
            } catch (error) {
                setContent(
                    <AlertPage type="error" heading="Oh Snap! Some Error Occured" message={error.response.data.msg} />
                )
                console.log(error)
                toaster("error", error.response.data.msg)
            }
        }
        makeAccount()
    }, [token])

    if (user && user.email) return <AlertPage type="success" heading="You are already signed in !" />
    if (email && !token) return (
        <>
            <Head><title>Email Verification</title></Head>
            <main className='w-full h-screen flex flex-col justify-center items-center'>
                <h1 className="w-4/5 font_gotham_medium text-center text-base lg:text-3xl mb-10">Thanks for signing up for Urban Fits !</h1>
                <section className="flex items-center gap-x-2">
                    <Image src={Logo} alt='Urban Fits' className='w-15 md:w-20' width={80} />
                    <div className="flex gap-x-3">
                        <span key={1} className="bg-gold-land w-3 h-0.5 md:w-5 md:h-1 -skew-x-[18deg]"></span>
                        <span key={2} className="bg-gold-land w-3 h-0.5 md:w-5 md:h-1 -skew-x-[18deg]"></span>
                        <span key={3} className="bg-gold-land w-3 h-0.5 md:w-5 md:h-1 -skew-x-[18deg]"></span>
                        <span key={4} className="bg-gold-land w-3 h-0.5 md:w-5 md:h-1 -skew-x-[18deg]"></span>
                        <span key={5} className="bg-gold-land w-3 h-0.5 md:w-5 md:h-1 -skew-x-[18deg]"></span>
                        <span key={6} className="bg-gold-land w-3 h-0.5 md:w-5 md:h-1 -skew-x-[18deg]"></span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-15 md:w-20 md:h-20 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className='text-[#cfa435]' strokeLinecap="round" strokeLineJoin="round" stroke-width="1" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                    </svg>
                </section>
                <p className="w-4/5 font_gotham text-sm lg:text-base text-center mt-8">We just sent a confirmation email to <span className="font_gotham_medium">{props.email}</span>. <br /> Please open your inbox and click the link to continue registration.</p>
            </main>
        </>
    )
    else {
        return (
            <>
                <Head>
                    <title>Urban Fits - Verify Eamil</title>
                </Head>
                <main className='w-full h-screen flex flex-col justify-center items-center'>
                    {content}
                </main>
            </>
        )
    }
}

export async function getServerSideProps(context) {
    const { email, token } = await context.query

    if (!email.includes("@") || !email.includes(".")) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        };
    }

    return {
        props: {
            email: email && email.includes("@") ? email : null,
            token: token ? token : null
        }
    }
}