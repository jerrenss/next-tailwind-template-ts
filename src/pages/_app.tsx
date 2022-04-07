import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/base.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>Next Tailwind Template</title>
        <meta name="description" content="Basic template" />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
