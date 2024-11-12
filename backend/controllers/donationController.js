// controllers/donationController.js
import Donation from '../models/Donation.js';

export const addDonation = async (req, res) => {
  const { personId, amount, message, paymentMethod } = req.body;
  try {
    const newDonation = new Donation({ personId, amount, message, paymentMethod });
    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate('personId', 'name');
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDonation = async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!donation) return res.status(404).json({ message: 'Donation not found.' });
    res.status(200).json(donation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDonation = async (req, res) => {
  try {
    const donation = await Donation.findByIdAndDelete(req.params.id);
    if (!donation) return res.status(404).json({ message: 'Donation not found.' });
    res.status(200).json({ message: 'Donation deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




export const getDonationsByUserId = async (req, res) => {
  try {
    const donations = await Donation.find({ personId: req.user.id });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



