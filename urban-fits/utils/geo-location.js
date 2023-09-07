import axios from 'axios'
import countryCodes from '@/static data/countryCodes'
import useUser from '@/hooks/useUser'

const getGeoLocation = async () => {
    const { setCountry, geo_selected_by_user, setGeoSelectedByUser } = useUser()

    if (geo_selected_by_user) return
    try {
        const { data } = await axios.get(`${process.env.HOST}/api/geolocation`)
        console.log(data)
        const filteredCountry = countryCodes.filter(country => country.country === data.geo_meta.country.toLowerCase())[0]
        console.log(filteredCountry)
        if (filteredCountry) return setCountry(filteredCountry)
        else return setCountry({ name: "United Arab Emirates", code: "+971", country: "ae", src: "https://urban-fits.s3.eu-north-1.amazonaws.com/country-flags/AE.jpg" })
    } catch (error) {
        console.log(error)
    }
}
export default getGeoLocation