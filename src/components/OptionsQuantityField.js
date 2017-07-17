import React, { Component } from 'react';

const OptionsQuantityField = ({ label, options, handleOptionSelect, handleQuantityChange }) =>
  <div>
    <label>{label}</label>
    <select onChange={handleOptionSelect}>
      {options.map(option => <option>{option.name}</option>)}
    </select>
    <label> Quantity </label>
    <input type="number" onChange={handleQuantityChange} />
  </div>

export default OptionsQuantityField;
