import axios from "axios"
const GeoLocation = async (req, res) => {
    try {
        if (req.method === 'GET') {
            try {
                const { data } = await axios.get(`https://api.ip2location.io?key=${process.env.IP2L_ACCESS_KEY}`,
                    {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'credentials': true,
                            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        }
                    })
                return res.status(200).json({
                    success: true,
                    geo_meta: data
                })
            } catch (error) {
                console.log(error)
                return res.status(400).json({
                    success: false,
                    geo_meta: error
                })
            }
        }
        else {
            res.status(405).json({ success: false, msg: "you are using wrong request method. Allowed Methods: `GET`" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error, please try again later" })
    }
}
export default GeoLocation