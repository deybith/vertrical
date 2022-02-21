import React from "react";
import ReactDOM from "react-dom";
import getConfig from 'next/config'
import Head from "next/head";
import Router from "next/router";

import { AppContext, AppProps } from "next/app";
import { NextComponentType } from "next";

import "@assets/scss/index.scss";

import PageChange from "@components/PageChange/PageChange";

const { publicRuntimeConfig } = getConfig()

Router.events.on("routeChangeStart", (url) => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});


function MyApp({ Component, pageProps }: AppProps) {
  const { layout } = Component as unknown as { layout: NextComponentType }
  const Layout = layout || (({ children }) => <>{children}</>);
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{publicRuntimeConfig.appName}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let appProps = {};

  if (Component.getInitialProps) {
    appProps = await Component.getInitialProps(ctx);
  }

  return { appProps }
}

export default MyApp
