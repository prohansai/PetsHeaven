// import dotenv from 'dotenv';
// import express from 'express';
// import connectDB from './config/db.js';
// import petRoutes from './routes/petRoutes.js';
// import donationRoutes from './routes/donationRoutes.js';
// import adoptionRoutes from './routes/adoptionRoutes.js';
// import userRoutes from './routes/userRoutes.js'
// import cors from 'cors';

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());
// // app.use(cors()); // Enable CORS for all routes
// app.use(cors({
//     origin: 'http://localhost:3000', // Allow your frontend URL
//     credentials: true // Allow credentials (cookies, authorization headers)
//   }));

// // Define route handlers
// app.use('/api/pets', petRoutes);
// app.use('/api/donations', donationRoutes);
// app.use('/api/adoptions', adoptionRoutes);
// app.use('/api/users', userRoutes)

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// import dotenv from 'dotenv';
// import express from 'express';
// import connectDB from './config/db.js';
// import petRoutes from './routes/petRoutes.js';
// import donationRoutes from './routes/donationRoutes.js';
// import adoptionRoutes from './routes/adoptionRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import cors from 'cors';

// dotenv.config();

// // Test log for Cloudinary configuration
// console.log('Cloudinary Config:', {
//   CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
//   API_KEY: process.env.CLOUDINARY_API_KEY,
//   API_SECRET: process.env.CLOUDINARY_API_SECRET,
// });

// connectDB();

// const app = express();
// app.use(express.json());

// app.use(cors({
//   origin: 'http://localhost:3000', // Allow your frontend URL
//   credentials: true // Allow credentials (cookies, authorization headers)
// }));

// // Define route handlers
// app.use('/api/pets', petRoutes);
// app.use('/api/donations', donationRoutes);
// app.use('/api/adoptions', adoptionRoutes);
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

























//testing clouidnay
// import dotenv from 'dotenv';
// import express from 'express';
// import connectDB from './config/db.js';
// import petRoutes from './routes/petRoutes.js';
// import donationRoutes from './routes/donationRoutes.js';
// import adoptionRoutes from './routes/adoptionRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import cors from 'cors';
// import cloudinary from 'cloudinary'; // Import cloudinary package
// import multer from 'multer'; // Import multer for handling file uploads

// dotenv.config();

// // Configure Cloudinary
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Test log for Cloudinary configuration
// console.log('Cloudinary Config:', {
//   CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
//   API_KEY: process.env.CLOUDINARY_API_KEY,
//   API_SECRET: process.env.CLOUDINARY_API_SECRET,
// });

// connectDB();

// const app = express();
// app.use(express.json());

// app.use(cors({
//   origin: 'http://localhost:3000', // Allow your frontend URL
//   credentials: true // Allow credentials (cookies, authorization headers)
// }));

// // Set up multer for file uploads
// const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

// // Route for testing Cloudinary upload
// app.post('/api/upload', upload.single('file'), (req, res) => {
//   cloudinary.v2.uploader.upload(req.file.path, { upload_preset: 'unsigned_upload' }, (error, result) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }
//     res.json({ url: result.secure_url }); // Send back the URL of the uploaded image
//   });
// });

// // Define route handlers
// app.use('/api/pets', petRoutes);
// app.use('/api/donations', donationRoutes);
// app.use('/api/adoptions', adoptionRoutes);
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





//testing clodinary + admin also

import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import petRoutes from './routes/petRoutes.js';
import donationRoutes from './routes/donationRoutes.js';
import adoptionRoutes from './routes/adoptionRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import cloudinary from 'cloudinary'; // Import cloudinary package
import multer from 'multer'; // Import multer for handling file uploads

dotenv.config();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectDB();

const app = express();
app.use(express.json());

// CORS configuration to allow multiple origins
const allowedOrigins = [
  'http://localhost:3000', // Frontend
  'http://localhost:3001', // Admin
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'This origin is not allowed by CORS';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true, // Allow credentials (cookies, authorization headers)
}));

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

// Route for testing Cloudinary upload
app.post('/api/upload', upload.single('file'), (req, res) => {
  cloudinary.v2.uploader.upload(req.file.path, { upload_preset: 'unsigned_upload' }, (error, result) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ url: result.secure_url }); // Send back the URL of the uploaded image
  });
});

// Define route handlers
app.use('/api/pets', petRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/adoptions', adoptionRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
