import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-pro-sidebar/dist/css/styles.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
