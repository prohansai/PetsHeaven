import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  personId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  message: { type: String },
  paymentMethod: { type: String },
});

const Donation = mongoose.model('Donation', donationSchema);
export default Donation;




