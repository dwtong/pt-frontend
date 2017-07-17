import React, { Component } from 'react';
import './App.css';

const borderStyle = {"border": "2px solid lightgray", "padding": "0.5rem", "margin": "1rem 5rem"};

const CUSTOMERS = ['Metservice', 'Flick', 'Strategy'];
const NOTEBOOKS = [
  {
    id: 0,
    name: 'A5 Stapled',
    paper: [
      {paperTypeId: 0, type: 'Blank On One Side A4', quantity: 5},
      {paperTypeId: 1, type: 'Semi Blank A4', quantity: 8}
    ]
  }, {
    id: 1,
    name: 'A5 Wire Bound',
    paper: [
      {paperTypeId: 0, type: 'Blank On One Side A4', quantity: 10},
      {paperTypeId: 1, type: 'Semi Blank A4', quantity: 5}
    ]
  },
];
const PAPER_SOURCES = [
  {
    supplierId: 0,
    supplierName: 'Metservice',
    paper: [
      {paperTypeId: 0, type: 'Blank On One Side A4', quantity: 500},
      {paperTypeId: 1, type: 'Semi Blank A4', quantity: 1000}
    ],
  },
    {
    supplierId: 1,
    supplierName: 'Flick',
    paper: [
      {paperTypeId: 0, type: 'Blank On One Side A4', quantity: 250},
      {paperTypeId: 1, type: 'Semi Blank A4', quantity: 750}
    ],
  },
];

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

class OrderForm extends Component {
  render () {
    return (
      <div>
        <div style={borderStyle}>
          <OrderDetailsFields customers={CUSTOMERS} />
        </div>
        <div style={borderStyle}>
          <OrderItemsFields notebooks={NOTEBOOKS} />
        </div>
        <div style={borderStyle}>
          <PaperSourceFields paperSources={PAPER_SOURCES}/>
          <button>Confirm Order!</button>
        </div>
      </div>
    );
  }
}

const OrderDetailsFields = ({ customers }) => {
  return (
    <div>
      <h3>Order Details</h3>
      <div>
        <label>Customer </label>
        <select>
          {customers.map(customer => <option>{customer}</option>)}
        </select>
      </div>
      <div>
        <label>Due Date </label>
        <input type="date" value={new Date().toISOString()}/>
      </div>
    </div>
  );
};

const OrderItemsFields = ({ notebooks }) => {
  return (
    <div>
      <h3>Order Items</h3>
      <OptionsQuantityField label="Notebook Type"
        options={notebooks.map(notebook => {
          return {name: notebook.name, id: notebook.id};
        })}/>
      <button type="button">Add Item</button>
    </div>
  );
};

const PaperSourceFields = ({ paperSources }) => {
  return (
    <div>
      <h3>Paper Allocation</h3>
      <div style={borderStyle}>
        <AllocatedQuantityFields paperType={{name: 'A4 Blank on one side'}} paperSources={paperSources}/>
      </div>
      <div style={borderStyle}>
        <AllocatedQuantityFields paperType={{name: 'A4 Semi-blank'}} paperSources={paperSources}/>
      </div>
    </div>
  );
};

const AllocatedQuantityFields = ({ paperType, paperSources }) => {
  return (
    <div>
      <h5>{paperType.name}</h5>
      <OptionsQuantityField
        label="Paper Source"
        options={paperSources.map(source => {
          return {name: source.supplierName, id: source.supplierID};
        })}/>
      <button type="button">Add Source</button>
      <PaperAllocatedResults required={10} allocated={5} />
    </div>
  );
};

const OptionsQuantityField = ({ label, options }) => {
  return (
    <div>
      <label>{label}</label>
      <select>
        {options.map(option => <option>{option.name}</option>)}
      </select>
      <label> Quantity </label>
      <input type="number" />
    </div>
  );
};

const PaperAllocatedResults = ({ required, allocated }) => {
  return (
    <div>
      <div>Paper Required: {required}</div>
      <div>Paper Allocated: {allocated}</div>
      <div><strong>Left to Allocate: {required - allocated}</strong></div>
    </div>
  );
}


export default App;
