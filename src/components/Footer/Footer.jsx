import './Footer.css'
import {Row,Col} from 'react-bootstrap'
import logo from '../../assets/images/logo.svg'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";
import img1 from '../../assets/images/footerThumb1_1.webp'
import img2 from '../../assets/images/footerThumb1_2.webp'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
function Footer() {
   
  
    return (
  
      <>
      
       <footer className='footer'>
       <Row cols={4}>
          <Col lg={3} className='card11'>
          <img src={logo}/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab optio ad perspiciatis amet consequuntur deserunt aperiam consequatur numquam necessitatibus porro quidem</p>
          <div className='flex social'>
            <div className='frame'><a href="#"><TiSocialFacebook  /></a></div>
            <div className='frame'><a href="#"><TiSocialTwitter /></a></div>
            <div className='frame'><a href="#"><TiSocialYoutube /></a>
            </div>
            <div className='frame'><a href="#"><TiSocialInstagram /></a></div>
          </div>
          </Col>
          <Col lg={3}>
          <h5>Quick Links</h5>
          <div className='line-f'></div>
          <ul className='quick-ul'>
            <li><MdKeyboardDoubleArrowRight />Extech About</li>
            <li><MdKeyboardDoubleArrowRight />Our Services</li>
            <li><MdKeyboardDoubleArrowRight />Our Blogs</li>
            <li><MdKeyboardDoubleArrowRight />FAQ'S</li>
            <li><MdKeyboardDoubleArrowRight />Contact Us</li>
          </ul>
          </Col>
          <Col lg={3}>
          <h5>Recent Posts</h5>
          <div className='line-f'></div>
          <div className='flex post'><img src={img1}/><div><p id="date2"><SlCalender />15th April,2024</p>
           <p>Top 5 Most Famous Technology Trend in 2024</p></div>

           </div>
           <div className='flex post'><img src={img2}/><div><p id="date2"><SlCalender /> 20th June,2024</p>
           <p>The Surfing Man Will Blow Your Mind</p></div>

           </div>
          </Col>
          <Col lg={3} className='cont'>
          <h5>Contact Us</h5>
          <div className='line-f'></div>
          <div ><a><MdOutlineEmail />
          info@example.com</a></div>
         <a><FaPhoneAlt />+208-6666-0112</a>
       <input placeholder='Your email Address '></input><HiOutlineArrowLongRight className='icon-fo'/>
        <div><input type="checkbox"></input><label>I Agree To The <a>Privacy Policy</a></label></div>
          </Col>
        </Row>
        
       </footer><div className='flex footer2'><p>&copy; All CopyRight 2024 by Extech</p><div><a>Terms&Condition</a>
       <a>Privacy Policy</a></div></div>
      </>
    )
  }
  
  export default Footer
  