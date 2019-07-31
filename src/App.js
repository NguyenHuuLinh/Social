import React from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom"

// import Home from './Layouts/Home';
import Social from './Router';
import Header from './Layouts/Home/Header';
import fire from './Firebase';
import Login from './Authentication';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        })
      } else {
        this.setState({
          user: null
        })
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        {!this.state.user ? <Login /> : <>
          <Header />
          <Social />
        </>}
      </BrowserRouter>
    )
  }
}

export default App;
