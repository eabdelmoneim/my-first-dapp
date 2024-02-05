import { ConnectWallet, Web3Button, useAddress } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {

  const address = useAddress();

  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                thirdweb.
              </a>
            </span>
          </h1>

          <div className="connect">
          <ConnectWallet
        theme={"dark"}
        btnTitle={"Sign In"}
        modalTitle={
          "Choose your connection method"
        }
        modalSize={"wide"}
        welcomeScreen={{
          img: {
            src: "ipfs://QmRLhCcy4iNpSVw5EyxjgAtnULLPxLDabRJRCEhd6uJY5D/devconnect.png",
            width: 150,
            height: 150,
          },
          title: "IPFS Connect",
        }}
        modalTitleIconUrl={""}
      />

          </div>
          {address ? (
             <>
             <Web3Button
              contractAddress="0x5b93F6274d5FDaE856B4E804bF9a83Cd1095A43c"
              action={(contract) => contract.erc721.claim(1)}
              theme="dark"
            >
              Claim an NFT!
            </Web3Button>
             </>
           ) : ( <></>) }
        </div>
      </div>
    </main>
  );
}
