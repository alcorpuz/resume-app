import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Courses from './components/pages/Courses'
import Projects from './components/pages/Projects'


function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <Switch>
          <Route path='/' exact component= {Home}/> [home route]
          <Route path='/courses' exact component= {Courses}/>
          <Route path='/Projects' exact component= {Projects}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
