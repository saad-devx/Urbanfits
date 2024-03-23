import { useCart } from 'react-use-cart'
import Accordian from '@/components/accordians/accordian'
import useWallet from '@/hooks/useWallet'
import toaster from '@/utils/toast_function'
import { useState } from 'react'

export default function Giftcard() {
    const [cardQty, setCardQty] = useState(1);
    // const { formatPrice } = useWallet()
    // const { addItem, inCart } = useCart()
    return <>
        <main className='w-full p-5 md:p-7 lg:p-14 xl:p-16 2xl:p-24 bg-gray-100 transition-all overflow-hidden'>
            <section className="bg-white w-full px-4 py-2 lg:px-6 lg:py-6 xl:px-8 xl:py-10 flex flex-col lg:flex-row rounded-2xl gap-5 lg:gap-10 xl:gap-14">
                <nav className="w-full lg:w-2/5">
                    <div className="w-full mb-4 flex flex-col p-4 lg:p-7 rounded-2xl bg-gray-100">
                        <div className="w-full flex justify-between items-center">
                            <span className="font-semibold text-xs lg:text-sm">Validity 12 months</span>
                            <span className="bg-black text-white text-[10px] lg:text-xs px-4 py-1 rounded-[4px]">Online</span>
                        </div>
                        <div className="relative bg-black w-full h-[60vw] lg:h-[18vw] mt-2 lg:mt-4 flex justify-center items-center rounded-2xl">
                            <svg className="w-1/5" xmlns="http://www.w3.org/2000/svg" width="155" height="135" viewBox="0 0 155 135" fill="none">
                                <path d="M85.9267 80.9723V84.5116C85.9267 109.04 72.4516 119.581 52.0676 119.581C31.6836 119.581 18.0189 109.04 18.0189 84.5116V0.00195312H0V84.322C0 118.996 23.3544 134.913 51.878 134.913C80.3817 134.913 103.946 118.996 103.946 84.322V80.9723H85.9267Z" fill="#FFFF" />
                                <path d="M140.654 46.6699H84.0057V64.4227H140.654V46.6699Z" fill="#FFFF" />
                                <path d="M155 0H84.0057V17.7528H155V0Z" fill="#FFFF" />
                            </svg>
                            <span className="absolute right-[6%] bottom-[4%] text-white font_copper text-xs lg:text-sm">URBAN FITS</span>
                        </div>
                    </div>
                    <Accordian title="About this gift card" className="p-4 lg:p-6 outline-none accordion-section rounded-xl bg-gray-100 mb-6">
                        <p className="mt-4"> URBAN FITS is the world's leading designer, marketer and
                            distributor of authentic apparel, equipment and accessories for
                            a wide variety of sports and fitness activities. <br /><br />
                            Have a friend or loved one who is passionate about sports? Get
                            them exactly what they would need or want to enjoy their
                            favourite activity, in apparel and equipment designed
                            specifically for athletes to stay comfortable and improve at
                            their game. Get them the URBAN FITS eGift card, the gift that is
                            always a perfect fit! You could send this eGift card to loved
                            ones, friends or colleagues on their Birthdays, Anniversaries, or
                            on Eid, Christmas, Diwali and other festivals celebrated
                            throughout the year. It is also a great option when you want to
                            send someone a gift to show your appreciation for a “Job Well
                            Done” or to say “Thank You”, or just as a kind thought to
                            motivate them to keep working on their goals, and look great
                            while they are at it! <br /> <br />
                            You can even send it instantly or schedule a perfect time in
                            advance. Your loved one will receive their URBAN FITS Gift Card
                            conveniently on their email, with an exciting digital unwrapping
                            experience. This is gifting made easy, fun, convenient and safe!</p>
                    </Accordian>

                    <Accordian title="Terms & Conditions" className="p-4 lg:p-6 outline-none accordion-section rounded-xl bg-gray-100 mb-6">
                        <ul className='mt-4 space-y-2'>
                            <li>• This eGift Card cannot be exchanged for cash</li>
                            <li>• This eGift Card is Valid for one year (12 Months) from the date of issue</li>
                            <li>• This eGift Card is only valid for online shopping on urbanfits.ae</li>
                            <li>• This eGift Card is for one-time use only. Partial Redemptions are not applicable.This eGift Card needs to be used fully for the face value of the eGift Card or higher</li>
                            <li>• This eGift Card is redeemable even during promotions and sales</li>
                            <li>• This eGift Card is not replaceable if lost or stolen</li>
                            <li>• Expired eGift Cards cannot be extended, exchanged or refunded</li>
                            <li>• For all Customer related queries and feedback please call (971) 52 7174508 or email - support@urbanfits.ae</li>
                        </ul>
                    </Accordian>
                </nav>
                <nav className="w-full lg:w-3/5 p-4 lg:p-6 flex flex-col">
                    <div className="w-full flex justify-between items-center">
                        <h2 className="font_copper text-base lg:text-xl text-black">URBAN FITS</h2>
                        <span className="text-xs lg:text-sm">AED 50 - AED 1000</span>
                    </div>
                    <div className="w-full mt-5 lg:mt-10 flex justify-between items-center gap-x-4">
                        <button className="w-1/2 py-3 lg:py-5 bg-gray-100 hover:bg-white border border-transparent hover:border-black rounded-md font-semibold lg:rounded-lg text-sm lg:text-base transition-all">Gift a friend</button>
                        <button className="w-1/2 py-3 lg:py-5 bg-gray-100 hover:bg-white border border-transparent hover:border-black rounded-md font-semibold lg:rounded-lg text-sm lg:text-base transition-all">Buy for self</button>
                    </div>
                    <div className="w-full mt-4 lg:mt-8 flex flex-wrap justify-between gap-2 ">
                        <button className="px-2 md:px-4 py-2 border hover:border-black bg-gray-100 hover:bg-white rounded-lg text-[10px] md:text-xs lg:text-sm font-semibold">AED 50</button>
                        <button className="px-2 md:px-4 py-2 border hover:border-black bg-gray-100 hover:bg-white rounded-lg text-[10px] md:text-xs lg:text-sm font-semibold">AED 100</button>
                        <button className="px-2 md:px-4 py-2 border hover:border-black bg-gray-100 hover:bg-white rounded-lg text-[10px] md:text-xs lg:text-sm font-semibold">AED 200</button>
                        <button className="px-2 md:px-4 py-2 border hover:border-black bg-gray-100 hover:bg-white rounded-lg text-[10px] md:text-xs lg:text-sm font-semibold">AED 300</button>
                        <button className="px-2 md:px-4 py-2 border hover:border-black bg-gray-100 hover:bg-white rounded-lg text-[10px] md:text-xs lg:text-sm font-semibold">AED 400</button>
                        <button className="px-2 md:px-4 py-2 border hover:border-black bg-gray-100 hover:bg-white rounded-lg text-[10px] md:text-xs lg:text-sm font-semibold">AED 500</button>
                    </div>
                    <span className="my-4 text-sm lg:text-base">Quantity:</span>
                    <div className="w-full flex gap-x-3">
                        <div className="w-1/3 lg:w-1/5 flex justify-between items-center border rounded-lg">
                            <button onClick={() => setCardQty((prev) => prev > 1 ? prev - 1 : prev)} className="w-1/3 py-3 text-center hover:bg-gray-100">-</button>
                            <span className="w-1/3 py-3 text-center">{cardQty}</span>
                            <button onClick={() => setCardQty((prev) => prev < 5 ? prev + 1 : prev)} className="w-1/3 py-3 text-center hover:bg-gray-100">+</button>
                        </div>
                        <button className="flex-1 py-3 text-center text-white text-semibold bg-pinky rounded-lg">Continue</button>
                    </div>
                </nav>
            </section>

        </main >
    </>
}