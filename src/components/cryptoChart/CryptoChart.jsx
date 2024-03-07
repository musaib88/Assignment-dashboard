import React, { useEffect, useState } from "react";
import "./cryptoChart.css";
import axios from "axios";
import TradingViewWidget from "../TradingViewWidget";

const apiKey = "CG-NSh22jyTDy2EU9gxhsKaNcUa"; // Replace with your actual API key
const BaseUrl = "https://api.coingecko.com/api/v3";

export default function CryptoChart({ data }) {
  const coinDetails = {
    imgurl: data?.image?.large || "",
    coinName: data?.name || "",
    symbol: data?.symbol || "",
    coinRank: data?.market_data?.market_cap_rank || "",
    coinUsdPrice: data?.market_data?.current_price?.usd || "",
    coinInrPrice: data?.market_data?.current_price?.inr || "",
    coinPriceChange_24: data?.market_data?.price_change_percentage_24h || 0,
    
  };
  const [coinHistory, setCoinHistory] = useState({});
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so add 1
  const year = currentDate.getFullYear();

  // Format the date with leading zeros if needed
  const formattedDate = `${day}-${month}-${year}`;

  console.log(formattedDate);
  const chartSymbol=`BITSTAMP:${coinDetails.symbol.toUpperCase()}USD`
  console.log(chartSymbol)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BaseUrl}/coins/bitcoin/history`,
          {
            params: {
              date: formattedDate,
              localization: false,
            },
            headers: {
              "Content-Type": "application/json",
              "X-CoinGecko-Api-Key": apiKey,
            },
          }
        );
        setCoinHistory(response.data);
        console.log(response.data, "history");
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
        console.error("Response status:", error.response?.status);
        console.error("Response data:", error.response?.data);
      }
    };

    fetchData();
  }, [formattedDate]);

  console.log(coinHistory);

  const style = {
    priceUp: { backgroundColor: "#EBF9F4", color: "green" },
    priceDown: { backgroundColor: "#f4e5e1", color: "red" },
  };

  return (
    <div id="crypto-chart-layout">
      <div id="coin-details">
        <div className="coin-details-elements">
          <img src={coinDetails.imgurl} alt="Bitcoin" id="coin-logo" />
          <span id="coin-name">{coinDetails.coinName}</span>
          <span id="coin-Symbol">{coinDetails.symbol}</span>
          <span id="coin-rank">Rank #{coinDetails.coinRank}</span>
        </div>
        <div className="coin-details-elements " id="coin-price-d">
          <span id="coin-price-usd">${coinDetails.coinUsdPrice}</span>
          <span
            id="coin-price-performance"
            style={
              coinDetails.coinPriceChange_24 >= 0
                ? style.priceUp
                : style.priceDown
            }
          >
            {coinDetails.coinPriceChange_24 > 0 ? (
              <i className="fa-solid fa-caret-up"></i>
            ) : (
              <i className="fa-solid fa-caret-down"></i>
            )}
            {coinDetails.coinPriceChange_24}%{" "}
          </span>
          <span id="coin-24-status">(24H)</span>
          <span id="coin-price-inr">&#8377;{coinDetails.coinInrPrice}</span>
        </div>
      </div>
      <div id="coin-chart-price">
        <div id="chart-title-price">
          <div>
            <span id="chart-name-title-coin">
              {coinDetails.coinName} Price Chart(USD)
            </span>
          </div>
          {/* <div id="chart-price-timeseries">
            <span>1H</span>
            <span>24H</span>
            <span>7D</span>
            <span>1M</span>
            <span>3M</span>
            <span>6M</span>
            <span>1Y</span>
            <span>All</span>
          </div> */}
        </div>
        <div id="chart">
          <TradingViewWidget symbol={chartSymbol}></TradingViewWidget>
        </div>
      </div>

    </div>
  );
}
