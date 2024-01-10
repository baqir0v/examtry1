import React from 'react'
import Navbar from '../../layout/Navbar'
import ShopIsFun from '../../components/ShopIsFun'
import Trending from '../../components/Trending'
import Discount from '../../components/Discount'
import BestSelling from '../../components/BestSelling'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <ShopIsFun/>
      <Trending/>
      <Discount/>
      <BestSelling/>
    </div>
  )
}

export default HomePage
