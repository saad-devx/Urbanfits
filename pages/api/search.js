import ConnectDB from "@/utils/connect_db"
import Product from "@/models/product"
import Category from "@/models/category"
import StandardApi from "@/middlewares/standard_api"

const UpdateProducts = async (req, res) => StandardApi(req, res, { verify_user: false }, async () => {
    await ConnectDB()
    const searchTerm = req.query.q

    const strRegexQuery = { $regex: searchTerm, $options: "i" }
    const productResults = await Product.find({
        $or: [
            { "name.en": strRegexQuery },
            { "name.ar": strRegexQuery },
            { "description.en": strRegexQuery },
            { "description.ar": strRegexQuery },
            { "variants.color_name": strRegexQuery },
            { tags: { $elemMatch: strRegexQuery } }
        ]
    })
    const categoryResults = await Category.find({
        $or: [
            { "name": strRegexQuery },
            // { "name.ar": strRegexQuery },
            { "description": strRegexQuery },
            // { "description.ar": strRegexQuery }
        ]
    })

    // const productResults = await Product.aggregate([
    //     {
    //         $search: {
    //             index: "product",
    //             text: {
    //                 query: searchTerm,
    //                 path: ["tags", "name"],
    //                 fuzzy: {}
    //             }
    //         }
    //     },
    //     {
    //         $project: {
    //             _id: 1,
    //             cover_image: 1,
    //             name: 1
    //         },
    //     },
    //     {
    //         $limit: 12
    //     }
    // ]);

    // const categoryResults = await Category.aggregate([
    //     {
    //         $search: {
    //             index: "category",
    //             text: {
    //                 query: searchTerm,
    //                 path: ["slug", "path", "name"],
    //                 fuzzy: {}
    //             }
    //         }
    //     },
    //     {
    //         $project: {
    //             _id: 1,
    //             name: 1
    //         },
    //     },
    //     { $limit: 8 }
    // ]);
    const finalResults = productResults.concat(categoryResults)
    res.json(finalResults);
})
export default UpdateProducts