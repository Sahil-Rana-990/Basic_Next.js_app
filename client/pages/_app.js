import Header from "@/components/Header";
import "../styles/styles.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      


      <Header />
      <Component {...pageProps} />
    </>
  );
}
