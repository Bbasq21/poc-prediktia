import { SuggestionsProvider } from "../context";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SuggestionsProvider>
      <Component {...pageProps} />
    </SuggestionsProvider>
  );
}

export default MyApp;
