import React from 'react'
import { useCart } from "react-use-cart";
import Accordians from '@/components/accordians/accordians';
// imports for images
import Image from 'next/image';

export default function CheckoutCalcSection() {
    const { totalUniqueItems, items, cartTotal, emptyCart } = useCart()
    return (
        <div className="details w-full lg:w-[30%] max-w-[600px] m-0 space-y-3">
            <h3 className="text-xl md:text-2xl font_gotham_medium tracking-whidest mb-5">Order Summary ({totalUniqueItems})</h3>
            <div className="flex relative mb-3 p-6 bg-white card_boxshadow w-full flex-col justify-between items-center rounded-lg md:rounded-xl">
                {items.map((item, i) => {
                    return <>
                        <h3 key={-i-1} className="self-start font_gotham_medium text-sm md:text-base text-left capitalize">{item?.name} ({item.color})</h3>
                        <div key={i} className="w-full mb-2 flex justify-between items-center">
                            <div className="w-[125px] h-[125px] rounded-md md:rounded-lg overflow-hidden">
                                <Image width={640} height={640} src={item.images[0]} alt={item.name} className="w-full h-full object-cover object-top" />
                            </div>
                            <div className="w-1/2 h-auto text-[10px] md:text-xs my-5 md:my-3 space-y-1 md:space-y-1.5 font_gotham_light">
                                <div key={1} className="w-full mx-auto flex justify-between"><span className='font_gotham_medium'>Color:</span> <span>{item.color}</span></div>
                                <div key={2} className="w-full mx-auto flex justify-between"><span className='font_gotham_medium'>Size:</span> <span>{item.size}</span></div>
                                <div key={3} className="w-full mx-auto flex justify-between"><span className='font_gotham_medium'>Quantity:</span> <span>{item.quantity}</span></div>
                                <div key={4} className="w-full mx-auto flex justify-between"><span className='font_gotham_medium'>Price:</span> <span>${item.price}</span></div>
                                <div key={5} className="w-full mx-auto flex justify-between"><span className='font_gotham_medium'>Discount:</span> <span>{item.discount ? props.discount : 0}%</span></div>
                                <div key={6} className="w-full mx-auto flex justify-between"><span className='font_gotham_medium'>Sale Price:</span> <span>${item.price + 0}</span></div>
                            </div>
                        </div>
                    </>
                })}
                <div className="w-full h-auto my-5 md:my-3 font_gotham_medium text-xs md:text-sm">
                    <div key={1} className="w-full mx-auto flex justify-between"><span>Subtotal</span> <span>{cartTotal.toFixed(3)}</span></div>
                    <div key={2} className="w-full mx-auto flex justify-between"><span>Shipping</span> <span>${3.94}</span></div>
                    <div key={3} className="w-full mx-auto flex justify-between"><span>Sales Tax</span> <span>${4.28}</span></div>
                </div>
                <div className="w-full py-2 flex justify-between font_gotham_medium tracking-widest border-t border-t-gray-200">
                    <h4 className="text-lg">Total</h4>
                    <h4 className="text-lg">${(cartTotal + 3.94 + 4.28).toFixed(3)}</h4>
                </div>
            </div>
            <Accordians />
        </div>
    )
}
