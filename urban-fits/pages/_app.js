import '@/styles/globals.css'
import '@/styles/pillbtns.css'
import '@/styles/carousels.css'
import React, { useState, useEffect } from 'react'
import { SessionProvider } from "next-auth/react"
import Navbar from '@/components/navbars/navbar'
import Footer from '@/components/footer'
import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/router'
import { CartProvider } from "react-use-cart";
import getGeoLocation from '@/utils/geo-location'
import LoadingBar from 'react-top-loading-bar'
import Error403 from './403'
import toaster from "@/utils/toast_function";
import axios from 'axios'
import { pusherClient } from '@/utils/pusher';

function App({ Component, pageProps: { session, ...pageProps } }) {
  const { user, guestUser, setGuestUser, logOut, setCountry, geo_selected_by_user } = useUser()
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    if (!user || !user._id) return
    const channel = pusherClient.subscribe(`user_${user._id}`)
    channel.bind('user-login', (data) => {
      console.log(data)
      toaster('success', data.pusher_msg)
    })
  }, [])

  useEffect(() => {
    const igniteSession = () => {
      const sessionValid = localStorage.getItem('remember_me')
      if (sessionValid === true) logOut()
      // axios.post(`${process.env.HOST}/api/remove-guest-session?user_id=blabla`)
    }
    window.addEventListener("beforeunload", igniteSession)
    return () => window.removeEventListener("beforeunload", igniteSession)
  }, [])
  useEffect(() => {
    router.events.on("routeChangeStart", () => setProgress(77))
    router.events.on("routeChangeComplete", () => setProgress(100))
  }, [router.events])

  return <>
    <LoadingBar color='linear-gradient(90deg, #FAE892 0%, #B3903E 70%)' height={4} waitingTime={0} loaderSpeed={200} shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
    <ToastContainer className="text-white" />
    <SessionProvider session={session}>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </SessionProvider>
  </>
}
export default dynamic(() => Promise.resolve(App), { ssr: false })