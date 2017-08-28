import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'components/DatePicker';
import OptionPicker from 'components/OptionPicker';
import { Col, Row } from 'reactstrap';
import Section from 'components/Section';

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
  customers: PropTypes.array,
  dueDate: PropTypes.string,
  onCustomerChange: PropTypes.func,
  onDateChange: PropTypes.func
};

export default OrderDetails;
