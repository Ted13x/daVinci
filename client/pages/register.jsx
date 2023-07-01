import React, { useState, useEffect } from 'react';
import styles  from '../styles/Register.module.scss';
import UserForm from '@/components/userForm/UserForm.jsx';

function Register() {
  

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



 
  
  return (
    <>
      <UserForm />
    </>
  );
}

export default Register;
