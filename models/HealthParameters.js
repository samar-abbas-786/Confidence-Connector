import mongoose from "mongoose";

const healthSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  spo2: Number,
  ecg: Number,
  heartRate: Number,
  bodyTemp: Number,
  gsr: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export const HealthParameters = mongoose.models.HealthParameters || mongoose.model("HealthParameters", healthSchema);
