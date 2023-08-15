import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"
const mongoose = require('mongoose')

const GetSingleProduct = async (req, res) => {
    try {
        if (req.method === 'GET') {
            await ConnectDB()
            const { id } = req.query

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    success: false,
                    msg: "invalid product id."
                })
            }

            let product = await Product.findById(id).populate('bundle_items')
            if (!product) return res.status(404).json({
                success: false,
                msg: "Product not found with corresponding id",
            })
            res.status(200).json({
                success: true,
                msg: `Product found with the id ${id}`,
                product
            })
        }
        else {
            res.status(405).json({ success: false, msg: "Method not Allowed, you are using wrong request method!" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ success: false, msg: "Internal Server Error occurred. Please retry" })
    }
}

export default GetSingleProduct