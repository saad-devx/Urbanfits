import { pusherServer } from "@/utils/pusher";

export default (req, res) => {
    pusherServer.trigger('urban-fits', 'user-login', {
        pusher_msg: `A user ${req.query.username || ''} just logged in to the Urban Fits!`,
    });
    res.status(200).end('Event triggered!');
};