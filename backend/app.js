import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import messageRoute from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";
import appointmentRoute from "./routes/appointmentRoute.js";
import { errorMiddleware } from "./middlewares/errors.js";

const app = express();
dotenv.config();

app.use(cors({
  origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));

// Corrected route path
app.use("/api/v1/message", messageRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/appointment", appointmentRoute);


mongoose.connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to Database Successfully");
  })
  .catch(error => {
    console.error("Error connecting to database", error);
  });

  app.use(errorMiddleware);
export default app;
