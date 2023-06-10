
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css"
import React from 'react'
import garri from '../resources/garri.png'
import egusi from '../resources/egusi.jpg'
import plantain from '../resources/plantain.jpg'
import yam from '../resources/yams.jpg'

const ProductCart = (props) => {
    return(
        <div >
                <img src={props.food} alt='garri' />
            
            <div >
            <span style={{fontSize:'1.2em',fontWeight:'bold ',marginBottom:'2em'}}>Calabar Garri</span><br/>
                <span style={{fontSize:'1em',fontWeight:'bold ', marginTop:'0.2em'}}>2,000 XAF</span>
                
            </div>

        </div>
    )
}
const products = [
    { id: 1, food: garri },
    { id: 2, food: egusi },
    { id: 3, food: plantain },
    { id: 4, food: yam },
    { id: 5, food: garri },
    { id: 6, food: egusi },
    { id: 7, food: plantain },
    { id: 8, food: yam },
  ];
  
  const ImageSlider = () => {
    const settings = {
      infinite: true,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  
    return (
      <>
        <div>
          <h1>My Products</h1>
          <Slider {...settings}>
            {products.map((product) => (
              <ProductCart key={product.id} food={product.food} />
            ))}
          </Slider>
        </div>
      </>
    );
  };

  export default ImageSlider