import '@/styles/globals.css';
import '@/styles/pillbtns.css';
import '@/styles/carousels.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbars/navbar';
import Footer from '@/components/footer';
import Newsletter from '@/components/modals/newsletter';
import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify'
import useUser from '@/hooks/useUser';
import useNewsletter from '@/hooks/useNewsletter';
import { useRouter } from 'next/router';
import { CartProvider } from "react-use-cart";
import LoadingBar from 'react-top-loading-bar';
import { initBeamsClient } from '@/utils/pusher';
import { urbanist } from '@/fonts';

function App({ Component, pageProps: { ...pageProps } }) {
    const router = useRouter();
    const { getMe, user, isLoggedIn, notifyIfNotCheckedIn, getNotifications, emitPresenceEvent, subscribePersonalChannel, recordVisit, CSModal } = useUser();
    const { newsletterData } = useNewsletter();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        getMe();
        recordVisit();
        notifyIfNotCheckedIn()
    }, [])

    useEffect(() => {
        if (localStorage.getItem("letter_ad") !== "true" && !newsletterData?.email) setTimeout(() => {
            useNewsletter.setState({ show: true })
            localStorage.setItem("letter_ad", "true")
        }, 10000)

        let unSubPresence = null;
        let unSubPersonalChannel = null;
        if (isLoggedIn() && user) {
            getNotifications()
            initBeamsClient()
            unSubPresence = emitPresenceEvent()
            unSubPersonalChannel = subscribePersonalChannel()
        }

        return () => {
            if (unSubPresence) unSubPresence()
            if (unSubPersonalChannel) unSubPersonalChannel()
        }
    }, [user])

    useEffect(() => {
        router.events.on("routeChangeStart", () => setProgress(77))
        router.events.on("routeChangeComplete", () => setProgress(100))
    }, [router.events])

    return <main className={`max-w-[2000px] mx-auto ${urbanist.className} antialiased`}>
        <LoadingBar color='#FF4A60' height={4} waitingTime={1} loaderSpeed={1200} shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
        <ToastContainer className={`toast ${urbanist.className} antialiased`} />
        <Newsletter />
        <CartProvider>
            <Navbar />
            {CSModal ? <section className="w-full h-[80vh] flex justify-center items-center">
                <div className="flex flex-col items-center">
                    <h2 className="mb-4 lg:mb-6 text-2xl lg:text-3xl xl:text-4xl font-semibold">Coming Soon</h2>
                    <p className='text-sm lg:text-base'>In September, 2024. Stay Tuned!</p>
                    <div className="flex items-center gap-x-2 lg:gap-x-4">
                        {isLoggedIn && <Link href="/auth/signup" className="mt-4 px-4 py-1 rounded-2xl text-sm lg:text-base bg-pinky text-white">Sign Up</Link>}
                        <button onClick={() => useUser.setState({ CSModal: false })} className="mt-4 px-4 py-1 rounded-2xl text-sm lg:text-base bg-gray-200">Return</button>
                    </div>
                </div>
            </section> : <Component {...pageProps} />}
            <Footer openCSModal={() => { useUser.setState({ CSModal: true }); scrollTo(0, 0) }} />
        </CartProvider>
    </main>
}
export default dynamic(() => Promise.resolve(App), { ssr: false })