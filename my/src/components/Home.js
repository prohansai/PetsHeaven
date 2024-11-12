import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing the CSS file for this component

const Home = () => {
  return (
    <div id="home" className="home-section">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Pets Heaven!</h1>
        <p>Your one-stop destination for pet adoption. Find your furry friend today!</p>
        <div className="cta-buttons">
          <Link to="/availablePets">
            <button>Browse Available Pets</button>
          </Link>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          At Pets Heaven, we are dedicated to connecting homeless pets with loving families.
          We believe every pet deserves a safe and happy home.
        </p>
      </div>

      {/* Our Impact */}
      <div className="stats">
        <h2>Our Impact</h2>
        <ul>
          <li>500+ pets adopted</li>
          <li>200+ families served</li>
          <li>100+ volunteers</li>
        </ul>
      </div>

      {/* Success Stories */}
      <div className="success-stories">
        <h2>Success Stories</h2>
        <div className="story">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsugFAEKwTjR61JgBOV0VpUToohS9VlkTuoA&s"
            alt="Happy Dog"
          />
          <p>
            "Adopting Max from Pets Heaven was the best decision we made. He's brought so
            much joy to our home!"
          </p>
        </div>
        <div className="story">
          <img
            src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
            alt="Happy Cat"
          />
          <p>"Luna has been such a wonderful addition to our family. Thank you, Pets Heaven!"</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="events">
        <h2>Upcoming Events</h2>
        <p>Join us for our next adoption drive!</p>
        <ul>
          <li>Adoption Fair - October 15, 2024</li>
          <li>Fundraiser for Shelter Expansion - November 5, 2024</li>
        </ul>
      </div>

      {/* How You Can Help */}
      <div className="help-section">
        <h2>How You Can Help</h2>
        <p>
          We rely on the generosity of people like you. Consider donating, volunteering, or
          fostering pets in need.
        </p>
        <div className="cta-buttons">
          <Link to="/donate">
            <button>Donate Now</button>
          </Link>
          <Link to="/contactUs">
            <button>Volunteer</button>
          </Link>
        </div>
      </div>

      {/* Pet Care Tips */}
      <div className="pet-care-tips">
        <h2>Pet Care Tips</h2>
        <ul>
          <li>Regular veterinary checkups are essential for your pet's health.</li>
          <li>Provide your pet with a balanced diet and plenty of exercise.</li>
          <li>Ensure your pet is vaccinated and microchipped for safety.</li>
        </ul>
      </div>

      {/* Call-to-Action (CTA) Buttons */}
      <div className="cta-buttons">
        <Link to="/availablePets">
          <button>Adopt Now</button>
        </Link>
        <Link to="/donate">
          <button>Donate</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
