import React, { Component } from 'react';
import AddNewItem from './AddNewItem';
import addOrUpdateQuantity from './add-or-update-quantity';
import OrderItems from './OrderItems';
import OrderDetails from './OrderDetails';
import OrderPaper from './OrderPaper';

import { CUSTOMERS, BOOKS, PAPERS } from '../config/mock-data';

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 'data' is curated from GET calls on form load
      data: {
        customers: CUSTOMERS,
        books: BOOKS,
        papers: PAPERS,
      },

      // 'order' contains details to be POSTed on order submission
      order: {
        customer: null,
        dueDate: null,
        items: [],
        sources: [],
      },
    }

    this.onCustomerChange = this.onCustomerChange.bind(this);
    this.onDueDateChange = this.onDueDateChange.bind(this);
    this.addOrderItem = this.addOrderItem.bind(this);
    this.addPaperSource = this.addPaperSource.bind(this);
  }

  onCustomerChange(event) {
    this.setState({ order: { ...this.state.order, customer: event.target.value } });
  }

  onDueDateChange(event) {
    this.setState({ order: { ...this.state.order, dueDate: event.target.value } });
  }

  addOrderItem(item) {
    const { order } = this.state;
    const items = addOrUpdateQuantity({
      array: order.items,
      identifierName: 'bookId',
      identifier: item.selection,
      quantity: item.quantity
    });

    this.setState({order: { ...order, items } });
  }

  addPaperSource(source) {
    const { order } = this.state;
    const sources = addOrUpdateQuantity({
      array: order.sources,
      identifierName: 'sourceId',
      identifier: source.selection,
      quantity: source.quantity
    });

    this.setState({order: { ...order, sources }})
  }

  render () {
    const { data, order } = this.state;

    return (
      <div>
        <OrderDetails
          customer={order.customer}
          customers={data.customers}
          dueDate={order.dueDate}
          onDateChange={this.onDueDateChange}
          onCustomerChange={this.onCustomerChange}
        />

        <OrderItems
          books={data.books}
          items={order.items}
          addItem={this.addOrderItem}
        />

        <OrderPaper
          books={data.books}
          order={order}
          paperTypes={data.papers}
          addPaperSource={this.addPaperSource}
        />

        <button>Confirm Order!</button>
      </div>
    );
  }
};

export default OrderForm;
