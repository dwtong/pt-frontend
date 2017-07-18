import React, { Component } from 'react';
import OptionsQuantitySelect from '../components/OptionsQuantitySelect';
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
        orderItems: [],
      },
      customers: CUSTOMERS,
      notebookTypes: NOTEBOOKS,
      paperSources: PAPER_SOURCES,
    }

    this.addOrderItem = this.addOrderItem.bind(this);
    this.calcuatePaperRequired = this.calculatePaperRequired.bind(this);
  }

  addOrderItem(item) {
    const newItem = { bookId: parseInt(item.item), quantity: item.quantity };
    const updatedItems = [...this.state.order.orderItems, newItem];
    this.setState({ order: { orderItems: updatedItems } });
  }

  calculatePaperRequired() {
    return ([
      {paperType: 'A4 Blank on one side', allocated: 25, required: 30},
      {paperType: 'A4 Semi-blank', allocated: 5, required: 20},
    ]);
  }

  findNotebookName(id) {
    return this.state.notebookTypes.find(nb => nb.id === id).name;
  }

  render () {
    const notebooks = this.state.notebookTypes.map(nb => {return { name: nb.name, id: nb.id } });
    const orderItems = this.state.order.orderItems.map(item =>
      <p><strong>{this.findNotebookName(item.bookId)}</strong> Quantity: {item.quantity}</p>)

    return (
      <div>
        <div style={borderStyle}>
          <OrderDetails customers={this.state.customers} />
        </div>

        <div style={borderStyle}>
          <OrderItems>
            {orderItems}
            <OptionsQuantitySelect
              label="Notebook Type"
              options={notebooks}
              addItem={this.addOrderItem} />
          </OrderItems>
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
