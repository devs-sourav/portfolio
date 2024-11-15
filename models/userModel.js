import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, sparse: true }, // Optional and unique field
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'], // Possible roles
    default: 'user', // Default role if not specified
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
