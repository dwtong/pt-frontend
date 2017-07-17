import React, { Component } from 'react';
import OptionsQuantityField from './OptionsQuantityField';

const OrderItems = ({ notebooks, handleItemSelect, handleItemQuantityChange }) => {
  const notebookOptions = notebooks.map(notebook => {return { name: notebook.name, id: notebook.id } });

  return (
    <div>
      <h3>Order Items</h3>
      <OptionsQuantityField
        label="Notebook Type"
        options={notebookOptions}
        handleOptionSelect={handleItemSelect}
        handleQuantityChange={handleItemQuantityChange} />
      <button type="button">Add Item</button>
    </div>
  );
};

export default OrderItems;
