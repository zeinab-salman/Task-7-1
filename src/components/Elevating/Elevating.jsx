import { Row, Col } from 'react-bootstrap'
import serviceicon1 from '../../assets/images/serviceIcon1_1.svg'
import serviceicon2 from '../../assets/images/serviceIcon1_2.svg'
import serviceicon3 from '../../assets/images/serviceIcon1_3.svg'
import serviceicon4 from '../../assets/images/serviceIcon1_4.svg'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import './Elevating.css'
import ElevatingCard from '../ElevatingCard/ElevatingCard'
import ElevatingInfoCard from '../ElevatingInfoCard/ElevatingInfoCard'
function Elevating() {
   return (
      <>
         <section className='elevating container '>
            <a href='#'><HiOutlineArrowLongLeft />
               OUR SERVICES<HiOutlineArrowLongRight /></a>
            <h2>Elevating Businesses With IT Ingenuity</h2>
            <div className='flex elv-arrow'>
               <div className='elv-arrow-left'><HiOutlineArrowLongLeft /></div>
               <div className='elv-arrow-right'><HiOutlineArrowLongRight /></div>
            </div>
            <Row cols={4}>
               <div className='elevating-cards  '>
                  <Col col={12} lg={3} className='bb1'><ElevatingCard title="Woo Camerce" icon={serviceicon4} /></Col>
                  <Col col={12} lg={3} className='bb1'><ElevatingCard title="CRM Solutions" icon={serviceicon3} /></Col>
                  <Col col={12}  lg={3}><ElevatingCard title="Web Design" icon={serviceicon2} /></Col>
                  <Col col={12} lg={3} className='bb1'><ElevatingCard title="Data Guard Sentinel" icon={serviceicon1} /></Col>
               </div>
            </Row>
            <div className='video-div'>
               <iframe src="https://www.youtube.com/embed/GZ2dmbDmB5I" title="What is management? Concept of Management, Levels of management  (animated video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='video'></iframe>
            </div>

         </section>
         <Row cols={4}>
            <div className='elevating-info-cards'>
               <Col col={12} lg={3}><ElevatingInfoCard title="Requirment" number="01" /></Col>
               <Col col={12} lg={3}><ElevatingInfoCard title="UI/UX Desing" number="02" /></Col>
               <Col col={12} lg={3}><ElevatingInfoCard title="Prototype" number="03" /></Col>
               <Col co={12} lg={3}><ElevatingInfoCard title="Development" number="04" /></Col>
            </div>
         </Row>
      </>
   )
}

export default Elevating
