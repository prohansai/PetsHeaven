import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});




export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'pets',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    upload_preset: 'unsigned_upload'
  },
});



