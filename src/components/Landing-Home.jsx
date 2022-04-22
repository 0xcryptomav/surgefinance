import React from "react";
import './Landing-Home.scss';
import planetFlat from '../assets/elements/planet-flat.svg';
import planetGroup from '../assets/elements/planet-group.svg';
import nearIcon from '../assets/img/near.png';
import backgroundBlue from '../assets/elements/backgroundBlue.svg';
import backgroundPink from '../assets/elements/backgroundPink.svg';
import featuresIconPaper from '../assets/elements/featuresIconPaper.svg';
import featuresIconNetwork from '../assets/elements/featuresIconNetwork.svg';
import featuresIconProsses from '../assets/elements/featuresIconProsses.svg';

function Home() {
  return (
    <div>
      <img class="backgroundBlue" src={backgroundBlue} />
      <img class="backgroundPink" src={backgroundPink} />
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
              <button deactivated class="welcomeButton">
                Read our docs
              </button>
              <img class="welcomePlanets" src={planetGroup} />
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
              <img class="endWithBackground" width="100%" src={planetFlat} />
              <div class="flex-container">
                <button  class="SurgeFeatures-button">
                  Powered by: <img width="27" src={nearIcon}/>
                </button>
              </div>
              <div class="flex-container">
                <div class="welcomeText-Header">
                  Surge features
                </div>
              </div>
              <div class="row SurgeFeatures flex-container">
                <div class="flex-2">
                  <div class="elementBox">
                    <img class="featuresIcon" src={featuresIconPaper} />
                    <h3>Scalable pool rewards</h3>
                    <p> Surge can be locked (veSurge) to direct liquidity rewards. In V2, we will implement veSurge bribes in-app </p>
                  </div>
                </div>
                <div class="flex-2">
                  <div class="elementBox">
                    <img class="featuresIcon" src={featuresIconNetwork} />
                    <h3>Generate LP revenue</h3>
                    <p> 100% of the LP revenues are distributed to veSurge holders. Better align incentives and allow the </p>
                  </div>
                </div>
                <div class="flex-2">
                  <div class="elementBox">
                    <img class="featuresIcon" src={featuresIconProsses} />
                    <h3>Anti-dilution mechanism</h3>
                    <p> veSurge holders always own the same % of supply encouraging longer lockups because investors will never </p>
                  </div>
                </div>
              </div>
              <div class="setView-quart">
                <div class="row flex-container">
                  <div class="elementBox box-white">
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;