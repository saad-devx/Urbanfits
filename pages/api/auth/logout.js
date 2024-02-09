import StandardApi from "@/middlewares/standard_api";

const Logout = async (req, res) => StandardApi(req, res, { method: "POST", verify_user: false }, async () => {

    res.clearCookie("session-token", {
        httpOnly: true,
        sameSite: false,
        path: "/",
        secure: process.env.NEXT_PUBLIC_DEV_ENV === "PRODUCTION"
    });
    res.clearCookie("is_logged_in", {
        httpOnly: false,
        sameSite: false,
        path: "/",
        secure: process.env.NEXT_PUBLIC_DEV_ENV === "PRODUCTION"
    });
    console.log("cookies cleaned successfully babyyyyyyyyyyyyyy")
    res.status(200).json({
        success: true,
        msg: "You are Logged out successfully !"
    })
})
export default Logout