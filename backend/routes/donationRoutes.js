import express from 'express';
import {
  addDonation,
  getAllDonations,
  getDonationsByUserId, // Import the new controller function
  updateDonation,
  deleteDonation,
} from '../controllers/donationController.js';

import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

// Route to add a new donation
router.post('/', addDonation);

// Route to get all donations
router.get('/', getAllDonations);

// Route to get donations by user ID
router.get('/my',  authenticateUser, getDonationsByUserId); // New route for getting donations by user ID

// Route to update a donation by ID
router.put('/:id', updateDonation);

// Route to delete a donation by ID
router.delete('/:id', deleteDonation);



export default router;
