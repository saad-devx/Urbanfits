import User from ".";
import useUser from "@/hooks/useUser";
import { checkoutPage as checkoutLang } from '@/locales';
import useLanguage from "@/hooks/useLanguage";
import { packageTypes } from "@/uf.config";

export default function () {
    const { packageType } = useUser();
    const { locale } = useLanguage();
    const langObj = checkoutLang[locale];
    return <>
        <User profileNull>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{langObj.packaging.heading}</h2>

            <section className="mt-10 flex flex-col gap-y-8">
                <div className="flex items-start gap-x-4">
                    <input type="radio" id="without_packing" name="packging-type" value="without_packing" checked={packageType == "without_packing"} onChange={(e) => useUser.setState({ packageType: e.target.value })} className="relative top-1.5" />
                    <label htmlFor="without_packing" className="cursor-pointer">
                        <span className="font-semibold text-sm lg:text-base leading-tight">{langObj.packaging.method1.heading}</span>
                        <p className="text-sm lg:text-base text-gray-400">{langObj.packaging.method1.msg}</p>
                    </label>
                </div>
                <div className="flex items-start gap-x-4">
                    <input type="radio" id="with_packing" name="packging-type" value="with_packing" checked={packageType == "with_packing"} onChange={(e) => useUser.setState({ packageType: e.target.value })} className="relative top-1.5" />
                    <label htmlFor="with_packing" className="cursor-pointer">
                        <span className="font-semibold text-sm lg:text-base leading-tight">{langObj.packaging.method2.heading}</span>
                        <p className="text-sm lg:text-base text-gray-400">{langObj.packaging.method2.msg}</p>
                    </label>
                </div>
                <div className="mt-6"><span className="font-semibold">Packaging Fee:</span>  &nbsp;&nbsp; AED {packageTypes[packageType]}</div>
            </section>
        </User>
    </>
}