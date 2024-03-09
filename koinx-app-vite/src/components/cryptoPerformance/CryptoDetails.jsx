import React from "react";
import "./cryptoDetails.css";

export default function CryptoDetails() {
  const style = {
    performance_currentprice_label: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      left: "80%",
    },
  };

  return (
    <div id="crypto-Details-layout">
      <div id="crypto-Perfor-layout">
        <span id="perfor-heading">Performance</span>

        <div className="performance-level-color">
          <div className="perfor-labels">
            <span className="label-name-perfor"> Todays Low</span>
            <span className="label-price-perfor">60,000.90</span>
          </div>

          <div className="perfor-labels">
            <span className="label-name-perfor"> Todays High </span>
            <span className="label-price-perfor">80,000.87</span>
          </div>
          <div className="color-level-performance">
            <div style={style.performance_currentprice_label}>
              <span>
                <i className="fa-solid fa-caret-up"></i>
              </span>
              <span>67,6443.09</span>
            </div>
          </div>
        </div>

        <div className="performance-level-color">
          <div className="perfor-labels">
            <span className="label-name-perfor"> 52W Low</span>
            <span className="label-price-perfor">533,000.90</span>
          </div>

          <div className="perfor-labels">
            <span className="label-name-perfor"> 52W High </span>
            <span className="label-price-perfor">820,000.87</span>
          </div>
          <div className="color-level-performance"></div>
        </div>
      </div>

      <div id="fundamentals-layout"></div>
      <span id="fundamentals-title">
        Fundamentals
        <i className="fa-solid fa-circle-info  info-icon"></i>
      </span>

      <div id="fundamentals-grid-container">
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Bitcoin Price</span>
            <span className="grid-item-value">$79,7890</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Market Cap</span>
            <span className="grid-item-value">$79,7898660</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">24h Low / 24h High</span>
            <span className="grid-item-value">$79,7890 / $89,89930</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Market Cap Dominance</span>
            <span className="grid-item-value">30.5535%</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">7d Low / 7d High</span>
            <span className="grid-item-value">$79,7890 / $89,89930</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Volume / Market Cap</span>
            <span className="grid-item-value">0.0778</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Trading Volume</span>
            <span className="grid-item-value">$79,789427470</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">All Time High</span>
            <span className="grid-item-value">$79,7890</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">Market Cap Rank</span>
            <span className="grid-item-value">#1</span>
          </div>
        </div>
        <div className="grid-item-fundamental">
          <div className="item-grid-details">
            <span className="grid-item-name">All Time Low</span>
            <span className="grid-item-value">$67</span>
          </div>
        </div>
      </div>
    </div>
  );
}
