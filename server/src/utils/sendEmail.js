import nodemailer from "nodemailer";
import { emailTemplate } from "./emailTemplate.js";

export const sendEmail = async (
  userName,
  userEmail,
  userAppPassword,
  hrName,
  hrEmail,
  companyName,
  subject,
  coverLetter,
  resumeFile
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail, // ✅ Use user's email from DB
        pass: userAppPassword, // ✅ Use user's app password from DB
      },
    });

    const mailOptions = {
      from: userEmail,
      to: hrEmail,
      subject: subject,
      html: emailTemplate({
        userName,
        userEmail,
        hrName,
        companyName,
        subject,
        coverLetter,
      }),
      attachments: [
        {
          filename: "resume.pdf",
          content: resumeFile.buffer,
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new Error(error.message);
  }
};
