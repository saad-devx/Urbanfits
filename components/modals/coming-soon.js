import { montserrat } from "@/fonts";
import Image from "next/image";
import pinkLogo from "@/public/logos/logo_pink.svg"
export default function ComingSoonModal({ show, closeModal }) {
    if (show) return <div className={`w-full h-full font_urbanist fixed inset-0 z-[100] bg-gray-800/40 backdrop-blur flex justify-center items-center transition-all duration-500`}>
        <div className={`relative w-11/12 md:w-3/5 lg:w-[33rem] h-[35vh] text-sm flex flex-col justify-center items-center gap-y-4 bg-white border-2 border-pink-400 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500`}>
            <button onClick={closeModal} name="modal5" className="material-symbols-rounded text-3xl absolute right-5 top-5 cursor-pointer hover:rotate-180 transition-all duration-1000">close</button>
            <Image src={pinkLogo} className="size-4/5 absolute left-[-15%] top-1/2 -translate-y-[40%] opacity-20" />
            <h2 className={montserrat.className + " text-black md:text-lg lg:text-xl font-bold uppercase tracking-widest"}>Coming Soon</h2>
            <p className='text-xs md:text-sm'>In September 2024, Stay Tuned!</p>
        </div>
    </div>
}