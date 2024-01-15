import Notification from "@/models/notification";
import { pusherServer, beamsServer } from "./pusher";

const adminRoles = ['administrator', 'editor', 'author']
const sendNotification = async (user_id, params, options = {}) => {
    const {
        notify = true,
        notifySilently = false,
        userData = null,
    } = options;
    const userNotification = await Notification.findOneAndUpdate(
        { user_id },
        {
            $push: {
                notifications: {
                    $each: [{
                        ...params,
                        timestamp: new Date()
                    }],
                    $position: 0,
                    $slice: 20,
                }
            }
        },
        { upsert: true, new: true }
    );
    if (notify) pusherServer.trigger(`uf-user_${user_id}`, "new-notification", {
        notify: !notifySilently,
        notification_data: userNotification,
        ...(userData && { user_data: userData })
    })

    const notificObj = {
        title: params.heading,
        body: params.mini_msg || params.message,
    }
    const beamRes = await beamsServer.publishToUsers([user_id], {
        web: {
            notification: {
                ...notificObj,
                deep_link: params.deep_link || "http://localhost:3000",
            },
        },
        apns: {
            aps: { alert: notificObj }
        },
        fcm: { notification: notificObj }
    })

}

export default sendNotification