import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import ContextApi from './ContextApi';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {




  return (
    <ContextApi.Provider value={{}}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolios">Portfolios</Route>
          <Route exact path="/journey">Journey</Route>
          <Route exact path="/blog">Blog</Route>
          <Route path="*"><div className="errorPage">U r in wrong place...</div></Route>
        </Switch>
      </Router>
    </ContextApi.Provider>
  )
}

export default App
