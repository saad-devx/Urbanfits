import { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const HomeCarousel = dynamic(() => import('@/components/carousels/homeCarousel'));
import useCarousel from '@/hooks/useCarousel';
import SkeletonRow from "@/components/cards/card-skeleton";
import useLanguage from "@/hooks/useLanguage";
import Link from "next/link";
import ListingShopSection from "@/components/listingShop_section";
import OfferCard from "@/components/cards/offerCard";
import Shoppingcard from "@/components/cards/shoppingcard";
import { home as homeLang } from "@/locales";

export default function Home() {
    const { indexContent, indexLoading, getIndexContent, homeSlides, getHomeSlides } = useCarousel();
    const { locale } = useLanguage();
    const langObj = homeLang[locale];

    useEffect(() => {
        getIndexContent();
    }, [])

    return <>
        <Head><title>Urban Fits</title></Head>
        <main className="w-full">
            <main className='w-full bg-white flex flex-col transition-all gap-y-7 lg:gap-y-10 overflow-hidden' >
                <section className="w-full layout_height mb-4 flex justify-center items-center transition-all duration-700 ease-linear overflow-hidden">
                    <HomeCarousel homeSlides={homeSlides} getHomeSlides={getHomeSlides} />
                </section>
                {/* Latest Arrivals */}
                {indexContent?.latestArrivals?.length ? <section>
                    <div className="w-full px-5 md:px-7 lg:px-14 xl:px-20 mb-3 md:mb-5 flex justify-between items-center">
                        <h2 className="font_urbanist_bold text-lg md:xl lg:text-2xl">{langObj.latestArrival}</h2>
                        {/* <Link href='/products/category/64d517f6218f4e9ee6253b18?name=new+collection' className="px-4 py-2 bg-gray-100 text-xs md:text-[15px] rounded-full font_urbanist_medium">{langObj.visitCollection}</Link> */}
                    </div>
                    <div className="box_2 w-full px-5 md:px-7 lg:px-14 xl:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-2 xl:gap-4 2xl:gap-14">
                        {indexContent?.latestArrivals.map((product, index) => {
                            if (window.matchMedia('(max-width: 760px)').matches && index > 3) return
                            else if (window.matchMedia('(min-width: 760px) and (max-width: 1024px)').matches && index > 2) return
                            else if (index > 4) return
                            else return <Shoppingcard key={"latest_arrivals" + product._id} margin='0' product={product} />
                        })}
                    </div>
                </section> : (indexLoading && <SkeletonRow />)}
                {/* Collection Section */}
                <section>
                    <div className="w-full px-5 md:px-7 lg:px-14 xl:px-20 mb-3 md:mb-5 flex justify-between items-center">
                        <h2 className="font_urbanist_bold text-lg md:xl lg:text-2xl">{langObj.newCollection}</h2>
                        <Link href='/products/category/64d517f6218f4e9ee6253b18?name=new+collection' className="px-4 py-2 bg-gray-100 text-xs md:text-[15px] rounded-full font_urbanist_medium">{langObj.visitCollection}</Link>
                    </div>
                    <div className="box_2 w-full px-5 md:px-7 lg:px-14 xl:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-2 xl:gap-4 2xl:gap-14">
                        {indexContent?.newCollection?.map((product, index) => {
                            if (window.matchMedia('(max-width: 760px)').matches && index > 3) return
                            else if (window.matchMedia('(min-width: 760px) and (max-width: 1024px)').matches && index > 2) return
                            else if (index > 4) return
                            else return <Shoppingcard key={"new_collection" + product._id} margin='0' product={product} />
                        })}
                    </div>
                </section>

                <section className="w-full px-5 md:px-7 lg:px-14 xl:px-20 grid grid-cols-2 gap-4 xl:gap-7">
                    <OfferCard key={1} href="#" badge="Clearance" heading="Up To" offer="50% Off" />
                    <OfferCard key={2} href="#" badge="Shop Women" heading="Up To" offer="30% Off" />
                    <OfferCard key={2} href="#" badge="Shop Men" heading="All Under" offer="AED $200" />
                    <OfferCard key={4} href="#" badge="Accessories Zone" heading="Stars From" offer="AED $50" />
                </section>

                {/* Women Collection Section */}
                <section>
                    <div className="w-full px-5 md:px-7 lg:px-14 xl:px-20 mb-3 md:mb-5 flex justify-between items-center">
                        <h2 className="font_urbanist_bold text-lg md:xl lg:text-2xl">{langObj.womenCollection}</h2>
                        <Link href='/products/category/64a59d5816b4c91fa1967b2e?name=women' className="px-4 py-2 bg-gray-100 text-xs md:text-[15px] rounded-full font_urbanist_medium">{langObj.visitCollection}</Link>
                    </div>
                    <div className="box_2 w-full px-5 md:px-7 lg:px-14 xl:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-2 xl:gap-4 2xl:gap-14">
                        {indexContent?.womenCollection?.map((product, index) => {
                            if (window.matchMedia('(max-width: 760px)').matches && index > 3) return
                            else if (window.matchMedia('(min-width: 760px) and (max-width: 1024px)').matches && index > 2) return
                            else if (index > 4) return
                            else return <Shoppingcard key={"women_collection" + product._id} margin='0' product={product} />
                        })}
                    </div>
                </section>

                {/* Men Collection Section */}
                {indexContent?.menCollection?.length ? <section>
                    <div className="w-full px-5 md:px-7 lg:px-14 xl:px-20 mb-3 md:mb-5 flex justify-between items-center">
                        <h2 className="font_urbanist_bold text-lg md:xl lg:text-2xl">{langObj.menCollection}</h2>
                        <Link href='/products/category/649b292762a7c100cfb7207f?name=men' className="px-4 py-2 bg-gray-100 text-xs md:text-[15px] rounded-full font_urbanist_medium">{langObj.visitCollection}</Link>
                    </div>
                    <div className="box_2 w-full px-5 md:px-7 lg:px-14 xl:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-2 xl:gap-4 2xl:gap-14">
                        {indexContent?.menCollection?.map((product, index) => {
                            if (window.matchMedia('(max-width: 760px)').matches && index > 3) return
                            else if (window.matchMedia('(min-width: 760px) and (max-width: 1024px)').matches && index > 2) return
                            else if (index > 4) return
                            else return <Shoppingcard key={"men_collection" + product._id} margin='0' product={product} />
                        })}
                    </div>
                </section> : (indexLoading && <SkeletonRow />)}

                {/* Kids Collection Section */}
                {indexContent?.kidsCollection?.length ? <section>
                    <div className="w-full px-5 md:px-7 lg:px-14 xl:px-20 mb-3 md:mb-5 flex justify-between items-center">
                        <h2 className="font_urbanist_bold text-lg md:xl lg:text-2xl">{langObj.kidsCollection}</h2>
                        <Link href='/products/category/64d4dfa643c643cc9c60c672?name=kids' className="px-4 py-2 bg-gray-100 text-xs md:text-[15px] rounded-full font_urbanist_medium">{langObj.visitCollection}</Link>
                    </div>
                    <div className="box_2 w-full px-5 md:px-7 lg:px-14 xl:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-2 xl:gap-4 2xl:gap-14">
                        {indexContent?.kidsCollection?.map((product, index) => {
                            if (window.matchMedia('(max-width: 760px)').matches && index > 3) return
                            else if (window.matchMedia('(min-width: 760px) and (max-width: 1024px)').matches && index > 2) return
                            else if (index > 4) return
                            else return <Shoppingcard key={"kids_collection" + product._id} margin='0' product={product} />
                        })}
                    </div>
                </section> : (indexLoading && <SkeletonRow />)}
            </main>
            <ListingShopSection classes="mt-7 lg:mt-10" whiteTheme />
        </main>
    </>
}