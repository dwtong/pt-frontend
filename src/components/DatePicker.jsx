import React from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, Label, Input } from 'reactstrap';

const DatePicker = ({label, value, onChange}) => (
  <FormGroup>
    <Label>Due Date</Label>
    <Input type="date" value={value} onChange={onChange} />
  </FormGroup>
);

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default DatePicker;
