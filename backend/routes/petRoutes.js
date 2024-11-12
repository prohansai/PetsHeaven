// routes/pets.js
import express from 'express';
import multer from 'multer';
import { storage } from '../config/cloudinaryConfig.js'; 
const upload = multer({ storage });

import { authenticateUser } from '../middleware/auth.js';
import {
  addPet,
  getAllPets,
  getPetById,
  updatePet,
  deletePet,
  getPetsByUserId,
  searchPets,
} from '../controllers/petController.js';

const router = express.Router();

router.get('/search', searchPets);

router.get('/',  getAllPets); // Get all pets
// router.post('/', authenticateUser,  addPet); // Add a new pet
// router.post('/', authenticateUser, upload.array('images', 5), addPet); // Add a new pet and Allow up to 5 images
router.post('/', authenticateUser,  addPet); // Add a new pet and Allow up to 5 images



router.delete('/:id', authenticateUser, deletePet); // Delete a pet by ID  Regular user deletion (requires auth)
router.delete('/admin/:id', deletePet); // Admin deletion (no auth required)

router.get('/my', authenticateUser, getPetsByUserId); //gets pets by user id
router.get('/:id', authenticateUser, getPetById); // Get a pet by ID
router.put('/:id', authenticateUser, updatePet); // Update a pet by ID  




export default router;
