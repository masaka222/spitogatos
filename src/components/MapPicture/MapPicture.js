import React, { Component } from 'react';
import './MapPicture.css';

import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Web } from "../../assets/earth.svg";

class MapPicture extends Component {
  render() {
    return (
      <div className="mapPicture">
        <div class="dot">
        <div className='ball-content'>
            <p className='ball-email'>S.und@themail.com</p>
            <p className='ball-phone'>+30 210 1234 567</p>
            <div className='social-buttons'>
            <Facebook   className='socialButton' width='2.4rem' height='2.4rem' /> 
            <Twitter    className='socialButton'width='2.4rem' height='2.4rem' /> 
            <Instagram  className='socialButton'width='2.4rem' height='2.4rem' /> 
            <Web        className='socialButton'width='2.4rem' height='2.4rem' /> 
            </div>
          </div>
        </div>   
      </div>
    );
  }
}

export default MapPicture;