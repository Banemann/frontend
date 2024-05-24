import { Yesteryear } from 'next/font/google'

const yesteryear = Yesteryear({
    weight: '400',
    subsets: ['latin'],
  })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={yesteryear.className}>
      <Component {...pageProps} />
    </main>
  )
}