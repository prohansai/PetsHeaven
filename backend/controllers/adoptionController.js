// controllers/adoptionController.js
import Adoption from '../models/Adoption.js';

// export const addAdoption = async (req, res) => {
//   const { petId, ownerId, adopterId } = req.body;
//   try {
//     const newAdoption = new Adoption({ petId, ownerId, adopterId });
//     await newAdoption.save();
//     res.status(201).json(newAdoption);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


export const addAdoption = async (req, res) => {
  const { petName, petImage, ownerId, adopterId, date, status } = req.body;

  try {
    // Create a new adoption with pet details directly in the record
    const newAdoption = new Adoption({
      petName,
      petImage,
      ownerId,
      adopterId,
      date,
      status,
    });

    await newAdoption.save();
    res.status(201).json(newAdoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






export const getAllAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find().populate('petId ownerId adopterId');
    res.status(200).json(adoptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!adoption) return res.status(404).json({ message: 'Adoption not found.' });
    res.status(200).json(adoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.findByIdAndDelete(req.params.id);
    if (!adoption) return res.status(404).json({ message: 'Adoption not found.' });
    res.status(200).json({ message: 'Adoption deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




export const getAdoptionsByUserId = async (req, res) => {
  try {

   
    if (!req.user || !req.user.id) {
      return res.status(400).json({ message: 'User not authenticated' });
    }

    const adoptions = await Adoption.find({ adopterId: req.user.id })
    // .populate('petId', 'name')         // Assuming `name` is a field in Pet model
      .populate('ownerId', 'name email'); ;
    
    if (!adoptions || adoptions.length === 0) { // Change here to check for an empty array
      return res.status(404).json({ message: 'No adoptions found' });
    }

    res.status(200).json(adoptions);
  } catch (error) {
    console.error('Error fetching adoptions:', error);
    res.status(500).json({ message: error.message });
  }
};









