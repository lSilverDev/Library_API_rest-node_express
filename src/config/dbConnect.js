import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:1m4dp2MTYFGOzyhZ@cluster0.nrzqmq2.mongodb.net/Cluster0?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;