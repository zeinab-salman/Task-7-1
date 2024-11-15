

import './Home.css'
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar'
import HomeHero from '../../components/HomeHero/HomeHero'
import Brand from '../../components/Brand/Brand'
import Elevating from '../../components/Elevating/Elevating'
import Plans from '../../components/Plans/Plans'
import ContactUs from '../../components/ContactUs/ContactUs'
import ClientFeedBack from '../../components/ClientFeedBack/ClientFeedBack'
import Featured from '../../components/Featured/Featured'
import Footer from '../../components/Footer/Footer'
function  Home(){
  return (

    <>
   <HomeNavbar />
    <HomeHero />
    <Brand />
      <Elevating />
      <Plans />
      <ContactUs />
      <ClientFeedBack />
      <Featured />
      <Footer/>
    </>
  )
}

export default Home
