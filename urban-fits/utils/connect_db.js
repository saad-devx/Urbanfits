const mongoose = require('mongoose');

const ConnectDB = async () => {
  if (mongoose.connections[0].readyState) return console.log("Success! Connection already exists\n");
  mongoose.set('strictQuery', false);
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Urbanfits"
    });
    console.log("Connected to the MongoDB successfully!\n");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
export default ConnectDB;