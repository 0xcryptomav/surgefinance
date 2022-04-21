import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';
import Form from './components/Form';
import SignIn from './components/SignIn';
import Messages from './components/Messages';

const SUGGESTED_DONATION = '0';
const BOATLOAD_OF_GAS = Big(3).times(10 ** 13).toFixed();

const ethIcon = require('./img/eth.png');
const nearIcon = require('./img/near.png');
const walletIcon = require('./img/wallet.svg');

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {                                   /* TODO: don't just fetch once; subscribe! */
    contract.getMessages().then(setMessages);
  }, []);


  useEffect(() => {                                   /*  TODO: this is just test data: need to subscript to live date; */
    console.log("useEffect triggered");
    fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,NEAR')
    .then(async response => {
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      this.setState({ totalReactPackages: data })
    })
    .catch(error => {
      this.setState({ errorMessage: error.toString() });
      console.error('There was an error!', error);
    });



  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const { fieldset, swap } = e.target.elements;
    const message = {value : "test demo"};
    console.log("starting swap");

    fieldset.disabled = true;

    // TODO: optimistically update page with new message,
    // update blockchain data in background
    // add uuid to each message, so we know which one is already known
    contract.addMessage(
      { text: swap.value },
      BOATLOAD_OF_GAS,
      Big(swap.value || '0').times(10 ** 24).toFixed()
      ).then(() => {
        contract.getMessages().then(messages => {
          setMessages(messages);
          message.value = swap.value;
          swap.value = SUGGESTED_DONATION;
          fieldset.disabled = false;
          message.focus();
        });
      });
    };

    const signIn = () => {
      wallet.requestSignIn(
      {contractId: nearConfig.contractName, methodNames: [contract.addMessage.name]}, //contract requesting access
      'Surgefinance-demo', //optional name
      null, //optional URL to redirect to if the sign in was successful
      null //optional URL to redirect to if the sign in was NOT successful
      );
    };

    const signOut = () => {
      wallet.signOut();
      window.location.replace(window.location.origin + window.location.pathname);
    };


    return (
      <main>
      <header>
      { currentUser
        ? <div class="loginButton"><button  onClick={signOut}>Log out <div class="wallet"><img src={walletIcon} alt=""/></div></button></div>
        : <button  onClick={signIn}>Connect to wallet</button>
      }
      </header>
      { currentUser
        ? <Form onSubmit={onSubmit} currentUser={currentUser} />
        : <SignIn/>
      }
      { !!currentUser && !!messages.length }
      </main>
      );
    };

    App.propTypes = {
      contract: PropTypes.shape({
        addMessage: PropTypes.func.isRequired,
        getMessages: PropTypes.func.isRequired
      }).isRequired,
      currentUser: PropTypes.shape({
        accountId: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired
      }),
      nearConfig: PropTypes.shape({
        contractName: PropTypes.string.isRequired
      }).isRequired,
      wallet: PropTypes.shape({
        requestSignIn: PropTypes.func.isRequired,
        signOut: PropTypes.func.isRequired
      }).isRequired
    };

    export default App;
