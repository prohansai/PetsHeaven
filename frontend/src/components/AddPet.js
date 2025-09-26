import React, { useState } from 'react';
import axios from 'axios';
import './AddPet.css';
import { toast } from 'react-toastify';

const AddPet = () => {
  const [petData, setPetData] = useState({
    name: '',
    type: '',
    breed: '',
    location: '',
    age: '',
    description: '',
    images: [],
  });

  const [imageFiles, setImageFiles] = useState([]); // State to hold image files

  const handleChange = (e) => {
    setPetData({
      ...petData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    
    // Limit to 5 images
    if (imageFiles.length + newFiles.length <= 5) {
      setImageFiles((prevFiles) => [...prevFiles, ...newFiles]); // Append new files if within limit
    } else {
      toast.error('You can only upload a maximum of 5 images');
    }
  };

  const uploadImages = async (files) => {
    const uploads = Array.from(files).map(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'unsigned_upload'); // Use your actual upload preset name here

      return axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, formData)
        .then(res => {
          if (res.data.secure_url) {
            return res.data.secure_url; // Return the secure URL of the uploaded image
          } else {
            throw new Error('Image upload failed');
          }
        })
        .catch(error => {
          console.error('Upload Error:', error);
          throw error; // Re-throw the error for handling in the calling function
        });
    });

    return Promise.all(uploads); // Wait for all uploads to complete
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const uploadedImages = await uploadImages(imageFiles); // Upload images to Cloudinary
      const response = await axios.post('https://petsheaven-backend.onrender.com/api/pets', {
        ...petData,
        images: uploadedImages, // Include the uploaded image URLs
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      toast.success(`Pet added successfully: ${response.data.name}`);
      setPetData({ name: '', type: '', age: '', breed: '', location: '', description: '', images: [] });
      setImageFiles([]); // Clear selected files
    } catch (error) {
      console.error('Error adding pet:', error);
      toast.error('Failed to add pet');
    }
  };

  return (
    <div>
      <h2>Add a New Pet</h2>
      <div className="add-pet-container">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={petData.name} onChange={handleChange} required />
          </label>
          <label>
            Type:
            <input type="text" name="type" value={petData.type} onChange={handleChange} required />
          </label>
          <label>
            Age:
            <input type="number" name="age" value={petData.age} onChange={handleChange} required />
          </label>
          <label>
            Breed:
            <input type="text" name="breed" value={petData.breed} onChange={handleChange} />
          </label>
          <label>
            Location:
            <input type="text" name="location" value={petData.location} onChange={handleChange} required />
          </label>
          <label>
            Description:
            <textarea name="description" value={petData.description} onChange={handleChange}></textarea>
          </label>
          <label>
            Images:
            <input type="file" multiple accept="image/*" onChange={handleFileChange} required />
          </label>
          {/* Display image previews */}
          <div className="image-previews">
            {imageFiles.length > 0 && Array.from(imageFiles).map((file, index) => (
              <img key={index} src={URL.createObjectURL(file)} alt={`Preview ${index + 1}`} className="preview-image" />
            ))}
          </div>
          <button type="submit">Add Pet</button>
        </form>
      </div>
    </div>
  );
};

export default AddPet;
