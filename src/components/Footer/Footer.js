import React from 'react';
import { ReactComponent as SmallLogo } from "../../assets/small-logo.svg";
import './Footer.css';

function Footer(props) {
  return (
    <div className="footer">
        <div className='footer_copyright'>
          <span>© The standard Copywrite 2020</span>
        </div>
        <div className="footer-middleText">
          <span className="cookies"> Cookies. </span>
          <span className="footer-line"> | </span>
          <span className="privacy"> Privacy. </span>
        </div>
        <div className="footer_logo">
          <SmallLogo className="small-logo" width='3.2rem' height='3.2rem'/>   
        </div>
    </div>
  );
}

export default Footer;