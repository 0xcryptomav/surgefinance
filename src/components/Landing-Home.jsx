import React from "react";
import "./Landing-Home.scss";
import { HashLink as Link } from "react-router-hash-link";

import planetFlat from "../assets/elements/planet-flat.svg";
import planetGroup from "../assets/elements/planet-group.svg";
import nearIcon from "../assets/elements/near-grey.svg";
import backgroundBlue from "../assets/elements/backgroundBlue.svg";
import backgroundPink from "../assets/elements/backgroundPink.svg";
import featuresIconPaper from "../assets/elements/featuresIconPaper.svg";
import featuresIconNetwork from "../assets/elements/featuresIconNetwork.svg";
import featuresIconProsses from "../assets/elements/featuresIconProsses.svg";

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
              <img alt="" />
            </div>
          </button>
        </div>
        <div class="container">
          <div class="setView-quart">
            <div class="SurgeFeatures-label-container">
              <div class="SurgeFeatures-label label-hover">
                POWERED BY{" "}
                <div class="circle">
                  <img width="27" src={nearIcon} />
                </div>
              </div>
            </div>
            <div class="welcomeText-Header">Next-Gen AMM</div>
            <div class="welcomeText-Header">is NEAR</div>
            <div class="welcomeText-Content">
              We're building the central liquidity engine to power DeFi on NEAR
            </div>
            <button deactivated class="welcomeButton">
              <a href="https://discord.gg/KNnEvURuGS">JOIN OUR COMMUNITY</a>
            </button>
            <div class="planetsPlaceholder">
              <div class="welcomePlanets">
                <img class="backgroundGroup" src={planetGroup} />
                <div class="planetTilt">
                  <div class="orbiter-stop"></div>
                </div>
              </div>
            </div>
            <div class="row featured-row flex-container">
              <div class="flex-2">
                <h3>FAST</h3>
                <p>1-2s </p>
              </div>
              <div class="flex-2">
                <h3>SCALABLE</h3>
                <p>Nightshade Sharding</p>
              </div>
              <div class="flex-2">
                <h3>LOW COST</h3>
                <p> $0.01 </p>
              </div>
            </div>
            <div class="row featured-row-text custom-margin">
              <p>
                {" "}
                Surge will offer world-class liquidity management for protocols,
                attractive rewards for liquidity providers, and advanced tooling
                for traders
              </p>
            </div>
          </div>
          <div class="setView-quart">
            <img class="endWithBackground" width="100%" src={planetFlat} />
            <div class="flex-container">
              <div class="welcomeText-Header"></div>
            </div>
            <div class="row SurgeFeatures flex-container">
              <div class="flex-2">
                <div class="elementBox">
                  <img class="featuresIcon" src={featuresIconNetwork} />
                  <h3>Designed to scale</h3>
                  <p>
                    {" "}
                    veSurge voters receive all revenues generated from txs,
                    improving utilization and capital efficiency by up to 4X{" "}
                  </p>
                </div>
              </div>
              <div class="flex-2">
                <div class="elementBox">
                  <img class="featuresIcon" src={featuresIconPaper} />
                  <h3>Engineered for power </h3>
                  <p>
                    {" "}
                    Suite of advanced charting, indicators, and tooling offers
                    the best-in-class functionality for traders{" "}
                  </p>
                </div>
              </div>
              <div class="flex-2">
                <div class="elementBox">
                  <img class="featuresIcon" src={featuresIconProsses} />
                  <h3>Optimized for experience</h3>
                  <p>
                    {" "}
                    Trading fees dynamically adjust based on volatility to
                    increase rewards for LPs and decrease fees for traders{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="setView-quart">
              <div class="discord-container">
                <div class="elementBox box-white">
                  <div class="flex-container"></div>
                  <div class="flex-container">
                    <div class="welcomeText-Header">Join our Community</div>
                  </div>
                  <div class="flex-container">
                    <p>
                      Get involved, have questions, or just want to follow along
                      our journey? click the button below to join our community
                    </p>
                  </div>
                  <button deactivated class="welcomeButton">
                    ENTER DISCORD{" "}
                  </button>
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
