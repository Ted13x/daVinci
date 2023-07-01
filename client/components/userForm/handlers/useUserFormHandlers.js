import { useState } from "react";
import { useRouter } from 'next/router';

const useUserFormHandlers = (initialState) => {
  const [user, setUser] = useState(initialState);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepetition, setPasswordRepetition] = useState('');

  const router = useRouter();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
};

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordRepetitionChange = (event) => {
    setPasswordRepetition(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('api/proxy/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email, 
        firstName: firstName,
        lastName: lastName,
        password: password,
      }),
    });
  
    if (response.ok) {
      console.log('User registration was successful');
      router.push('/login');
    } else {
      console.error('There was an error with user registration');
    }
  };

  return {
    email,
    handleEmailChange,
    firstName,
    handleFirstNameChange,
    lastName,
    handleLastNameChange,
    password,
    handlePasswordChange,
    passwordRepetition,
    handlePasswordRepetitionChange,
    handleSubmit,
  };
};

export default useUserFormHandlers;
