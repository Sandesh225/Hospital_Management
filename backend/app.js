import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import messageRoute from "./routes/messageRoute.js";
import { errorMiddleware } from './middlewares/errors.js';
import userRoute from "./routes/userRoute.js";
import appointmentRoute from "./routes/appointmentRoute.js";

const app = express();
dotenv.config();

// Log environment variables to ensure they are loaded correctly
console.log("MONGO_DB:", process.env.MONGO_DB);
console.log("PORT:", process.env.PORT);




app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

mongoose.connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch(error => {
    console.error("Error connecting to database", error);
  });

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/"
}));

app.use("/messages", messageRoute);
app.use("/user", userRoute);
app.use("/api/v1/appointment", appointmentRoute);
app.use(errorMiddleware);

export default app;
