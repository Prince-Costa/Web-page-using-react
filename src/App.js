import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HomePage from './HomePage';
import Navbar from './Components/Navbar';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';
import {Switch, Route, Redirect } from 'react-router-dom';


 const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} /> 
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/"/>
    </Switch>
    <Footer/>
    </>
  )
}
export default App;