import mongoose from "mongoose";
const bcrypt = require("bcrypt");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      min: 2,
      max: 50,
      required: true,
    },
    bio: {
      type: String,
      trim: true,
      min: 10,
      max: 160,
    },
    avatar: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "email invalid!"],
      lowercase: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      min: 8,
      required: true,
    },
    role: {
      type: String,
      enum: {
        values: ["Admin", "User"],
        message: "{VALUE}, is not a valid role",
      },
    },
    books: {
      type: Array,
      default: [],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    statics: {
      encrypPassword: async (password) => {
        const salt = await bcrypt.genSalt(15);
        return await bcrypt.hash(password, salt);
      },
      comparePassword: async (password, hash) => {
        return await bcrypt.compare(password, hash);
      },
    },
  }
);

const User = model("users", userSchema);
export default User;
