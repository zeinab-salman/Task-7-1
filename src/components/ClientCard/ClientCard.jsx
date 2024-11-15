import './ClientCard.css'
import { Card } from 'react-bootstrap'

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function ClientCard({ photo, name, job }) {


  return (

    <>

      <Card className='clientcard'>
        <div><FaStar className='orange' /><FaStar className='orange' /><FaStar className='orange' /> <FaStar className='orange' /><FaRegStar className='orange' /> </div>
        <p> Fugit illum accusamus aut? Ad, consequatur! Quam consequuntur, quaerat doloribus animi impedit nulla at ea necessitatibus officiis consectetur cum debitis, explicabo omnis?</p>
        <div className='flex'>
          <img src={photo} />
          <div>
            <h5>{name}</h5>
            <p>{job}</p></div>
        </div>
      </Card>
    </>
  )
}

export default ClientCard
