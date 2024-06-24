import useUser from '@/hooks/useUser';
import useWallet from '@/hooks/useWallet';
import Image from 'next/image';
import toaster from '@/utils/toast_function';
import useLanguage from '@/hooks/useLanguage';
import { navbar as navLang } from '@/locales';

export default function LanguageModal(props) {
    const { locale, switchLanguage } = useLanguage();
    const { currency, setCurrency } = useWallet();
    const { country } = useUser();

    const langObj = navLang[locale];

    const updateCurrency = (event) => {
        const { value } = event.target
        setCurrency(value)
        location.reload();
        useWallet.setState({ currency_selected_by_user: true })
        toaster("success", <p>Currency udpated to <span className='font_urbanist_bold'>{value}</span>.</p>)
    }

    if (props.show) return <section className={`w-full h-full font_urbanist fixed inset-0 z-[100] bg-gray-800/40 backdrop-blur flex justify-center items-center transition-all duration-500 ${props.show === false ? "opacity-0 pointer-events-none" : ''}`}>
        <div className={`${props.show === false ? "translate-y-10" : ''} relative max-w-[450px] w-11/12 md:w-4/6 lg:w-2/5 text-sm flex flex-col lg:flex-row bg-white rounded-2xl md:rounded-2xl overflow-hidden transition-all duration-500`}>
            <button onClick={() => props.setLangModal(false)} name="modal3" className="material-symbols-rounded text-3xl absolute right-5 top-5 cursor-pointer hover:rotate-180 transition-all duration-1000">close</button>
            <form className="w-full h-full p-7" >
                <h2 className="text-xl lg:text-2xl font_copper uppercase">{langObj.countryLangHeading}</h2>
                <div className="w-full my-12 flex flex-col space-y-4">
                    {/* {loading ? <div className="flex justify-center"><BounceLoader /></div> : null} */}
                    <h3 className='text-sm md:text-base font_urbanist_bold'>{langObj.chooseShippingHeading}</h3>
                    <div className="group relative w-full md:w-4/5 data_field flex items-center border-b border-b-gray-400 hover:border-pink-400 transition py-2 mb-4">
                        <span className="w-7 h-5 mr-2 overflow-hidden" title={country.country}><Image width={50} height={40} src={country.src} /></span>
                        {country.name}
                        <span className="absolute top-full w-full h-4 bg-transparent pointer-events-none group-hover:pointer-events-auto"></span>
                    </div>
                </div>
                <h3 className='text-sm md:text-base font_urbanist_bold'>{langObj.chooseCurrencyHeading}</h3>
                <div className="relative w-full my-7 flex gap-x-10 md:gap-x-14 font_urbanist_medium">
                    <span className="flex items-center cursor-pointer">
                        <input className='rounded mr-1 mid:mr-2' type="radio" id="aed" name="currency" defaultChecked={currency === "AED"} value="AED" onChange={updateCurrency} /><label className='cursor-pointer' htmlFor="aed">AED (د.إ)</label>
                    </span>
                </div>

                <h3 className='text-sm md:text-base font_urbanist_bold'>{langObj.chooseLangHeading}</h3>
                <div className="relative w-full my-7 flex space-x-16 font_urbanist_medium">
                    <span className="flex items-center">
                        <input className='rounded mx-2' type="radio" id="english" name="language" checked={locale == "en"} onChange={() => switchLanguage("en")} value="en" /><label style={{ cursor: "pointer" }} htmlFor="english">English</label>
                    </span>
                    <span className="flex items-center">
                        <input className='rounded mx-2' type="radio" id="arabic" name="language" checked={locale == "ar"} onChange={() => switchLanguage("ar")} value="ar" /><label style={{ cursor: "pointer" }} htmlFor="arabic">العربية</label>
                    </span>
                </div>
            </form>
        </div>
    </section>
}
