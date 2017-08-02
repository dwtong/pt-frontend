import React from 'react';
import AddNewItem from './AddNewItem';
import OrderItem from './OrderItem';

const OrderItems = ({books, items, addItem}) => {
  return (
    <div>
      <h3>Order Items</h3>
      {items && items.map(item =>
        <OrderItem
          key={item.bookId}
          item={books.find(nb => nb.id === item.bookId)}
          quantity={item.quantity} />)}

      <AddNewItem
        label="Notebook Type"
        options={books}
        addItem={addItem} />
    </div>
  );
};

export default OrderItems;
