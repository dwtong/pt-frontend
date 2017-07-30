import React from 'react';
import { borderStyle } from '../styles';
import DatePicker from './DatePicker';

const OrderDetails = ({ customers, dueDate }) =>
  <div style={borderStyle}>
    <h3>Order Details</h3>
    <div>
      <label>Customer </label>
      <select>
        {customers && customers.map(customer => <option key={customer.id} value={customer.id}>{customer.name}</option>)}
      </select>
    </div>
      <DatePicker label='Due Date' value={dueDate}/>
  </div>

export default OrderDetails;
