import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return  (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
}
export default MyApp
