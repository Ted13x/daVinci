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
      <div className="dashboard">
            <div className="side-navigation">
                {/* Side Navigation Content Goes Here */}
            </div>
            <div className="main-content">
                <div className="header">
                    {/* Header Content Goes Here */}
                </div>
                <div className="content">
                    {/* Main Content Goes Here */}
                </div>
            </div>
        </div>
      </main>

      <footer className={styles.footer}>
        © 2023 Ihr eCommerce Shop
      </footer>
    </div>
  )
}
