import React from 'react';

const OrderItem = ({ item, quantity }) =>
  <tr>
    <td>{item.name}</td>
    <td>{quantity}</td>
  </tr>

export default OrderItem;
