const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://jatinkumar20056:zVzLwMiiJzFZmA2k@cluster0.vf6xxno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {
      //useUnifiedTopology: true,
      //useNewUrlParser: true,
      autoIndex: true, //make this also tru e
    })
    .then(() => {
      console.log("successfully db connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToMongo;
