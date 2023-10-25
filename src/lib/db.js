import mongoose from "mongoose";
import { DB } from "../../config/index.js";

const URI = `mongodb+srv://${DB.USER}:${DB.PASS}@${DB.HOST}/${DB.NAME}`;

export const connect = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connection established: ${DB.HOST}`);
  } catch (error) {
    console.error(`Connection to ${DB.HOST} failed: ${error.message}`);
  }
};

export const close = async () => {
  await mongoose.connection.close();
  console.log("Connection to MongoDB closed");
};
