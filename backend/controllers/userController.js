import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register a new user
// export const registerUser = async (req, res) => {
//   const { name, email, phone, password } = req.body;

//   // Input validation
//   if (!name || !email || !phone || !password) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new User instance with the hashed password
//     const newUser = new User({
//       name,
//       email,
//       phone,
//       passwordHash: hashedPassword,
//     });

//     // Save new user to the database
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error: ' + error.message });
//   }
// };


// // Login an existing user
// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   // Input validation
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required.' });
//   }

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: 'User not found.' });

//     // Compare the provided password with the hashed password
//     const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
//     if (!isPasswordValid) return res.status(400).json({ message: 'Invalid password.' });

//     // Generate JWT token
//     const token = jwt.sign(
//       { id: user._id, role: user.userRole },
//       process.env.JWT_SECRET,
//       { expiresIn: '5h' }
//     );

//     // Set token in headers and respond with the token and user info
//     res.set('Authorization', `Bearer ${token}`); // Set token in the response header
//     res.status(200).json({
//       token,
//       user: { id: user._id, name: user.name, email: user.email, role: user.userRole },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error: ' + error.message });
//   }
// };


// Register a new user
export const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Input validation
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new User instance with the hashed password
    const newUser = new User({
      name,
      email,
      phone,
      passwordHash: hashedPassword,
    });

    // Save new user to the database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, role: newUser.userRole }, // Add user ID and role to the token payload
      process.env.JWT_SECRET,
      { expiresIn: '5h' }
    );

    // Respond with token and user info
    res.status(201).json({
      message: 'User registered successfully!',
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.userRole },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// Login an existing user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Input validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid password.' });

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.userRole },
      process.env.JWT_SECRET,
      { expiresIn: '5h' }
    );

    // Set token in headers and respond with the token and user info
    res.set('Authorization', `Bearer ${token}`); // Optional: set token in the response header
    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.userRole },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};










export const searchUsers = async (req, res) => {
  const { name } = req.query; // Get the search term from the query

  if (!name) {
      return res.status(400).json({ message: 'Name parameter is required.' });
  }

  try {
      const users = await User.find({ name: new RegExp(name, 'i') }); // Case-insensitive search
      res.json(users);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};







// Get user details
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from response
    if (!user) return res.status(404).json({ message: 'User not found.' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


