import React from 'react';
import { Table } from 'reactstrap';
import AddNewItem from './AddNewItem';
import OrderItem from './OrderItem';

const OrderItems = ({books, items, addItem}) => {
  return (
    <div>
      {items.length > 0 &&
        <Table>
          <thead>
            <th>Item</th>
            <th>Quantity</th>
          </thead>
          <tbody>
            {items.map(item =>
              <OrderItem
                key={item.bookId}
                item={books.find(nb => nb.id === item.bookId)}
                quantity={item.quantity}
              />)}
          </tbody>
        </Table>
      }
      <AddNewItem
        label="Notebook Type"
        options={books}
        addItem={addItem}
      />
    </div>
  );
};

export default OrderItems;
