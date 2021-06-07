import { useState, useEffect } from "react";
import { useWeb3Context } from "web3-react";
import Modal from "components/modal";

const ConnectWalletButton = () => {
  const context = useWeb3Context();

  const [selectWallet, setSelectWallet] = useState(false);

  const connectMetaMask = () => {
    context.setFirstValidConnector(["MetaMask", "Infura"]);
  };

  const connectWalletConnect = () => {};

  return (
    <div>
      <button
        className="bg-white px-6 py-2 rounded-full"
        onClick={() => setSelectWallet(true)}
      >
        connect wallet
      </button>
      {context.error && <span>error</span>}

      {selectWallet && (
        <Modal setOpenModal={setSelectWallet}>
          <div className="w-full p-6 flex flex-col">
            <button
              className="border rounded-md px-6 py-2"
              onClick={() => connectMetaMask()}
            >
              MetaMask
            </button>
            <button
              className="border rounded-md px-6 py-2 mt-6"
              onClick={() => connectWalletConnect()}
            >
              Wallet Connect
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ConnectWalletButton;
