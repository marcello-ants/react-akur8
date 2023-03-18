// import "@/styles/globals.css";
// TODO: remove global styles
import "@/styles/styles.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
