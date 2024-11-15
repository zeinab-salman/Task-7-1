import './ContactUs.css'
import ctathumb1 from '../../assets/images/ctaThumb1_1.webp'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ctashape1 from '../../assets/images/ctaShape1_1.webp'

function ContactUs() {


  return (

    <>

      <section className='contact-sec flex-center'>
        <div className='contactus flex'>
          <img src={ctathumb1} />
          <div className='contact-title'>
            <a href='#'><HiOutlineArrowLongLeft />
              OUR PRICING<HiOutlineArrowLongRight /></a>
            <h2>24/7 Expirt Hosting Support Our Customers Love</h2>
          </div>
          <button>TAlK TO A SPECIALIST<HiOutlineArrowLongRight /></button>
          <img src={ctashape1} className='contact-img-back' />
        </div>
      </section>
    </>
  )
}

export default ContactUs
