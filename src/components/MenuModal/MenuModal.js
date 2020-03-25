import React from 'react';
import './MenuModal.css';
import { ReactComponent as X } from "../../assets/whiteX-button.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Web } from "../../assets/earth.svg";
import Modal from 'react-modal'; 

const MenuModal = (props) => {
    return(
        <Modal
            closeTimeoutMS={500}
            isOpen={props.menuModalIsOpen}
            className = "modal"
            style={
                {
                content:{
                    zIndex: '200'
                },
                overlay: {zIndex: 1000}
                }
            }
        >
        <div className='menu2-header'>
            <div className='menu2-header-title'> MENU </div>
            <button className="search__button" onClick={()=>{props.setMenuModalIsOpen(false)}}>
                <X className="x" width='1.8rem' height='1.8rem'/> 
            </button>
        </div> 
        <div className='menu2-nav'>
            <ul>
                <li>Main Page</li>
                <li>Page Two</li>
                <li>Page Three</li>
                <li>About Us</li>
                <li>Our Work</li>
                <li>Contact</li>
                <li className = 'lang-li'>
                    <span className="lang-en"> EN </span>
                    <span className="lang-line"> | </span>
                    <span className="lang-gr" id='lang-gr2'> GR</span>
                </li>
            </ul>
        </div>
        <div className='menu2-footer'>
            <div className='social'>
                <Facebook   className='socialButton' width='2.4rem' height='2.4rem' fill={'white'}/> 
                <Twitter    className='socialButton'width='2.4rem' height='2.4rem' fill={'white'}/> 
                <Instagram  className='socialButton'width='2.4rem' height='2.4rem' fill={'white'}/> 
                <Web        className='socialButton'width='2.4rem' height='2.4rem' fill={'white'}/> 
            </div>
            <div className='menu2-cookies'>
                <span className="cookies"> Cookies. </span>
                <span className="footer-line"> | </span>
                <span className="privacy"> Privacy. </span>
            </div>
            <div className='menu2-info'>
                <div>S.und@themail.com</div>
                <div>+30 210 1234 567</div>
                <div id='copyright'>© The standard Copywrite 2020</div>
            </div>
        </div>
    </Modal>
    );
}

export default MenuModal;