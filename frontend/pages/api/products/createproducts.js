import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"

// Only accessable by Admin 
const CreateProducts = async (req, res) => {
    if (req.method === 'POST') {
        await ConnectDB()
        let product = await Product.create(req.body)
        res.status(200).json({
            msg: "Success !",
            product
        })
    }
    else {
        res.status(400).json({ error: "bad request, you are using wrong request method!" })
    }
}

export default CreateProducts