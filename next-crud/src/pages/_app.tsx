import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import {AppProps} from 'next/app'

export default function MyApp ({Component, pageProps} : AppProps) {
    return <Component {...pageProps} />
}