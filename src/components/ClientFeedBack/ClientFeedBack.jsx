import './ClientFeedBack.css'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Row, Col } from 'react-bootstrap'
import ClientCard from '../../components/ClientCard/ClientCard'
import testiThumb31 from '../../assets/images/testiThumb3_1.webp'
import testiThumb32 from '../../assets/images/testiThumb3_2.webp'
import testiThumb33 from '../../assets/images/testiThumb3_3.webp'
import Carousel from 'react-bootstrap/Carousel';
function ClientFeedBack() {

  return (

    <>
      <section className='client-feed-back flex-center'>
        <a href='#'><HiOutlineArrowLongLeft />
          TESTIMONIALS<HiOutlineArrowLongRight /></a>
        <h2>Our Latest Client Feedback</h2>

        <Row cols={3} className='flex-center clientcards'>
          <Col col={12} lg={3} className='bb1'><ClientCard job="Web Disigner" name="Kristin Watson" photo={testiThumb31} /></Col>
          <Col col={12} lg={3} ><ClientCard job="Tech Enthuthiost" name="Theresa webb" photo={testiThumb32} />
       
          </Col>
         


          <Col col={12} lg={3} className='bb1'><ClientCard job="Web Enterbrenuor" name="Ronald Rechards" photo={testiThumb33} /></Col>
        </Row>
        <div className='card110'></div>
      </section>

    </>
  )
}

export default ClientFeedBack