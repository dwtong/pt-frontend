import React from 'react';
import AddNewItem from './AddNewItem';
import OrderItem from './OrderItem';
import { borderStyle } from '../styles';

const OrderItems = ({books, items, newItem}) => {
  return (
    <div style={borderStyle}>
      <h3>Order Items</h3>
      {items && items.map(item =>
        <OrderItem
          key={item.bookId}
          item={books.find(nb => nb.id === item.bookId)}
          quantity={item.quantity} />)}

      <AddNewItem
        label="Notebook Type"
        options={books}
        addItem={newItem} />
    </div>
  );
};

export default OrderItems;
