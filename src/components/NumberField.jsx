import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

const NumberField = ({label, name, value, onChange}) => (
  <FormGroup>
    <Label >{label}</Label>
    <Input type="number" name={name} value={value} onClick={(e) => e.target.select()} onChange={onChange} />
  </FormGroup>
);

NumberField.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default NumberField;
