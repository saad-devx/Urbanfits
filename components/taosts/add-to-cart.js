import { toast, Slide } from "react-toastify";
import Image from "next/image";

const CartTost = ({ toastProps, productName, image }) => {
    console.log("the toast props here: ", toastProps)
    return <div className="flex items-center gap-x-4 text-xs lg:text-sm">
        <div className="w-13 md:w-16 lg:w-20 aspect-square rounded-sm lg:rounded-lg overflow-hidden">
            <Image src={image} width={80} height={80} className="w-full object-cover" alt="product img" />
        </div>
        <div>
            <span className="font-bold">"{productName}"</span> added to the cart.
        </div>
    </div>
}

export default function addToCartToast(productName, image) {
    toast(<CartTost productName={productName} image={process.env.NEXT_PUBLIC_BASE_IMG_URL + image} />, {
        closeButton: false,
        icon: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "success",
        theme: "light",
        transition: Slide
    })
}