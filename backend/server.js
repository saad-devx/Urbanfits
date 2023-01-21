const express = require('express');
const connectToMongodbo = require('./db');
const dotenv = require('dotenv')
const path = require('path');

const server = express();
dotenv.config({path: './config.env'})
console.log(process.env.PORT)
connectToMongodbo();

server.use(express.json())
server.use('/api', require(path.join(__dirname, './routes/productRoutes.js')))

server.get('/', (req, res)=>{
    res.status(200).send("Hellow this is new e-commerce website i am working on and inshallah i am gonna make to the end")
})

server.listen(process.env.PORT, ()=>{
    console.log(`server listening on the url : http://localhost:${process.env.PORT}`);
})