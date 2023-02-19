import '@/styles/globals.css'
import '@/styles/Navbar.css'
import '@/styles/pillbtns.css'
import React, { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { CartProvider } from "react-use-cart";
import LoadingBar from 'react-top-loading-bar'

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(77)
    })
    router.events.on("routeChangeComplete", () => {
      setProgress(100)
    })
  }, [router.events])
  return (
    <>
      <LoadingBar color='linear-gradient(90deg, #FAE892 0%, #B3903E 70%)' height={4} waitingTime={400} loaderSpeed={200} shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <ToastContainer className="toast" />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}
