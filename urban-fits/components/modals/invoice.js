import React from 'react'
import Button from '../buttons/simple_btn'
import Image from 'next/image'
import image from '@/public/card imgs/card img5.jpg'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import { saveAs } from 'file-saver';

const OrderItem = (props) => {
    return (
        <div className={`w-full flex items-center py-3 px-1 border-b font_urbanist text-[10px] md:text-xs ${props.index % 2 ? 'bg-white' : 'bg-gray-50'}`}>
            <span className="w-[10%] pl-2">{props.index}</span>
            <div className="w-[15%]">
                <div className="w-11 h-11 rounded-xl overflow-hidden">
                    <Image src={image} className='w-full h-full object-cover object-center' />
                </div>
            </div>
            <span className="w-[20%]">Order item number {props.index}</span>
            <span className="w-[29%]">Leather Shoe with high sole, 12 days replacement warrenty</span>
            <span className="w-[7.66%] pl-2">{3}</span>
            <span className="w-[9.66%]">$77.67</span>
            <span className="w-[8.66%]">${77.67 * 3}</span>
        </div>
    )
}

export default function Invoice(props) {

    // const downloadInvoice = () => {
    //     const element = document.getElementById('invoice');
    //     html2canvas(element, {
    //         scale: 6,
    //         useCORS: true
    //     }).then((canvas) => {
    //         canvas.toBlob(function (blob) {
    //             saveAs(blob, 'invoice#36.png');
    //         });
    //     });
    // }

    const downloadInvoice = async (name) => {
        const invoice = document.getElementById('invoice');
        const canvas = await html2canvas(invoice, { scale: 6 });
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF('landscape', 'pt', 'letter');
        pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, 0, null, 'FAST');
        pdf.save(`${name}.pdf`);
    }

    const shareInvoice = () => {
        const element = document.getElementById('invoice');
        html2canvas(element).then((canvas) => {
            canvas.toBlob(function (blob) {
                const filesArray = [new File([blob], 'invoice.png', { type: 'image/png' })];
                const shareData = {
                    files: filesArray,
                };
                if (navigator.share) {
                    navigator.share(shareData)
                        .then(() => console.log('Shared successfully'))
                        .catch((error) => console.log('Error sharing:', error));
                } else {
                    alert('Share API not supported');
                }
            });
        });
    }

     return (
        <main className={`w-full h-screen overflow-y-scroll py-5 px-3 md:px-[5%] fixed left-0 top-0 z-50 bg-gray-200/40 backdrop-blur transition-all duration-500 ${props.show === false ? "opacity-0 pointer-events-none" : ''}`}>
            <div className="w-full h-full">
                <section className="w-full my-5 flex flex-row justify-between items-center">
                    <h1 className="font_urbanist_medium text-lg md:text-3xl self-start tracking-expand">INVOICE</h1>
                    <div className="flex flex-wrap items-center gap-2">
                        <Button onClick={props.toggleInvoice} classes='w-48pr md:w-auto' my='mb-2' bg='bg-white' text='black border' fontSize='text-[10px] md:text-xs' font='font_urbanist tracking-widest'><i className="fa-solid fa-chevron-left mr-2" />BACK</Button>
                        <Button onClick={() => { downloadInvoice('invoice#36') }} classes='w-48pr md:w-auto' my='mb-2' bg='bg-gold' fontSize='text-[10px] md:text-xs' font='font_urbanist tracking-widest'><i className="fa-solid fa-download text-white mr-2" />DOWNLOAD</Button>
                        <Button onClick={() => { window.print() }} classes='w-48pr md:w-auto' my='mb-2' bg='bg-gold' fontSize='text-[10px] md:text-xs' font='font_urbanist tracking-widest'><i className="fa-solid fa-print text-white mr-2" />PRINT</Button>
                        <Button onClick={shareInvoice} classes='w-48pr md:w-auto' my='mb-2' bg='bg-gold' fontSize='text-[10px] md:text-xs' font='font_urbanist tracking-widest'><i className="fa-solid fa-share-nodes text-white mr-2" />SHARE</Button>
                    </div>
                </section>

                <section className="w-full pb-10 rounded-3xl overflow-x-scroll scrollbar_x">
                    <section id='invoice' className="w-full min-w-[1350px] p-7 lg:px-[3.5%] py-7 bg-white rounded-3xl">
                        <h2 className="mb-4 font_urbanist_medium text-base md:text-lg tracking-widiest">INVOICE #36</h2>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col items-start justify-start font_urbanist_light text-xs gap-y-2">
                                <h3 className="font_urbanist text-xs md:text-sm">To</h3>
                                <span>Bilawal Ashraf</span>
                                <span>47 Elita Squre, VIP Chowk,</span>
                                <p className="font_urbanist">Email: <span className="font_urbanist_light">urbansoftware@gmail.com</span></p>
                                <p className="font_urbanist">Phone: <span className="font_urbanist_light">+91 5264 251 325</span></p>
                            </div>

                            <div className="flex justify-between items-start">
                                <div className="flex flex-col items-start justify-start font_urbanist_light text-xs gap-y-2">
                                    <h3 className="font_urbanist text-xs md:text-sm">Detials</h3>
                                    <span>Bilawal Ashraf</span>
                                    <span>47 Elita Squre, VIP Chowk,</span>
                                    <p className="font_urbanist">Email: <span className="font_urbanist_light">urbansoftware@gmail.com</span></p>
                                    <p className="font_urbanist">Phone: <span className="font_urbanist_light">+91 5264 251 325</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full overflow-y-scroll mt-5">
                            <div className="w-full flex items-center py-3 px-1 border-b font_urbanist text-xs">
                                <span className="w-[10%] pl-2 text-gray-400">#</span>
                                <span className="w-[15%] text-gray-400">IMAGE</span>
                                <span className="w-[20%] text-gray-400">ITEM</span>
                                <span className="w-[29%] text-gray-400">DESCRIPTION</span>
                                <span className="w-[7.66%] text-gray-400">UNITS</span>
                                <span className="w-[9.66%] text-gray-400">UNITE-COST</span>
                                <span className="w-[8.66%] text-gray-400">TOTAL</span>
                            </div>
                            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                                return <OrderItem key={index} index={index + 1} />
                            })}
                        </div>

                        <div className="w-full pt-10 flex flex-col items-end">
                            <div className="w-1/5 flex justify-between font_urbanist text-xs gap-y-3">
                                <div className="flex flex-col gap-y-3">
                                    <span>Subtotal</span>
                                    <span>Vat</span>
                                    <span>Total</span>
                                </div>

                                <div className="flex flex-col gap-y-3">
                                    <span>${1134.58}</span>
                                    <span>$100</span>
                                    <span>${1034.58}</span>
                                </div>
                            </div>
                            <Button onClick={() => { downloadInvoice('invoice#36') }} fontSize='text-xs' classes='w-1/5' font='font_urbanist tracking-widest'>DOWNLOAD</Button>
                        </div>
                    </section>
                </section>

            </div>
        </main>
    )
}