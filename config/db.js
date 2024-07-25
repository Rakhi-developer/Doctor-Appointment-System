const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}`
    );
    console.log(
      `\n Mongodb connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`mongodb server issue ${error}`);
  }
};

module.exports = connectDB;
