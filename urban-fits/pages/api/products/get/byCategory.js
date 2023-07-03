import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"
const mongoose = require('mongoose')

const GetProductByCategory = async (req, res) => {
    console.log("\nhello this api is working\n")
    try {
        if (req.method === 'GET') {
            const { id } = req.query
            console.log(id)
            if (!id || !mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({
                success: false,
                msg: "A valid category id is required"
            })
            await ConnectDB()

            let products = await Product.find({ 'category.id': mongoose.Types.ObjectId(id) })
            if (!products) return res.status(404).json({
                success: false,
                msg: "No products found with corresponding category",
            })
            res.status(200).json({
                success: true,
                length: products.length,
                msg: `Product found with the category of id ${id}`,
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

export default GetProductByCategory