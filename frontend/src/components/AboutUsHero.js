import React from 'react';
import '../App.css';
import { Button } from './Button';
import './AboutUsHero.css';
function AboutUsHero() {
  return (
    <div className = 'about-us-section'>
      <h1>About Us</h1>
      <img src = "images/Staff Christmas 2022.JPG"></img>
      <p>Information about the city and what it has to offer!</p>
    </div>
  );
}

export default AboutUsHero;
