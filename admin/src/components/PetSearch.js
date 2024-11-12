
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PetSearch = ({ onSelectPet }) => {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchPets = async () => {
//             const trimmedQuery = query.trim(); // Trim the query
//             console.log(`Searching for pets with query: ${trimmedQuery}`); // Log the query

//             if (trimmedQuery) {
//                 try {
//                     const response = await axios.get('http://localhost:5000/api/pets/search', {
//                         params: { name: trimmedQuery }, // Send the query as a parameter
//                     });
//                     setResults(response.data);
//                     setError(''); // Clear any previous error
//                 } catch (error) {
//                     console.error('Error fetching pets:', error);
//                     setError('Error fetching pets. Please try again.'); // Display error message
//                     setResults([]); // Clear results on error
//                 }
//             } else {
//                 setResults([]); // Clear results if the query is empty
//             }
//         };

//         fetchPets();
//     }, [query]);

//     return (
//         <div className="search-container">
//             <input
//                 type="text"
//                 placeholder="Search for a pet"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="search-input"
//             />
//             {error && <p className="error-message">{error}</p>} {/* Display error message */}
//             <ul className="search-results">
//                 {results.map((pet) => (
//                     <li key={pet._id} onClick={() => onSelectPet(pet)} className="search-result-item">
//                         {pet.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default PetSearch;




// after pet name, image
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetSearch = ({ onSelectPet }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPets = async () => {
            const trimmedQuery = query.trim();
            console.log(`Searching for pets with query: ${trimmedQuery}`);

            if (trimmedQuery) {
                try {
                    const response = await axios.get('http://localhost:5000/api/pets/search', {
                        params: { name: trimmedQuery },
                    });
                    setResults(response.data);
                    setError('');
                } catch (error) {
                    console.error('Error fetching pets:', error);
                    setError('Error fetching pets. Please try again.');
                    setResults([]);
                }
            } else {
                setResults([]);
            }
        };

        fetchPets();
    }, [query]);

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for a pet"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            {error && <p className="error-message">{error}</p>}
            <ul className="search-results">
                {results.map((pet) => (
                    <li
                        key={pet._id}
                        onClick={() => onSelectPet(pet)}
                        className="search-result-item"
                    >
                        {pet.images && (
                            <img
                                src={pet.images[0]}
                                alt={pet.name}
                                className="pet-thumbnail"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    marginRight: '10px',
                                    borderRadius: '4px',
                                }}
                            />
                        )}
                        {pet.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PetSearch;
