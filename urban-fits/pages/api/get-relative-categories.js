import ConnectDB from "@/utils/connect_db"
import Category from "@/models/category"
import mongoose from "mongoose"
import CorsMiddleware from "@/utils/cors-config"

const GetRelativeCategories = async (req, res) => {
    try {
        await CorsMiddleware(req, res);
        if (req.method === 'GET') {
            const { category_id } = req.query
            if (!mongoose.Types.ObjectId.isValid(category_id)) return res.status(405).json({ success: false, msg: "Category id must be a valid one. Query parameters: category_id" })
            await ConnectDB()

            const fallbackCategories = ['649b292762a7c100cfb7207f', '64a59d5816b4c91fa1967b2e'].filter(id => id !== category_id)

            let relativeCategories = []
            let remainingCategories = 5
            const respectedCategory = await Category.findById(category_id).populate("children")
            relativeCategories = [...respectedCategory.children]
            remainingCategories = remainingCategories - relativeCategories.length
            if (remainingCategories > 0) {

            }

            // if(!respectedCategory) return res.status(404).json({success: false, msg: "Category with provided id does not exists."})
            // if(respectedCategory.children && respectedCategory.children.length){   
            //     let childCategories = []
            //     for(const c_id of respectedCategory.children){
            //         const childCategory = await Category.
            //     }
            // }

            res.status(200).json({
                success: true,
                msg: '',
                respectedCategory
            })
        } else res.status(405).json({ success: false, msg: "Method not allowed, allowed methods: GET" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error, please try again later" })
    }
}
export default GetRelativeCategories