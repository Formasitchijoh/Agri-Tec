import React, {useState} from 'react'
import Slider from 'react-slick'
import Select from 'react-select'
import InfiniteScroll from 'react-infinite-scroll-component'
import selectItems from '../Components/datastore'
import garri from '../resources/garri.png'
import egusi from '../resources/egusi.jpg'
import yam from '../resources/yams.jpg'
import Menu from '../Components/Menu'
import SelectDropDown from '../Components/SelectDropDown'
import productArray from '../data/productData'
import '../style.css'
const ProductCarts = (props) => {
    return(
        <div className=' scroll' onClick={()=>alert('Youclicked me')}>
                {props.food}
            <div className='textContainer scrollItem'>
            <span style={{fontSize:'1.2em',fontWeight:'bold ',marginBottom:'0.5em'}}> {props.name}</span><br/>
                <span style={{fontSize:'1em',fontWeight:'bold ', marginTop:'0.1em'}}> {props.price} XAF</span><br/>
                <span style={{fontSize:'1em',fontWeight:'bold ', marginTop:'0.1em'}}> {props.quantity} </span><br/>
                <span style={{fontSize:'1em',fontWeight:'bold ', marginTop:'0.1em'}}> {props.location} </span><br/>

            </div> 
  
        </div>
    )
  }
  

const BuyerPage = () => {
  const [productIndex, setproductIndex] = useState(0)
  const {category, id, products} = productArray[productIndex];
  //state and handler for managing the search product page
  const [selectedOption, setselectedOption] = useState(null)
  const handleChange = e => {
    setselectedOption(e);
}



  return (
    <div  className='scroll-hori'> 
        <Menu pageName='Buyer Page'/>
        <div style={{ width:'98%', margin:'auto', marginTop:'1em', marginBottom:'1em'}}> 
      <Select
      placeholder="Select Option"
      isClearable={true}
      value={selectedOption}
      options={productArray}
      onChange={handleChange}
      getOptionLabel={e => (
        <div style={{}} onClick={()=>setproductIndex(e.id)}>
            {e.icon}
            <span style={{marginLeft:5}}>{e.category}</span>
            <span>{console.log(e.products[0].price)}</span>
        </div>
      )
    } 

      // filterOption={filterOptions}
      />
      {selectedOption && <div style={{marginTop:20,lineHeight:'25px'}}>
        <b>Selected Option:</b>{productIndex}
        </div>}
    </div>

          <div style={{width:'100%',}}>

           
        {products.map((item)=>(
          <ProductCarts food={item.image} name={item.name} price={item.price} quantity={item.quantity} location={item.location}/>
        ))}    

{/* {productArray
  .filter((item) => item.category === selectedOption)
  .map((item) => (
    <ProductCarts
      key={item.id}
      food={item.image}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      location={item.location}
    />
  ))
} */}
          </div>        
    </div>
  )
}

export default BuyerPage