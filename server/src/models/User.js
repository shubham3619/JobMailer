import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  appPassword: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User; // Ensure this is a default export
