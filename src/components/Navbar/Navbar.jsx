import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { images } from '../../constants';
import './Navbar.css';

const NavItems = ({className, setToggle}) => (
  <ul className={className}>
    <li className='p__opensans' onClick={()=> setToggle(false) }><a href="#home">Home</a></li>
    <li className='p__opensans' onClick={()=> setToggle(false) }><a href="#about">About</a></li>
    <li className='p__opensans' onClick={()=> setToggle(false) }><a href="#menu">Menu</a></li>
    <li className='p__opensans' onClick={()=> setToggle(false) }><a href="#awards">Awards</a></li>
    <li className='p__opensans' onClick={()=> setToggle(false) }><a href="#contact">Contact</a></li>
  </ul>
)

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <NavItems className='app__navbar-links' setToggle={setToggle} />
      <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Log In / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggle(true) } />
        
        { toggle && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} onClick={()=> setToggle(false) } />      
            <NavItems className='app__navbar-smallscreen_links' setToggle={setToggle} />
          </div>
        )}
        
      </div>
    </nav>
  )
};

export default Navbar;
