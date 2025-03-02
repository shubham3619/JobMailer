import express from "express";
import { signup, login } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Example of a protected route
router.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "Welcome to your profile!", userId: req.user.userId });
});

export default router;
