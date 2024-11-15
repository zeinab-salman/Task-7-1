
import './HomeNavbar.css'
import logo from '../../assets/images/logo.svg'
import { GoArrowRight } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
function HomeNavbar() {
  const [isOpen,setIsOpen] =useState(false);
  const toggleNavbar =() => {
    setIsOpen(!isOpen);
  };
    const [bgColor, setBgColor] = useState('transparent');
  
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('  #ff7f27 '); 
      } else {
        setBgColor('#fff'); 
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
      <>
      <div className='nav-div' >
        <nav className='nav1 ' style={{ backgroundColor: bgColor }} >
      <img src={logo}/>
      <button className='toggle-button ' onClick={toggleNavbar }>
   <IoReorderThreeOutline />
   </button>
    <ul className={`me-auto ${isOpen?'true':''}`} id="ul" >
        <li >Home<MdArrowDropDown /> </li>
        <li><Link to="/about" className='link'>About</Link></li>
        <li>Services<MdArrowDropDown /> </li>
        <li>Pages<MdArrowDropDown /> </li>
        <li>Blog<MdArrowDropDown /> </li>
        <li><Link to='/contact' className='link'>Contact</Link></li>
        <GoSearch />
    <FaCartShopping className='blue' />
        <li>  <button>Get A Quote<GoArrowRight /></button>  </li>
    </ul>
    
    </nav></div>
      </>
    )
  }
  export default HomeNavbar
  