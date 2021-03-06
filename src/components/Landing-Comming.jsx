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
      <div class="landingHome">
        <div class="container">
          <div class="setView-quart">
              <div class="welcomeText-Header">
                <div className="navbar-brand" to="/">
                  <svg  height="100" viewBox="0 0 109 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.0206 14.3621C48.0206 10.4306 43.7168 9.41429 40.0048 8.26425C36.8845 7.30142 35.2168 6.5793 35.2168 4.60016C35.2168 2.51404 37.1266 1.87216 39.7358 1.87216C42.6409 1.87216 45.0348 3.26291 45.0348 6.47232H47.2405C47.2405 3.39663 45.3307 0 39.7358 0C35.0554 0 33.0111 1.76518 33.0111 4.65365C33.0111 7.9968 35.7279 9.01311 39.4668 10.1364C42.4795 11.019 45.8149 11.6074 45.8149 14.4691C45.8149 16.7425 43.9589 17.5181 40.7311 17.5181C36.7501 17.5181 34.3561 16.5285 34.3561 12.0621H32.1504C32.1504 16.475 34.114 19.3902 40.7311 19.3902C46.326 19.3902 48.0206 17.1704 48.0206 14.3621Z" fill="#01001E"/>
                    <path d="M56.3821 17.5181C54.0688 17.5181 52.9928 16.4483 52.9928 13.6668V5.83044H50.7871V13.961C50.7871 17.6518 52.7507 19.3902 55.7903 19.3902C58.6953 19.3902 60.39 17.7053 60.9279 15.2982H61.5466L61.1969 16.8227V19.1228H63.3757V5.83044H61.1969V11.7411C61.1969 15.2982 59.2064 17.5181 56.3821 17.5181Z" fill="#01001E"/>
                    <path d="M66.9221 19.1228H69.1278V7.46189L76.2021 7.7026V5.83044L68.7781 5.58973C67.5139 5.53624 66.9221 6.15138 66.9221 7.4084V19.1228Z" fill="#01001E"/>
                    <path d="M92.5199 5.83044C91.3095 5.83044 90.7984 5.96417 89.3997 6.84676C88.1355 5.96417 86.4677 5.56299 84.8538 5.56299C81.0073 5.56299 77.9947 7.27468 77.9947 10.9388C77.9947 15.0575 81.7605 16.4483 86.0643 15.3517V15.9668C83.9931 16.6087 81.8681 17.2239 79.7162 17.8123L80.1735 19.3367C83.482 18.3472 89.3728 16.9297 89.3728 19.8716C89.3728 21.9578 86.6291 22.145 78.963 22.145V24.0171C87.9203 24.0171 91.5785 23.5625 91.5785 20.0321C91.5785 17.0901 88.5658 16.6622 85.4456 17.1704C89.4804 15.6994 91.7399 13.9075 91.7399 11.0457C91.7399 9.8957 91.3902 8.93288 90.8253 8.2375C91.3364 7.86307 91.8206 7.7026 92.5737 7.7026H93.7035V5.83044H92.5199ZM84.8807 14.5761C82.0833 14.5761 80.2004 13.5865 80.2004 10.9923C80.2004 8.42472 82.0833 7.43515 84.8807 7.43515C87.7051 7.43515 89.5342 8.42472 89.5342 10.9923C89.5342 13.5865 87.7051 14.5761 84.8807 14.5761Z" fill="#01001E"/>
                    <path d="M95.2266 12.3028C95.2266 16.1273 97.244 19.3902 102.032 19.3902C106.282 19.3902 107.896 16.5285 108.407 14.4691H106.201C105.717 16.5018 104.238 17.5716 102.032 17.5716C98.7234 17.5716 97.513 15.4052 97.3785 12.8912H107.95V12.0353C107.95 7.94331 105.475 5.56299 101.709 5.56299C97.9165 5.56299 95.2266 8.02354 95.2266 12.3028ZM97.3785 11.233C97.3785 9.09335 99.0731 7.4084 101.709 7.4084C104.372 7.4084 105.798 9.09335 105.798 11.233H97.3785Z" fill="#01001E"/>
                    <path d="M8.64797 21.8551L18.078 16.8206L8.22255 13.2669L8.22255 5.04884L1.48682 2.67967L1.48682 19.4119L8.64797 21.8551Z" fill="url(#paint0_linear_310_1595)"/>
                    <path d="M18.0068 8.4136L8.15137 5.09249L17.5105 0.00011781L24.4589 2.3618L24.4589 18.8936L18.0068 16.6795L18.0068 8.4136Z" fill="url(#paint1_linear_310_1595)" fill-opacity="0.5"/>
                    <path d="M6.45315 16.5875L16.3086 19.9086L6.94946 25.001L0.0010197 22.6393L0.00102043 6.10754L6.45315 8.32162L6.45315 16.5875Z" fill="url(#paint2_linear_310_1595)" fill-opacity="0.3"/>
                    <defs>
                      <linearGradient id="paint0_linear_310_1595" x1="1.48644" y1="3.93479" x2="13.6038" y2="23.1807" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0C0038"/>
                        <stop offset="0.197917" stop-color="#6120DA"/>
                        <stop offset="0.484375" stop-color="#FF00D4"/>
                        <stop offset="0.71875" stop-color="#FF8E00"/>
                        <stop offset="1" stop-color="#FFF500"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_310_1595" x1="27.4111" y1="18.8263" x2="11.5192" y2="-4.20978" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0C0038"/>
                        <stop offset="0.197917" stop-color="#6120DA"/>
                        <stop offset="0.484375" stop-color="#FF00D4"/>
                        <stop offset="0.71875" stop-color="#FF8E00"/>
                        <stop offset="1" stop-color="#FFF500"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_310_1595" x1="-2.9511" y1="6.17477" x2="16.2405" y2="41.1478" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0C0038"/>
                        <stop offset="0.197917" stop-color="#6120DA"/>
                        <stop offset="0.484375" stop-color="#FF00D4"/>
                        <stop offset="0.71875" stop-color="#FF8E00"/>
                        <stop offset="1" stop-color="#FFF500"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="flex-container comming-page">
                <div  class="SurgeFeatures-button">

                </div>
              </div>
              <div class="welcomeText-Header">
                Coming soon
              </div>
              <div class="welcomeText-Content">Swap, earn, and build on the leading decentralized crypto trading protocol.</div>
              <img class="welcomePlanets" src={planetGroup} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;