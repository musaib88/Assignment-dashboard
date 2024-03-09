import React, { useState } from "react";
import "./cryptosentiments.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CryptoSentiments() {
  const [buyPer, setBuyPer] = useState(55);
  const [sellPer, setSellPer] = useState(35);
  const [holdPer, setHoldPer] = useState(15);

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow-next" onClick={onClick}>
      <i class="fa-solid fa-angle-right right-angle-slider"></i>
    </div>
  );

  //   const CustomPrevArrow = ({ onClick }) => (
  //     <div className="custom-arrow-prev" onClick={onClick}>
  //       <i class="fa-solid fa-angle-left"></i>
  //     </div>
  //   );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
  };
  const style = {
    buyEstimate: { width: `${buyPer}%`, backgroundColor: "#12E193" },
    sellEstimate: { width: `${sellPer}%`, backgroundColor: "#F75D59" },
    holdEstimate: { width: `${holdPer}%`, backgroundColor: "#8A9D96" },
  };
  return (
    <div id="sentiment-layout-crypto">
      <span id="sentiment-title"> Sentiment</span>

      <div id="sentiment-slider-layout">
        <span className="label-sentiment">
          Key Events <i className="fa-solid fa-circle-info  info-icon"></i>
        </span>

        <Slider {...settings} className="slider-event">
          <div>
            <div className="slider-item-sentiments">
              <div className="event-name-in">
                <i
                  className="fa-solid fa-book event-icons"
                  style={{ backgroundColor: "lightgreen" }}
                ></i>

                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia nisi et facere sapiente dolorum? Iste, corrupti. Id
                quos quisquam voluptates. Illum minus in possimus quos molestiae
                autem magni placeat magnam?
              </p>
            </div>
          </div>
          <div>
            <div className="slider-item-sentiments">
              <div className="event-name-in">
                <i
                  className="fa-solid fa-bullseye  event-icons"
                  style={{ backgroundColor: "blue" }}
                ></i>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia nisi et facere sapiente dolorum? Iste, corrupti. Id
                quos quisquam voluptates. Illum minus in possimus quos molestiae
                autem magni placeat magnam?
              </p>
            </div>
          </div>
        </Slider>
      </div>

      <div id="analyst-estimates-layout">
        <span id="analyst-title">
          Analyst Estimates
          <i className="fa-solid fa-circle-info  info-icon"></i>
        </span>

        <div id="estimate-container">
          <div id="percent-estimate-big">
            <span>{buyPer}</span>
            <i class="fa-thin fa-percent"></i>
          </div>
          <div id="estimate-color-level">
            <div className="estimate-color-line">
              <div style={{ width: "4rem" }}>
                <span className="estimate-label">Buy</span>
              </div>
              <div
                className="estimate-color-width"
                style={style.buyEstimate}
              ></div>
              <span className="estimate-label-per">
                {buyPer}
                <i class="fa-thin fa-percent"></i>
              </span>
            </div>
            <div className="estimate-color-line">
              <div style={{ width: "4rem" }}>
                <span className="estimate-label">Hold</span>
              </div>{" "}
              <div
                className="estimate-color-width"
                style={style.holdEstimate}
              ></div>
              <span className="estimate-label-per">
                {holdPer}
                <i class="fa-thin fa-percent"></i>
              </span>
            </div>
            <div className="estimate-color-line">
              <div style={{ width: "4rem" }}>
                <span className="estimate-label">sell</span>
              </div>
              <div
                className="estimate-color-width"
                style={style.sellEstimate}
              ></div>
              <span className="estimate-label-per">
                {sellPer}
                <i class="fa-thin fa-percent"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
