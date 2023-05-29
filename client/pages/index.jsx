import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import axios from 'axios';
// components
import Start from '../components/Start.jsx';
import Product from '../components/Product.jsx';
import { useState } from 'react';

const logout = async () => {
  try {
    await axios.get('http://localhost:8000/api/user/logout', { withCredentials: true });
    // Once the user has logged out, redirect them to the login page
    window.location.href = '/login';
  } catch (err) {
    console.error(err);
  }
}

const Home = () => {
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleClick = (menu) => {
    setSelectedMenu(menu);
  };

  let Content;

  switch (selectedMenu) {
    case 'start':
      Content = <Start />;
      break;
    case 'product':
      Content = <Product />;
      break;
    default:
      Content = <p>Wählen Sie ein Menü auf der linken Seite</p>;
  }

  return (
    <div className={styles.container}>
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
          <button onClick={() => handleClick('start')}>Start</button>
          <button onClick={() => handleClick('product')}>Product</button>
          <button>Statistiken</button>
        </nav>

        <main className={styles.mainContent}>
          {Content}
        </main>
      </div>

      <footer className={styles.footer}>
        © 2023 Ihr eCommerce Shop
      </footer>
    </div>
  );
}

export default Home;
