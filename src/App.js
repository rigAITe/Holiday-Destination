import React from 'react'
import Home from './components/home'
import ContentOutline from './components/contentOutline'
import TargetMarket from './components/targetMarket'
// import Header from './header/header'
import './components/style.scss'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const  App = () => {
  return (
    <Router>
        <div>
        {/* <Header/> */}
        <Switch>
          <Route path="/target-market" component={TargetMarket} />
          <Route path='/content-outline' component = {ContentOutline}/>
          <Route exact path='/'  component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
