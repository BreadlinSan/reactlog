
// Login.js (Login Component)
import React, { useState } from 'react';
import './Login.css';// Import the CSS file for styling

export const Login = (props) => {
  // State to manage input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic here
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="log-btn" type="submit">Login</button>
        {/* <a href="#" className={isDarkMode ? 'dark-link' : 'light-link'}>
        Forgotten Password
        </a> */}
        <button  className="reg-btn" onClick={() => props.onFormSwitch('register') } type="submit">Create an Account</button>
      </form>
    </div>
  );
};

export default Login;

