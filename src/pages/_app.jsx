// import { Montserrat } from '@next/font/google'
import '../styles/globals.css'

// const montserrat = Montserrat()

function MyApp({ Component, pageProps }) {
  return (
    // <main className={montserrat.className}>
    <Component {...pageProps} />
    // </main>
  )
}

export default MyApp
