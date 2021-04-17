import { config } from "dotenv";
config();

export default {
  DB_CONNECTION: process.env.DB_CONNECTION,
};
