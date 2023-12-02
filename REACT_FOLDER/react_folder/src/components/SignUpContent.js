import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ContactSection.css';

function SignUpContent() {
    
  return (
    <div className="SignIn-content">
    <h2>SignUp</h2>
    <form className="SingIn-form" action="#" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="username">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="phone">Phone Number:</label>
      <input type="text" id="phone" name="phone" required />

      <label for="authentication-code">Authentication Code:</label>
      <input type="text" id="authentication-code" name="authentication-code" required />

      <Button buttonStyle="btn--outline">Submit</Button>
    </form>
  </div>
  );
}


export default SignUpContent;
