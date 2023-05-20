import axios from "axios"
import toaster from "./toast_function"

const uploadImage = async (file, fileName, folder) => {
    try {
        const file_name = fileName? `&fileName=${fileName}` : ''
        const { data } = await axios.get(`${process.env.HOST}/api/S3/signedurl?folder=${folder}${file_name}`)
        await axios.put(data.uploadUrl, file)
        const imageUrl = data?.uploadUrl.split("?")[0]
        return imageUrl
    }
    catch (error) {
        toaster('error', error)
    }
}

export default uploadImage