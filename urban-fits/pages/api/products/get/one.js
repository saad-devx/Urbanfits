import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"
const mongoose = require('mongoose')
import { pusherServer } from "@/utils/pusher"

const GetSingleProduct = async (req, res) => {
    try {
        if (req.method === 'GET') {
            const { id } = req.query
            if (!id || !mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({
                    success: false,
                    msg: "A valid product id is required. Query parameters: id"
                })
            }
            await ConnectDB()

            let product = await Product.findById(id).populate('bundle_items')
            if (!product) return res.status(404).json({
                success: false,
                msg: "Product not found with corresponding id",
            })

            pusherServer.trigger('urban-fits', 'server-update', {
                success: true,
                pusher_msg: "Product updated successfully lol. i am from the pusher service btw..."
            })
            res.status(200).json({
                success: true,
                msg: `Product found with the id ${id}`,
                product
            })
        }
        else res.status(405).json({ success: false, msg: "Method not Allowed. Allowed methods: GET" })
    } catch (err) {
        console.log(err)
        res.status(500).send({ success: false, msg: "Internal Server Error occurred. Please retry later." })
    }
}

export default GetSingleProduct