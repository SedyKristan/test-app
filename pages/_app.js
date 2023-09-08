import React, { Fragment } from "react";
import Head from "next/head";

import "@styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  let { title } = pageProps;

  return (
    <Fragment>
      <Head>
        <title>YEah</title>
        <meta name="description" content="Beauty Home"></meta>
        <meta property="og:title" content="Beauty Home" />
        <meta property="og:description" content="Beauty Home" />
        <meta name="twitter:title" content="Beauty Home" />
        <meta name="twitter:description" content="Beauty Home" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
