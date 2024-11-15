
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.svg'
import './NavBar.css'
import { GoArrowRight } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import plane from '../../assets/images/plane.webp'
import {useState} from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'

function NavBar(){
 
const [isOpen,setIsOpen] =useState(false);
const toggleNavbar =() => {
  setIsOpen(!isOpen);
};

    return (
  
      <>
<Navbar  data-bs-theme="light" className='nav2'>
<Container>
  <img src={plane} className='absolute-nav-img'/>
  <Navbar.Brand href="#home" className='logo'><img src={logo}/></Navbar.Brand>
  
  <button className='toggle-button ' onClick={toggleNavbar }>
  <IoReorderThreeOutline />
  </button>
  <Nav className={`me-auto  ${isOpen?'true':''}`}>
    <Nav.Link href="#home"><Link to="/" className='link'>Home</Link><MdArrowDropDown /></Nav.Link>
    <Nav.Link href="#features"><Link to="/about" className="link">About</Link></Nav.Link>
    <Nav.Link href="#pricing">
      services<MdArrowDropDown />
    </Nav.Link>
    <Nav.Link href="#pricing"> Pages<MdArrowDropDown /></Nav.Link>
    <Nav.Link href="#pricing"> Blog<MdArrowDropDown /></Nav.Link>
    <Nav.Link href="#pricing"> <Link to="/contact" className="link">Contact</Link></Nav.Link>
    <Nav.Link href="#pricing">  </Nav.Link>
   <Nav.Link> <GoSearch className='search' /> </Nav.Link>
  <Nav.Link href="#pricing"> <button>Get A Quote<GoArrowRight /> </button></Nav.Link>
  </Nav>

</Container>
</Navbar>
</>
    )
  }
  
  export default NavBar
  