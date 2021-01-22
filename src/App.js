import React,{Component,useState, useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import { Switch ,Route , Redirect} from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp/SignUp';
import SignIn from './SignUp/SignIn';
import ItemData from './Slider/ItemData' ;
import About from './About';

function App() {
  const [auth, setAuth] =useState(true);
  return (
      <div className="App">
        <Switch>
          <Route
                  exact
                  path="/"
                  render={() => {
                      return (
                         auth ?
                        <Redirect to="/Home" /> :
                        <Redirect to="/Home" /> 
                      )
                  }}
                />
          <Route path="/Home" component={Home} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/ItemData" component={ItemData} />
          <Route path="/AboutUs" component={About} />
        </Switch>
      </div>
  );
}

export default App;
