import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getConfig from './config.js';
import * as nearAPI from 'near-api-js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Navigation, Footer, Home, Swap, Comming } from "./components";

import { createRoot } from 'react-dom/client';

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


  const contract = await new nearAPI.Contract(                                 /* Contract API */
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


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

/* Add <Navigation /> under routes later to get back nav buttons */
window.nearInitPromise = initContract().then(
  ({ contract, currentUser, nearConfig, walletConnection }) => {
    root.render(
      // <App
      //   contract={contract}
      //   currentUser={currentUser}
      //   nearConfig={nearConfig}
      //   wallet={walletConnection}
      // />,

      <Router>
        <Routes>
          <Route path="/" element={<Comming />} />
          <Route path="/swap" element={<App
              contract={contract}
              currentUser={currentUser}
              nearConfig={nearConfig}
              wallet={walletConnection}
            />}>
            ,
          </Route>
        </Routes>
        <Footer />
      </Router>,
    );
  }
);
serviceWorker.unregister();