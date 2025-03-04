import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./src/routes/userRoute.js";
import emailRoutes from "./src/routes/emailRoute.js";

// Load environment variables first
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection with proper error handling
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    // Don't exit the process to allow the application to start even with DB issues
    console.log("Server will continue to run, but database functionality will be limited");
  }
};

// Call the connection function
connectDB();

// Routes
app.use("/api/user", userRoutes);
app.use("/api/email", emailRoutes);

// Basic route to verify server is running
app.get("/", (req, res) => {
  res.send("Email Sender API is running!");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("⚠️ Server Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));