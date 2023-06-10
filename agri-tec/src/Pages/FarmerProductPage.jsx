import React from 'react'
import { useState } from 'react'
import garri from '../resources/garri.png'
import egusi from '../resources/egusi.jpg'
import yam from '../resources/yams.jpg'
import ImageSlider from '../Components/imageSlider'
import SelectDropDown from '../Components/SelectDropDown'
import InfiniteScroll from 'react-infinite-scroll-component'
import Menu from '../Components/Menu'
import selectItems from '../Components/datastore'

const ProductCarts = (props) => {
  return(
      <div className='cartContainer scroll'>
              <img src={props.food} alt='garri' />
          <div className='textContainer scrollItem'>
          <span style={{fontSize:'1.2em',fontWeight:'bold ',marginBottom:'2em'}}>Calabar Garri</span><br/>
              <span style={{fontSize:'1em',fontWeight:'bold ', marginTop:'0.2em'}}>2,000 XAF</span>
              
          </div> 

      </div>
  )
}


const ProductPage = () => { 
  const [selectedOption, setselectedOption] = useState(null)

  return (
    // <div >
         
        <div className='scroll-hori'>
             <Menu pageName='ProductPage'/>
        <SelectDropDown selectItems={selectItems} selectedOption={selectedOption} setselectedOption={setselectedOption}/> 
        <ProductCarts food={garri}/>
        <ProductCarts food={egusi}/>
        <ProductCarts food={yam}/>
        <ProductCarts food={yam}/>
        <ProductCarts food={garri}/>
        <ProductCarts food={egusi}/>
       
        {/* <ImageSlider/> */}
        {/* <img src={garri} alt='food'></img> */}
        {/* <ProductCarts food={garri}/> */} 
          </div>  
       
    // </div>
  )
}

export default ProductPage;