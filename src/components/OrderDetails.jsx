import React from 'react';
import { borderStyle } from '../styles';

const OrderDetails = ({ customers, dueDate }) =>
  <div style={borderStyle}>
    <h3>Order Details</h3>
    <div>
      <label>Customer </label>
      <select>
        {customers && customers.map(customer => <option key={customer.id} value={customer.id}>{customer.name}</option>)}
      </select>
    </div>
    <div>
      <label>Due Date </label>
      <input type="date" value="2017-07-22" />
    </div>
  </div>

export default OrderDetails;
