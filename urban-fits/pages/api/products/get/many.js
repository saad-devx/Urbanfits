import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"

const getManyProducts = async (req, res) => {
    try {
        if (req.method === 'GET') {
            await ConnectDB()
            let products = await Product.find()
            res.status(200).json({
                length: products.length,
                products
            })
        }
        else {
            res.status(405).json({ success: false, msg: "Method not Allowed, you are using wrong request method!" })
        }
    }
    catch (err) {
        res.status(500).send("Internal Server Error occurred. Please retry")
    }
}

export default getManyProducts