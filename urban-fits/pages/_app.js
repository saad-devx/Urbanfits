import '@/styles/globals.css'
import '@/styles/Navbar.css'
import '@/styles/pillbtns.css'
import '@/styles/carousels.css'
import React, { useState, useEffect } from 'react'
import { SessionProvider } from "next-auth/react"
// import CustomCursor from '@/components/customCursor'
import dynamic from 'next/dynamic';
import useLocation from '@/hooks/useLocation'
import { ToastContainer } from 'react-toastify'
import useUser from '@/hooks/useUser'
import { useRouter } from 'next/router'
import { CartProvider } from "react-use-cart";
import LoadingBar from 'react-top-loading-bar'

function App({ Component, pageProps: { session, ...pageProps } }) {
  const { getLocation } = useLocation()
  const { user } = useUser()
  // const { cursor } = useCursor()
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  if (router.pathname.startsWith("/admin")) {
    if (!user || user.role == "customer") return <div className="w-full h-screen flex justify-center items-center font_gotham_medium text-2xl tracking-expand">ACCESS DENIED</div>
  }

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      const sessionValid = localStorage.getItem('remember_me')
      if (sessionValid === true) return localStorage.clear()
      else localStorage.removeItem("loadingModal")
    })
  }, [])

  useEffect(() => {
    getLocation()
  }, [])

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
      {/* {cursor ? <CustomCursor /> : null} */}
      <LoadingBar color='linear-gradient(90deg, #FAE892 0%, #B3903E 70%)' height={4} waitingTime={400} loaderSpeed={200} shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <ToastContainer className="toast" />
      <SessionProvider session={session}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </SessionProvider>
    </>
  )
}
export default dynamic(() => Promise.resolve(App), { ssr: false })