import React from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

function changeMode(e) {
  e.preventDefault();
  console.log('You clicked submit.');
  console.log(e);
  console.log(this);

}


export default function Form({ onSubmit, currentUser }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <div class="modeMenu">
          <a onClick={changeMode} class="active"> Swap </a>
          <a onClick={changeMode}> Limit </a>
        </div>
        <div class="elementBox">
          <div class="selection">
            <h3>From</h3>
            <div class="dropdown">
              <button class="dropbtn">NEAR</button>
              <div class="dropdown-content">
                <a href="#"> ETH </a>
                <a href="#"> NEAR </a>
              </div>
            </div>
            <p class="balance"> Balance: {parseFloat(currentUser.balance / (10 ** 24)).toFixed(2)} NEAR</p>
          </div>
          <div class="price">
            <h2> 100.0 </h2>
            <p> - $ 2489.20 </p>
          </div>
        </div>
        <div class="elementBox">
          <div class="downArrow"></div>
          <div class="selection">
          <p>To</p>
            <div class="dropdown">
              <button class="dropbtn">ETH</button>
              <div class="dropdown-content">
                <a href="#"> ETH </a>
                <a href="#"> NEAR </a>
              </div>
            </div>
            <p class="balance"> Balance: 0.2 ETH</p>
          </div>
          <div class="price">
            <h2> 0.2724 </h2>
            <p> - $ 2489.20 </p>
          </div>
        </div>
        <div class="elementButton">
          <button type="submit">
            Swap now
          </button>
        </div>
      </fieldset>
  </form>
  );
}



Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};
