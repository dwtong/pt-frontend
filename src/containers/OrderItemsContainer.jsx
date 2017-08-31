import React, { Component } from 'react';
import { ITEM_BINDINGS, ITEM_SIZES, ITEM_TEMPLATES } from 'config/mock-data';
import OrderItems from 'components/OrderItems';
import OrderItemDetail from 'components/OrderItemDetail';
import NewOrderItem from 'components/NewOrderItem';

class OrderItemsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        bindings: ITEM_BINDINGS,
        sizes: ITEM_SIZES,
        templates: ITEM_TEMPLATES,
      },
      items: [],
      selectedItem: -1
    }

    this.addItem = this.addItem.bind(this);
    this.setSelectedItem = this.setSelectedItem.bind(this);
  }

  componentDidMount() {
    // GET `/orders/${this.props.orderId}/order_items`
    console.log('GET book templates, bindings, sizes');
  }

  render() {
    const { items, selectedItem } = this.state;
    const { bindings, sizes } = this.state.data;

    return (
      <OrderItems items={items} selectedItem={selectedItem} onItemClick={this.setSelectedItem}>
        {selectedItem >= 0 ?
          <OrderItemDetail />
        : <NewOrderItem bindings={bindings} sizes={sizes} addItem={this.addItem} />}
      </OrderItems>
    );
  }

  addItem(item) {
    // POST new item
    const id = Math.floor(Math.random() * 1000); // temporary, backend will generate and return this id on POST
    this.setState({items: [...this.state.items, {...item, id: id}]});
  }

  setSelectedItem(id) {
    this.setState({selectedItem: id});
  }
};

export default OrderItemsContainer;
