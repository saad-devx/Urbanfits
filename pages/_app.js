import dynamic from 'next/dynamic';
function App({ Component, pageProps: { ...pageProps } }) {
    return <div className="w-full h-screen bg-white"></div>
}
export default dynamic(() => Promise.resolve(App), { ssr: false })