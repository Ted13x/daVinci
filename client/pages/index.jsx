import React, { useEffect, useState, useContext } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import {UserContext} from '../context/UserContext.js';  
import styles from '../styles/Home.module.scss'
import axios from 'axios';
// components
import Start from '../components/Start.jsx';
import ProductForm from '../components/productForm/ProductForm.jsx'; 

const logout = async () => {
  try {
    await axios.get('/api/proxy/user/logout', { withCredentials: true });
    window.location.href = '/login';
  } catch (err) {
    console.log(err);
  }
};

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [state, dispatch] = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/proxy/user/checkAuth', { withCredentials: true });
        if (response.status != 200) {
          router.push('/login');
        } else {
          dispatch({ type: 'SET_USER', payload: response.data.user });
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    checkAuth();
  }, []);

  const handleClick = (menu) => {
    setSelectedMenu(menu);
  };

  let Content;

  switch (selectedMenu) {
    case 'start':
      Content = <Start />;
      break;
    case 'product':
      Content = <ProductForm />;
      break;
    default:
      Content = <p>Wählen Sie ein Menü auf der linken Seite</p>;
  }

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Ihr eCommerce Shop</title>
        <meta name="description" content="Willkommen zu unserem eCommerce Shop!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <button onClick={logout}>Logout</button>
      </header>

      <div className={styles.main}>
        <nav className={styles.sideNavigation}>
          <div className={styles.linkSection}>
            <button onClick={() => handleClick('start')}>Start</button>
          </div>
          <div className={styles.linkSection}>
            <button onClick={() => handleClick('product')}>Product</button>
            <button>Sets</button>
            <button>Catalogs</button>
          </div>
          <div className={styles.linkSection}>
            <button>Orders</button>
            <button>Stats</button>
            <button>Overview</button>
          </div>
        </nav>

        <main className={styles.mainContent}>
          {Content}
        </main>
      </div>

      <footer className={styles.footer}>
        © 2023 Project DaVinci
      </footer>
    </div>
  );
}

export default Home;
