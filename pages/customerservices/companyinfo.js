import CutomerServices from '.'

export default function CompanyInfo() {
    return (
        <CutomerServices>
            <h1 className="mb-7 text-lg lg:text-xl font_urbanist_bold">Company Information</h1>
            <div className="w-full mb-6 text-sm font_urbanist_light">
                <h1 className="mb-3 font_urbanist_medium">Urban Fits L.L.C. (UAE)</h1>
                Dubai, United Arab Emirates
                <h1 className="mt-4 mb-2 font_urbanist_medium">Email:</h1>
                support@urbanfits.ae
            </div>
        </CutomerServices>
    )
}
