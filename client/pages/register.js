import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const response = await fetch('http://localhost:8000/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email, 
        name: name,
        password: password,
      }),
    });
  
    if (response.ok) {
      console.log('Benutzer erfolgreich erstellt');
      // TODO Redirect to home page
    } else {
      console.error('Fehler beim Erstellen des Benutzers');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Benutzername:
        <input type="text" value={name} onChange={handleUsernameChange} />
      </label>
      <label>
        Passwort:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <input type="submit" value="Register" />
    </form>
  );
}

export default Register;
