import '@/styles/globals.css';
import '@/styles/pillbtns.css';
import '@/styles/carousels.css';
import { useState, useEffect } from 'react';
import Navbar from '@/components/navbars/navbar';
import Footer from '@/components/footer';
import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify'
import useUser from '@/hooks/useUser';
import useWallet from '@/hooks/useWallet';
import { useRouter } from 'next/router';
import { CartProvider } from "react-use-cart";
import getGeoLocation from '@/utils/geo-location'
import LoadingBar from 'react-top-loading-bar';
import toaster from "@/utils/toast_function";
import { pusherClient, initBeamsClient } from '@/utils/pusher';
import { urbanist } from '@/fonts';

function App({ Component, pageProps: { ...pageProps } }) {
  const router = useRouter()
  const { getMe, user, isLoggedIn, emitPresenceEvent, getNotifications } = useUser();
  const { getExchangeRate } = useWallet()
  const [progress, setProgress] = useState(0)

  const igniteSession = () => {
    emitPresenceEvent("user_left");
    useUser.setState({ guestUser: null });
  }

  useEffect(() => {
    getMe();
    emitPresenceEvent();
    getGeoLocation().then(getExchangeRate)
    window.addEventListener("beforeunload", igniteSession)

    return () => {
      window.removeEventListener("beforeunload", igniteSession);
    }
  }, [])

  useEffect(() => {
    initBeamsClient()
    if (isLoggedIn() && user) {
      getNotifications()
      const userChannel = pusherClient.subscribe(`uf-user_${user._id}`)
      userChannel.bind('new-notification', (data) => {
        useUser.setState({ notifications: data.notification_data.notifications })
        if (data.notify) toaster("info", data.notification_data.notifications[0].mini_msg)
      })
    }
  }, [user])

  useEffect(() => {
    router.events.on("routeChangeStart", () => setProgress(77))
    router.events.on("routeChangeComplete", () => setProgress(100))
  }, [router.events])

  return <main className={`max-w-[2000px] mx-auto ${urbanist.className} antialiased`}>
    <LoadingBar color='#FF4A60' height={4} waitingTime={1} loaderSpeed={1200} shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
    <ToastContainer className={`toast ${urbanist.className} antialiased`} />
    <CartProvider>
      <div className="sticky z-[100] top-0 left-0 w-full py-0.5 flex justify-center bg-pinky text-white text-[10px] lg:text-xs">Website under Development, You may face some runtime errors. Don't be sad.</div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  </main>
}
export default dynamic(() => Promise.resolve(App), { ssr: false })