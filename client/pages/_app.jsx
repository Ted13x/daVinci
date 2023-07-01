import '@/styles/globals.css'
import { UserContextProvider } from '../context/UserContext.js';

export default function App({ Component, pageProps }) {
  return (
  <UserContextProvider>
    <Component {...pageProps} />
  </UserContextProvider>
  )
}
