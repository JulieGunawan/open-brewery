import logo from './beer.png'
import './App.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Router, Link } from '@reach/router'
import { Brewery } from './components'
import { City } from './pages/City'
import { RandomBrewery } from './pages/RandomBrewery'

//Mob programming test!

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Simon's Super Cool Brewery Website</h1>
        <Link to="city">City</Link>
        <Link to="/">Random Brewery</Link>
      </header>
      <body>
        <Router className="infoCard">
          <RandomBrewery path="/" />
          <City path="/city" />
        </Router>
      </body>
    </div>
  )
}

export default App
