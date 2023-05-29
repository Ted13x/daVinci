import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.scss';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user/checkAuth', { withCredentials: true });
        if (response.status === 200) {
          router.push('/');
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkAuth();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };

      const { data } = await axios.post(
        'http://localhost:8000/api/user/authenticate',
        { email, password },
        config
      );

      // Hier setzen Sie Ihre Login Logik ein, wie z.B. setzen des JWT in den local storage
      // Danach navigieren Sie den Nutzer zu einer anderen Seite
      router.push('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <span>{error}</span>}
      <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}

export default LoginPage;
