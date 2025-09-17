import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    idiom: { type: String, enum: ["Portuguese", "English"] },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    dateOfBirth: { type: Date, required: true },
    terms: { type: Boolean, required: true },
    accountStatus: {
      type: String,
      default: "pending",
      enum: ["active", "inactive", "pending", "deleted"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
