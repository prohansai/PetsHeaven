import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  breed: { type: String, required: true },
  location: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String },
  images: { type: [String]},    // required: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['available', 'adopted', 'pending'], default: 'available' },
  dateAdded: { type: Date, default: Date.now },
});

const Pet = mongoose.model('Pet', petSchema);
export default Pet;
