import dotenv from "dotenv";

dotenv.config();

const API = {
  PORT: process.env.API_PORT,
};

const DB = {
  PORT: process.env.DB_PORT,
  USER: process.env.DB_USER,
  PASS: process.env.DB_PASSWORD,
  HOST: process.env.DB_HOST,
  NAME: process.env.DB_NAME,
};
const JWT = {
  SECRET: process.env.JWT_SECRET,
  EXPIRES: process.env.JWT_EXPIRES_IN,
};

export { API, DB, JWT };
