import mongoose from "mongoose";

const sentEmailSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  hrName: {
    type: String,
    required: true
  },
  hrEmail: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  coverLetter: {
    type: String,
    required: true
  },
  resumeFileName: {  
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('SentEmail', sentEmailSchema);