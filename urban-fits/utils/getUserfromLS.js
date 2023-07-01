import jwt from 'jsonwebtoken'
const getUser_LS = () => {
    const token = jwt.decode(localStorage.getItem("authToken"))
    if (token && token._doc && token._doc.email) return token._doc
    else return null
}
export default getUser_LS