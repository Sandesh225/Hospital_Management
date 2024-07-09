import express from "express";

import { addNewAdmin, getAllDoctors, login, patientRegister,getUserDetails, logoutPatient, logoutAdmin, addNewDoctor } from './../controller/userController.js';
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js"

const router = express.Router();
router.post("/patient/register", patientRegister);
router.post("/login",login);
router.post("/admin/add",addNewAdmin)
router.get("/doctors",getAllDoctors)
router.get("/admin/me", isAdminAuthenticated,getUserDetails)
router.get("/patient/me", isPatientAuthenticated,getUserDetails)
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);router.get("/doctor/addNew",isAdminAuthenticated, addNewDoctor)
export default router;
