import Head from 'next/head'
import Link from 'next/link';
import Loader from '@/components/loaders/loader';

export default function AuthPage({ loading, height, mblNav, mblNavName, langObj, children }) {
    return <>
        <Head><title>Urban Fits</title></Head>
        <main className={`bg-white w-full h-screen flex ${height || "lg_layout_height"} px-4 md:px-20 lg:overflow-x-hidden`}>
            <section className="hidden lg:flex w-1/4 justify-center items-center md:w-full ">
                <div className="max-w-[25rem]">
                    <h2 className="mb-6 font_urbanist text-2xl text-center lg:text-[38px] lg:leading-[47px]">{langObj.offer.msg1}</h2>
                    <p className="font_urbanist_light text-xl md:text-2xl text-center">{langObj.offer.msg2}</p>
                </div>
            </section>
            {loading ? <Loader /> : null}
            <section className="w-full lg:w-3/4 xl:px-[5%] 2xl:px-[7%] flex flex-col lg:flex-row justify-center items-center h-full font_urbanist bg-white">
                <nav className="lg:hidden w-full py-4 md:py-8 mb-6 text-lg font_urbanist flex justify-between items-center">
                    <Link href="/"><i className='fa-solid fa-xmark text-2xl' /></Link>
                    <Link href={mblNav}>{mblNavName}</Link>
                </nav>
                {children}
            </section>
        </main>
    </>
}
