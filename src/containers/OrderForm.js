import React, { Component } from 'react';
import AddNewItem from '../components/AddNewItem';
import OrderItem from '../components/OrderItem';
import OrderItems from '../components/OrderItems';
import OrderDetails from '../components/OrderDetails';
import OrderPaper from '../components/OrderPaper';
import OrderPaperItem from '../components/OrderPaperItem';
import OrderPaperSummary from '../components/OrderPaperSummary';

import { CUSTOMERS, NOTEBOOKS, PAPER_TYPES, PAPER_SOURCES } from '../config/mock-data';

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {
        customer: '',
        dueDate: '2017-07-17',
        orderItems: [],
        paper: []
      },
      customers: CUSTOMERS,
      notebookTypes: NOTEBOOKS,
      paperTypes: PAPER_TYPES,
      paperSources: PAPER_SOURCES,
    }

    this.addOrderItem = this.addOrderItem.bind(this);
    this.addPaperSource = this.addPaperSource.bind(this);
    this.calculatePaperRequired = this.calculatePaperRequired.bind(this);
  }

  addOrderItem(item) {
    const id = parseInt(item.item, 10);
    let items = [...this.state.order.orderItems];
    const itemIndex = items.findIndex(i => i.bookId === id);

    if (itemIndex >= 0) {
      // Update existing quantity of line item
      items[itemIndex].quantity = parseInt(items[itemIndex].quantity, 10) + parseInt(item.quantity, 10);
    } else {
      // Add new line item
      items.push({ bookId: id, quantity: item.quantity });
    }
    this.setState({ order: { orderItems: items } }, this.calculatePaperRequired);
  }

  addPaperSource(source) {

  }

  calculatePaperRequired() {
    const { order, paperTypes } = this.state;
    const paperRequired = [...paperTypes];

    order.orderItems.forEach((book, bookIndex) => {
      const pages = this.findBook(book.bookId).paper;

      // find and update paper quantities in paperRequired for each page type
      pages.forEach((page, pageIndex) => {
        const index = paperRequired.findIndex(x => x.id === page.paperTypeId);
        paperRequired[index].quantityRequired = book.quantity * page.quantity;

        if (bookIndex >= order.orderItems.length - 1 && pageIndex >= pages.length - 1) {
          this.setState({ order: { ...order, paper: paperRequired } });
        }
      });
    });
  }

  findBook(id) {
    return this.state.notebookTypes.find(nb => nb.id === id);
  }

  findPaperType(id) {
    return this.state.paperTypes.find(nb => nb.id === id);
  }

  render () {
    const { notebookTypes, order, paperSources } = this.state;
    const notebooks = notebookTypes.map(nb => {return { name: nb.name, id: nb.id } });
    const paperOptions = paperSources.map(ps => {return {name: ps.name, id: ps.id}});

    return (
      <div>
        <OrderDetails customers={this.state.customers} />

        <OrderItems>
          {order.orderItems && order.orderItems.map(item =>
            <OrderItem key={item.bookId} item={this.findBook(item.bookId)} quantity={item.quantity} />)}

          <AddNewItem
            label="Notebook Type" options={notebooks} addItem={this.addOrderItem} />
        </OrderItems>

        <OrderPaper>
          {order.paper && order.paper.length > 0 ? order.paper.map(paper =>
            <div>
              <OrderPaperItem label={paper.type}>
                <AddNewItem
                  label="Paper Source" options={paperOptions} addItem={this.addPaperSource} />
              </OrderPaperItem>
              <OrderPaperSummary required={paper.quantityRequired} allocated={paper.allocated} />
            </div>
          ) : 'Please add items to order.'}
        </OrderPaper>

        <button>Confirm Order!</button>
      </div>
    );
  }
};

export default OrderForm;
