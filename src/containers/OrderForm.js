import React, { Component } from 'react';
import OrderItems from '../components/OrderItems'
import OrderDetails from '../components/OrderDetails'
import OrderPaperAllocations from '../components/OrderPaperAllocations'

import { CUSTOMERS, NOTEBOOKS, PAPER_SOURCES } from '../config/mock-data';
import { borderStyle } from '../styles';


class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {
        customer: '',
        dueDate: '2017-07-17',
        order_items: [],
      },
      customers: CUSTOMERS,
      notebookTypes: NOTEBOOKS,
      paperSources: PAPER_SOURCES,
    }

    this.calcuatePaperRequired = this.calculatePaperRequired.bind(this);
  }

  calculatePaperRequired() {
    return ([
      {paperType: 'A4 Blank on one side', allocated: 25, required: 30},
      {paperType: 'A4 Semi-blank', allocated: 5, required: 20},
    ]);
  }

  render () {
    return (
      <div>
        <div style={borderStyle}>
          <OrderDetails customers={this.state.customers} />
        </div>
        <div style={borderStyle}>
          <OrderItems notebooks={this.state.notebookTypes} />
        </div>
        <div style={borderStyle}>
          <OrderPaperAllocations
            paperRequired={this.calculatePaperRequired()}
            paperSources={this.state.paperSources} />
          <button>Confirm Order!</button>
        </div>
      </div>
    );
  }
};

export default OrderForm;
