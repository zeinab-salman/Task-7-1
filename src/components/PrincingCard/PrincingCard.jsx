import './PrincingCard.css'
import { Card } from 'react-bootstrap'
import pricingicon1 from '../../assets/images/pricingIcon1_1.svg'
import { HiMiniXMark } from "react-icons/hi2";
import { GiCheckMark } from "react-icons/gi";
import { CiCircleQuestion } from "react-icons/ci";
function PrincingCard() {

    return (

        <>
            <Card className='pricing-card'>
                <div className='flex pricing-blue-card'>
                    <div> <h5>
                        Regular Plans
                    </h5>
                        <p><span>$49</span>/Month</p>
                    </div>
                    <img src={pricingicon1} />
                </div>
                <div className='flex'>
                    <ul>
                        <li> <GiCheckMark className='blue' />100 GB SSD Storage</li>
                        <li>< GiCheckMark className='blue' />Weekly Backups</li>
                        <li>< GiCheckMark className='blue' />Unlimitted Free SSL</li>
                        <li><GiCheckMark className='blue' />24/7 System Monitoring</li>
                        <li>< GiCheckMark className='blue' />Free Domain($9.99) value</li>
                        <li><HiMiniXMark className='red' />Frame 164236</li>
                        <li><HiMiniXMark className='red' />20+Payment Methods</li>

                    </ul>
                    <ul>
                        <li><CiCircleQuestion /></li>
                        <li><CiCircleQuestion /></li>
                        <li><CiCircleQuestion /></li>
                        <li><CiCircleQuestion /></li>
                        <li><CiCircleQuestion /></li>
                        <li><CiCircleQuestion /></li>
                        <li><CiCircleQuestion /></li>
                    </ul>
                </div>
                <button>Get Started Now</button>
            </Card>

        </>
    )
}

export default PrincingCard