import './Featured.css'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Row, Col } from 'react-bootstrap'
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import blogThumb1 from '../../assets/images/blogThumb1_1.webp'
import blogThumb2 from '../../assets/images/blogThumb1_2.webp'
import blogThumb3 from '../../assets/images/blogThumb1_3.webp'
import blogProfile1 from '../../assets/images/blogProfile1_1.webp'
import blogProfile2 from '../../assets/images/blogProfile1_2.webp'
import blogProfile3 from '../../assets/images/blogProfile1_3.webp'
import  photo from '../../assets/images/ab.webp'
function Featured() {


    return (

        <>
            <section className='featured'>
                <a href='#'><HiOutlineArrowLongLeft />
                    BlOG & NEWS<HiOutlineArrowLongRight /></a>
                <h2>Featured News And Insights</h2>
                <div className='flex elv-arrow2'>
                    <div className='elv-arrow-left'><HiOutlineArrowLongLeft /></div>
                    <div className='elv-arrow-right'><HiOutlineArrowLongRight /></div>
                </div>
                <Row cols={3} className='flex-center featured-cards'>
                <Col col={12} lg={4}><FeaturedCard photo={blogThumb2}
                        profile={blogProfile2}
                       
                          btn="Uncategorized"
                          desc="Best And Fatest Data Server Ever"
                          date="14," 
                       /></Col>
                <Col col={12} lg={4} className='bb1'>
                <FeaturedCard photo={blogThumb3}
                        profile={blogProfile3}
                      
                         btn="Technology"
                        desc="Life Won't One Beast Air Over Above All "
                        date="29," 
                       /></Col>
                    <Col col={12} lg={4} className='bb1'>
                    <FeaturedCard photo={blogThumb1}
                        profile={blogProfile1}
                        btn="Shared Hosting"
                         desc="Attentive Was Born In 2015 Help Sales Team"
                        date="24,"
                      />
                    </Col>
                   
                  
                </Row>
               
            </section>
            <div className='flex-center featured-relative'>
            <div className='contactus flex contact featured-absolute'>
                <img src={photo} className='bb1'/>
          <div className='contact-title'>
           
            <h2>Stay Connected With Cutting Edge IT</h2>
          </div>
          <button>TAlK TO A SPECIALIST<HiOutlineArrowLongRight /></button>
          

                </div></div>
        </>
    )
}

export default Featured