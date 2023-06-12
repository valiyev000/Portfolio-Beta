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
import Portfolios from './components/Portfolios';
import Journey from './components/Journey';
import Blog from './components/Blog';

const data = {
  portfolios: [
    {
      id: 1,
      src: "../src/images/portfolios/port1.svg",
      header: "There is more than you know",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      id: 2,
      src: "../src/images/portfolios/port2.svg",
      header: "There is more than you know",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      id: 3,
      src: "../src/images/portfolios/port3.svg",
      header: "There is more than you know",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      id: 4,
      src: "../src/images/portfolios/port4.svg",
      header: "There is more than you know",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      id: 5,
      src: "../src/images/portfolios/port5.svg",
      header: "There is more than you know",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
    {
      id: 6,
      src: "../src/images/portfolios/port6.svg",
      header: "There is more than you know",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
  ],
  timeline: [
    {
      id: 1,
      title: "The resolution, What am i gonna do?",
      description: "It's all about the new year and works i have to do",
      date: "2 January 2021"
    },
    {
      id: 2,
      title: "Gow - command line tool to manage works",
      description: "Gow is cli tool written in golang using cobra",
      date: "29 January 2021"
    },
    {
      id: 3,
      title: "Started designing what you are seeing right now!",
      description: "Yes in 2th of february i started designing this site",
      date: "2 February 2021"
    },
    {
      id: 4,
      title: "Maybe it's time to deploy...!",
      description: "Maybe in this day i completed the front and backend of this",
      date: "1 March 2021"
    },
  ],
  blog: [
    {
      id: 1,
      src: "../src/images/blog/blog1.svg", //TODO YARIMCIQ QALDI
      header: "There is more than you know",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    },
  ]
}



function App() {




  return (
    <ContextApi.Provider value={{ data }}>
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
          <Route exact path="/portfolios">
            <Portfolios />
          </Route>
          <Route exact path="/journey">
            <Journey />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="*"><div className="errorPage">U r in wrong place...</div></Route>
        </Switch>
      </Router>
    </ContextApi.Provider>
  )
}

export default App
