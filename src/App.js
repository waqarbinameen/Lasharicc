import React from "react";

import "./App.css";
import Navbar from "./componets/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./componets/pages/HomePage/Home";
import Email from "./componets/pages/Email/Email";
import Services from "./componets/pages/Services/Services";
import Footer from "./componets/pages/Footer/Footer";
import ScrollBackToTop from "./componets/ScrollBackToTop";
import PageNotFound from "./componets/pages/PageNotFound/PageNotFound";
import About from "./componets/pages/About/About";
import GalleryPortal from "./componets/pages/GalleryPortal/GalleryPortal";
import ProgressBar from 'react-progressbar-on-scroll'


function App() {
  return (
  
    <Router>
      
      <Navbar />
      < ProgressBar   color="#04d9ff"
    height={6} position="top"/>
     
      
      <ScrollBackToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ContactUs" component={Email} />
        <Route exact path="/Gallery" component={GalleryPortal} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/About" component={About} />
        <Route component={PageNotFound} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
