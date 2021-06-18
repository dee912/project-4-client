import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import StoreIndex from './components/Store/StoreIndex'
import StoreShow from './components/Store/StoreShow'
import AboutUs from './components/common/AboutUs'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/Profile/Profile'
import NewStore from './components/Store/NewStore'
import Footer from './components/common/Footer'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/stores/new" component={NewStore}/>
        <Route path="/stores/:storeId" component={StoreShow}/>
        <Route path="/stores" component={StoreIndex}/>
        <Route path="/about" component={AboutUs}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile/:profileid" component={Profile}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
