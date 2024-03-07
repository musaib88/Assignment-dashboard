import   './cryptocurrency.css'
import CryptoDashboard from '../../components/cryptoDash/CryptoDashboard'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect, useState } from 'react'
import axios from 'axios'
const apiKey = 'CG-NSh22jyTDy2EU9gxhsKaNcUa'
             
const BaseUrl = 'https://api.coingecko.com/api/v3';

export default function Cryptocurrency() {
   const [trending,setTrending]=useState({})


    useEffect(()=>{
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/search/trending`, {
          params: {
            x_cg_demo_api_key: apiKey,
          },
        });
        setTrending(response.data)
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };
    fetchData()

  },[])
    
  // console.log(trending)
 



  return (
    <div id='currency-page-layout'>
       <div id='crypto-title-name'>
     

         <span> Cryptocurrencies    <i class="fa-solid fa-angles-right"></i>  <span >Bitcoin</span> </span> 
         {/* <button onClick={fetchData}>click</button> */}
        </div>
        
       <div id='crypto-main-content'>
      <CryptoDashboard  ></CryptoDashboard>
      <Sidebar coins={trending.coins}></Sidebar>
      </div>



    </div>
  )
}
