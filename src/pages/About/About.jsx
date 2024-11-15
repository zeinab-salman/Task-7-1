import './About.css'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import AboutSection from '../../components/AboutSection/AboutSection'
function  About(){


    return (
  
      <>
        <NavBar/>
        <Hero title="About Us" page="About Us" link="/about"/>
        <AboutSection/>
        <Footer/>
       

      </>
    )
  }
  
  export default About
  