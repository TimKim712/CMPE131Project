import React from 'react';
import '../App.css';
import './SignInContent.css';

function SignInContent() {
    
  return (
    <div className="SignIn-content">
    <h2>Sign In</h2>
    <form className="SignIn-form" action="#" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <input type="submit" value="Sign In" />
    </form>
  </div>
  );
}

export default SignInContent;
