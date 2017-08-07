import React, { Component } from 'react';
import OrderDetails from './OrderDetails';
import { CUSTOMERS } from '../config/mock-data';

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // 'data' is curated from GET calls on form load
      data: {
        customers: CUSTOMERS,
      },

      // 'order' contains details to be POSTed on order submission
      order: {
        orderId: null,
        customerId: null,
        dueDate: null,
      },
    }

    this.updateOrder = this.updateOrder.bind(this);
  }

  componentDidMount() {
    console.log('GET customers');
    console.log('POST new order');
    this.setState({order: {...this.state.order, orderId: 0 } });
  }

  updateOrder(name, value) {
    this.setState({ order: { ...this.state.order, [name]: value } }, () => {
      const { orderId, ...orderBody } = this.state.order;

      if (orderId >= 0) {
        console.log(`PUT /orders/${orderId}`);
        console.log(orderBody);
      }
    });
  }

  render () {
    const { data, order } = this.state;

    return (
      <div>
        <h2>New Order</h2>
          <OrderDetails
            customer={order.customer}
            customers={data.customers}
            dueDate={order.dueDate}
            onDateChange={(e) => this.updateOrder('dueDate', e.target.value)}
            onCustomerChange={(e) => this.updateOrder('customerId', e.target.value)}
          />
      </div>
    );
  }
};

export default OrderForm;
