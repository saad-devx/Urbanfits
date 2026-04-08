export default (orderData) => {
    return `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
<html lang="en">

<head></head>
<div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
    Your Order Status was just updated to "${orderData.order_status.status}"
    <div></div>
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
                <p style="font-size:16px;line-height:26px;margin:16px 0">Your order status was just updated to  "<span style="color: #FF4A60; font-weight: 600;">${orderData.order_status.status}</span>".</p>
                <p style="font-size:16px;line-height:26px;margin:16px 0">Below is your Order tracking information and
                    ordered items:</p><br>

                <div style="width: 100%; text-align: center;">
                    Order Reference: <span style="color: #FF4A60; font-weight: 600;">${orderData._id.toString()}</span>
                </div>
                <div style="width: 100%; margin: 1rem 0 3rem 0; text-align: center;">
                    Tracking URL: <span style="color: #FF4A60; font-weight: 600;">${orderData.tracking_url}</span>
                </div>
                <table align="center" role="presentation" cellPadding="10" width="100%"
                    style="max-width:37.5em;margin:0 auto;padding: 18px; border: 1px solid #ffff; border-radius: 12px;">
                    <tr>
                        <td>Item</td>
                        <td>Qty</td>
                        <td>Price/Unit</td>
                        <td>Total price</td>
                    </tr>
                    ${orderData.order_items.map(item => `<tr>
                        <td style="color: #FF4A60; font-weight: 600; text-decoration: none;">${item.name.en}</td>
                        <td style="color: #FF4A60; font-weight: 600; text-decoration: none;">${item.quantity}</td>
                        <td style="color: #FF4A60; font-weight: 600; text-decoration: none;">${item.price}</td>
                        <td style="color: #FF4A60; font-weight: 600; text-decoration: none;">${item.price * item.quantity}</td>
                    </tr>`)}
                </table>

                <p style="font-size:16px;line-height:26px;margin:16px 0">Best Regards,<br />The Urban Fits team</p>
                <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
                <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa">Urban Fits L.L.C. &copy;
                    2023-2024 All rights reserved</p>
            </td>
        </tr>
    </table>
</body>
</html>`}