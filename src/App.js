import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Home.js';
import SubmitNewMeme from './SubmitNewMeme.js';

const App = () => (
  <div>
    <Router basename={ process.env.PUBLIC_URL }>
      <main>
        <Route exact path="/" component={ Home } />
        <Route exact path="/submit" component={ SubmitNewMeme } />
      </main>
    </Router>
  </div>
)

export default App;
