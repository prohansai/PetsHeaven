
import mongoose from 'mongoose';

const adoptionSchema = new mongoose.Schema({
  petName: { type: String, required: true },      // Store pet's name directly
  petImage: { type: String },                     // Store pet's image directly (URL or path)
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  adopterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['in progress', 'completed'], default: 'completed' },
});

const Adoption = mongoose.model('Adoption', adoptionSchema);
export default Adoption;
