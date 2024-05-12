import ConnectDB from "@/utils/connect_db";
import Category from "@/models/category";

const TestApiHandler = async (req, res) => {
    await ConnectDB();

    // const updatedPees = [];
    // for (let product of foundPees) {
    //     const updatedProduct = await Product.findByIdAndUpdate(product._id, {
    //         "name.ar": product.name.ar,
    //         "description.ar": product.description.ar,
    //     }, { new: true, lean: true });
    //     updatedPees.push(updatedProduct);
    // }

    const categories = await Category.updateMany({}, [
        {
            $set: {
                name: {
                    en: "$name",
                    ar: ""
                },
                description: {
                    en: "$description",
                    ar: ""
                }
            }
        }
    ], { new: true, lean: true });

    res.status(200).json({
        success: true,
        msg: "Yoo the work's done",
        categories
    })
}
export default TestApiHandler