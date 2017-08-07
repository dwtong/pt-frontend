import React from 'react';
import PropTypes from 'prop-types';
import { Col, FormGroup, Label, Input } from 'reactstrap';

const OptionPicker = ({label, options, value, onChange}) => (
  <FormGroup>
    <Label >{label}</Label>
    <Input type="select" name="selectedOption" value={value} onChange={onChange}>
      <option value="-1" disabled selected>Select an option...</option>
      {options && options.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
    </Input>
  </FormGroup>
);

OptionPicker.propTypes = {
  options: PropTypes.object,
  value: PropTypes.string,
};

export default OptionPicker;
