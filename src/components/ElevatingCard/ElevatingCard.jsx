import { Card } from 'react-bootstrap'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import './ElevatingCard.css'
function ElevatingCard({ title, icon }) {
  return (

    <>

      <Card className='card1'>

        <div className='icon-div'>
          <img src={icon} />
        </div>
        <h5 className=''>{title}</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>Read More<MdKeyboardDoubleArrowRight /> </button>

      </Card>
    </>
  )
}

export default ElevatingCard





// or less ideally
