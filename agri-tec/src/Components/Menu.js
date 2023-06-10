import React, { useState } from 'react'
import '../style.css'
import { Link } from 'react-router-dom';
import hamburger from '../resources/hamburger-menu.webp'
const Menu = ({pageName}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
      <div className="hamburger-menu">
          <div className="hamburger" onClick={toggleMenu}>
          <img  style={{width:'3em', backgroundColor:'black', height:'20em', color:'black'}} src={hamburger} alt='alt'></img>
        </div>
        <h1 style={{ marginTop:'0.5em', marginLeft:'3em',height:'2em', color:'white'}} >{pageName}</h1>
        
        {menuOpen && (
          <div className="menu">
         <Link    style={{ textDecoration: 'none', color: 'inherit' }} to="/"> Home</Link> <hr className='menu-line'/>
         <Link style={{ textDecoration: 'none', color: 'inherit' }}  to="/UploadProductPage">Update Product </Link><hr className='menu-line'/>
           <Link  style={{ textDecoration: 'none', color: 'inherit' }} to="/SignUpPage">SignUp </Link><hr className='menu-line'/>
           <Link  style={{ textDecoration: 'none', color: 'inherit' }} to="/LoginPage">Login </Link><hr className='menu-line'/>
           <Link  style={{ textDecoration: 'none', color: 'inherit' }} to="/ProductItem">Item </Link><hr className='menu-line'/>

           
          {/* </div> */}
          
          </div>
        )}
      </div>
    )
}

export default Menu