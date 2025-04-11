// //after pet name, image
// import React, { useState } from 'react';
// import axios from 'axios';
// import UserSearch from '../components/UserSearch';
// import PetSearch from '../components/PetSearch';
// import './AddAdoption.css';
// import Navbar from '../components/Navbar';
// import { toast } from 'react-toastify';

// const AddAdoption = () => {
//     const [selectedAdopter, setSelectedAdopter] = useState(null);
//     const [selectedOwner, setSelectedOwner] = useState(null);
//     const [selectedPet, setSelectedPet] = useState(null);
//     const [date, setDate] = useState('');
//     const [status, setStatus] = useState('in progress');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!selectedAdopter || !selectedOwner || !selectedPet) {
//             toast.error('Please select an adopter, owner, and pet');
//             return;
//         }

//         // Prepare adoption data with petName and petImage directly
//         const adoptionData = {
//             petName: selectedPet.name,
//             petImage: selectedPet.images[0],  // Ensure `image` field is available in Pet data
//             ownerId: selectedOwner._id,
//             adopterId: selectedAdopter._id,
//             date,
//             status,
//         };

//         try {
//             // Step 1: Add the adoption
//             const response = await axios.post('http://localhost:5000/api/adoptions', adoptionData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (response && response.status >= 200 && response.status < 300) {
//                 toast.success('Adoption added successfully!');

//                 // Step 2: Delete the adopted pet from the database using the admin route
//                 await axios.delete(`http://localhost:5000/api/pets/admin/${selectedPet._id}`);

//                 // Step 3: Reset the form fields
//                 setSelectedAdopter(null);
//                 setSelectedOwner(null);
//                 setSelectedPet(null);
//                 setDate('');
//                 setStatus('in progress');
//             }
//         } catch (error) {
//             console.error('Failed to add adoption:', error);
//             toast.error('Failed to add adoption');
//         }
//     };

//     return (
//         <div className="form-container">
//             <Navbar />
//             <h2>Add Adoption</h2>
//             <label>Adopter</label>
//             <UserSearch onSelectUser={setSelectedAdopter} />
//             {selectedAdopter && <p>Selected Adopter: {selectedAdopter.name}</p>}

//             <label>Owner</label>
//             <UserSearch onSelectUser={setSelectedOwner} />
//             {selectedOwner && <p>Selected Owner: {selectedOwner.name}</p>}

//             <label>Pet</label>
//             <PetSearch onSelectPet={setSelectedPet} />
//             {selectedPet && <p>Selected Pet: {selectedPet.name}</p>}

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     required
//                 />
//                 <select value={status} onChange={(e) => setStatus(e.target.value)}>   
//                     <option value="completed">Completed</option>
//                     <option value="in progress">In Progress</option>
//                 </select>
//                 <button type="submit">Submit Adoption</button>
//             </form>
//         </div>
//     );
// };

// export default AddAdoption;
import React, { useState } from 'react';
import axios from 'axios';
import UserSearch from '../components/UserSearch';
import PetSearch from '../components/PetSearch';
import './AddAdoption.css';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

const AddAdoption = () => {
    const [selectedAdopter, setSelectedAdopter] = useState(null);
    const [selectedOwner, setSelectedOwner] = useState(null);
    const [selectedPet, setSelectedPet] = useState(null);
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('in progress');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedAdopter || !selectedOwner || !selectedPet) {
            toast.error('Please select an adopter, owner, and pet');
            return;
        }

        if (selectedAdopter._id === selectedOwner._id) {
            toast.error('Adopter and owner cannot be the same person');
            return;
        }

        // Prepare adoption data with petName and petImage directly
        const adoptionData = {
            petName: selectedPet.name,
            petImage: selectedPet.images[0], // Ensure `image` field is available in Pet data
            ownerId: selectedOwner._id,
            adopterId: selectedAdopter._id,
            date,
            status,
        };

        try {
            // Step 1: Add the adoption
            const response = await axios.post('http://localhost:5000/api/adoptions', adoptionData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response && response.status >= 200 && response.status < 300) {
                toast.success('Adoption added successfully!');

                // Step 2: Delete the adopted pet from the database using the admin route
                await axios.delete(`http://localhost:5000/api/pets/admin/${selectedPet._id}`);

                // Step 3: Reset the form fields
                setSelectedAdopter(null);
                setSelectedOwner(null);
                setSelectedPet(null);
                setDate('');
                setStatus('in progress');
            }
        } catch (error) {
            console.error('Failed to add adoption:', error);
            toast.error('Failed to add adoption');
        }
    };

    return (
        <div className="form-container">
            <Navbar />
            <h2>Add Adoption</h2>
            <label>Adopter</label>
            <UserSearch
                onSelectUser={(user) => {
                    setSelectedAdopter(user);
                    if (selectedOwner && user._id === selectedOwner._id) {
                        toast.error('Adopter and owner cannot be the same person');
                    }
                }}
            />
            {selectedAdopter && <p>Selected Adopter: {selectedAdopter.name}</p>}

            <label>Owner</label>
            <UserSearch
                onSelectUser={(user) => {
                    setSelectedOwner(user);
                    if (selectedAdopter && user._id === selectedAdopter._id) {
                        toast.error('Adopter and owner cannot be the same person');
                    }
                }}
            />
            {selectedOwner && <p>Selected Owner: {selectedOwner.name}</p>}

            <label>Pet</label>
            <PetSearch onSelectPet={setSelectedPet} />
            {selectedPet && <p>Selected Pet: {selectedPet.name}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button type="submit">Submit Adoption</button>
            </form>
        </div>
    );
};

export default AddAdoption;
