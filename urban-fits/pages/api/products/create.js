import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"
import User from "@/models/user";
import mongoose from "mongoose";
import CorsMiddleware from "@/utils/cors-config"

// Only accessable by Admin 
const CreateProduct = async (req, res) => {
    try {
        await CorsMiddleware(req, res)
        if (req.method === 'POST') {
            const { id } = req.query
            if (!id || !mongoose.Types.ObjectId.isValid(id)) return res.status(403).json({ success: false, msg: "A valid user id required." })

            await ConnectDB()
            let user = await User.findById(id)
            if (!user || user.role !== "administrator") return res.status(403).json({ success: false, msg: "The user with corresponding id must exist and should be administrator create categories" })

            let product = await Product.findOne().or([{ name: req.body.name }, { slug: req.body.slug }])
            if (product) return res.status(400).json({ success: false, msg: "Product already exists with this name or slug." })

            product = await Product.create(req.body)
            res.status(200).json({
                msg: "Success !",
                product
            })
        }
        else {
            res.status(405).json({ success: false, error: "Method not Allowed, you are using wrong request method!" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error: "Internal server error ocurred, please try later." })
    }
}

export default CreateProduct