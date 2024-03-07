import React from 'react'
import './cryptoDashboard.css'
import CryptoChart from '../cryptoChart/CryptoChart'
import  { useEffect, useState } from 'react'

import axios from 'axios'
const apiKey = 'CG-NSh22jyTDy2EU9gxhsKaNcUa'
             
const BaseUrl = 'https://api.coingecko.com/api/v3';
export default function CryptoDashboard() {
  const [coinData,setcoinData]=useState({})
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/coins/bitcoin`, {
          params: {
            x_cg_demo_api_key: apiKey,
          },
        });
        setcoinData(response.data)
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchData();

  }, []);
  
  return (
    <div id='dash-main-layout'>
    
    <CryptoChart data={coinData}></CryptoChart>
    
    </div>
  )
}
