import Image from 'next/image';
import useLanguage from '@/hooks/useLanguage';
import { accordians as accordianLang } from '@/locales';
import truck from '@/public/truck.svg';
import phone from '@/public/phone.svg';

export default function Accordians() {
    const { locale } = useLanguage();
    const langObj = accordianLang[locale];

    return <>
        <div className="group p-5 outline-none accordion-section rounded-2xl bg-white border-b" tabIndex={1}>
            <div className="group flex justify-between h-9 items-center transition ease duration-700 cursor-pointer relative">
                <div className="group-focus:text-black text-xs md:text-sm font_urbanist_bold transition ease duration-700">{langObj.contact}</div>
                <span className="transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180 ">
                    <i className="fas fa-minus minus_icon group-focus:block"></i>
                    <i className="fas fa-plus group-focus:hidden"></i>
                </span>
            </div>
            <div className="group-focus:max-h-screen max-h-0 border-b-gray-300 text-sm leading-5 rounded overflow-hidden ease duration-700">
                <div className="flex items-center mb-3 py-2 border-b border-b-gray-200">
                    <i className="material-symbols-outlined mr-6">mail</i>
                    <span>
                        <p className='font_gotam_light text-xs md:text-sm'>{langObj.contactMsgs.msg1}</p>
                    </span>
                </div>
                <div className="flex items-center py-2">
                    <Image className='mr-6' src={phone} alt="contact info" />
                    <span>
                        <p className='font_gotam_light text-xs md:text-sm'>{langObj.contactMsgs.msg2}</p>
                    </span>
                </div>
            </div>
        </div>
        <div className="group p-5 outline-none accordion-section rounded-2xl bg-white border-b" tabIndex={1}>
            <div className="group flex justify-between h-9 items-center transition ease duration-700 cursor-pointer relative">
                <div className="group-focus:text-black text-xs md:text-sm font_urbanist_bold transition ease duration-700">{langObj.deliveryReturn}</div>
                <span className="transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180 ">
                    <i className="fas fa-minus minus_icon group-focus:block"></i>
                    <i className="fas fa-plus group-focus:hidden"></i>
                </span>
            </div>
            <div className="group-focus:max-h-screen max-h-0 border-b-gray-200 text-sm leading-5 rounded overflow-hidden ease duration-700">
                <div className="flex items-center mb-3 py-2 border-b border-b-gray-200">
                    <i className="material-symbols-outlined mr-6">local_mall</i>
                    <span>
                        <h5 className='mb-2'>{langObj.deliverySection.pt1.heading}</h5>
                        <ul className='font_gotam_light text-xs md:text-sm'>
                            {langObj.deliverySection.pt1.msgs.map((msg, i) => <li key={i}>{msg}</li>)}
                        </ul>
                    </span>
                </div>
                <div className="flex items-center mb-3 py-2 border-b border-b-gray-200">
                    <Image className='mr-6' src={truck} alt="delivery vehicle" />
                    <span>
                        <h5 className='mb-2'>{langObj.deliverySection.pt2.heading}</h5>
                        <ul className='font_gotam_light text-xs md:text-sm'>
                            {langObj.deliverySection.pt2.msgs.map((msg, i) => <li key={i}>{msg}</li>)}
                        </ul>
                    </span>
                </div>
                <div className="flex items-center mb-3 py-2 border-b border-b-gray-200">
                    <i className="fa-regular fa-credit-card mr-6 text-xl"></i>
                    <span>
                        <h5 className='mb-2'>{langObj.deliverySection.pt3.heading}</h5>
                        <p className='font_gotam_light text-xs md:text-sm'>{langObj.deliverySection.pt3.msg}</p>
                    </span>
                </div>
                <div className="flex items-center py-2">
                    <i className="material-symbols-outlined mr-6">search</i>
                    <span>
                        <h5 className='mb-2'>{langObj.deliverySection.pt4.heading}</h5>
                        <p className='font_gotam_light text-xs md:text-sm'>{langObj.deliverySection.pt4.msg}</p>
                    </span>
                </div>
            </div>
        </div>
    </>
}
