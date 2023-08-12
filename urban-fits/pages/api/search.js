import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"
import Category from "@/models/category"

const UpdateProducts = async (req, res) => {
    try {
        if (req.method === 'GET') {
            await ConnectDB()
            const searchTerm = req.query.q

            // const results = await Product.find({
            //     $or: [
            //         // { category: { $regex: searchTerm, $options: "i" } },
            //         { name: { $regex: searchTerm, $options: "i" } },
            //         { tags: { $elemMatch: { $regex: searchTerm, $options: "i" } } }
            //     ]
            // })

            const productResults = await Product.aggregate([
                {
                    $search: {
                        index: "product",
                        text: {
                            query: searchTerm,
                            path: ["tags", "name"],
                            fuzzy: {}
                        }
                    }
                },
                {
                    $project: {
                        _id: 1,
                        cover_image: 1,
                        name: 1
                    },
                },
                {
                    $limit: 12
                }
            ]);
            const categoryResults = await Category.aggregate([
                {
                    $search: {
                        index: "category",
                        text: {
                            query: searchTerm,
                            path: ["slug", "path", "name"],
                            fuzzy: {}
                        }
                    }
                },
                {
                    $project: {
                        _id: 1,
                        name: 1
                    },
                },
                {
                    $limit: 8
                }
            ]);
            const finalResults = productResults.concat(categoryResults)
            res.json(finalResults);
        }
        else {
            res.status(400).json({ error: "bad request, you are using wrong request method!" })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error occurred. Please retry")
    }
}

export default UpdateProducts