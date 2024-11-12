// src/components/AdoptionProcess.js
import React from 'react';
import './AdoptionProcess.css'; // Importing the CSS file


const AdoptionProcess = () => {
  return (
    <div className=" adoption-process">
      <h2>Adoption Process</h2>
      <ol>
        <li>Find a pet you want to adopt.</li>
        <li>Schedule a meeting with the pet you wish to adopt.</li>
        <li>Meet the pet in person and get to know them.</li>
        <li>If all goes well, complete the adoption paperwork.</li>
        <li>Pay any applicable adoption fees.</li>
        <li>Take your new pet home and enjoy!</li>
      </ol>
    </div>
  );
};

export default AdoptionProcess;
