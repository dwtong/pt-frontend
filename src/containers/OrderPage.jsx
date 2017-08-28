import React, { Component } from 'react';
import OrderDetails from 'components/OrderDetails';
import OrderItemsContainer from 'containers/OrderItemsContainer';
import { CUSTOMERS } from 'config/mock-data';

class OrderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        customers: CUSTOMERS,
      },

      order: {
        id: null,
        customerId: null,
        dueDate: null,
      }
    }

    this.addOrderDetail = this.addOrderDetail.bind(this);
  }

  componentDidMount() {
    console.log('GET customers');
    console.log('POST new order');
    // Set state on callback from new order POST
    this.setState({order: {...this.state.order, id: 0 } });
  }

  addOrderDetail(name, value) {
    this.setState({ order: { ...this.state.order, [name]: value } }, () => {
      const { orderId, ...orderBody } = this.state.order;

      if (orderId >= 0) {
        console.log(`PUT /orders/${orderId}`);
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
            onDateChange={(e) => this.addOrderDetail('dueDate', e.target.value)}
            onCustomerChange={(e) => this.addOrderDetail('customerId', e.target.value)}
          />

          {order.id >= 0 && <OrderItemsContainer orderId={order.id} />}
      </div>
    );
  }
};

export default OrderPage;
