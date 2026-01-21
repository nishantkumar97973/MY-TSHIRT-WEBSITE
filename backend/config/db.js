const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://admin:admin12345@tshirt-cluster-shard-00-00.nfvowyr.mongodb.net:27017,tshirt-cluster-shard-00-01.nfvowyr.mongodb.net:27017,tshirt-cluster-shard-00-02.nfvowyr.mongodb.net:27017/tshirtDB?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority"
    );

    console.log("MongoDB Connected (Atlas NON-SRV)");
  } catch (err) {
    console.error("MongoDB error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;


