import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Shoppingcard(props) {
    // Setting up Toast
    const showToast = () => {
        toast("Your item is added to the Cart", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            type: "success",
            progress: undefined,
            theme: "colored",
            transition: Slide
        })
    }
    return (
        <div key={props.li_key} className='relative bg-white w-[48%] md:w-[32%] lg:w-[24%] h-[31vh] lg:h-[62vh] mr-auto my-5 rounded-2xl shadow-md hover:scale-[1.02] hover:rounded-lg font_gotham transition-all duration-500 overflow-hidden' >
            <Link href={`/products/product/${props.id}`}>
                <div className="relative w-full h-3/4 md:h-[80%]">
                    <button onClick={()=>{props.addItem(); showToast()}} className="w-9 h-9 absolute top-2 md:top-4 right-2 md:right-4 transition-all duration-300 rounded-full flex justify-center items-center bg-white/60 hover:bg-gold-land hover:text-white">
                        <i className="material-symbols-outlined text-xl md:text-[1.6rem]">local_mall</i>
                    </button>
                    <Image src={props.img} width={640} height={853} className={`w-full h-full object-cover ${!props.object_fit ? "object-center" : props.object_fit}`} alt='Urban Fits' />
                </div>
                <div className=" w-full h-full my-2 lg:my-4 px-3 text-black flex flex-col items-start">
                    <h4 className=" md:text-lg">{props.name}</h4>
                    <div className="w-full my-1 md:mb-3 flex justify-between font_gotam_light text-sm md:text-base">
                        <small>{props.colors} Color(s)</small>
                        <small>${props.price}</small>
                    </div>
                </div>
            </Link>
        </div>
    )
}
