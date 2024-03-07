import React from 'react'
import './sidebar.css'
import bannerImg from '../../util/bannerAd.png'
import coinImg from '../../util/Bitcoin.svg.png'
export default function Sidebar({coins}) {
// const top3=[coins[0],coins[1],coins[2]]
console.log(coins)
  return (
    <div id='sidebar-layout'>
      <div id='koinx-banner'>
      <span id='koinx-banner-title'>
       Get Started with Koinx <br></br> for Free
      </span>
      <p>with our range of features that you can equip for<br/> free,
        KoinX you to be more educated <br/> and aware of tax reports

      </p>
        <div id='bannaer-img'>
          <img src={bannerImg} alt="" />
        </div>


        <button id='banner-button'>Get Started for Free <i class="fa-solid fa-arrow-right"></i></button>
      </div>

      <div id='trending-3-coins-sidebar'>
          <div id='trending-3-top-title'><span>Trending Coins (24h)</span></div>
           <div id='trending-top3-coins-show'>
              <div id='image-layout-top3-coins'> <img src={coinImg} alt="" /></div>
             <span id='coin-name-top3'> Ethererum(ETH)</span>
             <span id='top3-coin-perf-24'> <i className="fa-solid fa-caret-up"></i>5.6%</span>
             



           </div>

           <div id='trending-top3-coins-show'>
              <div id='image-layout-top3-coins'> <img src={coinImg} alt="" /></div>
             <span id='coin-name-top3'> Ethererum (ETH)</span>
             <span id='top3-coin-perf-24'> <i className="fa-solid fa-caret-up"></i>5.6%</span>
             



           </div>
           
           
       
      </div>
    </div>
  )
}
