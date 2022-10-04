import { useEffect } from 'react'
import '../styles/globals.css'
import { axeAccessibilityReporter } from '../utils/axeAccessibilityReporter'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
