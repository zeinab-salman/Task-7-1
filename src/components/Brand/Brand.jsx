
import './Brand.css'
import brandlogo1 from '../../assets/images/brandLogo1_1.svg'
import brandlogo2 from '../../assets/images/brandLogo1_2.svg'
import brandlogo3 from '../../assets/images/brandLogo1_3.svg'
import brandlogo4 from '../../assets/images/brandLogo1_4.svg'
import brandlogo5 from '../../assets/images/brandLogo1_5.svg'


function Brand() {


  return (

    <>
      <section className='brand-sec'>
        <div className='brand'>
          <img src={brandlogo1} width='150px' className='bb1' />
          <img src={brandlogo2} width='150px' className='bb1' />
          <img src={brandlogo3} width='150px' />
          <img src={brandlogo4} width='150px' className='bb1' />
          <img src={brandlogo5} width='150px' className='bb1'/>
        </div>
        <div className='line-row'></div></section>
    </>
  )
}

export default Brand
