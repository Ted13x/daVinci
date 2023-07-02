import React, { useEffect, useState, useContext } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import {UserContext} from '../context/UserContext.js';  
import styles from '../styles/Home.module.scss'
import axios from 'axios';
// components
import Start from '../components/Start.jsx';
import ProductForm from '../components/product/productForm/ProductForm.jsx'; 
import Category from './category.jsx';

// ToDo: update dashboard ui 
// ToDo: work on renderings

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
  const { user, userData } = state;
  console.log('*** DEBUG user:', user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
     console.log('User is logged in')
    }
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
    case 'category':
        Content = <Category />;
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
        {userData && <p>Willkommen {userData.firstName}</p>}
        <button onClick={logout}>Logout</button>
      </header>

      <div className={styles.main}>
        <nav className={styles.sideNavigation}>
          <div className={styles.linkSection}>
            <button onClick={() => handleClick('start')}>Start</button>
          </div>
          <div className={styles.linkSection}>
            <button onClick={() => handleClick('product')}>Products</button>
            <button>Sets</button>
            <button>Catalogs</button>
            <button onClick={() => handleClick('category')}>Categories</button>
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
