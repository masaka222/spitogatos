import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as X } from "../../assets/x-button.svg";
import Modal from 'react-modal';
import './Header.css';
import magnifier from '../../assets/search.png';
import menu from '../../assets/mobile-menu.png';
import MenuModal from '../MenuModal/MenuModal';

Modal.setAppElement('#root');

function Header() {
  const [searchModalIsOpen,setSearchModalIsOpen] = React.useState(false);
  const [menuModalIsOpen,setMenuModalIsOpen] = React.useState(false);
  const [inputValue,setValue] = React.useState('  ');
  const [inputValue2,setValue2] = React.useState('');

  function onInputChange(e) {
    const { value } = e.target;
    setValue(value);
    setValue2(' ' + value);
  }

  function onModalClose(){
    setSearchModalIsOpen(false);
    setValue('  ');
    setValue2('');
  }

  return (
  <>
  <MenuModal 
    menuModalIsOpen = {menuModalIsOpen} 
    setMenuModalIsOpen = {setMenuModalIsOpen}
  />
  <Modal
      closeTimeoutMS={500}
      isOpen={searchModalIsOpen}
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
    <button className="search__button" onClick={()=>{onModalClose()}}>
      <X className="x" width='1.8rem' height='1.8rem'/> 
    </button>
    <form className='searchfield-form'>
      <div className='input-wrapper'>
        <textarea name="searchfield" className='searchfield' placeholder='Start Typing' onChange={onInputChange} maxLength="50"/>
        <div className='input-highlight'> 
            <span className='input-highlight-text'>{ inputValue.replace(/ /g, "\u00a0") }</span> 
        </div>
        <div className='input-highlight2'> 
          <span className='input-highlight-text2'>{ inputValue2.replace(/ /g, "\u00a0") }</span>
        </div>
      </div>
      <input type='submit' value='Search' className='button' id='button-search'/>
    </form>
    </Modal>

    <div className="header">
        <div className="stickyheader">
          <div className="header_logo">
              <Logo className="logo" width='7.2rem' height='7.2rem'/>   
          </div>
          <div className="header-navigation">
            <NavLink exact activeClassName = 'is-active' to='/'>
                <div className="header-navigation_text">Main One</div>
            </NavLink>
            <NavLink activeClassName = 'is-active' to='/page2'>
                <div className="header-navigation_text">Page Two</div>
            </NavLink>
            <NavLink activeClassName = 'is-active' to='/page3'>
                <div className="header-navigation_text">Page Three</div>
            </NavLink>
            <NavLink activeClassName = 'is-active' to='/about'>
                <div className="header-navigation_text">About Us</div>
            </NavLink>
            <NavLink activeClassName = 'is-active' to='/work'>
                <div className="header-navigation_text">Our Work</div>
            </NavLink>
            <NavLink activeClassName = 'is-active' to='/contact'>
                <div className="header-navigation_text">Contact</div>
            </NavLink>
          </div>
          <div className="header-langAndSearch">
            <div className="lang">
              <span className="lang-en"> EN </span>
              <span className="lang-line"> | </span>
              <span className="lang-gr"> GR</span>
            </div>
            <button className="search__button" onClick={()=>setSearchModalIsOpen(true)}>
              <img alt='magnifyingGlass' className='magnifyingGlass' src={magnifier}/>
            </button>
          </div>
          <div className="mobile-navigation" onClick={()=>setMenuModalIsOpen(true)}>  
            <img alt='menuIcon' className = "mobile-navigation__icon" src={menu}/>
          </div>
        </div>
    </div>
</>
  );
}

export default Header;