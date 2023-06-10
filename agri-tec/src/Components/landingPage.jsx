import React from 'react'
import hamMenu from '../resources/hamburger.png'
import sideImg from '../resources/sideFarmer.jpg'
import connect from '../resources/connect.jpg'
import empower from '../resources/empower.jpg'
import organic from '../resources/organic.png'
import poverty from '../resources/poverty.png'
const NavBar = () => {
  return(
    <header className='main-header'>
      <nav className='main-nav'>
         <div className='ham-div'>
         <img src={hamMenu} alt='' className='ham-menu'></img>
          <p className='agri'>Agri-Tech</p>
         </div>
         
          <div className='logo'>
          Agri-Tech
        </div>
        <ul className='url-links'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Products</a>
          </li>
          <li>
            <a href='#'>Learnings</a>
          </li>
          <li>
            <a href='#'>Market</a>
          </li>
          <li>
            <a href='#'>Agregators</a>
          </li>
          
        </ul>
      </nav>
    </header>
  )
}
const HeaderBody = () =>{
  return (
    
       <div className='farmer-one'>
      
      
      <div className='agritech-intro'>
        <h1>Agri-Tech</h1>
        <h3>Welcome to aritech we are the leading coorporations
          <br/>In placing your product to the appropeiate Market<br/>
          and ensureing you get the best of product anywhere and at anytime
        </h3>
        <button className='landing-signup'>Sign Up</button>

      </div>
      
     
    </div>
   
  )
}

const Services = () =>{
  return ( 
    <div className='section-three'>
    <aside className='side-image'>
    </aside>
      <div className='our-services'>
        <div className='services'>
          <img src={connect}/>
          <h3>Connect Farmers to potential Buyers</h3>
        </div>
        <div className='services'>
          <img src={empower}/>
          <h3>Empower Farmers to increase productivity</h3>
        </div>
        <div className='services'>
          <img src={organic}/>
          <h3>First class distributor of Organic foods</h3>
        </div>
        <div className='services'>
          <img src={poverty}/>
          <h3>Reduce hunger and poverty in the society</h3>
        </div>

      </div>
      </div>

  )
}

const OurProductPage = () =>{
  return (

    <div className='food-items'>
     <div className='item'>
      <div className='item-name'>
        <h5>Vegatables</h5>
      </div>
    </div>
    <div className='item'>
      <div className='item-name'>
        <h5>Vegatables</h5>
      </div>
    </div>
    <div className='item'>
      <div className='item-name'>
        <h5>Vegatables</h5>
      </div>
    </div>
    <div className='item'>
      <div className='item-name'>
        <h5>Vegatables</h5>
      </div>
    </div>
    </div>
   
  )
}
const LandingPage = () => {
  return (
    <div>

      <NavBar/>
      <HeaderBody/>
      <Services/>
      <OurProductPage/>
      
     
      
    </div>
  )
}

export default LandingPage