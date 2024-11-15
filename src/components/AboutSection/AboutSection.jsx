import './AboutSection.css'
import { Row, Col } from 'react-bootstrap'
import listphoto from '../../assets/images/asterisk.svg'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";
import AboutCard from '../../components/AboutCard/AboutCard'
import photo1 from '../../assets/images/04.webp'
import photo2 from '../../assets/images/05.webp'

import photo3 from '../../assets/images/06.webp'
import photo4 from '../../assets/images/07.webp'
import photoB from '../../assets/images/enva.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
function AboutSection() {
  return (
    <>
      <section className='about-sec'>
        <Row className='about-div1' cols={4}>
          <Col className="div1-col" lg={3} ><div className='flex d1'><img src={listphoto} /> <h2>Cyber Security </h2></div></Col>
          <Col className="div1-col bb1" lg={3} md={12} ><div className='flex d1'><img src={listphoto} /><h2>IT Solution</h2></div></Col>
          <Col className="div1-col bb1" lg={3} md={12}  ><div className='flex d1'><img src={listphoto} /> <h2>Technology</h2></div></Col>
          <Col className="div1-col bb1" lg={3} md={12} ><div className='flex d1'> <img src={listphoto} /> <h2>Data Security</h2></div></Col></Row>
        <a href='#'><HiOutlineArrowLongLeft />
          TEAM MEMBERS<HiOutlineArrowLongRight /></a>
        <div className='flex div-btn'> <h2>Our Dedicated Team Members</h2>
          <button>All Members<GoArrowRight /></button></div>
        <Row className='about-cards '   >
          <Col className='card-col  ' col={12} lg={3}  ><AboutCard name="Masirul Islam" job="Web Designer" photo={photo1} /></Col>
          <Col className='card-col '  col={12}  lg={3} ><AboutCard name="Jessica Mardol" job="Cyber Expert" photo={photo2} /></Col>
          <Col className='card-col ' col={12} lg={3} ><AboutCard name="Arnold Hemingway" job="Web Expert" photo={photo3} /></Col>
          <Col className='card-col 'col={12} lg={3}><AboutCard name="Shikon Haque" job="Data Aanalyst" photo={photo4} /></Col>
        </Row>
        <div className='enva-div' >
          <div className='title'><p>1k+Brands Trust Us</p></div>
          <Row cols={5} className='enva-row' >
            <Col lg={2}><img src={photoB} alt="enva" /></Col>
            <Col lg={2} className='bb1 '><img src={photoB} alt="enva" /></Col>
            <Col lg={2} className='bb1'><img src={photoB} alt="enva" /></Col>
            <Col lg={2} className='bb1'> <img src={photoB} alt="enva" /></Col>
            <Col lg={2} className='bb1'> <img src={photoB} alt="enva" /></Col>
          </Row></div>

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
export default AboutSection
