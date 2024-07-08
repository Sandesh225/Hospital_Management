import express from "express";

import { isAdminAuthenticated } from "../middlewares/auth.js";
import { deleteAppointment, getAllAppointments, postAppointment,updateAppointmentStatus } from "../controller/appointmentController.js";



const router = express.Router();
router.post("/post" ,isAdminAuthenticated,postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

export default router;
