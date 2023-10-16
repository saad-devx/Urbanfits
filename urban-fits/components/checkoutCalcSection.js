import React from 'react'
import { useCart } from "react-use-cart";
import useWallet from '@/hooks/useWallet';
import useUser from '@/hooks/useUser';
import Image from 'next/image';

export default function CheckoutCalcSection(props) {
    const { user } = useUser()
    const { totalUniqueItems, items, cartTotal } = useCart()
    const { formatPrice } = useWallet()
    const { shippingRates, calculateTotolShippingFee, selectedShippingOption } = props
    const totalUfPoints = items.reduce((total, item) => total + (item?.uf_points || 0), 0)

    const TotalOrderPrice = formatPrice(cartTotal + calculateTotolShippingFee(shippingRates?.price || 0, selectedShippingOption))

    return (
        <div className="bg-white w-full p-4 md:p-5 lg:p-7 space-y-3 rounded-xl">
            <h3 className="text-xl md:text-2xl font_urbanist_bold text-center mb-3">Order Summary ({totalUniqueItems})</h3>
            <div className="flex relative mb-3 w-full flex-col justify-between items-center rounded-lg md:rounded-2xl">
                {items.map((item, i) => {
                    return <>
                        <section className="w-full mb-4 md:mb-6 p-4 border rounded-lg">
                            <h3 key={-i - 1} className="mb-2 self-start font_urbanist_medium text-sm md:text-base text-left capitalize">{item?.name}</h3>
                            <div key={i} className="w-full mb-2 flex justify-between xl:items-center">
                                <div className="w-20 h-20 rounded-md md:rounded-lg overflow-hidden">
                                    <Image width={640} height={640} src={item.images[0]} alt={item.name} className="w-full h-full object-cover object-top" />
                                </div>
                                <aside className="flex-1 flex lg:flex-col xl:flex-row items-start justify-between md:justify-start lg:justify-between ml-4 mid:ml-6 lg:ml-3 gap-x-2 md:gap-x-10 lg:gap-y-2.5 xl:gap-x-4 text-10px md:text-[13px]">
                                    <div className="lg:w-full xl:w-1/2 lg:my-0 flex flex-col gap-y-2.5">
                                        <div key={1} className="w-full mx-auto flex justify-between font_urbanist_bold capitalize"><span className='font_urbanist_medium text-gray-400'>Color:</span> <span className='truncate'>{item.color}</span></div>
                                        <div key={2} className="w-full mx-auto flex justify-between font_urbanist_bold"><span className='font_urbanist_medium text-gray-400'>Size:</span> <span>{item.size}</span></div>
                                        <div key={3} className="w-full mx-auto flex justify-between font_urbanist_bold"><span className='font_urbanist_medium text-gray-400'>Quantity:</span> <span>{item.quantity}</span></div>
                                    </div>
                                    <div className="lg:w-full xl:w-1/2 lg:my-0 flex flex-col gap-y-2.5">
                                        {item.uf_points ? <div key={1} className="w-full mx-auto flex justify-between font_urbanist_bold"><span className='font_urbanist_medium text-red-500'>UF Points:</span> <span>{item.uf_points}</span></div> : null}
                                        <div key={2} className="w-full mx-auto flex justify-between font_urbanist_bold"><span className='font_urbanist_medium text-gray-400'>Price:</span> <span>{formatPrice(item.price)}</span></div>
                                        <div key={3} className="w-full mx-auto flex justify-between font_urbanist_bold"><span className='font_urbanist_medium text-gray-400'>Sale Price:</span> <span>{formatPrice(item.price * item.quantity)}</span></div>
                                    </div>
                                </aside>
                            </div>
                        </section>
                    </>
                })}
                <div className="w-full h-auto flex flex-col my-5 md:my-3 font_urbanist_bold text-sm md:text-base gap-y-3 md:gap-y-4">
                    <div className="w-full mx-auto flex justify-between"><span className='font_urbanist text-gray-400'>Card Number</span> <span>xxx-xxxxxxxxxxxxx-{user.uf_wallet.card_number.slice(-4)}</span></div>
                    <div className="w-full mx-auto flex justify-between"><span className='font_urbanist text-red-500'>Earned UF-Points</span> <span>{totalUfPoints}</span></div>
                    <div className="w-full mx-auto flex justify-between"><span className='font_urbanist text-gray-400'>Subtotal</span> <span>{formatPrice(cartTotal)}</span></div>
                    <div className="w-full mx-auto flex justify-between"><span className='font_urbanist text-gray-400'>Discount</span> <span>{0}%</span></div>
                    <div className="w-full mx-auto flex justify-between"><span className='font_urbanist text-gray-400'>Shipping</span> <span>{formatPrice(calculateTotolShippingFee(shippingRates?.price || 0, selectedShippingOption)) || "We don't ship here"}</span></div>
                </div>
                <div className="w-full py-2 flex justify-between font_urbanist_bold border-t border-t-gray-200">
                    <h4 className="text-lg">Total</h4>
                    <h4 className="text-lg">{TotalOrderPrice}</h4>
                </div>
            </div>
        </div>
    )
}
