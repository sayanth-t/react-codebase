import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';

// header component
const Header = () => {

  const [ btnName , setBtnName ] = useState("login") ;

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src = {LOGO_URL}
            alt = "LOGO"
          />
        </div>
        <div className="nav-items-container">
          <ul className="nav-items">
            <li>Home</li>
            <li>Cart</li>
            <li>About</li>
            <li>Contact</li>
            <li>Profile</li>
            <button className='login-btn' onClick={
              () => {
                btnName === "login" ? setBtnName("logout") : setBtnName("login")
              }
            } >{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

 export default Header ; 
