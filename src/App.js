import React from 'react'
import Home from './components/home'
import ContentOutline from './components/contentOutline'
import TargetMarket from './components/targetMarket'
import ScrollToTop from './components/scrollTop'
import Contact from './components/contact'
import Destinations from './components/destinations'
import './components/style.scss'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const  App = () => {
  return (
    
    <Router>
        <div>
        {/* <Header/> */}
        <ScrollToTop />
        <Switch>
          <Route path="/destinations" component={Destinations} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/target-market" component={TargetMarket} />
          <Route path='/content-outline' component = {ContentOutline}/>
          <Route exact path='/'  component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
