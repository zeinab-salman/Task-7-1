import './ContactSection.css'
import {Row,Col} from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import video from '../../assets/images/video.webp'
import { GoArrowRight } from "react-icons/go";
import { IoMdArrowDropright } from "react-icons/io";
function ContactSection() {


    return (
  
      <>
  
        <section className='contact-sec-page r'>
            <Row cols={2} className='row1 flex-center'>
             <Col className='contact-information'lg={5}>
             <div className='flex'>
            <div className='circle2 flex-center'><FaLocationDot /> </div>
        
           <div><h6>Call Us</h6>
            <p>+208-555-0112</p></div></div>
            <div className='line22'></div>
            <div className='flex'>
            <div className='circle2 flex-center'><MdAttachEmail /></div>
           <div><h6>Make a Quote</h6>
            <p>Infotech@gmail.com</p></div></div>
            <div className='line22'></div>
            <div className='flex'>
            <div className='circle2 flex-center'><MdPermPhoneMsg /></div>
           <div><h6>Location</h6>
            <p>4517 Washington ave.</p></div></div>
           <img src={video}/><div className='shadow-div2'><div className='shadow-div'><div className='absolute-video'><IoMdArrowDropright /></div></div></div>
             </Col>
           <Col lg={5} className='form-col'>
           <h2>Ready To Get Started?</h2>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo doloribus ipsam ex? Accusamus placeat.</p>
           <form className=''>
            <div className='flex input-div'>
            <div className='flex-column'>
            <label>Your Name*</label>
            <input type="text"></input>
             </div>
             <div className='flex-column'>
            <label>Your Email*</label>
            <input type="email"></input>
             </div></div>
             <div className='flex-column'>
            <label>Write Message*</label>
            <textarea></textarea>
             </div>
             <button>Send Message <GoArrowRight /></button>

           </form>
           </Col>
            </Row>
         

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103885.19386466788!2d35.87441784639264!3d35.54351812232344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ac2d61d4607d%3A0x8e325bf8a14195de!2z2KfZhNmE2KfYsNmC2YrYqdiMINiz2YjYsdmK2Kc!5e0!3m2!1sar!2s!4v1731566654219!5m2!1sar!2s" width="100%"  height="450"  loading="lazy"  referrerpolicy="no-referrer-when-downgrade" ></iframe>

       
        </section>
        <div className='ourinfo'>
        <div className='div-ourinfo info'>
          <div className='flex info'>
            <div className='circle'><FaLocationDot /></div>
           <div> <h6>Address</h6>
            <p>4648 Rocky Road Philadelphia PA</p></div>
          </div>
          <div className='line-column'></div>
          <div className='flex'>
            <div className='circle'><MdAttachEmail /></div>
           <div><h6>Send Email</h6>
            <p>info@Example.com</p></div>
          </div>
          <div className='line-column'></div>
          <div className='flex'>
            <div className='circle'><MdPermPhoneMsg /></div>
           <div><h6>Call Emergency</h6>
            <p>+88 0123 654 99</p></div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default ContactSection
  