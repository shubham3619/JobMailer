import { sendEmail } from "../utils/sendEmail.js";
import User from "../models/User.js";
import SentEmail from "../models/SentEmail.js";
import mongoose from "mongoose";

export const sendEmailController = async (req, res) => {
  const { hrName, hrEmail, companyName, subject, coverLetter } = req.body;
  const resumeFile = req.file;

  console.log(resumeFile);
  try {
    // Input validation
    if (!hrEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // File validation
    if (resumeFile) {
      const allowedTypes = ['application/pdf', 'application/msword'];
      const maxSize = 1 * 1024 * 1024; // 5MB
      
      if (!allowedTypes.includes(resumeFile.mimetype)) {
        return res.status(400).json({ message: "Invalid file type" });
      }
      
      if (resumeFile.size > maxSize) {
        return res.status(400).json({ message: "File too large" });
      }
    }

    // Use req.user.id instead of req.user.userId
    const userId = req.user.id;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const emailResponse = await sendEmail(
      user.name,
      user.email,
      user.appPassword,
      hrName,
      hrEmail,
      companyName,
      subject,
      coverLetter,
      resumeFile
    );

    // Store sent email in DB
    const newEmail = new SentEmail({
      userId: user._id,
      hrName,
      hrEmail,
      companyName,
      subject,
      coverLetter,
      resumeFileName: Date.now() + '-' + resumeFile?.originalname, // Make filename optional
      timestamp: new Date(),
    });

    await newEmail.save();

 //Return success response with any additional info from emailResponse
 res.status(200).json({ 
  message: "Email sent successfully",
  messageId: emailResponse.messageId, // If your email service returns a messageId
  details: emailResponse.details // Any other relevant details from the email service
});

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ message: "Failed to send email. Please try again later." });
  }
};


// export const sendEmailController = async (req, res) => {
//   const { hrName, hrEmail, companyName, subject, coverLetter } = req.body;
//   const resumeFile = req.file;

//   console.log("Received body:", req.body);
//   console.log("Received file:", req.file);

//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }

//   try {
//     // Input validation
//     if (!hrEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       return res.status(400).json({ message: "Invalid email format" });
//     }

//     // File validation
//     if (!resumeFile) {
//       return res.status(400).json({ message: "Resume file is required" });
//     }

//     const allowedTypes = ['application/pdf', 'application/msword'];
//     const maxSize = 1 * 1024 * 1024; // 1MB
    
//     if (!allowedTypes.includes(resumeFile.mimetype)) {
//       return res.status(400).json({ message: "Invalid file type" });
//     }
    
//     if (resumeFile.size > maxSize) {
//       return res.status(400).json({ message: "File too large" });
//     }

//     const userId = req.user.id;
//     const user = await User.findById(userId);
    
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Send email and check response
//     const emailResponse = await sendEmail(
//       user.email,
//       user.appPassword,
//       hrName,
//       hrEmail,
//       companyName,
//       subject,
//       coverLetter,
//       resumeFile
//     );

//     // Check if email was sent successfully
//     if (!emailResponse || emailResponse.error) {
//       throw new Error(emailResponse?.error || 'Failed to send email');
//     }

//     // Store sent email in DB only if email was sent successfully
//     const newEmail = new SentEmail({
//       userId: user._id,
//       hrName,
//       hrEmail,
//       companyName,
//       subject,
//       coverLetter,
//       resumeFileName: Date.now() + '-' + resumeFile?.originalname,
//     });

//     await newEmail.save();

//     // Return success response with any additional info from emailResponse
//     res.status(200).json({ 
//       message: "Email sent successfully",
//       messageId: emailResponse.messageId, // If your email service returns a messageId
//       details: emailResponse.details // Any other relevant details from the email service
//     });

//   } catch (error) {
//     console.error('Email sending error:', error);
//     // Send more specific error message based on the type of error
//     res.status(500).json({ 
//       message: "Failed to send email. Please try again later.",
//       error: error.message 
//     });
//   }
// };


export const getSentEmails = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Use req.user.id instead of req.user.userId
    const emails = await SentEmail.find({ userId: req.user.id })
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit);

    const total = await SentEmail.countDocuments({ userId: req.user.id });

    res.status(200).json({
      emails,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalEmails: total
    });
  } catch (error) {
    console.error('Error fetching emails:', error);
    res.status(500).json({ message: "Failed to fetch emails. Please try again later." });
  }
};