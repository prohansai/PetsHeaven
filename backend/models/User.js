import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  passwordHash: { type: String, required: true },
  address: { type: String },
  profilePicture: { type: String },
  createdAt: { type: Date, default: Date.now },
  userRole: { type: String, enum: ['owner', 'adopter'], default: 'adopter' },
  // role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const User = mongoose.model('User', userSchema);
export default User;
