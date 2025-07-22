import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["doctor", "patient"], required: true },
  email: String,
  phone: String,
  age: Number,
  gender: { type: String, enum: ["male", "female", "other"] },
  health: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HealthParameters",
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
