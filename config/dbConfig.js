import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

console.log(MONGO_URI)

export const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGO_URI);
};
