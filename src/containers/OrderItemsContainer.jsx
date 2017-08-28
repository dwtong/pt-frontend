import React, { Component } from 'react';
import { BOOK_TEMPLATES } from 'config/mock-data';
import OrderItems from 'components/OrderItems';

class OrderItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        bookTemplates: BOOK_TEMPLATES
      },

      items: [
        {id: 0, size: 'A4', binding: 'Stapled', quantity: 20},
        {id: 1, size: 'A5', binding: 'Stapled', quantity: 50},
        {id: 2, size: 'A5', binding: 'Wire Bound', quantity: 50},
        {id: 3, size: 'A4', binding: 'Stapled', quantity: 20},
      ]
    }
  }

  componentDidMount() {
    // GET `/orders/${this.props.orderId}/order_items`
    console.log('GET book templates');
  }

  render() {
    return <OrderItems items={this.state.items} onNewItem={this.addItem} />;
  }

  addItem(item) {
    // POST new item
  }
};

export default OrderItemsContainer;
