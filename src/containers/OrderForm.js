import React, { Component } from 'react';
import AddNewItem from '../components/AddNewItem';
import OrderItem from '../components/OrderItem';
import OrderItems from '../components/OrderItems';
import OrderDetails from '../components/OrderDetails';
import OrderPaper from '../components/OrderPaper';
import OrderPaperItem from '../components/OrderPaperItem';
import OrderPaperSummary from '../components/OrderPaperSummary';

import { CUSTOMERS, NOTEBOOKS, PAPER_SOURCES } from '../config/mock-data';

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
    this.addPaperSource = this.addPaperSource.bind(this);
    this.calcuatePaperRequired = this.calculatePaperRequired.bind(this);
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

    this.setState({ order: { orderItems: items } });
  }

  addPaperSource(source) {

  }

  calculatePaperRequired() {
    // return ([
    //   {paperType: 'A4 Blank on one side', allocated: 25, required: 30},
    //   {paperType: 'A4 Semi-blank', allocated: 5, required: 20},
    // ]);
  }

  findBook(id) {
    return this.state.notebookTypes.find(nb => nb.id === id);
  }

  render () {
    const { notebookTypes, order, paperSources } = this.state;
    const notebooks = notebookTypes.map(nb => {return { name: nb.name, id: nb.id } });
    const paperOptions = paperSources.map(ps => {return {name: ps.supplierName, id: ps.supplierID}});
    const paperRequired = this.calculatePaperRequired();

    return (
      <div>
        <OrderDetails customers={this.state.customers} />

        <OrderItems>
          {order.orderItems && order.orderItems.map(item =>
            <OrderItem item={this.findBook(item.bookId)} quantity={item.quantity} />)}

          <AddNewItem
            label="Notebook Type" options={notebooks} addItem={this.addOrderItem} />
        </OrderItems>

        <OrderPaper>
          {paperRequired && paperRequired.map(paperType =>
            <div>
              <OrderPaperItem>
                <AddNewItem
                  label="Paper Source" options={paperOptions} addItem={this.addPaperSource} />
              </OrderPaperItem>
              <OrderPaperSummary required={paperType.required} allocated={paperType.allocated} />
            </div>
          )}
        </OrderPaper>

        <button>Confirm Order!</button>
      </div>
    );
  }
};

export default OrderForm;
