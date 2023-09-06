import { pusherServer } from "@/utils/pusher";

export default (req, res) => {
    console.log("well... yeah i am running lol")
    try {
        pusherServer.trigger('urban-fits', 'user-login', {
            pusher_msg: `A user ${req.query?.username || ''} just logged in to the Urban Fits!`,
        });
        console.log("yeah event triggered and api ended now doosh bag")
        res.status(200).end('Event triggered!');
    } catch (error) {
        console.log(error);
    }
};