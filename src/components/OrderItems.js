import React from 'react';
import { borderStyle } from '../styles';

const OrderItems = ({ children }) => {
  return (
    <div style={borderStyle}>
      <h3>Order Items</h3>
      {children}
    </div>
  );
};

export default OrderItems;
