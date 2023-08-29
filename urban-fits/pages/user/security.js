import React, { useState, useEffect } from 'react'
import useUser from '@/hooks/useUser';
import User from '.';
import Head from 'next/head';
import Button from '@/components/buttons/simple_btn';
import Loader from '@/components/loaders/loader';
import Error403 from '../403';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const TwoFa = dynamic(() => import('@/components/modals/twoFa'));

export default function Security() {
    const { user, updateUser } = useUser()
    const [mfaModa, setMfaModa] = useState(false)
    const [loading, setLoading] = useState(false)
    const toggle2FA = async () => {
        setLoading(true)
        await updateUser({
            two_fa_enabled: !user.two_fa_enabled
        })
        setLoading(false)
    }

    if (!user) return <Error403 />
    if (window.matchMedia('(max-width: 786px)').matches) return <main className='w-screen h-screen bg-white flex flex-col transition-all duration-500'>
        <div className="w-full p-4 border-b border-gray-50 flex justify-between items-center">
            <Link href="/user/myaccount" className='fa-solid fa-chevron-left text-xl'></Link>
            <div className="flex flex-col justify-center items-center font_urbanist text-xs text-gray-400">
                <h1 className="font_urbanist_medium text-lg">Security / 2FA</h1>
                All data will be encrypted
            </div>
            <i className='w-0 h-0' />
        </div>
        <section className="w-full h-full p-4 flex flex-col justify-between font_urbanist">
            <div className="text-sm">
                <h1 className="mb-4 font_urbanist_bold text-base">Enable Google Authenticator</h1>
                Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. <br />
                You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.
            </div>
            <Button type="button" classes="w-full">Enable 2FA</Button>
        </section>
    </main>
    else return <>
        <Head><title>Security - UF</title></Head>
        <User>
            {loading ? <Loader /> : null}
            {user.two_fa_activation_date ? null : <TwoFa show={mfaModa} setMfaModa={setMfaModa} />}
            <h2 className="mt-12 mb-3 text-lg font_urbanist_bold">{user.two_fa_activation_date ? "Enable / Disable 2FA" : "Enable Google Authenticator"}</h2>
            <section className="flex flex-col text-sm font_urbanist_light gap-y-4">
                Two-factor authentication is a method for protection your web account. When it is activated you need to enter not only your password, but also a special code. <br />
                You can receive this code by in mobile app. Even if third person will find your password, then can't access with that code.
                <div className="flex justify-between items-center">
                    {user.two_fa_activation_date ?
                        <Button loading={loading} onClick={toggle2FA} classes='w-44'>{user.two_fa_enabled ? "Disable 2FA" : "Enable 2FA"}</Button>
                        :
                        <Button onClick={() => setMfaModa(true)} classes='w-44'>Enable 2FA</Button>}

                    <div className="flex items-center gap-x-3 text-xs font_urbanist">
                        CURRENT STATUS:
                        <span className="py-1 px-2 font_urbanist_bold text-white rounded-md bg-gold">{user.two_fa_enabled ? "ENABLED" : "DISABLED"}</span>
                    </div>
                </div>
            </section>
        </User>
    </>
}