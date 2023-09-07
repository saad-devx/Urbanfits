import { pusherServer } from "@/utils/pusher";

export default (req, res) => {
    console.log("pusher api working...")
    try {
        pusherServer.trigger('urban-fits', 'user-login', {
            pusher_msg: `A user ${req.query?.username || ''} just logged in to the Urban Fits!`,
        });
        console.log("yes event triggered and api resolved")
        res.status(200).end('Event triggered!');
    } catch (error) {
        console.log(error);
    }
};