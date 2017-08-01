import React from 'react';

const OrderPaperItem = ({ children, label }) => {
  return (
    <div>
      <h5>{label}</h5>
      {children}
    </div>
  );

};


export default OrderPaperItem;
