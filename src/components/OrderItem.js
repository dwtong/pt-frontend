import React from 'react';

const OrderItem = ({ item, quantity }) =>
  <p>
    <strong>{item.name}</strong> Quantity: {quantity}
  </p>

export default OrderItem
