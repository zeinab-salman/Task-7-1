import './AboutCard.css'
import {Card} from 'react-bootstrap'
import { TfiSharethisAlt } from "react-icons/tfi";
function AboutCard({name, job,photo }) {


    return (
  
      <>
  
        <Card className='aboutcard'>
          <img src={photo} width=""/>
          <div className='info-card-about2'>
         <div className='circle-share'> <TfiSharethisAlt /></div>
            <h5>{name}</h5>
            <p>{job}</p>
          </div>
        </Card>
      </>
    )
  }
  
  export default AboutCard
  