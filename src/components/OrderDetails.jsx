import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import OptionPicker from './OptionPicker';
import { Col, Row } from 'reactstrap';
import Section from './Section';

const OrderDetails = ({ customer, customers, dueDate, onCustomerChange, onDateChange }) => (
  <Section title="Order Details">
    <Row>
      <Col>
        <OptionPicker
          label="Customer"
          options={customers}
          value={customer}
          onChange={onCustomerChange}
        />
      </Col>

      <Col>
        <DatePicker label='Due Date' onChange={onDateChange} value={dueDate} />
      </Col>
    </Row>
  </Section>
);

OrderDetails.propTypes = {
  customer: PropTypes.string,
  customers: PropTypes.object,
  dueDate: PropTypes.string,
};

export default OrderDetails;
