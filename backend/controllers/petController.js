// controllers/petController.js
import Pet from '../models/Pet.js';

// export const addPet = async (req, res) => {
//   const { name, type, breed, location, age, description, images } = req.body; // Removed ownerId from the destructuring
//   try {
//     // Create a new pet with the data from the request body
//     const newPet = new Pet({
//       name,
//       type,
//       breed,
//       location,
//       age,
//       description,
//       images,
//       ownerId: req.user.id, // Set ownerId to the authenticated user's ID
//     });

//     // Save the new pet to the database
//     await newPet.save();
//     res.status(201).json(newPet);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };





// export const addPet = async (req, res) => {
//   const { name, type, breed, location, age, description } = req.body;
//   const images = req.files ? req.files.map(file => file.path) : []; // Extract URLs from uploaded images

//   try {
//     const newPet = new Pet({
//       name,
//       type,
//       breed,
//       location,
//       age,
//       description,
//       images, // Save image URLs in the database
//       ownerId: req.user.id,
//     });

//     await newPet.save();
//     res.status(201).json(newPet);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


export const addPet = async (req, res) => {
  const { name, type, breed, location, age, description, images } = req.body;

  try {
    const newPet = new Pet({
      name,
      type,
      breed,
      location,
      age,
      description,
      images, // Use images from req.body (uploaded URLs from Cloudinary)
      ownerId: req.user.id,
    });

    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};









// export const getAllPets = async (req, res) => {
//   try {
//     const pets = await Pet.find();
//     res.status(200).json(pets);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
//for email contact  functionality
export const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('ownerId', 'email name'); // Populate 'email' and 'name' fields from User model
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




export const searchPets = async (req, res) => {
  const { name } = req.query; // Destructure 'name' from query parameters

  if (!name) {
      return res.status(400).json({ message: 'Name query parameter is required' });
  }

  try {
      // Use regex for case-insensitive searching
      const pets = await Pet.find({ name: { $regex: name, $options: 'i' } });
      
      res.json(pets); // Return the filtered pets
  } catch (error) {
      console.error('Error searching pets:', error);
      res.status(500).json({ message: 'Error searching pets' });
  }
};




export const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: 'Pet not found.' });
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updatePet = async (req, res) => {
  try {
    // Find the pet by ID
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: 'Pet not found.' });

    // Check if the user is the owner of the pet
    if (pet.ownerId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this pet.' });
    }

    // Proceed with the update
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const deletePet = async (req, res) => {
  const petId = req.params.id;

  try {
    const deletedPet = await Pet.findByIdAndDelete(petId);
    if (!deletedPet) {
      return res.status(404).json({ message: 'Pet not found.' });
    }
    res.status(200).json({ message: 'Pet deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pet.', error });
  }
};




export const getPetsByUserId = async (req, res) => {
  try {
    const pets = await Pet.find({ ownerId: req.user.id });
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



