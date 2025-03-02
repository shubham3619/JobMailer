import express from "express";
import {authMiddleware} from "../middleware/authMiddleware.js";
import { sendEmailController } from "../controllers/emailController.js";
import { getSentEmails } from "../controllers/emailController.js";
import { upload } from "../middleware/uploadPdf.js";

const router = express.Router();


router.get("/sent", authMiddleware, getSentEmails);

router.post("/send", authMiddleware, upload.single("resumeFile"), sendEmailController);

export default router;
