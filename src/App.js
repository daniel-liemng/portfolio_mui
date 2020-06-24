import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import { CssBaseline } from '@material-ui/core';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './components/Home';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </>
  );
}

export default App;
