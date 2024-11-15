import './Hero.css'
import { IoIosArrowForward } from "react-icons/io";
import element from '../../assets/images/element.webp'
import lineelement from '../../assets/images/line-element.webp'
import {Link} from 'react-router-dom'
function Hero({title,page,link}) {
    return (
      <>
       <section className='hero2'>
        <img src={element} className='element-img'/>
        <img src={lineelement} className='line-element-img'/>
 <div className='links'>     
<h1>{title}</h1>
<div><Link to="/">Home</Link><IoIosArrowForward />  <Link to={link}>{page}  </Link></div></div>
       </section>
       <div className='back-blue'></div>
      </>
    )
  }
  export default Hero
  