import './OrderSummary.css'
import iconMusic from './src/assets/icon-music.svg" alt="icon-music'
import hero from './src/assets/illustration-hero.svg'
const OrderSummary = () => {
  return (
    <div className='container'>
    <div className='image-header'>
     <img src={hero} alt='music image'/>
    </div>
    <div className='content'>
     <div className='order-summary'>
        <h1>Order Summary</h1>
        <p>You can now listen to millions of songs,audiobooks and podcast on any device anywhere you like</p>
      </div>
      <div className='annual-plan'>
       <img src={iconMusic} />
       <div className="annual-text">
        <h2>Annual Plan</h2>
        <p>$59.99/year</p>
       </div>
       <a href="#">Change</a>
      </div>
      <div  className='btn1'>
      <button>Proceed to Payment</button>
      </div>
      <div className='btn2'>
      <button ><a href="#"></a></button>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary
