import ConnectDB from "@/utils/connect_db";
import mongoose from "mongoose";
import User from "@/models/user";
import Category from "@/models/category";

const CreateProducts = async (req, res) => {
    try {
        if (req.method === 'POST') {
            const { id } = req.query
            if (!id || !mongoose.Types.ObjectId(id)) return res.status(400).json({ success: false, msg: "A valid user id required." })
            const { name, slug } = req.body;

            if (!name || !slug) return res.status(400).json({ success: false, msg: "Category name and slug are required" })
            await ConnectDB()
            let user = await User.findById(id)
            if (!user || user.role !== "administrator") return res.status(400).json({ success: false, msg: "The user with corresponding id must exist and should be administrator create categories" })

            let category = await Category.findOne().or([{ name }, { slug }])
            if (category) return res.status(400).json({ success: false, msg: "This category already exists" })

            if (req.body.parent) {
                let parent = await Category.findById(req.body.parent)
                console.log("here is the parent", parent)
                if (!parent) return res.status(400).json({ success: false, msg: "Invalid parent id" })
                category = await Category.create({ ...req.body, path: `${parent.path}${req.body.slug}` })

                parent = await Category.findByIdAndUpdate(
                    req.body.parent,
                    { $push: { children: mongoose.Types.ObjectId(category._id) } },
                    { new: true }
                )
            }
            else category = await Category.create({ ...req.body, path: req.body.slug })
            res.status(200).json({
                msg: "Success !",
                category
            })
        }
        else {
            res.status(405).json({ success: false, msg: "Method not Allowed, you are using wrong request method!" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: "Internal server error ocurred, please try later." })
    }
}

export default CreateProducts