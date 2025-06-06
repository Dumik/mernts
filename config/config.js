import dotenv from 'dotenv';

dotenv.config();

export const config = {
  jwtSecret: process.env.JWT_SECRET ,
  port: parseInt(process.env.PORT || '5050', 10),
  mongoUri: process.env.MONGO_URI ,
  baseURL: process.env.BASE_URL || `http://localhost:5050`,
};
