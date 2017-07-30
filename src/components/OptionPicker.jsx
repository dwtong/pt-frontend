import React from 'react';
import PropTypes from 'prop-types';

const OptionPicker = ({label, options, value, onChange}) => (
  <div>
    <label>{label}</label>
    <select name="selectedOption" value={value} onChange={onChange}>
      <option default>Select an option...</option>
      {options && options.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
    </select>
  </div>
);

OptionPicker.propTypes = {
  options: PropTypes.object,
  value: PropTypes.string,
};

export default OptionPicker;
