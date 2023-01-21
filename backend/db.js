const mongoose = require('mongoose');

const mongoURI = "http://127.0.0.1:4173/e-commerce";

module.exports = function connectToMongodb() {
    mongoose.connect(mongoURI,()=>{
        console.log("\nsuccessfully connected to MongoDB!")
    })
}