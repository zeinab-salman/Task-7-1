import './ElevatingInfoCard.css'
import { Card } from 'react-bootstrap'
function ElevatingInfoCard({ title, number }) {
  return (

    <>

      <Card className='card-info'>
        <div>
          <h4>{number}</h4>
        </div>
        <h5 className=''>{title}</h5>
        <p>Lorem, ipsum adipisicing elit. Earum corporis  omnis doloribus eius quaerat vero eum velit sequi, repellat praesentium fugit blanditiis suscipit iste..</p>

      </Card>
    </>
  )
}

export default ElevatingInfoCard
