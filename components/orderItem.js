import { useState } from 'react';
import Link from "next/link";
import useWallet from '@/hooks/useWallet';
import Invoice from '@/components/modals/invoice';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Image from 'next/image'
import { orderStatuses } from '@/uf.config';
import toaster from '@/utils/toast_function';

export default function OrderCard(props) {
    const [invoice, setInvoice] = useState(false);
    const { formatPrice } = useWallet();
    const { order } = props
    const date = new Date(order.createdAt)

    const toggleInvoice = () => setInvoice(!invoice)
    const downloadInvoice = async (name) => {
        const invoice = document.getElementById('invoice');
        const canvas = await html2canvas(invoice, { scale: 6 });
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF('landscape', 'pt', 'letter');
        pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, 0, null, 'FAST');
        pdf.save(`${name}.pdf`);
    }

    const handleReturnWindow = (raw_date) => {
        let date = new Date(raw_date);
        const currentDate = new Date();
        date.setDate(date.getDate() + 30);
        date = new Date(date);
        const returnExpiry = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

        console.log("Here is the return last date: ", date, returnExpiry);
        if (currentDate.getTime() > date.getTime()) return "Return window was closed at " + returnExpiry;
        else return "Return window will close on " + returnExpiry;

    }

    return <>
        <Invoice key={`invoice-${props.key}`} order={order} setInvoice={setInvoice} show={invoice} />
        <div key={props.key} className={`w-full h-48 md:h-52 ${props.marginClass || "my-3"} flex flex-col items-start rounded-xl overflow-clip`}>
            <nav className="bg-gray-50 w-full h-[30%] px-2 md:px-5 py-2 font_urbanist_light text-[10px] md:text-xs grid grid-cols-3">
                <div className='flex flex-col gap-y-2' >
                    <span className='font_urbanist_medium'>Order Placed</span>
                    <span className='font_gotam_light'>{date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()}</span>
                </div>
                <div className='flex flex-col gap-y-2' >
                    <span className='font_urbanist_medium'>Total Price</span>
                    <span className='font_gotam_light' >{formatPrice(order.price_details.total)}</span>
                </div>
                <div className='flex flex-col gap-y-2 items-start' >
                    <span className='font_urbanist_medium'>Order Reference #</span>
                    <button onClick={() => { navigator.clipboard.writeText(order._id); toaster("success", "Order Reference copied!") }} className='font-semibold'>{order._id}</button>
                </div>
            </nav>
            <nav className="w-full h-full flex flex-col lg:flex-row lg:justify-between items-center text-xs md:text-sm">
                <div className="w-full md:w-3/4 h-full py-5 flex items-center">
                    {order.order_items[0] ? <span className='w-24 md:w-28 aspect-square rounded-xl overflow-hidden mr-10'>
                        <Image width={250} height={250} alt={order._id} src={process.env.NEXT_PUBLIC_BASE_IMG_URL + order.order_items[0]?.image} className="w-full h-full object-top object-cover" />
                    </span> : <span className={`${order.gift_cards[0]?.bg} w-24 md:w-28 aspect-video rounded-xl flex justify-center items-center font_montserrat_bold text-white text-xs tracking-1 uppercase overflow-hidden mr-10`}>{order.gift_cards[0]?.d_name}</span>}
                    <div className="flex-1 h-full md:h-auto flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col">
                            <h3 className="font_urbanist_bold text-sm md:text-base">{order.order_items[0]?.name || order.gift_cards[0]?.name}</h3>
                            <p className="lg:mt-2 font_urbanist text-[10px] md:text-xs">{handleReturnWindow(order.createdAt)}</p>
                        </div>
                        <div className='w-full mt-3 md:mt-0 flex justify-between items-center md:hidden text-[10px] gap-x-4'>
                            <p className="font-light flex items-center">Order Status:&nbsp;<span style={{ background: orderStatuses[order.order_status.status].bg, color: orderStatuses[order.order_status.status].text }} className="px-2 py-px lg:py-0.5 rounded-2xl text-[7px] font-semibold">{order.order_status.status}</span></p>
                            <div className="flex items-center gap-x-2">
                                <button onClick={() => downloadInvoice('invoice')} className="underline whitespace-nowrap">{window.matchMedia('(max-width: 1024px)').matches ? "Download Invoice" : "View Invoice"}</button>
                                <Link href={order.shipping_label_url} target='_blank' className="underline">Shipping Label</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex flex-col items-end justify-self-end text-xs gap-y-2'>
                    <p className="font-light flex items-center">Order Status:&nbsp;<span style={{ background: orderStatuses[order.order_status.status].bg, color: orderStatuses[order.order_status.status].text }} className="px-2 py-px lg:py-0.5 rounded-2xl text-[8px] lg:text-[10px] font-semibold">{order.order_status.status}</span></p>
                    <div className="flex items-center gap-x-2">
                        <button onClick={toggleInvoice} className="underline whitespace-nowrap">{window.matchMedia('(max-width: 1024px)').matches ? "Download Invoice" : "View Invoice"}</button>
                        <Link href={order.shipping_label_url} target='_blank' className="underline">Shipping Label</Link>
                    </div>
                </div>
            </nav>
        </div >
    </>
}