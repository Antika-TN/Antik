import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import AboutUs from '../Components/AboutUs/AboutUs'
import MoreInfo from '../Components/moreInfo/MoreInfo'
import Collection from '../Components/collection/collection'
import Faq from '../Components/FAQ/Faq'
import Quality from '../Components/quality collection/Quality'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutUs/>
      <MoreInfo/>
      <Collection/>
      <span> display some of the product here </span>
      <span> display some trending products</span>
      <span> upcoming products</span>
      <Faq/>
      <Quality/>
    </div>
  )
}

export default HomePage
