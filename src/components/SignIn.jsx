import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';
import ethIcon from '../img/eth.png';
import nearIcon from '../img/near.png';

let deafults = {
  eth: {logo: ethIcon,name: 'ETH'},
  near: {logo: nearIcon, name: 'NEAR'},
  userAmount : 0,
}

let exchangeRates = 0;
const getExchangeRates = fetch('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,NEAR')
  .then(async response => {
    const data = await response.json();
    console.log("exchange rates");
    console.log(data);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    deafults.eth.usd = (1 / data.ETH).toFixed(2);
    deafults.near.usd = (1 / data.NEAR).toFixed(2);
    exchangeRates = data;
    return data;
  })
  .catch(error => {
    console.error('There was an error!', error);
  });

export default function SignIn() {
  const [currencyFrom, setCurrencyFrom] = useState(deafults.near);
  const [currencyTo, setCurrencyto] = useState(deafults.eth);
  const [exchange, setExchange] = useState({
    sellValue : 0,
    sellAmount: 0,
    buyValue: 0,
    buyAmount: 0
  });

  function changeMode(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    console.log(e);
    console.log(this);
  }
  const storeUserAmount = (e) => {
    deafults.userAmount = e.target.value;
    updateExchange(currencyFrom, currencyTo);
  }
  function updateExchange(from, to){
    setExchange({
      sellAmount: deafults.userAmount,
      sellValue : (deafults.userAmount * from.usd).toFixed(2),
      buyAmount: (from.usd / to.usd * deafults.userAmount).toFixed(Math.abs(Math.floor( Math.log10(from.usd / to.usd) + 1))),
      buyValue:  (from.usd * deafults.userAmount).toFixed(2),
    });
  }
  function changeFrom(select){
    setCurrencyFrom(select);
    updateExchange(select, currencyTo);
  }
  function changeTo(select){
    setCurrencyto(select);
    updateExchange(currencyFrom, select);
  }


  return (
    <form>
      <fieldset id="fieldset">
        <div class="modeMenu">
          <a onClick={changeMode} class="active"> Swap </a>
          <a onClick={changeMode}> Limit </a>
        </div>
        <div class="options">
          <svg class="default"fill="var(--primary)" viewBox="0 0 24 24" width="40" height="40" fill-rule="evenodd" clip-rule="evenodd" preserveAspectRatio="xMidYMid meet" ><path d="M12 8.666c-1.838 0-3.333 1.496-3.333 3.334s1.495 3.333 3.333 3.333 3.333-1.495 3.333-3.333-1.495-3.334-3.333-3.334m0 7.667c-2.39 0-4.333-1.943-4.333-4.333s1.943-4.334 4.333-4.334 4.333 1.944 4.333 4.334c0 2.39-1.943 4.333-4.333 4.333m-1.193 6.667h2.386c.379-1.104.668-2.451 2.107-3.05 1.496-.617 2.666.196 3.635.672l1.686-1.688c-.508-1.047-1.266-2.199-.669-3.641.567-1.369 1.739-1.663 3.048-2.099v-2.388c-1.235-.421-2.471-.708-3.047-2.098-.572-1.38.057-2.395.669-3.643l-1.687-1.686c-1.117.547-2.221 1.257-3.642.668-1.374-.571-1.656-1.734-2.1-3.047h-2.386c-.424 1.231-.704 2.468-2.099 3.046-.365.153-.718.226-1.077.226-.843 0-1.539-.392-2.566-.893l-1.687 1.686c.574 1.175 1.251 2.237.669 3.643-.571 1.375-1.734 1.654-3.047 2.098v2.388c1.226.418 2.468.705 3.047 2.098.581 1.403-.075 2.432-.669 3.643l1.687 1.687c1.45-.725 2.355-1.204 3.642-.669 1.378.572 1.655 1.738 2.1 3.047m3.094 1h-3.803c-.681-1.918-.785-2.713-1.773-3.123-1.005-.419-1.731.132-3.466.952l-2.689-2.689c.873-1.837 1.367-2.465.953-3.465-.412-.991-1.192-1.087-3.123-1.773v-3.804c1.906-.678 2.712-.782 3.123-1.773.411-.991-.071-1.613-.953-3.466l2.689-2.688c1.741.828 2.466 1.365 3.465.953.992-.412 1.082-1.185 1.775-3.124h3.802c.682 1.918.788 2.714 1.774 3.123 1.001.416 1.709-.119 3.467-.952l2.687 2.688c-.878 1.847-1.361 2.477-.952 3.465.411.992 1.192 1.087 3.123 1.774v3.805c-1.906.677-2.713.782-3.124 1.773-.403.975.044 1.561.954 3.464l-2.688 2.689c-1.728-.82-2.467-1.37-3.456-.955-.988.41-1.08 1.146-1.785 3.126"/></svg>
          <svg class="invert" fill="var(--primary)" viewBox="0 0 24 24" width="40" height="40" fill-rule="evenodd" clip-rule="evenodd" preserveAspectRatio="xMidYMid meet" ><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
        </div>
        <div class="elementBox">
          <div class="row">
            <p class="topText">From</p>
          </div>
          <div class="row">
            <div class="selection">
              <div class="dropdown">
                <div class="dropbtn">
                  <div class="circle"><img class="logo" src={currencyFrom.logo} /> </div>
                  <div class="name">{currencyFrom.name}
                    <svg fill="var(--primary)" viewBox="0 0 24 24" width="24" height="24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                  </div>
                </div>
                <div class="dropdown-content">
                  <a onClick={(e) => changeFrom(deafults.eth, e)}><img width="30" class="logo" src={ethIcon} /> ETH  </a>
                  <a onClick={(e) => changeFrom(deafults.near, e)}><img width="30" class="logo" src={nearIcon} />  NEAR </a>
                </div>
              </div>
            </div>
            <div class="price">
              <p class="highlight">
                <input
                  onChange={storeUserAmount}
                  class="value"
                  required
                  autoComplete="off"
                  defaultValue={'0'}
                  id="swap"
                  min="0"
                  step="0.01"
                  type="number"
                />
              </p>
            </div>
          </div>
          <div class="row">
            <div class="selection">
            </div>
            <div class="price">
              <p> - $ {exchange.sellValue} </p>
            </div>
          </div>
        </div>
        <div class="elementBox">
          <div class="downArrow">
            <svg fill="var(--primarylight)" viewBox="0 0 24 24" width="24" height="24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
            </svg>
          </div>
          <div class="row">
            <p class="topText">To</p>
          </div>
          <div class="row">
            <div class="selection">
              <div class="dropdown">
                <div class="dropbtn">
                  <div class="circle"><img class="logo" src={currencyTo.logo} /> </div>
                  <div class="name">{currencyTo.name}
                    <svg fill="var(--primary)" viewBox="0 0 24 24" width="24" height="24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                  </div>
                </div>
                <div class="dropdown-content">
                  <a onClick={(e) => changeTo(deafults.eth, e)}><img width="30" class="logo" src={ethIcon} /> ETH  </a>
                  <a onClick={(e) => changeTo(deafults.near, e)}><img width="30" class="logo" src={nearIcon} />  NEAR </a>
                </div>
              </div>
            </div>
            <div class="price">
              <p class="value"> {exchange.buyAmount} </p>
            </div>
          </div>
          <div class="row">
            <div class="selection">
              <p class="balance"> Balance: 0 ETH</p>
            </div>
            <div class="price">
              <p> - $ {exchange.buyValue} </p>
            </div>
          </div>
        </div>
        <div class="elementButton">
          <button class="btn-grey" disabled>
            Connect to wallet to enable swap
          </button>
        </div>
        <div class="elementBox elementFooter">
          <div class="row">
            <div class="selection">
              <p> Rate for trade </p>
            </div>
            <div class="selection">
              <p> 1 {currencyFrom.name} = {(currencyFrom.usd / currencyTo.usd).toFixed(Math.abs(Math.floor( Math.log10(currencyFrom.usd) + 1) +2)) } {currencyTo.name} ($ {currencyFrom.usd}) </p>
            </div>
          </div>
           <div class="row">
            <div class="selection">
              <p> Trading route </p>
            </div>
            <div class="selection">
              <p> {currencyFrom.name} > {currencyTo.name} </p>
            </div>
          </div>
        </div>
      </fieldset>
  </form>
  );
}

