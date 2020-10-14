import React from 'react';
import Head from 'next/head';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Pra vendas, um gerador de e-commerce!"
        />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='keywords' content='Keywords' />

        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#0098DA"/>

        <link rel="icon" type="image/png" href="favicon.png"/>
        
        <link rel="apple-touch-icon" sizes="57x57" href="apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="apple-icon-180x180.png"/>

        <title>Pra Vendas</title>
      </Head>

      <Component {...pageProps}/> 
    </>
  );
}