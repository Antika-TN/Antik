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
      <div className="Group48095633" style={{width: 1197, height: 755, position: 'relative'}}>
  <div className="FeaturedArtworks" style={{width: 1197, height: 755, left: 0, top: 0, position: 'absolute'}}>
  
    <div className="Group11" style={{width: 1197, height: 595, left: 0, top: 160, position: 'absolute'}}>
    
    
      <div className="Card" style={{width: 389, height: 595, left: 808, top: 0, position: 'absolute'}}>
        <div className="Rectangle22" style={{width: 389, height: 595, left: 0, top: 0, position: 'absolute', background: '#313554', boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10}} />
        <div className="Johny" style={{left: 26, top: 426, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>@Johny</div>
        <div className="LoremIpsum" style={{left: 26, top: 466, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>Lorem Ipsum</div>
        <div className="005Eth" style={{left: 263, top: 449, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word'}}>0.005 ETH</div>
        <div className="CurrentBid" style={{left: 278, top: 426, position: 'absolute', color: 'rgba(255, 255, 255, 0.50)', fontSize: 15, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Current Bid</div>
        <div className="Group7" style={{width: 337, height: 380, left: 26, top: 26, position: 'absolute'}}>
          <img className="Rectangle24" style={{width: 337, height: 380, left: 0, top: 0, position: 'absolute', borderRadius: 10}} src="https://as1.ftcdn.net/v2/jpg/04/51/94/42/1000_F_451944246_coy2bs7lx1ONMNJdkEIB9Dd6pjpFowmn.jpg" />
        </div>
      </div>
    </div>
  </div>
  <div className="Group48095601" style={{width: 338, height: 50, left: 833, top: 680, position: 'absolute'}}>
    <div className="Frame1" style={{width: 266, height: 50, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, left: 47, top: 0, position: 'absolute', background: 'linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div className="BuyNow" style={{color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Buy Now</div>
    </div>
    <div className="Vector" style={{width: 27, height: 24, left: 0, top: 16, position: 'absolute', border: '0.75px white solid'}}></div>
  </div>
  
  
</div>
      <Faq/>
      <Quality/>
    </div>
  )
}

export default HomePage
