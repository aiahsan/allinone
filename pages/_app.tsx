import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../components/i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return   <I18nextProvider i18n={i18n}>
  <Component {...pageProps} />
  </I18nextProvider>
}
export default MyApp;
