import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRoute from "./routes/product.js";

const app = express();
dotenv.config();

app.use(cors());

//connect to mongodb
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(express.json());

app.use("/api/product", productRoute);

mongoose.connection.on("connected", () => {
  console.log("mongodb connected.");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected.");
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errMessage,
    stack: err.stack,
  });
});

//define port
app.listen(8800, () => {
  connect();
  console.log("connect to backend");
});
