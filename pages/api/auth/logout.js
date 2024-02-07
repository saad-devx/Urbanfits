import StandardApi from "@/middlewares/standard_api";

const Logout = async (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {

    res.clearCookie("session-token");
    res.clearCookie("is_logged_in");

    res.status(200).json({
        success: true,
        msg: "You are Logged out successfully !"
    })
})
export default Logout