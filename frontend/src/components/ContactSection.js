import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import './ContactSection.css';

function ContactSection() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber:'',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      alert(`Contact Form Submitted!`);
      
      history.push('/');
      
    } catch (error) {
      console.error('Failed to send message:', error);
      alert(`Failed to send message: ${error.message}`);
    }
  }

  return (
    <div>
    <div className="Contact-content">
      <h2>Contact Us</h2>
      <form className="Contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required  onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="text" id="text" name="email" required  onChange={handleChange}  />

        <label htmlFor="phonenumber">Phone Number:</label>
        <input type="text" id="type" name="phonenumber" required  onChange={handleChange} />

        <label htmlFor="message">Message:</label>
        <input type="text" id="description" name="message" required  onChange={handleChange}  />

        <input type="submit" value="Send Message" />
      </form>
    </div>
    <div className="Contact-content">
    <h2>Contact Details for Departments</h2>
    <br></br>
    <div class="row"> 
    <div class="column"> <h3>City Hall</h3> <br />
        161 E. Grand River Ave.  <br />
        Williamston, MI 48895 <br />
        Office Hours: Mon-Fri, 8 am - 5 pm <br />
        517-655-2774; <br />
        Fax-517-655-2797 <br />
        info@williamston-mi.us</div>
    <div class="column"> <h3>Police Department</h3><br />
        175 E Grand River Ave.  <br />
        Williamston, MI  48895 <br />
        517-655-4222; Fax-517-655-6498<br />
        EMERGENCY - DIAL 911 <br /></div>
    <div class="column"> 
      <h3>Department of Public Works</h3><br />
        781 Progress Ct.<br />
        Williamston, MI  48895<br />
        517-655-2221; Fax 517-996-6299<br />
        Office Hours Vary, call City Hall for assistance, 517-655-2774 <br />
    </div>
    <div class="column"> <h3>Assessing Department</h3> <br />
        517-655-2448<br />
    </div>
    <div class="column"> <h3>Building Department</h3> <br />
        Livingston County Building Department<br />
        2300 E Grand River Ave<br />
        Howell, MI 48843<br />
        Mon–Fri, 8:00 am – 5:00 pm<br />
        Phone: 517-546-3240<br />
        Fax: 517-546-7461<br />
        Inspection Request Line:  517-546-3830<br />
        General Dept. Email: building@livgov.com<br />
        Website: http://livgov.com/building<br />
        <br></br>
        <br></br>
        <br /></div>
    </div> 
  
  </div>
  </div>
  );
}

export default ContactSection;