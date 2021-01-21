import React from 'react'
import Home from './components/home'
import Service from './components/service'
import About from './components/about'
import Contact from './components/contact'
import './components/style.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './header/header.js'
const  App = () => {
  return (
    <Router>
        <div>
        <Header/>
        <Switch>
          <Route path="/contact-us" component={Contact} />
          <Route path='/about-us'  component={About} />
          <Route path='/services' component = {Service}/>
          <Route exact path='/'  component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
