import './HomeHero.css'
import { RiHeartPulseLine } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";
import profileShape from '../../assets/images/profileShape1_1.webp'
import { FaStar } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import herothumb from '../../assets/images/herothumb1_1.webp'
import heroshape1 from '../../assets/images/heroShape1_1.webp'
import heroshape3 from '../../assets/images/heroShape1_3.webp'

function HomeHero() {
    return (
        <>
            <section className='home-hero'>
                <div className='hero-1'>
                    <div className='left-side'>
                        <div className='create-website me-100 ms-100'><RiHeartPulseLine className='text-white icon-heart' /><p className='text-white mt' >Every thing you need to create a website</p></div>
                        <h1 className='text-white tiltle ms-100'>Business Innovation With IT Services Expertise</h1>
                        <div className='lists'>
                            <ul className='list1 '>
                                <li className='text-white'><IoIosCheckmark className='text-white' /> Deployment and support</li>
                                <li className='text-white'><IoIosCheckmark className='text-white' /> Flexibility and Adaptability</li>
                            </ul>
                            <ul className='list2 '>
                                <li className='text-white'><IoIosCheckmark /> Discovery and Analysis</li>
                                <li className='text-white'><IoIosCheckmark /> Compititive Advantage</li>
                            </ul></div>
                        <button className='text-white ms-100'>Get Started<GoArrowRight /> </button>
                        <div className='trust-google ms-100'>
                            <div className='trust'><div className=''><div className='flex'><FaStar className='baby-blue' /><h5 className='text-white'>Trostipilot</h5></div>

                                <img src={profileShape} /></div>
                                <div className='rate'><div><FaStar className='orange' /><FaStar className='orange' /><FaStar className='orange' /></div>
                                    <p className='text-white'>450+reviews</p>
                                </div>
                            </div>
                            <div className='line-column'></div>
                            <div className='google'>
                                <div>
                                    <h5 className='text-white'>Google</h5>
                                    <img src={profileShape} /></div>
                                <div className='rate'><div><FaStar className='orange' /><FaStar className='orange' /><FaStar className='orange' /></div>
                                    <p className='text-white'>450+reviews</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className='right-side'>
                        <img src={herothumb} width='300px' className='img1' order={1} />
                        <img src={heroshape1} width=' 400px' className='img2 bb1' />
                    </div>
                </div>
                <div className='circle-img3 bb1'><img src={heroshape3} className='img3 bb1 ' width='70px' /></div>

            </section>

        </>
    )
}

export default HomeHero
