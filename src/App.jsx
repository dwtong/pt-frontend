import React, { Component } from 'react';
import './App.css';
import OrderForm from './components/OrderForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Paper Tracker</h2>
          <h3>New Offset Order</h3>
        </div>
        <div className="container">
          <OrderForm />
        </div>
      </div>
    );
  }
}

export default App;
