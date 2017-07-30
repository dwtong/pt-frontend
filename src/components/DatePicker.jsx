import React from 'react';
import PropTypes from 'prop-types';

const DatePicker = ({label, value, onChange}) => (
  <div>
    <label>Due Date </label>
    <input type="date" value={value} onChange={onChange} />
  </div>
);

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default DatePicker;
