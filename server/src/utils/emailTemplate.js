export const emailTemplate = ({
  userName,
  userEmail,
  hrName,
  companyName,
  subject,
  coverLetter,
}) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Application Email</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
            padding: 20px;
        }
        .email-container {
            max-width: 650px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 35px;
            border-radius: 10px;
            box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
        }
        .email-header {
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 20px;
            margin-bottom: 25px;
        }
        .company-section {
            margin-bottom: 25px;
        }
        .company-name {
            font-size: 24px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        .email-subject {
            font-size: 18px;
            color: #3498db;
            margin-top: 15px;
        }
        .greeting {
            font-size: 16px;
            margin-bottom: 20px;
            color: #2c3e50;
        }
        .content {
            margin-bottom: 30px;
            color: #555;
        }
        .content p {
            margin-bottom: 15px;
        }
        .attachment-section {
            background-color: #f8f9fa;
            padding: 18px;
            border-radius: 6px;
            margin: 25px 0;
            border-left: 4px solid #3498db;
            display: flex;
            align-items: center;
        }
        .attachment-icon {
            margin-right: 15px;
            font-size: 24px;
            color: #3498db;
        }
        .attachment-details {
            flex-grow: 1;
        }
        .attachment-name {
            font-weight: bold;
            color: #2980b9;
            margin-bottom: 5px;
        }
        .attachment-desc {
            font-size: 14px;
            color: #7f8c8d;
        }
        .signature {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #555;
        }
        .signature p {
            margin-bottom: 5px;
        }
        .contact-info {
            margin-top: 15px;
        }
        .highlight {
            background-color: rgba(52, 152, 219, 0.1);
            padding: 2px 5px;
            border-radius: 3px;
        }
        .header-logo {
            text-align: center;
            margin-bottom: 25px;
        }
        .header-logo img {
            max-width: 180px;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header-logo">
            <img src="/api/placeholder/180/60" alt="Company Logo">
        </div>
        
        <div class="email-header">
            <div class="company-section">
                <div class="company-name" id="companyName">${companyName}</div>
            </div>
            <div class="email-subject" id="subject">${subject}</div>
        </div>
        
        <div class="greeting">
            Dear <span id="hrName">${hrName}</span>,
        </div>
        
        <div class="content" id="coverLetter">
            <!-- Cover letter content will be inserted here -->
            ${coverLetter}
        </div>
        
        
        
        <div class="signature">
            <p>I look forward to discussing my application in more detail.</p>
            <p>Thank you for your time and consideration.</p>
            <p style="margin-top: 15px;">Sincerely,</p>
            <p style="font-weight: bold; margin-top: 5px;">${userName}</p>
            
            <div class="contact-info">
                <p>Phone: (123) 456-7890</p>
                <p>Email: ${userEmail}</p>
            </div>
        </div>
    </div>

    
</body>
</html>
  `;
};
