// pages/index.js

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ihr eCommerce Shop</title>
        <meta name="description" content="Willkommen zu unserem eCommerce Shop!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Willkommen!
        </h1>

        <p className={styles.description}>
          Entdecken Sie unsere Produkte
        </p>

        <div className={styles.grid}>
          {/* Hier können Sie Ihre Produkte anzeigen. */}
        </div>
      </main>

      <footer className={styles.footer}>
        © 2023 Ihr eCommerce Shop
      </footer>
    </div>
  )
}
