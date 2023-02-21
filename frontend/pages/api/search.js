import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"

// Only accessable by Admin 
const UpdateProducts = async (req, res) => {
    try {
        if (req.method === 'GET') {
            await ConnectDB()
            const searchTerm = req.query.q
            const searchQuery = {
                //  $or: [
                //     { name: { $regex: searchTerm, $options: 'i' } },
                //     { description: { $regex: searchTerm, $options: 'i' } },
                //     { category: { $regex: searchTerm, $options: 'i' } }
                // ]
                $or: [
                    { name: { $regex: new RegExp('^' + searchTerm, 'i') } },
                    // { subcategories: { $in: subcategories } },
                    { description: { $regex: new RegExp('^' + searchTerm, 'i') } },
                    { category: { $regex: new RegExp('^' + searchTerm, 'i') } },
                  ]
            }
            const results = await Product.find(searchQuery)
            res.json(results);
        }
        else {
            res.status(400).json({ error: "bad request, you are using wrong request method!" })
        }
    }
    catch (err) {
        res.status(500).send("Internal Server Error occurred. Please retry")
    }
}

export default UpdateProducts