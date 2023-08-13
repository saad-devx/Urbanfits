const mongoose = require('mongoose')
import ConnectDB from "@/utils/connect_db"
import product from "@/models/product";
import category from "@/models/category";
import Cors from 'micro-cors';

const cors = Cors({
    allowMethods: ['GET', 'HEAD'],
});
const GetProductByCategory = async (req, res) => {
    try {
        if (req.method === 'GET') {
            const { id } = req.query;
            console.log(id)

            if (!id || !mongoose.Types.ObjectId.isValid(id))
                return res.status(400).json({
                    success: false,
                    msg: 'A valid category id is required',
                });

            await ConnectDB();

            const LIMIT = 50;
            let totalProducts = await product.countDocuments({
                categories: { $in: [mongoose.Types.ObjectId(id)] }
            });

            const totalPages = Math.ceil(totalProducts / LIMIT);
            const page = parseInt(req.query.page) || 1;
            const skipProducts = (page - 1) * LIMIT;
            const products = await product.find({ categories: { $in: [mongoose.Types.ObjectId(id)] } })
                .sort({ createdAt: -1 })
                .skip(skipProducts)
                .limit(LIMIT)
                .populate("categories");


            console.log(products)

            let childProducts = []
            if (page >= totalPages) {
                let _category = await category.findById(id);
                if (_category && _category.children.length !== 0) {
                    for (const child of _category.children) {
                        let foundChildProducts = await product.find({ categories: { $in: [child] } })
                            .sort({ createdAt: -1 })
                            .skip((page - 1) * LIMIT)
                            .limit(Math.ceil(_category.children.length / LIMIT))
                            .populate("categories")

                        childProducts.push(...foundChildProducts)
                    }
                }
            }

            console.log(childProducts)
            const finalProducts = products.concat(childProducts)

            if (!finalProducts)
                return res.status(404).json({
                    success: false,
                    msg: 'No products found with corresponding category',
                });

            res.status(200).json({
                success: true,
                currentPage: page,
                totalPages,
                msg: `Products found with the category of id ${id}`,
                products: finalProducts,
            });
        } else {
            res.status(405).json({
                success: false,
                msg: 'Method not Allowed, you are using the wrong request method!',
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, error: err, msg: "Internal Server Error occurred. Please retry" })
    }
}

export default cors(GetProductByCategory)