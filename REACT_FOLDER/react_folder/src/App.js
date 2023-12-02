import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Contacts from './components/pages/Contacts';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
