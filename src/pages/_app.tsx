import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/base.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>Next Tailwind Template</title>
        <meta name="description" content="Basic template" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
