import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useUser from '@/hooks/useUser'
import Error403 from '@/pages/403'
import { MblOption } from '../orders'
import { Option } from '..'
import {
    PrimaryNotifyIcon,
    AccountNotifyIcon,
    RewardNotifyIcon,
    BellNotifyIcon,
    HeartNotifyIcon
} from '@/public/accountIcons'
import Image from 'next/image'
const EmptyInboxImg = "https://urban-fits.s3.eu-north-1.amazonaws.com/website-copyrights/empty-inbox.png"
const inbox_bg = "https://urban-fits.s3.eu-north-1.amazonaws.com/website-copyrights/inbox-bg.jpg"

const NoNotificationSection = () => {
    return <section className="w-full flex flex-col items-center gap-y-4 pt-[40%] md:pt-[30%] lg:pt-[16%]">
        <Image src={EmptyInboxImg} width={150} height={150} alt='empty orders' />
        <span className="font_urbanist_medium text-gray-400 text-sm lg:text-base">It's empty</span>
    </section>
}

export default function NotificationInbox(props) {
    const router = useRouter()
    const { user } = useUser()
    if (!user) return <Error403 />
    if (window.matchMedia('(min-width: 760px)').matches) return <main className="bg-gray-50 w-full min-h-layout_height md:px-7 lg:px-14 xl:px-20 py-16 flex flex-col lg:flex-row justify-between font_urbanist">
        <section className="w-full lg:w-1/4 hidden mid:block">
            <div className="flex lg:flex-col lg:sticky left-0 top-20 items-center w-full pb-7 px-4 lg:p-0 lg:w-[95%] 2xl:w-[90%] rounded-lg list-none font_urbanist overflow-hidden">
                <h1 href={props.href} className="hidden lg:flex w-full p-4 items-center border-b border-[#F5F5F5] bg-white text-lg transition-all overflow-hidden">Inbox</h1>
                <Option icon={<PrimaryNotifyIcon />} href='/user/inbox/primary'>Primary</Option>
                <Option icon={<BellNotifyIcon />} href='/user/inbox/orders'>Orders</Option>
                <Option icon={<RewardNotifyIcon />} href='/user/inbox/rewards'>Rewards</Option>
                <Option icon={<AccountNotifyIcon />} href='/user/inbox/account'>Account</Option>
                <Option icon={<HeartNotifyIcon />} href='/products/category/wishlist'>Wishlist</Option>
            </div>
        </section>
        <section className='relative bg-white w-full mid:min-h-[50vh] lg:min-h-max lg:w-[70%] 2xl:w-[73%] px-12 py-10 rounded-lg font_urbanist text-left overflow-hidden'>
            {router.pathname === '/user/inbox' ? <>
                <div className="absolute z-10 w-full h-3/5 left-0 bottom-0 right-0 bg-gradient-to-b from-transparent to-black flex flex-col items-center justify-center">
                    <span className='text-white font_urbanist_bold text-lg tracking-[0.5px]'>Find The Latest Updates Here</span>
                    <span className='text-gray-300 font_urbanist text-sm'>Stay up to date with Urban Fits</span>
                </div>
                <Image src={inbox_bg} width={1600} height={2000} className='absolute inset-0 w-full h-full object-cover' alt='Inbox' />
            </> : null}
            {props.noNotifications ? <NoNotificationSection /> : props.children}
        </section>
    </main >
    else return <>
        <Head><title>Notificatoins</title></Head>
        <main className='w-screen h-screen bg-white flex flex-col transition-all duration-500'>
            <section className={`w-full p-4 ${router.pathname === "/user/inbox" ? null : "border-b border-gray-50"} flex justify-between items-center`}>
                <button onClick={() => router.back()} className='fa-solid fa-chevron-left text-xl'></button>
                <h1 className="font_urbanist_medium text-lg">Inbox</h1>
                <i className='w-0 h-0' />
            </section>
            <section className="sticky z-20 top-0 left-0 right-0 w-full px-4 pt-3 flex justify-between items-end">
                <MblOption href="/user/inbox/primary">Primary</MblOption>
                <MblOption href="/user/inbox/account">Account</MblOption>
                <MblOption href="/user/inbox/orders">Orders</MblOption>
                <MblOption href="/user/inbox/rewards">Rewards</MblOption>
            </section>
            {router.pathname === '/user/inbox' ? <div className='relative w-full h-full'>
                <div className="absolute z-10 w-full h-2/5 left-0 top-0 right-0 bg-gradient-to-b from-white to-transparent flex flex-col items-center justify-center" />
                <Image src={inbox_bg} width={1600} height={2000} className='absolute inset-0 w-full h-full object-cover' alt='Inbox' />
                <div className="absolute z-10 w-full h-3/5 left-0 bottom-0 right-0 bg-gradient-to-b from-transparent to-black flex flex-col items-center justify-center">
                    <span className='text-white font_urbanist_bold text-lg tracking-[0.5px]'>Find The Latest Updates Here</span>
                    <span className='text-gray-300 font_urbanist text-sm'>Stay up to date with Urban Fits</span>
                </div>
            </div> : props.noNotifications ? <NoNotificationSection /> : <section className="w-full h-full p-4">{props.children}</section>}
        </main>
    </>
}