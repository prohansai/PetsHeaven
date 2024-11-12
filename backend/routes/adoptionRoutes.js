// routes/adoptions.js
import express from 'express';
import {
  addAdoption,
  getAllAdoptions,
  updateAdoption,
  deleteAdoption,
  getAdoptionsByUserId
} from '../controllers/adoptionController.js';

import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

router.post('/', addAdoption); // Add a new adoption
router.get('/', getAllAdoptions); // Get all adoptions

router.put('/:id', updateAdoption); // Update an adoption by ID
router.delete('/:id', deleteAdoption); // Delete an adoption by ID


router.get('/my', authenticateUser, getAdoptionsByUserId);


export default router;

