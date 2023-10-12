import axios from 'axios'
import countryCodes from '@/static data/countryCodes';
import useUser from '@/hooks/useUser';
import useWallet from '@/hooks/useWallet';

const getGeoLocation = async () => {
    const { setCountry, geo_selected_by_user } = useUser.getState()
    const { setCurrency, getExchangeRate } = useWallet.getState()
    if (geo_selected_by_user) return
    try {
        const { data } = await axios.get(`${process.env.HOST}/api/geolocation`)
        const filteredCountry = countryCodes.filter(country => country.country === data?.geo_meta?.country?.toLowerCase())[0]
        if (filteredCountry) {
            setCountry(filteredCountry)
            if (filteredCountry.country === "sa") {
                setCurrency("SAR")
                await getExchangeRate("SAR")
            }
            else if (filteredCountry.country === "pk") {
                setCurrency("PKR")
                await getExchangeRate("PKR")
            }
        }
        else return setCountry({ name: "United Arab Emirates", code: "+971", country: "ae", src: "https://urban-fits.s3.eu-north-1.amazonaws.com/country-flags/AE.jpg" })
    } catch (error) {
        console.log(error)
    }
}
export default getGeoLocation