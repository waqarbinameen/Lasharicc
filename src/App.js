import React from "react";

import "./App.css";
import Navbar from "./componets/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./componets/pages/HomePage/Home";
import Email from "./componets/pages/Email/Email";
import Gallary from "./componets/pages/Gallary/Gallary";
import Services from "./componets/pages/Services/Services";
import Footer from "./componets/pages/Footer/Footer";
import ScrollBackToTop from "./componets/ScrollBackToTop";

function App() {
  return (
    <Router>
      <ScrollBackToTop />

      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ContactUs" component={Email} />
        <Route path="/Gallary" component={Gallary} />
        <Route path="/Services" component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
