import React, { useEffect, useState } from "react";
import "./cryptoDashboard.css";
import CryptoChart from "../cryptoChart/CryptoChart";
import axios from "axios";
import CryptoDetails from "../cryptoPerformance/CryptoDetails";
import CryptoSentiments from "../cryptoSentiments/CryptoSentiments";
import AboutCrypto from "../about/AboutCrypto";
import Tokenomics from "../tokenomics/Tokenomics";
import Team from "../Team/Team";

const apiKey = "CG-NSh22jyTDy2EU9gxhsKaNcUa";
const BaseUrl = "https://api.coingecko.com/api/v3";

export default function CryptoDashboard({ coinName }) {
  const [activeSpan, setActiveSpan] = useState(1);
  const [coinData, setCoinData] = useState({});
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/coins/${coinName}`, {
          params: {
            x_cg_demo_api_key: apiKey,
          },
        });
        setCoinData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchData();
  }, [coinName]);

  const handleActiveSpan = (index) => {
    setActiveSpan(index);
  };

  return (
    <div id="dash-main-layout">
      <CryptoChart data={coinData}  ></CryptoChart>
      <div id="dashboard-navigator">
        <span
          style={activeSpan === 1 ? { ...styles.activeStyle } : {}}
          onClick={() => handleActiveSpan(1)}
        >
          Overview
        </span>
        <span
          style={activeSpan === 2 ? { ...styles.activeStyle } : {}}
          onClick={() => handleActiveSpan(2)}
        >
          Fundamentals
        </span>
        <span
          style={activeSpan === 3 ? { ...styles.activeStyle } : {}}
          onClick={() => handleActiveSpan(3)}
        >
          New insights
        </span>
        <span
          style={activeSpan === 4 ? { ...styles.activeStyle } : {}}
          onClick={() => handleActiveSpan(4)}
        >
          Sentiments
        </span>
        <span
          style={activeSpan === 5 ? { ...styles.activeStyle } : {}}
          onClick={() => handleActiveSpan(5)}
        >
          Team
        </span>
        <span
          style={activeSpan === 6 ? { ...styles.activeStyle } : {}}
          onClick={() => handleActiveSpan(6)}
        >
          Technicals
        </span>
        <span
          style={activeSpan === 7 ? { ...styles.activeStyle } : {}}
          onClick={() => handleActiveSpan(7)}
        >
          Tokenomics
        </span>
      </div>
      <CryptoDetails></CryptoDetails>
      <CryptoSentiments></CryptoSentiments>
      <AboutCrypto></AboutCrypto>
      <Tokenomics croudsale={80} foundation={20}></Tokenomics>
      <Team></Team>
    </div>
  );
}

const styles = {
  activeStyle: {
    color: "blue",
    cursor: "pointer",
    borderBottom: "solid 3px  blue",
  },
};
