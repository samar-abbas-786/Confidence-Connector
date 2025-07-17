import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["doctor", "patient"],
        required: true
    }
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);