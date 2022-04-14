import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getConfig from './config.js';
import * as nearAPI from 'near-api-js';


async function initContract() {
  const nearConfig = getConfig(process.env.NEAR_ENV || 'testnet');              /* Connect to network, settings in config.js */
  const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
  const near = await nearAPI.connect({ keyStore, ...nearConfig });
  const walletConnection = new nearAPI.WalletConnection(near);


  let currentUser;                                                              /* Load user data */
  if (walletConnection.getAccountId()) {
    currentUser = {
      accountId: walletConnection.getAccountId(),
      balance: (await walletConnection.account().state()).amount,
    };
  }
  console.log("we have user data");
  console.log(currentUser);


  const contract = await new nearAPI.Contract(                                 /* Contract APIs */
    walletConnection.account(),
    nearConfig.contractName,
    {
      viewMethods: ['getMessages'],
      changeMethods: ['addMessage'],
      sender: walletConnection.getAccountId(),
    }
  );


  return { contract, currentUser, nearConfig, walletConnection };
}


window.nearInitPromise = initContract().then(
  ({ contract, currentUser, nearConfig, walletConnection }) => {
    ReactDOM.render(
      <App
        contract={contract}
        currentUser={currentUser}
        nearConfig={nearConfig}
        wallet={walletConnection}
      />,
      document.getElementById('root')
    );
  }
);
