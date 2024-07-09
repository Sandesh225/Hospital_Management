import express from "express";
import { sendMessage } from '../controller/messageController.js';
import { isAdminAuthenticated } from "../middlewares/auth.js";
import { getAllMessages } from './../controller/messageController.js';

const router = express.Router();
router.post("/send", sendMessage);
router.get("/getAll",isAdminAuthenticated,getAllMessages)

export default router;
