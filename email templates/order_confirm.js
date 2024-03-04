const OrderConfirmed = (orderData) => {
    return `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
<html lang="en">

<head></head>
<div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
    Your Order has been placed, thanks for shopping with us!<div>
    </div>
</div>

<body
    style="background-color:#0a0a0a; color: #ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%"
        style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
        <tr style="width:100%">
            <td><img alt="Urban Fits"
                    src="${process.env.NEXT_PUBLIC_BASE_IMG_URL}/website-copyrights/logo_gold_outlined.webp" width="100"
                    style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto;margin-top:7rem" />
                <p style="font-size:16px;line-height:26px;margin:16px 0">Dear ${orderData.name || "User"},</p>
                <p style="font-size:16px;line-height:26px;margin:16px 0">Thanks for shopping with us! We look forward to
                    you so that we can provide you the best.</p>
                <p style="font-size:16px;line-height:26px;margin:16px 0">This is an order confimation email to inform
                    you that your order has been placed and will be on it's way to your door step.</p>
                <p style="font-size:16px;line-height:26px;margin:16px 0">Below is your Order Information:</p><br>

                <div
                    style="display: grid; grid-template-columns: 0.7fr 1.3fr 1fr; padding: 6px 18px; border: 1px solid whitesmoke; border-radius: 8px;">
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Order ID:</p>
                    <p style="color: #FF4A60; font-weight: 600;">${orderData._id.toString()}</p>
                    <p> For future order reference.</p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Tracking Number:</p>
                    <p style="color: #FF4A60; font-weight: 600;">${orderData.tracking_number}</p>
                    <p> To track your order.</p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Tracking Url:</p>
                    <p style="color: #FF4A60; font-weight: 600;">${orderData.tracking_url}</p>
                    <p> Directly track your order on one click.</p>
                </div> <br />
                <p style="font-size:16px;line-height:26px;margin:16px 0">Best Regards,<br />The Urban Fits team</p>
                <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
                <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa">Urban Fits L.L.C. &copy;
                    2023-2024 All rights reserved</p>
            </td>
        </tr>
    </table>
</body>
</html>
    `
}
export default OrderConfirmed