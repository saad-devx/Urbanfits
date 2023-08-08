import React, { useEffect, useState } from "react";
import Head from "next/head";
import HomeCarousel from "@/components/carousels/homeCarousel";
import HomeCarousel2 from "@/components/carousels/homeCarousel2";
import Link from "next/link";
import ListingShopSection from "@/components/listingShop_section";
// import Card from "@/components/cards/card";
import PicCard from "@/components/cards/picCard";
import Shoppingcard from "@/components/cards/shoppingcard";
// Modal imports
import LoadingModal from "../components/modals/loadingmodal";
import LanguageModal from "../components/modals/languagemodal";
// imports for images
import image0 from "@/public/card imgs/card img5.jpg";
import image1 from "@/public/card imgs/card img6.jpg";
import image2 from "@/public/card imgs/card img8.jpg";
import image3 from "@/public/card imgs/card img1.jpg";
import image4 from "@/public/card imgs/card img13.png";
import image5 from "@/public/card imgs/card img14.png";
import image6 from "@/public/card imgs/card img15.png";
import image7 from "@/public/card imgs/card img16.png";

export default function Home() {
    // states and function for modals
    const [modal1, setModal1] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [carouselContainer, setCarouselContainer] = useState('h-screen');

    useEffect(() => {
        let item = localStorage.getItem("loadingModal");
        if (item) return;
        setModal1(true);
        localStorage.setItem("loadingModal", true);
    }, []);

    // useEffect(() => {
    //     const setSizefunc = (e) => {
    //         let position = window.pageYOffset;
    //         if (position >> 0) {
    //             setCarouselContainer('layout_height')
    //             setCarouselClasses('w-11/12 lg:w-11/12 h-80vh lg:h-86vh rounded-2rem')
    //             setTextContainer('bottom-[26.4%] left-[4%] lg:bottom-[26.4%] lg:left-[4%]')
    //             window.removeEventListener('scroll', setSizefunc);
    //         }
    //     }
    //     window.addEventListener('scroll', setSizefunc);
    // }, []);

    const toggleModal = (e) => {
        if (e.target.name === "modal1") {
            if (modal1 === false) return setModal1(true);
            if (modal1 === true) return setModal1(false);
        } else if (e.target.name === "modal3") {
            if (modal3 === false) return setModal3(true);
            if (modal3 === true) return setModal3(false);
        }
    };

    // temporary product object for shopping card
    const product = {
        name: 'Sample Product name',
        price: '76.99',
        variants: [1, 2, 3, 4]
    }

    return (
        <>
            <Head>
                <title>Urban Fits</title>
            </Head>
            <main className="w-full h-full">
                <LoadingModal show={modal1} toggleModal={toggleModal} />
                <LanguageModal show={modal3} toggleModal={toggleModal} />
                <main className='w-full bg-white flex justify-center lg:justify-end transition-all ease-linear duration-700 overflow-hidden' >
                    <div className="w-full flex flex-col justify-center items-center gap-y-5 transition-all ease-linear duration-700 overflow-x-hidden">
                        <div className="w-full h-screen flex justify-center items-center font_gotham transition-all duration-700 ease-linear overflow-hidden">
                            <HomeCarousel />
                        </div>
                        {/* Collection Section */}
                        <div className="w-full px-5 md:px-7 lg:px-14 flex justify-between items-center">
                            <h2 className="font_gotham_medium text-sm lg:text-[20px] tracking-expand" >NEW COLLECTION</h2>
                            <Link href="products/New In" className="flex items-center group">
                                <span className="w-10 h-[2px] group-hover:w-16 mr-4 bg-black transition-all" ></span>
                                <h3 className="font_gotham_medium tracking-[0.5em] lg:tracking-[1.5em] text-xs lg:text-sm">MORE</h3>
                            </Link>
                        </div>
                        <section id="section2" className="box_2 w-full px-5 md:px-7 lg:px-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-3 xl:gap-8 2xl:gap-14">
                            <Shoppingcard margin='0' product={product} img={image4} />
                            <Shoppingcard margin='0' product={product} img={image5} />
                            <Shoppingcard margin='0' product={product} img={image6} />
                            <Shoppingcard margin='0' product={product} img={image7} />
                        </section>
                        {/* Shopping Card Section */}
                        <div className="box_1 w-full mt-10 lg:mt-20 px-5 md:px-7 lg:px-14 flex items-center mb-3 text-sm lg:text-[20px] leading-3 font_gotham_medium tracking-expand"><h3>URBAN FITS COLLECTION&nbsp;</h3><span className="w-14 md:w-20 h-[2px] mx-1 bg-black transition-all"></span></div>
                        <section id="section3" className="w-full h-screen md:h-auto lg:h-[85vh] px-5 md:px-7 lg:px-14 flex flex-col lg:flex-row justify-between gap-y-5 font_gotham">
                            <PicCard h1="NEW IN" h2="READY TO WEAR" btnValue="SHOP WOMEN" img={image0} />
                            <PicCard h1="NEW IN" h2="READY TO WEAR" btnValue="SHOP MEN" img={image1} />
                        </section>
                        {/* Shopping Card Section */}
                        <section id="section4" className="box_2 w-full h-screen md:h-auto lg:h-[85vh] px-5 md:px-7 lg:px-14 my-5 flex flex-col lg:flex-row justify-between gap-y-5 font_gotham">
                            <PicCard h1="NEW IN" h2="READY TO WEAR" btnValue="SHOP WOMEN" img={image2} />
                            <PicCard h1="NEW IN" h2="READY TO WEAR" btnValue="SHOP MEN" img={image3} />
                        </section>
                        <HomeCarousel2 />
                        {/* Collection Section */}
                        <div className="w-full px-5 md:px-7 lg:px-14 flex justify-between items-center">
                            <h2 className="font_gotham_medium text-sm lg:text-[20px] tracking-expand" >NEW COLLECTION</h2>
                            <Link href="products/New In" className="flex items-center group">
                                <span className="w-10 h-[2px] group-hover:w-16 mr-4 bg-black transition-all" ></span>
                                <h3 className="font_gotham_medium tracking-[0.5em] lg:tracking-[1.5em] text-xs lg:text-sm">MORE</h3>
                            </Link>
                        </div>
                        <section id="section6" className="w-full my-5 px-5 md:px-7 lg:px-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-3 xl:gap-8 2xl:gap-14">
                            <Shoppingcard margin='0' product={product} img={image4} />
                            <Shoppingcard margin='0' product={product} img={image5} />
                            <Shoppingcard margin='0' product={product} img={image6} />
                            <Shoppingcard margin='0' product={product} img={image7} />
                        </section>
                        {/* <section id="section7" className="w-full h-auto lg:h-80vh p-5 flex flex-col lg:flex-row justify-center items-center gap-5">
                            <Card href="/contact" title="CONTACT US" value="If you have any query then please contact us." valueCenter btnClasses="w-1/2 py-5" btnValue="COTNACT US" btnFont='font_gotham_light' classes="w-full h-full md:w-60vw md:h-3/4 lg:w-30pr py-20 lg:py-16 justify-center items-center" />
                            <Card href="/customercare" title="CUSTOMER CARE" value="Do you have any questions? We are here to help you. You can contact our customer care team by email or over the phone." valueCenter btnClasses="w-1/2 py-5" btnValue="GET IN TOUCH" btnFont='font_gotham_light' classes="w-full md:w-60vw py-20 justify-center items-center h-full lg:w-30pr md:h-3/4" />
                            <Card href="/faq" title="FAQ" value="Find all the answers to the frequently asked questions below." valueCenter btnClasses="w-1/2 py-5" btnValue="SEE OUR FAQs" btnFont='font_gotham_light' classes="w-full md:w-60vw py-20 justify-center items-center h-full lg:w-30pr md:h-3/4" />
                        </section> */}
                    </div>
                </main>
                <ListingShopSection classes='translate-y-5 mt-10' whiteTheme />
            </main>
        </>
    );
}
