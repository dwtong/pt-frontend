import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DatePicker = ({label, value}) => (
  <div>
    <label>Due Date </label>
    <input type="date" value={value} />
  </div>
);

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

DatePicker.defaultProps = {
  value: moment().format('YYYY-MM-DD')
};

export default DatePicker;
