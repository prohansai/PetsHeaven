import React, { useState, useEffect } from 'react';
import './AvailablePets.css';

const AvailablePets = () => {
  const [pets, setPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [breedFilter, setBreedFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState({ min: '', max: '' });

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://petsheaven-backend.onrender.com/api/pets'); 
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleAgeFilterChange = (event) => {
    const { name, value } = event.target;
    setAgeFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredPets = pets.filter((pet) => {
    const matchesSearchQuery =
      pet.breed.toLowerCase().includes(searchQuery) ||
      pet.name.toLowerCase().includes(searchQuery) ||
      pet.type.toLowerCase().includes(searchQuery) ||
      pet.location.toLowerCase().includes(searchQuery);

    const matchesBreed = breedFilter ? pet.breed.toLowerCase() === breedFilter.toLowerCase() : true;
    const matchesType = typeFilter ? pet.type.toLowerCase() === typeFilter.toLowerCase() : true;
    const matchesLocation = locationFilter ? pet.location.toLowerCase() === locationFilter.toLowerCase() : true;

    const matchesAge =
      (!ageFilter.min || pet.age >= parseInt(ageFilter.min)) &&
      (!ageFilter.max || pet.age <= parseInt(ageFilter.max));

    return matchesSearchQuery && matchesBreed && matchesType && matchesLocation && matchesAge;
  });

  const PetCard = ({ pet }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < pet.images.length - 1 ? prevIndex + 1 : 0
      );
    };
  
    const handlePreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : pet.images.length - 1
      );
    };
  
    return (
      <div key={pet._id} className="pet-card">
        <div className="image-carousel">
          {pet.images && pet.images.length > 0 ? (
            <>
              <button className="carousel-button prev" onClick={handlePreviousImage}>
                &#8249;
              </button>
              <img
                src={pet.images[currentImageIndex]}
                alt={`${pet.name} - ${currentImageIndex + 1}`}
                className="pet-image"
              />
              <button className="carousel-button next" onClick={handleNextImage}>
                &#8250;
              </button>
            </>
          ) : (
            <p>No images available</p>
          )}
        </div>
        <h3>{pet.name}</h3>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>{pet.description}</p>
        {pet.ownerId && pet.ownerId.email ? (
          <a href={`mailto:${pet.ownerId.email}`}>Contact Owner</a>
        ) : (
          <p>Owner email not available</p>
        )}
      </div>
    );
  };
  

  return (
    <div className="section">
      <div className="filter-sidebar">
        <h3>Filter by</h3>
        <label>
          Breed:
          <input
            type="text"
            value={breedFilter}
            onChange={(e) => setBreedFilter(e.target.value)}
            placeholder="Enter breed"
          />
        </label>

        <label>
          Type:
          <input
            type="text"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            placeholder="Enter type (e.g., dog, cat)"
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            placeholder="Enter location"
          />
        </label>

        <label>
          Age Range:
          <input
            type="number"
            name="min"
            value={ageFilter.min}
            onChange={handleAgeFilterChange}
            placeholder="Min age"
          />
          <input
            type="number"
            name="max"
            value={ageFilter.max}
            onChange={handleAgeFilterChange}
            placeholder="Max age"
          />
        </label>
      </div>

      <div className="available-pets-content">
        <h2>Available Pets</h2>
        <input
          type="text"
          placeholder="Search by breed, name, type, or location..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />

        <div className="pets-list">
          {filteredPets.length > 0 ? (
            filteredPets.map((pet) => <PetCard key={pet._id} pet={pet} />)
          ) : (
            <p>No pets found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailablePets;
