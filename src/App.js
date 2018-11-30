import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link

} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Homepage from './pages/homePage';
import Products from './pages/products';
import './default.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

            <Homepage />
            <Products />

        <Footer />
      </div>
    );
  }
}

export default App;
