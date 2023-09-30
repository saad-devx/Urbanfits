import axios from "axios"
import toaster from "./toast_function"

const uploadImage = async (file = "zero", fileName, folder) => {
    try {
        const { data } = await axios.post(`${process.env.HOST}/api/S3/upload-image`, {
            file,
            folder,
            fileName
        })
        return data.imageUrl
    }
    catch (error) {
        console.log(error)
        toaster('error', error)
    }
}
export default uploadImage