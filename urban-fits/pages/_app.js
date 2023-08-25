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
import LoadingBar from 'react-top-loading-bar'
import Error403 from './403'
import axios from 'axios'
import countryCodes from '@/static data/countryCodes'

function App({ Component, pageProps: { session, ...pageProps } }) {
  const { user, setCountry } = useUser()
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  const url = router.pathname
  const Exception = url.startsWith("/admin") || (window.matchMedia('(max-width: 786px)').matches && (url.startsWith('/auth') || (url.startsWith('/user/') && url.length > '/user/'.length)))
  if (url.startsWith("/admin")) {
    if (!user || user.role == "customer") return <Error403 />
  }

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      const sessionValid = localStorage.getItem('remember_me')
      if (sessionValid === true) return localStorage.clear()
      else localStorage.removeItem("loadingModal")
    })
  }, [])
  // useEffect(() => {
  //   return async () => {
  //     try {
  //       const { data } = await axios.get(`${process.env.HOST}/api/geolocation`)
  //       console.log(data)
  //       const filteredCountry = countryCodes.filter(country => country.country === data.geo_meta.country_code.toLowerCase())[0]
  //       console.log(filteredCountry)
  //       if (filteredCountry) return setCountry(filteredCountry)
  //       else return setCountry({ name: "United Arab Emirates", code: "+971", country: "ae", src: "https://urban-fits.s3.eu-north-1.amazonaws.com/country-flags/AE.jpg" })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // }, [])
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(77)
    })
    router.events.on("routeChangeComplete", () => {
      setProgress(100)
    })
  }, [router.events])

  return <>
    <LoadingBar color='linear-gradient(90deg, #FAE892 0%, #B3903E 70%)' height={4} waitingTime={0} loaderSpeed={200} shadow={true} progress={progress} onLoaderFinished={() => setProgress(0)} />
    <ToastContainer className="toast" />
    <SessionProvider session={session}>
      <CartProvider>
        {Exception ? null : <Navbar />}
        <Component {...pageProps} />
        {Exception ? null : <Footer />}
      </CartProvider>
    </SessionProvider>
  </>
}
export default dynamic(() => Promise.resolve(App), { ssr: false })