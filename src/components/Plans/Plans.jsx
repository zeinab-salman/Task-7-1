import './Plans.css'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import pricingicon1 from '../../assets/images/pricingIcon1_2.svg'
import PrincingCard from '../PrincingCard/PrincingCard'
import pricingshape1 from '../../assets/images/pricingShape1_1.webp'
import pricingshape2 from '../../assets/images/pricingShape1_2.webp'
function Plans() {


  return (

    <>
      <section className='plans '>
        <img src={pricingshape2} width="40px" className='jw-img' />
        <a href='#'><HiOutlineArrowLongLeft />
          OUR PRICING<HiOutlineArrowLongRight /></a>
        <h2>Our Awesome Pricing Plans</h2>
        <div className='flex princing-switch'>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"

          />
          <img src={pricingicon1} width="70px" />
          <p>Save 25%</p>
        </div>
        <Row cols={3} className='cards-p'>
          <Col lg={4}><PrincingCard /></Col>
          <Col lg={4}><PrincingCard id="card-black" /></Col>
          <Col lg={4}><PrincingCard /></Col>
        </Row>
        <img src={pricingshape1} width="120px" className='arm-img bb1' />
      </section>

    </>
  )
}

export default Plans