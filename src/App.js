import React from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom"

// import Home from './Layouts/Home';
import Social from './Router';
import Header from './Layouts/Home/Header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Social />
      </BrowserRouter>
    )
  }
}

export default App;
