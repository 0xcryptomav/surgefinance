import React from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

import ethIcon from '../img/eth.png';
import nearIcon from '../img/near.png';

function changeMode(e) {
  e.preventDefault();
  console.log('You clicked submit.');
  console.log(e);
  console.log(this);

};

export default function SignIn() {
  return (
    <form>
      <fieldset id="fieldset">
        <div class="modeMenu">
          <a onClick={changeMode} class="active"> Swap </a>
          <a onClick={changeMode}> Limit </a>
        </div>
        <div class="elementBox">
          <div class="selection">
            <h3>From</h3>
            <div class="dropdown">
              <button class="dropbtn">
                <div class="circle"><img class="logo" src={nearIcon} /></div>
                 <div class="name">NEAR</div>
              </button>
              <div class="dropdown-content">
                <a onClick={changeFrom}> <img width="30" class="logo" src={ethIcon} /> ETH  </a>
                <a onClick={changeFrom}> <img width="30" class="logo" src={nearIcon} />  NEAR </a>
              </div>
            </div>
            <p class="balance"> Balance: ###### NEAR</p>
          </div>
          <div class="price">
            <h2> 100.0 </h2>
            <p> - $ 2489.20 </p>
          </div>
        </div>
        <div class="elementBox">
          <div class="downArrow"></div>
          <div class="selection">
          <p>To (estimated)</p>
            <div class="dropdown">
              <button class="dropbtn">
                <div class="circle"><img class="logo" src={ethIcon} /> </div>
                <div class="name">ETH</div>
              </button>
              <div class="dropdown-content">
                <a href=""> <img width="30" class="logo" src={ethIcon} /> ETH  </a>
                <a href=""> <img width="30" class="logo" src={nearIcon} />  NEAR </a>
              </div>
            </div>
            <p class="balance"> Balance: 0.2 ETH</p>
          </div>
          <div class="price">
            <h2> 0.2724 </h2>
            <p> - $ 2489.20 </p>
          </div>
        </div>
        <div class="elementBox elementFooter">
          <div class="selection">
          <p> Rate for trade </p>
          <p> Trading route </p>
          </div>
          <div class="selection">
          <p> 1 NEAR = 0.0005234234 ETH ($15.2) </p>
          <p> NEAR > ETH </p>
          </div>
        </div>
      </fieldset>
  </form>
  );
}

