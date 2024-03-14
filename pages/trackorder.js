import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/buttons/simple_btn';
import axios from 'axios';
import toaster from '@/utils/toast_function';

export default function Trackorder() {
    const router = useRouter();
    const [iframeUrl, setIframeUrl] = useState(null);
    const [orderData, setOrderData] = useState({
        orderRef: "",
        data: null
    });

    const getOrder = async (order_id) => {
        try {
            const { data } = await axios.get(`${process.env.HOST}/api/user/orders/get-one?order_id=${order_id}`)
            setOrderData(data.order);
        } catch (e) { console.log(e); toaster("error", "Sorry couldn't fetch the order, please try again.") }
    }

    useEffect(() => {

    }, [])

    return <main className='bg-white w-full h-full transition-all duration-700 overflow-y-scroll'>
        <div className="mx-5 md:w-4/5 md:mx-auto lg:w-70pr my-20">
            <h2 className="text-2xl md:text-4xl lg:text-[44px] font_urbanist_medium mb-8">Track Your Order</h2>

            <iframe src="https://t.swftbox.com/OMCZR05201" frameborder="1" seamless="seamless" className='w-full h-[130vh] border border-gray-200 rounded-lg'></iframe>

            <form className="w-full mt-16 pb-10 lg:pb-0 font_urbanist text-sm space-y-10" >
                <h3 className="text-lg md:text-xl lg:text-[22px] font_urbanist_medium">Enter Your Order Information</h3>
                <p className='font_urbanist_light'>Enter your order reference number below and we will provide you with a list of the items you ordered and the relevant shipping information. If you have only just confirmed your order, this information will appear in a few minutes.</p>
                <div className="flex flex-col justify-end">
                    <div className="relative w-full data_field flex items-center border-b border-b-gray-400 focus:border-pinky hover:border-pink-400 transition py-2 mb-4">
                        {/* {touched.ordernumber && errors.ordernumber ? <Tooltip classes="form-error" content={errors.ordernumber} /> : null} */}
                        <input className="w-full bg-transparent outline-none border-none" name="order_reference" id="order_reference" value={orderRef} onChange={(e) => setOrderRef(e.target.value)} placeholder="Order Number" />
                    </div>
                    <small className='self-end text-gray-500 my-3' >8 to 14 characters, no spaces</small>
                </div>
                <div className="font_urbanist_light w-full my-10 space-y-5">
                    <p>Urban Fits processes the data collected to enable you to manage your information to facilitate your order. To find out more about how we manage your personal data and exercise your rights please refer to our privacy policy.</p>
                    {/* <p>Mandatory information : If you choose not to consent to the collection of mandatory data (with an asterisk). You will not be able to manage your information.</p> */}
                </div>
                <div className="w-full flex justify-start space-x-4">
                    <Button type="submit" classes="w-full md:w-40 font_urbanist_medium">Continue</Button>
                </div>
            </form>
        </div>
    </main>
}