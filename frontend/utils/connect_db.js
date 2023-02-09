const mongoose = require('mongoose')

const ConnectDB = async ()=>{
    if(mongoose.connections[0].readyState) return console.log("Success! Connection already exists\n")
    else return mongoose.connect(process.env.MONGO_URI, console.log("Connected to the mongodb successfully!\n"))
}

export default ConnectDB