import React from 'react';
import { borderStyle } from '../styles';

const OrderPaperItem = ({ children, label }) => {
  return (
    <div style={borderStyle}>
      <h5>{label}</h5>
      {children}
    </div>
  );

};


export default OrderPaperItem;
