import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import petRoutes from './routes/petRoutes.js';
import donationRoutes from './routes/donationRoutes.js';
import adoptionRoutes from './routes/adoptionRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import cloudinary from 'cloudinary';
import multer from 'multer';

dotenv.config();

// Connect to database
connectDB();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());

// ✅ Allow only deployed frontend & admin URLs
const allowedOrigins = [
  'https://petsheaven-frontend.onrender.com',
  'https://petsheaven-admin.onrender.com',
];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     }
//     return callback(new Error('Not allowed by CORS'), false);
//   },
//   credentials: true,
// }));
app.use(cors({
  origin: true, // ← allows all origins temporarily
  credentials: true
}));


// Multer setup
const upload = multer({ dest: 'uploads/' });

// Cloudinary file upload route
app.post('/api/upload', upload.single('file'), (req, res) => {
  cloudinary.v2.uploader.upload(req.file.path, { upload_preset: 'unsigned_upload' }, (error, result) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ url: result.secure_url });
  });
});

// API Routes
app.use('/api/pets', petRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/adoptions', adoptionRoutes);
app.use('/api/users', userRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
