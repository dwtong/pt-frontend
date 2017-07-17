import React, { Component } from 'react';
import AllocatedQuantityResults from './AllocatedQuantityResults';
import OptionsQuantityField from './OptionsQuantityField';

const AllocatedQuantityFields = ({ paperType, paperSources }) =>
  <div>
    <h5>{paperType.name}</h5>
    <OptionsQuantityField
      label="Paper Source"
      options={paperSources.map(source => {
        return {name: source.supplierName, id: source.supplierID};
      })}/>
    <button type="button">Add Source</button>
    <AllocatedQuantityResults required={paperType.required} allocated={paperType.allocated} />
  </div>

export default AllocatedQuantityFields;
