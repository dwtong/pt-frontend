import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import OptionPicker from './OptionPicker';

const OrderDetails = ({ customer, customers, dueDate, onCustomerChange, onDateChange }) => (
  <div>
      <OptionPicker
        label="Customer"
        options={customers}
        value={customer}
        onChange={onCustomerChange}
      />

      <DatePicker label='Due Date' onChange={onDateChange} value={dueDate} />
  </div>
);

OrderDetails.propTypes = {
  customer: PropTypes.string,
  customers: PropTypes.object,
  dueDate: PropTypes.string,
};

export default OrderDetails;
