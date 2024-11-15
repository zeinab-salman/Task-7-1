import './FeaturedCard.css'
import { Card } from 'react-bootstrap'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
function FeaturedCard({ photo, profile, btn, desc, date }) {


    return (

        <>
            <Card className='featured-card'>
                <img src={photo} width="350px" className='featured-img' />
                <div className='card-div'>
                    <div className='flex btn-date'><button>{btn}</button><p>MARCH{date}2024</p></div>
                    <p id="p-1">{desc}</p>
                    <div className='line'></div>
                    <div className='flex profile-div'>
                        <img src={profile} />
                        <div>
                            <h5>Admin</h5>
                            <p>Co Founder</p>
                        </div>
                        <button id="arrow-btn"><HiOutlineArrowLongRight /></button>
                    </div>
                </div>
            </Card>


        </>
    )
}

export default FeaturedCard