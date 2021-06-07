import "../styles/globals.css";
import "../styles/font.css";
import "../styles/color.css";
import "read-more-less-react/dist/index.css";

import Web3 from "web3"
import Web3Provider from "web3-react";
import connectors from "libs/web3-connectors";

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider
      connectors={connectors}
      libraryName={'web3.js'}
      web3Api={Web3}
    >
      <Component {...pageProps} />
    </Web3Provider>
  );
}

export default MyApp;
