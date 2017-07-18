import React from 'react';

const OrderDetails = ({ customers }) =>
  <div>
    <h3>Order Details</h3>
    <div>
      <label>Customer </label>
      <select>
        {customers.map(customer => <option>{customer}</option>)}
      </select>
    </div>
    <div>
      <label>Due Date </label>
      <input type="date" value="2017-07-22"/>
    </div>
  </div>

export default OrderDetails;
