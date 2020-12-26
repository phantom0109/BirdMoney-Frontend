import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

// Enter a valid infura key here to avoid being rate limited
// You can get a key for free at https://infura.io/register
// const INFURA_ID = "INVALID_INFURA_KEY";
const INFURA_ID = "f9ce57b00ce549f5ac886cdd58bcbe5a";

// Web3Modal also supports many other wallets.
// You can see other options at https://github.com/Web3Modal/web3modal
export const web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: INFURA_ID,
      },
    },
  },
});

export const logoutOfWeb3Modal = async function() {
  await web3Modal.clearCachedProvider();
  window.location.reload();
};

const initWeb3 = () => {
  return new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    } else if (window.web3) {
      const web3 = window.web3;
      console.log("Injected web3 detected.");
      resolve(web3);
    } else {
      const provider = new Web3.providers.HttpProvider("http://localhost:9545");
      const web3 = new Web3(provider);
      console.log("No web3 instance injected, using Local web3.");
      resolve(web3);
    }
  });
};

export { initWeb3 };