
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./src/routes/userRoute.js";
 import emailRoutes from "./src/routes/emailRoute.js";

 import fs from 'fs';
import path from 'path';

// Log the project structure
const logDir = (dir, level = 0) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    console.log('  '.repeat(level) + file + (stats.isDirectory() ? '/' : ''));
    if (stats.isDirectory()) {
      logDir(filePath, level + 1);
    }
  });
};

try {
  console.log("Project structure:");
  logDir('/opt/render/project/src');
} catch (err) {
  console.error("Error logging directory structure:", err);
}


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Error:", err));

app.use("/api/user", userRoutes);
 app.use("/api/email", emailRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import dotenv from "dotenv";
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import userRoutes from "./src/routes/userRoute.js";
// import emailRoutes from "./src/routes/emailRoute.js";

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("✅ MongoDB Connected Successfully");
//     } catch (error) {
//         console.error("❌ MongoDB Connection Error:", error);
//         process.exit(1);
//     }
// };
// connectDB();

// // Routes
// app.use("/api/user", userRoutes);
// app.use("/api/email", emailRoutes);

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//     console.error("⚠️ Server Error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
