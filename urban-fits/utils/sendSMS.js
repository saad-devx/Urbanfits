const AWS = require('aws-sdk');

const sendSMS = async (to, msg) => {
    try {
        AWS.config.update({
            region: 'eu-north-1',
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
        });
        const sns = new AWS.SNS();
        const phoneNumber = to;
        const message = msg;
        const params = {
            Message: message,
            PhoneNumber: phoneNumber,
        };
        const response = await sns.publish(params).promise();
        return response
    } catch (error) { console.log(error); throw new Error(error) }
}
export default sendSMS