import { useState } from 'react';
import React from 'react';
import '../App.css';
import './SignUpContent.css';
import { useHistory } from 'react-router-dom';

function SignUpContent() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm:'',
    email: ''
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
      // Check if passwords match
    if (formData.password !== formData.passwordConfirm) {
      alert("Passwords do not match.");
      return; // Stop the form submission
    }

    // API call
    try {
      const response = await fetch('http://localhost:8081/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'username':formData.username, 'password':formData.password, 'email':formData.email})
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const result = await response.json();
      console.log(result);

      // this makes it go to the route below: 
      history.push('/sign-in');
      
      // Handle success here
    } catch (error) {
      console.error('Failed to sign up:', error);
      // Handle errors here
    }
  }

  return (
    <div className="SignUp-content">
    <h2>Sign Up</h2>
    <form className="SignUp-form" action="#" method="post" onSubmit={handleSubmit}>
  

      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required onChange={handleChange}/>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required onChange={handleChange}/>

      <label for="passwordConfirm">Password Confirm:</label>
      <input type="password" id="passwordConfirm" name="passwordConfirm" required onChange={handleChange}/>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required onChange={handleChange}/>

      <input type="submit" value="Sign Up" />
    </form>
  </div>
  );
}

export default SignUpContent;
