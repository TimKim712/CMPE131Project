import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ContactSection.css';

function ContactSection() {
    
  return (
    <div className="Contact-content">
      <h2>Contact Us</h2>
      <form className="Contact-form">
        <label htmlFor="username">Name:</label>
        <input type="text" id="username" name="username" required/>

        <label htmlFor="title">Email:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="type">Phone Number:</label>
        <input type="text" id="type" name="type" required />

        <label htmlFor="description">Message:</label>
        <input type="text" id="description" name="description" required  />

        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}

export default ContactSection;
