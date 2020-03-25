import React from 'react';
import './MainPage.css';
import Main1 from '../Main1/Main1';
import Main2picture from '../Main2picture/Main2picture';
import Main3picture from '../Main3picture/Main3picture';
import Main2content from '../Main2content/Main2content';
import Main3content from '../Main3content/Main3content';
import MapPicture from '../MapPicture/MapPicture';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const MainPage = () => {
  return (
    <div className="mainPage">
      <Main1/>
      <Main2picture/>
      <Main2content/>
      <Main3content/>
      <Main3picture/>
      <MapPicture/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default MainPage;