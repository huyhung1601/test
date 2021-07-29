import React from 'react'
import './App.scss'
import Nav from './components/nav/Nav'
import { GlobalProvider } from './context/Context'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Shop from './pages/shop/Shop'
import ShopItem from './components/shopItem/ShopItem'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
export default function App() {

  return (
    <Router>
    <GlobalProvider>
      <div className="app">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ShopItem}/>
        </Switch>

      </div>
    </GlobalProvider>
    </Router>
  )
}

