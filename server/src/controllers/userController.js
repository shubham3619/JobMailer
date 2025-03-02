import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
import { createTransport } from "nodemailer";

dotenv.config(); // Load environment variables

// Function to verify app password
const verifyAppPassword = async (email, appPassword) => {
  try {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: appPassword,
      },
    });

    // Attempt to verify the connection
    await transporter.verify();
    return { success: true };
  } catch (error) {
    console.error("App password verification error:", error);
    return {
      success: false,
      error:
        "Invalid app password. Please check your Gmail app password and try again.",
    };
  }
};

export const signup = async (req, res) => {
  const { name, email, password, appPassword } = req.body;

  if (!name || !email || !password || !appPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Verify app password before proceeding
    const appPasswordVerification = await verifyAppPassword(email, appPassword);
    if (!appPasswordVerification.success) {
      return res.status(400).json({
        message: appPasswordVerification.error,
      });
    }

    // Hash password before storing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      appPassword,
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id, email: newUser.email }, process.env.JWT_SECRET);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//////////////////////////////////////////  Login Route //////////////////////////////////

// export const login = async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: "Email and password are required" });
//     }

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         // Check password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         // Generate JWT token
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.status(200).json({
//             message: "Login successful",
//             token,
//             user: { id: user._id, name: user.name, email: user.email }
//         });

//     } catch (error) {
//         console.error("Login Error:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

//import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log("Login data", email, password);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET
    );

    res.json({ message: "Login successful", token });
    
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
