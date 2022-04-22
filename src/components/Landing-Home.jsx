import React from "react";
import './Landing-Home.scss';
import planetFlat from '../assets/elements/planet-flat.svg';
import planetGroup from '../assets/elements/planet-group.svg';

function Home() {
  return (
    <div class="landingHome">
      <div class="gotoApp-Background">
        <button class="gotoApp">
          Launch App
          <div class="wallet">
            <img alt=""/>
          </div>
        </button>
      </div>
      <div class="container">
        <div class="setView-quart">
            <div class="welcomeText-Header">Central Liquidity</div>
            <div class="welcomeText-Header">Engine on NEAR</div>
            <div class="welcomeText-Content">Swap, earn, and build on the leading decentralized crypto trading protocol.</div>

            <img class="welcomePlanets" src={planetGroup} />

            <button deactivated class="welcomeButton">
              Read our docs
            </button>
          </div>
          <div class="setView-quart">
            <div class="row featured-row flex-container">
              <div class="flex-2">
                <h3>$5M+</h3>
                <p> Invested </p>
              </div>
              <div class="flex-2">
                <h3>NEAR</h3>
                <p> Blockchain </p>
              </div>
              <div class="flex-2">
                <h3>1500+</h3>
                <p> Tokens supported </p>
              </div>
            </div>
            <div class="row featured-row-text">
                <p> Hovering above the Terra ecosystem, Astroport is a neutral marketplace where anyone, from anywhere in the galaxyMirrorOrionAnchor</p>
            </div>
          </div>
          <div class="setView-quart">
            <img width="100%" src={planetFlat} />



            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

        </div>
      </div>
    </div>
  );
}

export default Home;