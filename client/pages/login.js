import React, { useState } from 'react';
import api from '../utils/api';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const authenticateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/authenticate', {
        email: email,
        password: password
      });

      if (response.status === 200) {
        console.log('User authenticated successfully');
        // Redirect to home page or dashboard here
      } else {
        setErrorMessage('Failed to authenticate user');
      }
    } catch (error) {
      console.error('An error occurred while trying to authenticate the user:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={authenticateUser}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
