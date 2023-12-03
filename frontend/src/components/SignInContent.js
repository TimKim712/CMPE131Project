import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import './SignInContent.css';

function SignInContent() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        alert('Sign in failed');
        history.push('/sign-in'); 
      }
      else{
        history.push('/make-post'); 
      }

      // Redirect to another page upon successful sign-in
    } catch (error) {
      console.error('Sign in error:', error);
      // Handle sign in errors (e.g., showing an alert or message on the screen)
    }
  }

  return (
    <div className="SignIn-content">
      <h2>Sign In</h2>
      <form className="SignIn-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required onChange={handleChange} />

        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default SignInContent;
