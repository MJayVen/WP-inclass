import "bulma";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="root">
      <header>
        <Nav />
      </header>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
