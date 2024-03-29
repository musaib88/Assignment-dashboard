import "./cryptocurrency.css";
import CryptoDashboard from "../../components/cryptoDash/CryptoDashboard";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import Trending from "../../components/trending/Trending";
import { useParams } from "react-router-dom";

const apiKey = "CG-NSh22jyTDy2EU9gxhsKaNcUa";
const BaseUrl = "https://api.coingecko.com/api/v3";

export default function Cryptocurrency() {
  const [trending, setTrending] = useState({});
  const { coin = "bitcoin" } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/search/trending`, {
          params: {
            x_cg_demo_api_key: apiKey,
          },
        });
        setTrending(response.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="currency-page-layout">
      <div id="crypto-title-name">
        <span>
          Cryptocurrencies <i className="fa-solid fa-angles-right"></i>{" "}
          <span>{coin.charAt(0).toUpperCase() + coin.slice(1)}</span>{" "}
        </span>
      </div>

      <div id="crypto-main-content">
        <CryptoDashboard coinName={coin}></CryptoDashboard>
        <div className="sideBar-show-pc">
          <Sidebar coins={trending.coins || []}></Sidebar>
        </div>
      </div>
      <div id="footer-crousels">
        <Trending
          trendingTitle={"You may Also like"}
          coins={trending.coins || []}
        ></Trending>
        <Trending
          trendingTitle={"Trending coins"}
          coins={trending.coins || []}
        ></Trending>
      </div>
      <div id="bottom-phone-sidebar">
        <Sidebar coins={trending.coins || []}></Sidebar>
      </div>
    </div> 
  );
}
