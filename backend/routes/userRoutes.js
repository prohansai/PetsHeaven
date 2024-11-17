import express from 'express';
import { registerUser, loginUser, getUser, searchUsers, getAllUsers, deleteUser } from '../controllers/userController.js';

const router = express.Router();


// Route to get all users
router.get('/users', getAllUsers); 

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);


// User search route in your backend (assuming you're using Express)
router.get('/search', searchUsers); 

// to delete user from admin
router.delete('/:id', deleteUser); // Handle DELETE requests at /api/users/:id


// Get user details (protected route)
// router.get('/me', authenticateUser, getUser);

export default router;
