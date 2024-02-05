import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, localWallet, metamaskWallet, walletConnect } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Ethereum, ArbitrumGoerli} from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = ArbitrumGoerli;

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        localWallet(),
        embeddedWallet(),
      ]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
