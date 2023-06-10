import React from 'react'
import ImageSlider from '../Components/imageSlider'
import garri from '../resources/garri.png'
import egusi from '../resources/egusi.jpg'
import plantain from '../resources/plantain.jpg'
import yam from '../resources/yams.jpg'
import Menu from '../Components/Menu'

const ProductItem = () => {
  return (
    <div>
<Menu pageName='Item'/>
        <div className='item-container'>
            <img src={garri} alt=''/>
            <h2 style={{marginTop:'1em'}}>Callabar Garri</h2>

            </div>
            <div className='item-detail'>
            <h3 style={{width:'80%', marginTop:'1em', height:'2em'}}> <span style={{display:'inline-block', float:'left'}}>Price</span><span style={{display:'inline-block', float:'right'}}>2000/1kg</span> </h3><hr style={{width:'80%', height:'0.1em'}}/>
            <h3 style={{width:'80%', marginTop:'1em', height:'2em'}}> <span style={{display:'inline-block', float:'left'}}>Quantity</span><span style={{display:'inline-block', float:'right'}}>2000kg</span> </h3><hr style={{width:'80%', height:'0.1em'}}/>
            <h3 style={{width:'80%', marginTop:'1em', height:'2em'}}> <span style={{display:'inline-block', float:'left'}}>Location</span><span style={{display:'inline-block', float:'right'}}>Bamilagui</span> </h3><hr style={{width:'80%', height:'0.1em'}}/>

         </div>
         <button className='button'> Place Order</button>
    </div>
  )
}

export default ProductItem