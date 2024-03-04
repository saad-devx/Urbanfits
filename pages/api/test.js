import ConnectDB from "@/utils/connect_db";
import Product from "@/models/product";
import StandardApi from "@/middlewares/standard_api";

const TestApiHandler = (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {
    await ConnectDB()

    console.log("getting all products")
    let allProducts = await Product.find()

    let skuNumber = 1000;
    console.log("iterating over the products")
    for (let product of allProducts) {
        product.sku_number = skuNumber;
        await product.save();
        skuNumber += 1
        console.log("\n" + skuNumber - 999 + "is done !");
    }
    console.log("final sku value reached here: ", skuNumber)

    res.status(200).json({
        success: true,
        msg: "terrafroming completed successfully",
        skuNumber
        // balance1, deduct, balance2
    })
})

export default TestApiHandler