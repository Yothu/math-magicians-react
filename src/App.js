import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    );
  }
}

export default App;
