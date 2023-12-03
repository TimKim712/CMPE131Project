import React from 'react';
import '../App.css';
import './SignUpContent.css';

function SignUpContent() {
    
  return (
    <div className="SignUp-content">
    <h2>Sign Up</h2>
    <form className="SignUp-form" action="#" method="post">
  

      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <label for="password-confirm">Password Confirm:</label>
      <input type="password" id="password-confirm" name="password-confirm" required />

      {/* <label for="name">Name:</label>
      <input type="text" id="name" name="name" required /> */}

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="phone">Phone Number:</label>
      <input type="text" id="phone" name="phone" required />
{/* 
      <label for="authentication-code">Authentication Code:</label>
      <input type="password" id="authentication-code" name="authentication-code" required /> */}

      <input type="submit" value="Sign Up" />
    </form>
  </div>
  );
}

export default SignUpContent;
