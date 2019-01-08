import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import HomePage from '../pages/homepage';
import AboutPage from '../pages/aboutpage';
import ContactPage from '../pages/contactpage';
import NotFound from '../pages/notfound'
import NavBar from '../pages/components/navbar'
import Footer from '../pages/components/footer'

const Router = () =>  {
  return (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch className="internal-body">
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
  )
}

export default Router
