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
import toaster from "@/utils/toast_function";
import axios from 'axios'
import { generateRandString } from '@/utils/generatePassword'
import PusherClient from 'pusher-js'

function App({ Component, pageProps: { session, ...pageProps } }) {
  const { user, guestUser, setGuestUser, logOut, setCountry, geo_selected_by_user } = useUser()
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  const subscribeToPresence = async () => {
    let paramConfig;
    if (!user || !user._id) {
      try {
        const { data } = await axios.post(`${process.env.HOST}/api/user/guest/create-session`, {})
        if (data.user) setGuestUser(data.user)
        paramConfig = { user_id: `${data.user._id}_isguest` }
      } catch (e) {
        console.log(e);
      }
    } else paramConfig = {
      user_id: user?._id,
      email: user?.email
    }
    console.log("the guest: ", guestUser)
    const pusherPresenceClient = new PusherClient(process.env.PUSHER_KEY, {
      cluster: process.env.PUSHER_CLUSTER,
      authEndpoint: `${process.env.HOST}/api/pusher/auth`,
      auth: {
        params: paramConfig
      }
    });
    const presenceChannel = pusherPresenceClient.subscribe('presence-urbanfits')
  }

  useEffect(() => {
    subscribeToPresence()
  }, [])

  useEffect(() => {
    getGeoLocation(setCountry, geo_selected_by_user)
    const igniteSession = () => {
      setGuestUser(null)
      const sessionValid = localStorage.getItem('remember_me')
      if (sessionValid === true) logOut()
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
    <ToastContainer className="toast" />
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