import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import About from '../About/About';
import Work from '../Work/Work';
import ContactPage from '../ContactPage/ContactPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/page2' component={PageTwo}/>
        <Route path='/page3' component={PageThree}/>
        <Route path='/about' component={About}/>
        <Route path='/work' component={Work}/>
        <Route path='/contact' component={ContactPage}/>
        <Route component = {NotFoundPage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
