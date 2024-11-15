import './Contact.css'

import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import ContactSection from '../../components/ContactSection/ContactSection'
function   Contact(){


    return (
  
      <>
        <NavBar/>
        <Hero title="Contact Us" page="Contact Us" link="/contact"/>
        <ContactSection/>
        <Footer/>
      </>
    )
  }
  
  export default Contact
  