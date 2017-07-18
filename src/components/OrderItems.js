import React from 'react';

const OrderItems = ({ children }) => {
  return (
    <div>
      <h3>Order Items</h3>
      {children}
    </div>
  );
};

export default OrderItems;
