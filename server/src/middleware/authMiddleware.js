

import jwt from "jsonwebtoken";
import User from "../models/User.js"; 
export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(JSON.stringify(decoded));
        const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = { userId: user._id }; 
        
        req.user = decoded;  // Attach user info to the request
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};



// import jwt from "jsonwebtoken";
// import User from "../models/User.js";  // ✅ Now actually used

// export const authMiddleware = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized: No token" });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
//     // Fetch user from DB to confirm existence
//     const user = await User.findById(decoded.userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     req.user = { userId: user._id };  

//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Unauthorized: Invalid token" });
//   }
// };



