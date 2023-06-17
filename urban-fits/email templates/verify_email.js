const verifyEmail = (email, token) => {
    return `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
<html lang="en">

<head></head>
<div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
    Please Confirm your email for further registration process.<div>
    </div>
</div>

<body
    style="background-color:#0a0a0a; color: #ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%"
        style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
        <tr style="width:100%">
            <td><img alt="Urban Fits" src="https://urban-fits.s3.eu-north-1.amazonaws.com/website-copyrights/logo_gold_outlined.png"
                    width="100" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto;margin-top:7rem" />
                <p style="font-size:16px;line-height:26px;margin:16px 0">Welcome to the Urban Fits,</p>
                <p style="font-size:16px;line-height:26px;margin:16px 0">Thanks for submitting your account information. You're now just one step away to shop with Urban Fits with personalized experience</p> <br>
                <p style="font-size:16px;line-height:26px;margin:16px 0">Click the link below to verify your email. This link will expire within 10 minutes. If you didn't request this email by any means then please don't click the link, you can ignore it. </p>
                <table style="text-align:center" align="center" border="0" cellPadding="0" cellSpacing="0"
                    role="presentation" width="100%">
                    <tbody>
                        <tr>
                            <td><a href="${process.env.HOST}/auth/signup/verification/${email}?token=${token}" target="_blank"
                                    style="background-color:black;border:1px solid goldenrod;border-radius:10px;color:#fff;font-size:16px;text-decoration:none;text-align:center;display:inline-block;p-x:12px;p-y:12px;line-height:100%;max-width:100%;padding:12px 12px"><span><!--[if mso]><i style="letter-spacing: 12px;mso-font-width:-100%;mso-text-raise:18" hidden>&nbsp;</i><![endif]--></span><span
                                        style="background-color:black;color:#ffffff;border-radius:3px;font-size:16px;text-decoration:none;text-align:center;display:inline-block;p-x:12px;p-y:12px;max-width:100%;line-height:120%;text-transform:none;mso-padding-alt:0px;mso-text-raise:9px">
                                        Verify Email</span><span><!--[if mso]><i style="letter-spacing: 12px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style="font-size:16px;line-height:26px;margin:16px 0">Best,<br />The Urban Fits team</p>
                <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
                <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa">Urban Fits L.L.C. &copy; 2023-2024 All rights reserved</p>
            </td>
        </tr>
    </table>
</body>

</html>
    `
}
export default verifyEmail