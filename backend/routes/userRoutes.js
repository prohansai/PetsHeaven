import express from 'express';
import { registerUser, loginUser, getUser, searchUsers } from '../controllers/userController.js';

const router = express.Router();

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);


// User search route in your backend (assuming you're using Express)
router.get('/search', searchUsers); 



// Get user details (protected route)
// router.get('/me', authenticateUser, getUser);

export default router;
