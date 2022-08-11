import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
